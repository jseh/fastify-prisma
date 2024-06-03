const Joi = require('joi');
const { extendJoi } = require('@softstack/joi-bigint');
const j = extendJoi(Joi);


const joiCompiler = ({ schema, method, url, httpPart }) => {
    return data => schema.validate(data)
}


module.exports = {
    j,
    joiCompiler
}