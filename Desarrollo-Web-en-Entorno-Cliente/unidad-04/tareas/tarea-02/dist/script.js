"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LaberintoGame;
(function (LaberintoGame) {
    var Celda = /** @class */ (function () {
        function Celda(x, y) {
            this.x = x;
            this.y = y;
        }
        return Celda;
    }());
    var Jugador = /** @class */ (function (_super) {
        __extends(Jugador, _super);
        function Jugador() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.energia = 100;
            return _this;
        }
        Jugador.prototype.mover = function (dx, dy) {
            this.x += dx;
            this.y += dy;
            this.energia -= 5;
        };
        return Jugador;
    }(Celda));
    var Trampa = /** @class */ (function (_super) {
        __extends(Trampa, _super);
        function Trampa() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Trampa.prototype.penalizar = function (jugador) {
            jugador.energia -= 20;
        };
        return Trampa;
    }(Celda));
    var ObjetoEspecial = /** @class */ (function (_super) {
        __extends(ObjetoEspecial, _super);
        function ObjetoEspecial() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ObjetoEspecial.prototype.recuperar = function (jugador) {
            jugador.energia += 10;
        };
        return ObjetoEspecial;
    }(Celda));
    var Salida = /** @class */ (function (_super) {
        __extends(Salida, _super);
        function Salida() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Salida;
    }(Celda));
    var Matriz = /** @class */ (function () {
        function Matriz(width, height) {
            this.width = width;
            this.height = height;
            this.grid = Array.from({ length: height }, function () { return Array(width).fill(null); });
        }
        Matriz.prototype.set = function (x, y, value) {
            if (this.isValidPosition(x, y)) {
                this.grid[y][x] = value;
            }
        };
        Matriz.prototype.get = function (x, y) {
            return this.isValidPosition(x, y) ? this.grid[y][x] : null;
        };
        Matriz.prototype.isValidPosition = function (x, y) {
            return x >= 0 && x < this.width && y >= 0 && y < this.height;
        };
        return Matriz;
    }());
    var Juego = /** @class */ (function () {
        function Juego(width, height) {
            var _this = this;
            this.tiempo = 120;
            this.intervalId = null;
            this.laberinto = new Matriz(width, height);
            this.jugador = new Jugador(0, 0);
            this.laberinto.set(0, 0, this.jugador);
            $("#iniciar").on("click", function () { return _this.iniciarJuego(); });
        }
        Juego.prototype.iniciarJuego = function () {
            var _this = this;
            if (this.intervalId)
                clearInterval(this.intervalId);
            this.jugador.energia = 100;
            this.tiempo = 120;
            this.intervalId = window.setInterval(function () { return _this.actualizarTiempo(); }, 1000);
            this.renderizarLaberinto();
            this.actualizarEnergia();
            this.capturarEventos();
        };
        Juego.prototype.actualizarTiempo = function () {
            this.tiempo--;
            $("#timer").text("Tiempo: ".concat(this.tiempo, "s"));
            if (this.tiempo <= 0) {
                clearInterval(this.intervalId);
                alert("¡Se acabó el tiempo!");
            }
        };
        Juego.prototype.moverJugador = function (dx, dy) {
            var nuevoX = this.jugador.x + dx;
            var nuevoY = this.jugador.y + dy;
            if (this.laberinto.isValidPosition(nuevoX, nuevoY)) {
                this.laberinto.set(this.jugador.x, this.jugador.y, null);
                this.jugador.mover(dx, dy);
                this.laberinto.set(nuevoX, nuevoY, this.jugador);
                var celda = this.laberinto.get(nuevoX, nuevoY);
                if (celda instanceof Trampa) {
                    celda.penalizar(this.jugador);
                }
                else if (celda instanceof ObjetoEspecial) {
                    celda.recuperar(this.jugador);
                }
                this.actualizarEnergia();
                this.renderizarLaberinto();
            }
        };
        Juego.prototype.actualizarEnergia = function () {
            $("#energia").text("Energ\u00EDa: ".concat(this.jugador.energia));
            if (this.jugador.energia <= 0) {
                clearInterval(this.intervalId);
                alert("¡Te has quedado sin energía!");
            }
        };
        Juego.prototype.renderizarLaberinto = function () {
            var laberintoElement = $("#laberinto").empty();
            for (var y = 0; y < this.laberinto.height; y++) {
                var row = $("<div class='fila'></div>");
                for (var x = 0; x < this.laberinto.width; x++) {
                    var celda = $("<div class='celda'></div>");
                    var objeto = this.laberinto.get(x, y);
                    if (objeto instanceof Jugador)
                        celda.addClass("jugador");
                    if (objeto instanceof Trampa)
                        celda.addClass("trampa");
                    if (objeto instanceof ObjetoEspecial)
                        celda.addClass("objeto");
                    if (objeto instanceof Salida)
                        celda.addClass("salida");
                    row.append(celda);
                }
                laberintoElement.append(row);
            }
        };
        Juego.prototype.capturarEventos = function () {
            var _this = this;
            $(document).off("keydown").on("keydown", function (event) {
                switch (event.key) {
                    case "ArrowUp":
                        _this.moverJugador(0, -1);
                        break;
                    case "ArrowDown":
                        _this.moverJugador(0, 1);
                        break;
                    case "ArrowLeft":
                        _this.moverJugador(-1, 0);
                        break;
                    case "ArrowRight":
                        _this.moverJugador(1, 0);
                        break;
                }
            });
        };
        return Juego;
    }());
    $(document).ready(function () {
        new Juego(10, 10);
    });
})(LaberintoGame || (LaberintoGame = {}));
