// Ejercicio D1S1.1.1
  let msg: string = "Aaaaaaaaaaaaaaaaaaaaaaaaaaa"
  $("#output1").text(msg)


// Ejercicio D1S1.1.2
type Freddy = {
    name: string;
    age: number;
    nightmare: string;
};
let info: Freddy = {name: "Freddy", age: 20, nightmare: "Spiders"}
$("#output2").text(JSON.stringify(info))


// Ejercicio D1S2.1.1
function attack(name: string): string {
    return name
}
$("#output3").text(`Freddy ataca con un ${attack("rodillo de amasar")}`)


// Ejercicio D1S2.1.2
function jump(metters?: number): number {
    if (metters) {
        return metters
    } else {
        return 5
    }
}
$("#output4").text(`Freddy salta ${jump(9)} metros`)


// Ejercicio D1S2.2.1
class Nightmare {
    name: string

    public constructor(name: string) {
        this.name = name
    }

    scream() {
        return `${this.name.toUpperCase()} está aquí!!`
    }
}

const myNightmare = new Nightmare("spiderman")
$("#output5").text(myNightmare.scream())

// Ejercicio D1S2.2.2
class AnotherNightmare {
    name: string

    public constructor(name: string) {
        this.name = name
    }

    scream = (): string => {
        return `${this.name.toUpperCase()} está aquí!`
    }
}
const anotherNightmare = new AnotherNightmare("aragog")
$("#output6").text(anotherNightmare.scream())