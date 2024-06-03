// const config = require('./utils/config.js');

class CustomError extends Error {
    constructor(message) {
        super(message);
    
        this.name = 'CustomError';
        this.status = 456;
    }
}

class CustomSecondError extends Error {
    constructor(message) {
        super(message);
    
        this.name = 'CustomSecondError';
        this.status = 457;
    }
}



module.exports = async (fastify, opts, done) => {


    
    fastify.route({
        method: 'siu',
        url: '/siu',
        handler: (req, reply) => {
            reply.send({ hello: 'siuuu' })
        }
    })








    // fastify.route({
    //     method: 'GET',
    //     url: '/validacion',
    //     schema: {

    //     },
    //     handler: async (req, reply) => {
    //         reply.send('ok')
    //     }
    // })





}
