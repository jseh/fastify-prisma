

function registerAuthMiddlewares(app) {

    app.decorate("requireJwt", async function (req, reply) {
        try {
          await req.jwtVerify()
        } catch (error) {
          reply.send(error)
        }
      });
      
      app.decorate("hasAllTheseClaims", function (requiredClaims){
        return async function (req, reply) {
          // si todos los claims requeridos se encuentran presente en los claims de usuario
          let result = requiredClaims.every(claim => req.user.claims.includes(claim));
          if ( result ) {
            return;
          }
          reply.send('Acceso denegado...');
        }
      });
      
      app.decorate("hasSomeOfTheseClaims", function (requiredClaims){
        return async function (req, reply) {
          // si alguno de los claims requeridos se encuentran presente en los claims de usuario
          let result = requiredClaims.some(claim => req.user.claims.includes(claim));
          if ( result ) {
            return;
          }
          reply.send('Acceso denegado...');
        }
      });
    
}

module.exports = {
    registerAuthMiddlewares
}