
module.exports = async function (fastify, opts) { 

    fastify.get('/', async function (request, reply) {
        reply.status(201).send("auth--");
    });

    fastify.get('/:id', async function (request, reply) {
        reply.status(201).send("auth with id");
    });

    fastify.get('/token', (req, reply) => {
        const token = fastify.jwt.sign({ nombre: 'jose', email: 'jseh@pm.me', claims: ['admin'] })
        reply.send({ token })
    });

    fastify.get('/pro', {
        onRequest: [fastify.requireJwt, fastify.hasSomeOfTheseClaims(['admin', 'canDeleteOtherUsers'])]
    }, async function (request, reply) {
        // reply.send("protected ");
        reply.send(request.user);
    });


    fastify.get('/user', async function (request, reply) {
        let s = await fastify.bcrypt.hash('password');
        let es = await fastify.bcrypt.compare('password', s);
        reply.status(201).send("user bryc--"+s+es);
    });


}
