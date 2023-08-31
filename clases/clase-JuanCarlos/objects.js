/** Objetos Explicitos */
const pedro = {
    nombre: 'Pedro Pablo',
    fechaNacimiento: '1990-05-15',
    calcularEdad: function() {
        const fechaActual = new Date();
        const fechaNac = new Date(this.fechaNacimiento);
        
        const añosDiferencia = fechaActual.getFullYear() - fechaNac.getFullYear();
        
        if (
            fechaActual.getMonth() < fechaNac.getMonth() ||
            (fechaActual.getMonth() === fechaNac.getMonth() && fechaActual.getDate() < fechaNac.getDate())
        ) {
            return añosDiferencia - 1;
        }
        
        return añosDiferencia;
    }
};

const ana = {
    nombre: 'Ana',
    fechaNacimiento: '1992-05-15',
    calcularEdad: function() {
        const fechaActual = new Date();
        const fechaNac = new Date(this.fechaNacimiento);
        
        const añosDiferencia = fechaActual.getFullYear() - fechaNac.getFullYear();
        
        if (
            fechaActual.getMonth() < fechaNac.getMonth() ||
            (fechaActual.getMonth() === fechaNac.getMonth() && fechaActual.getDate() < fechaNac.getDate())
        ) {
            return añosDiferencia - 1;
        }
        
        return añosDiferencia;
    }
};


console.log(`${ pedro.nombre } tiene ${ pedro.calcularEdad() } años.`);
console.log(`${ ana.nombre } tiene ${ ana.calcularEdad() } años.`);