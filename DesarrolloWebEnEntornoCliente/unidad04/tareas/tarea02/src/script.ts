namespace LaberintoGame {
    class Celda {
        constructor(public x: number, public y: number) {}
    }

    class Jugador extends Celda {
        energia: number = 100;

        mover(dx: number, dy: number): void {
            this.x += dx;
            this.y += dy;
            this.energia -= 5;
        }
    }

    class Trampa extends Celda {
        penalizar(jugador: Jugador): void {
            jugador.energia -= 20;
        }
    }

    class ObjetoEspecial extends Celda {
        recuperar(jugador: Jugador): void {
            jugador.energia += 10;
        }
    }

    class Salida extends Celda {}

    class Matriz<T> {
        private grid: (T | null)[][];

        constructor(public width: number, public height: number) {
            this.grid = Array.from({ length: height }, () => Array(width).fill(null));
        }

        set(x: number, y: number, value: T | null): void {
            if (this.isValidPosition(x, y)) {
                this.grid[y][x] = value;
            }
        }

        get(x: number, y: number): T | null {
            return this.isValidPosition(x, y) ? this.grid[y][x] : null;
        }

        isValidPosition(x: number, y: number): boolean {
            return x >= 0 && x < this.width && y >= 0 && y < this.height;
        }
    }

    class Juego {
        private laberinto: Matriz<Celda>;
        private jugador: Jugador;
        private tiempo: number = 120;
        private intervalId: number | null = null;

        constructor(width: number, height: number) {
            this.laberinto = new Matriz<Celda>(width, height);
            this.jugador = new Jugador(0, 0);
            this.laberinto.set(0, 0, this.jugador);

            $("#iniciar").on("click", () => this.iniciarJuego());
        }

        iniciarJuego(): void {
            if (this.intervalId) clearInterval(this.intervalId);
            this.jugador.energia = 100;
            this.tiempo = 120;
            this.intervalId = window.setInterval(() => this.actualizarTiempo(), 1000);
            this.renderizarLaberinto();
            this.actualizarEnergia();
            this.capturarEventos();
        }

        actualizarTiempo(): void {
            this.tiempo--;
            $("#timer").text(`Tiempo: ${this.tiempo}s`);
            if (this.tiempo <= 0) {
                clearInterval(this.intervalId!);
                alert("¡Se acabó el tiempo!");
            }
        }

        moverJugador(dx: number, dy: number): void {
            const nuevoX = this.jugador.x + dx;
            const nuevoY = this.jugador.y + dy;

            if (this.laberinto.isValidPosition(nuevoX, nuevoY)) {
                this.laberinto.set(this.jugador.x, this.jugador.y, null);
                this.jugador.mover(dx, dy);
                this.laberinto.set(nuevoX, nuevoY, this.jugador);

                const celda = this.laberinto.get(nuevoX, nuevoY);
                if (celda instanceof Trampa) {
                    celda.penalizar(this.jugador);
                } else if (celda instanceof ObjetoEspecial) {
                    celda.recuperar(this.jugador);
                }
                
                this.actualizarEnergia();
                this.renderizarLaberinto();
            }
        }

        actualizarEnergia(): void {
            $("#energia").text(`Energía: ${this.jugador.energia}`);
            if (this.jugador.energia <= 0) {
                clearInterval(this.intervalId!);
                alert("¡Te has quedado sin energía!");
            }
        }

        renderizarLaberinto(): void {
            const laberintoElement = $("#laberinto").empty();
            for (let y = 0; y < this.laberinto.height; y++) {
                const row = $("<div class='fila'></div>");
                for (let x = 0; x < this.laberinto.width; x++) {
                    const celda = $("<div class='celda'></div>");
                    const objeto = this.laberinto.get(x, y);
                    if (objeto instanceof Jugador) celda.addClass("jugador");
                    if (objeto instanceof Trampa) celda.addClass("trampa");
                    if (objeto instanceof ObjetoEspecial) celda.addClass("objeto");
                    if (objeto instanceof Salida) celda.addClass("salida");
                    row.append(celda);
                }
                laberintoElement.append(row);
            }
        }

        capturarEventos(): void {
            $(document).off("keydown").on("keydown", (event) => {
                switch (event.key) {
                    case "ArrowUp": this.moverJugador(0, -1); break;
                    case "ArrowDown": this.moverJugador(0, 1); break;
                    case "ArrowLeft": this.moverJugador(-1, 0); break;
                    case "ArrowRight": this.moverJugador(1, 0); break;
                }
            });
        }
    }

    $(document).ready(() => {
        new Juego(10, 10);
    });
}
