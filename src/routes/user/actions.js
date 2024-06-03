
module.exports = async function (fastify, opts) {
    fastify.get('/', async function (request, reply) {

        const prisma = fastify.diContainer.resolve('db');
        const wus = fastify.diContainer.resolve('wrapperUserService');

        // const user = await fastify.prisma.pokemon.findUnique({
        //     where: {
        //       id: 1,
        //     }
        // });

        // const user = await prisma.pokemon.findUnique({
        //     where: {
        //       id: 1,
        //     }
        // });

        // console.log( user )


        const u = await wus.traerDato();
        console.log( u );

        reply.status(201).send('ok');
    });
    fastify.get('/:id', async function (request, reply) {
        reply.status(201).send("user with id");
    });
}
