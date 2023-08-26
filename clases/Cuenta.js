class Cuenta {
    #name;

    constructor( id, name, pass, saldo ) {
        this.id = id;
        this.#name = name;
        this.pass = pass;
        this.saldo = saldo;
    }

    // Getters & Setters (Recomendados por JavaScript)
    get paqquito() {
        return this.#name;
    }
    set paqquito( value ) {
        this.#name = value;
    }

    // Getters & Setters (Tradicionales)
    // getName() {
    //     return this.#name;
    // }
    // setName( value ) {
    //     this.#name = value;
    // }

    consignar( value ) {
        this.saldo += value;
    }
    retirar( value ) {
        this.saldo -= value;
    }
    transferir() {

    }
    mostrarSaldo() {
        return this.saldo;
    }
    mostrarHistorial() {

    }

}

// Implementacion
const cuentaDiego = new Cuenta( '2323434446', 'Diego', '123456', 1200 );

cuentaDiego.consignar( 200 );
cuentaDiego.consignar( 50 );
cuentaDiego.retirar( 300 );

cuentaDiego.paqquito = 'Ana';
console.log( `El saldo de ${ cuentaDiego.paqquito } es ${ cuentaDiego.mostrarSaldo() }`)


console.log( cuentaDiego );
