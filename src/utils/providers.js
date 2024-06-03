const {userService, UserService, WrapperUserService, AnotherService} = require('../services/user');
const { asClass, asFunction, Lifetime, asValue } = require('awilix');
const { PrismaClient } = require('@prisma/client');


function registerProviders(diContainer) {

    diContainer.register({
        userService: asClass(UserService, {
            lifetime: Lifetime.SINGLETON,
            dispose: (module) => module.dispose(),
        }),
    });

    diContainer.register({
        wrapperUserService: asClass(WrapperUserService, {
            lifetime: Lifetime.TRANSIENT,
            dispose: (module) => module.dispose(),
        }),
    });






    diContainer.register({
        db: asValue(new PrismaClient()),
    });



}

module.exports = {
    registerProviders
}