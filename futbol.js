/* 

class Equipo{
    nombreEquipo;
    nombreEntrenador;
    colorCamiseta;
    ligaEquipo;
    ciudadEquipo;
    constructor(nombreEquipo,nombreEntrenador,colorCamiseta,ligaEquipo='premier league'){
        this.nombreEquipo=nombreEquipo;
        this.nombreEntrenador=nombreEntrenador;
        this.colorCamiseta=colorCamiseta;
        this.ligaEquipo=ligaEquipo;
        this.ciudadEquipo=ciudadEquipo;
    }
} */

class Jugador{
    nombrejugador;
    dorsaljugador;
    nacionalidadjugador;
    piernaHabil;

    constructor(nombrejugador,dorsaljugador,nacionalidadjugador,piernaHabil){
        this.nombrejugador=nombrejugador;
        this.dorsaljugador=dorsaljugador;
        this.nacionalidadjugador=nacionalidadjugador;
        this.piernaHabil=piernaHabil;   
    }
    datosjugador(){
         const carrito = [
            { 'Nombre del jugador: ':this.nombrejugador},
            { 'Dorsal del jugador: ':this.dorsaljugador},
            { 'Nacionalidad del jugador: ':this.nacionalidadjugador},
            { 'Pierna habil':this.piernaHabil}
        ] 
        return carrito;
    }
}


/* class Partido{
    fechaPartido;
    horaPartido;
    estadio;
    
    constructor(fechaPartido,horaPartido,estadio){
        this.estadio=estadio;
        this.horaPartido=horaPartido;
        this.fechaPartido=fechaPartido;        
    }

} */
let ob1=new Jugador("hola",12,"bjkxn","derecha");
console.log(ob1.datosjugador());