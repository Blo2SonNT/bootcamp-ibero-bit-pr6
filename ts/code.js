//cSpell:disable
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
console.log("Hola mundo con TS");
var nombre = "Miguel";
var numero = 90;
var booleano = true;
var todo;
var miArray = ["hola", 28, true];
var miArrayDeTextos = ["texto", "texto2", "texto3"];
var miArrayDeNumeros = [2, 5, 7, 0, 3];
var miArrayDeBoleanos = [true, true, false, true];
var arrayValoresDefinidos = ["texto", true, "texto2", 12];
var arrayDefinidoDeArray = [["texto", true, "texto2", 12], ["texto", true, "texto2", 12]];
//datos vacíos
// let vacioExistencial: void
// let nulo: null = null
// let indefinido: undefined = undefined
// console.log(typeof(vacioExistencial))
function miFuncion(nombre, edad) {
    if (nombre == "Alejandra" && edad == 12) {
        return true;
    }
    else {
        return false;
    }
}
console.log(miFuncion("Tatiana", 105));
function hogwarts(infoHechizo) {
    console.log(infoHechizo);
}
hogwarts({ hechizo: "Flipendo", varita: ["madera de roble", "12 cm", "Ollivanders"] });
var embrujo = { hechizo: "Leviossssaaaa", varita: ["madera de roble", "35 cm", "Ollivander"] };
var Usuario = /** @class */ (function () {
    function Usuario(nombre, correo, numero_documento, hechizoEsoterico) {
        this.nombre = nombre;
        this.correo = correo;
        this.numero_documento = numero_documento;
        this.hechizoEsoterico = hechizoEsoterico;
    }
    Usuario.prototype.verNumeroDoc = function () {
        return this.numero_documento;
    };
    return Usuario;
}());
var objUsuario = new Usuario("Julian", "julian123@correo.com", "1234567654", embrujo);
console.log(objUsuario.verNumeroDoc());
var Entregas = /** @class */ (function (_super) {
    __extends(Entregas, _super);
    function Entregas(nombre, correo, numero_documento, hechizoEsoterico, curso, equipo) {
        var _this = _super.call(this, nombre, correo, numero_documento, hechizoEsoterico) || this;
        _this.curso = curso;
        _this.equipo = equipo;
        return _this;
    }
    return Entregas;
}(Usuario));
