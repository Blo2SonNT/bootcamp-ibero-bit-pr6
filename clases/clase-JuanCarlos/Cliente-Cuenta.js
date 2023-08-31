// Paso 1: Crear la clase Cliente
class Cliente {
    // El constructor es el metodo iniciador de la clase cuando esta es instanciada
    constructor(nombre, apellido, direccion, telefono, id) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.id = id;
    }
}

// Paso 2: Crear la clase Cuenta
class Cuenta {
    // El constructor es el metodo iniciador de la clase cuando esta es instanciada
    constructor(numero, saldo, cliente) {
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
    }

    consultar() {
        console.log(`    Saldo actual: $${this.saldo}`);
    }
    
    consignar(valor) {
        // Valida si el saldo ingresado es negativo y en este caso lanza un error
        if( valor < 0 ) {
            throw new Error( `*** ADVERTENCIA: No se pueden consignar montos negativos *** ` );
        }

        this.saldo += valor;
        console.log(`*** CONSIGNACION *** \n    Se ha consignado ${valor} en la cuenta ${this.numero}. \n    Saldo actual: $${this.saldo}`);
    }
    
    retirar(valor) {
        // Valida que haya saldo disponible
        if (this.saldo < valor) {
            console.log(`*** RETIRO *** \n  Saldo insuficiente en la cuenta ${this.numero}`);
        } else {
            this.saldo -= valor;
            console.log(`*** RETIRO *** \n    Se han retirado ${valor} de la cuenta ${this.numero}. \n    Saldo actual: $${this.saldo}`);
        }
    }
    
    transferir(valor, cuentaDestino) {
        // Valida que haya saldo disponible
        if (this.saldo < valor) {
            console.log(`*** TRANSFERENCIA *** \n    Saldo insuficiente en la cuenta ${this.numero}`);
        } else {
            this.saldo -= valor;
            cuentaDestino.saldo += valor;
            console.log(`*** TRANSFERENCIA *** \n    Cuenta ${this.numero}  transfiere $${valor} a la cuenta ${cuentaDestino.numero}. \n    Nuevo saldo cuenta origen (${this.numero}): $${this.saldo} \n    Nuevo saldo cuenta destino (${cuentaDestino.numero}): $${cuentaDestino.saldo}`);
        }
    }
}

// Paso 3: Crear la clase Banco
class Banco {
    // El constructor es el metodo iniciador de la clase cuando esta es instanciada
    constructor() {
        this.nombre = 'BanPopombia';
        this.cuentas = [];
    }
    
    agregarCuenta(cuenta) {
        this.cuentas.push(cuenta);
        console.log(`>>> ${this.nombre} crea cuenta ${cuenta.numero} a nombre de: ${cuenta.cliente.nombre}`);
    }
    
    buscarCuenta(numero) {
        // Itera el listado de cuentas creadas
        for (let i = 0; i < this.cuentas.length; i++) {
            // Valida si el numero de la cuenta existe entre las cuentas del listado existentes
            if (this.cuentas[i].numero === numero) {
                return this.cuentas[i];                 // Retorna la cuenta en caso de existir
            }
        }
        console.log(`No se encontró la cuenta ${numero} en el banco`);
    }
}

/** Implementacion */

// Paso 4: Crear una instancia del banco y agregar cuentas
const banco = new Banco();                                                                  // Crea una instancia de la clase Banco. Entonces 'banco' es un objeto de tipo Banco

// Paso 4.1: Crea una cuenta con el Banco para Juan Perez
const cliente1 = new Cliente("Juan", "Perez", "Calle 123", "1234567890", "123456789");      // Crea una instancia de la clase Cliente. Entonces 'cliente1' es un objeto de tipo Cliente
const cuenta1 = new Cuenta("001", 1000, cliente1);                                          // Crea una instancia de la clase Cuenta. Entonces 'cuenta1' es un objeto de tipo Cuenta
cuenta1.consultar();                                                                        // Usado el objeto de la clase cuenta consultamos el saldo de la 'cuenta1'
banco.agregarCuenta(cuenta1);                                                               // Asociamos la cuenta creada a la instancia creada del Banco

// Paso 4.2: Crea una cuenta con el Banco para Maria Gomez
const cliente2 = new Cliente("Maria", "Gomez", "Calle 456", "0987654321", "987654321");     // Crea una instancia de la clase Cliente. Entonces 'cliente2' es un objeto de tipo Cliente
const cuenta2 = new Cuenta("002", 500, cliente2);                                           // Crea una instancia de la clase Cuenta. Entonces 'cuenta2' es un objeto de tipo Cuenta
cuenta2.consultar();                                                                        // Usado el objeto de la clase cuenta consultamos el saldo de la 'cuenta2'
banco.agregarCuenta(cuenta2);                                                               // Asociamos la cuenta creada a la instancia creada del Banco

// Paso 4.3: Crea una cuenta con el Banco para Pedro Rodriguez                              
const cliente3 = new Cliente("Pedro", "Rodriguez", "Calle 789", "4567890123", "456789012"); // Crea una instancia de la clase Cliente. Entonces 'cliente3' es un objeto de tipo Cliente
const cuenta3 = new Cuenta("003", 2000, cliente3);                                          // Crea una instancia de la clase Cuenta. Entonces 'cuenta3' es un objeto de tipo Cuenta
cuenta3.consultar();                                                                        // Usado el objeto de la clase cuenta consultamos el saldo de la 'cuenta3'
banco.agregarCuenta(cuenta3);                                                               // Asociamos la cuenta creada a la instancia creada del Banco

console.log( '' );

// Paso 5: Realizar operaciones con las cuentas
cuenta1.consignar(500);                 // Consignamos 500 dolares en la 'cuenta1' (Prueba con valores negativos)
cuenta2.retirar(200);                   // Retiramos 200 dolares en la 'cuenta2' (Prueba con valores negativos y corrige)

// Transferimos 1000 dolares de la 'cuenta3' a la 'cuenta2'
const cuentaDestino = banco.buscarCuenta("002");        // Buscamos la cuenta (Prueba buscar una cuenta que no exista)
cuenta3.transferir(1000, cuentaDestino);                // Realizamos la transferencia
