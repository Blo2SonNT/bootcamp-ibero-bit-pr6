export class Hechizos {
    _id?: string
    invocacion: string
    poder: number
    mana: number

    constructor(invocacion: string, poder: number, mana: number){
        this.invocacion = invocacion
        this.poder = poder
        this.mana = mana
    }

}

