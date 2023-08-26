class Person {
    constructor( name, birth ) {
        this.name = name;
        this.birthDay = birth;
        this.age = this.calculateAge();
    }

    calculateAge() {
        const fechaActual = new Date();
        const fechaNac = new Date(this.birthDay);
        
        const anosDiferencia = fechaActual.getFullYear() - fechaNac.getFullYear();
        
        if (
            fechaActual.getMonth() < fechaNac.getMonth() ||
            (fechaActual.getMonth() === fechaNac.getMonth() && fechaActual.getDate() < fechaNac.getDate())
        ) {
            return anosDiferencia - 1;
        }
        
        return anosDiferencia;
    }
}

const
    kevin = new Person( 'Kevin', '1990-11-01' );

kevin.calculateAge();

console.log( kevin );




