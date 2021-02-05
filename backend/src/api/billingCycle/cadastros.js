const restful = require('node-restful')
const mongoose = restful.mongoose

const clienteSchema = new mongoose.Schema({
    name: { type: String },
    cpf: { type: Number}
})

const fornecedorSchema = new mongoose.Schema({
    name: { type: String},
    cpf:{type:Number}
})

const cadastroSchema = new mongoose.Schema({
    
    cliente: [clienteSchema],
    fornecedor: [fornecedorSchema]
})

module.exports = restful.model('Cadastros', cadastroSchema)