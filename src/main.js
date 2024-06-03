
const {registerAuthMiddlewares} = require('./utils/auth-middlewares');
const {registerProviders} = require('./utils/providers');
const { prismaPlugin } = require('./plugins/prisma-plugin');
const autoload = require('@fastify/autoload');
const path = require('path');


const { 
  diContainer, // this is an alias for diContainerProxy
  diContainerClassic, // this instance will be used for `injectionMode = 'CLASSIC'`
  diContainerProxy, // this instance will be used by default
  fastifyAwilixPlugin
} = require('@fastify/awilix');


// ---------------- APP INSTANCE ------------------

const fastify = require('fastify');
const app = fastify({ logger: true });

// ------------------------------------------------




app.register(fastifyAwilixPlugin, { 
  disposeOnClose: true,
  disposeOnResponse: true,
  strictBooleanEnforced: true
});

registerProviders(diContainer);


app.register(require('fastify-bcrypt'), {
  saltWorkFactor: 12
});

app.register(require('@fastify/redis'), { host: '127.0.0.1', password:'eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81' });

// habilitar si se va utilizar
// app.register(prismaPlugin);



// ------------------- AUTH --------------------------

registerAuthMiddlewares(app);

app.register(require('@fastify/jwt'), {
  secret: 'jd8217h28dh7aoiufh8932q9h387awidhfuhaouahwoifhaousdfaosufh230hf3h20h894503'
});

// ----------------------------------------------------

app.register(autoload, {
  dir: path.join(__dirname, './routes'),
  routeParams: true
  // routes/users/_id/actions.js will be loaded with prefix /users/:id
  // routes/__country-__language/actions.js will be loaded with prefix /:country-:language
});

app.route({
  method: 'GET',
  url: '/',
  handler: (req, reply) => {
      reply.send("siuuuuu!")
  }
});


app.listen({ port: 3000 }, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: https://github.com/prisma/prisma-examples/tree/latest/javascript/rest-fastify#using-the-rest-api`),
);

