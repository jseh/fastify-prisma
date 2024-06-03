const { PrismaClient } = require('@prisma/client');

class PrismaDb {
    constructor() {
        this.db = new PrismaClient();
    }
}


module.exports = {
    PrismaDb
}