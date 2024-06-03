class UserService {

    count = 10;

    mostrarMensaje(params) {
        console.log( "mensaje....!" );
    }

    incrementar(){
        this.count = this.count + 1;
    }
}


const userService = new UserService();



class WrapperUserService {

    count = 1;

    constructor({ userService, db }) {
        this.us = userService;
        this.db = db;
    }
    

    mostrarContador(){
        console.log(`contador desde wrapper: ${this.us.count} + wrapper ${this.count}`);
        this.count = this.count + 1;
    }

    async traerDato() {
        const userSearch = this.db.pokemon.findUnique({
            where: {
              id: 1,
            }
        });

        return userSearch
    }

}


class AnotherService {

    constructor(id = 1, color = 555) {
        this.id = id;
        this.color = color;
    }

    motrarValores(){
        console.log( `id: ${this.id}, color: ${this.color}` )
    }
}



module.exports = {
    userService,
    UserService,
    WrapperUserService,
    AnotherService
}

