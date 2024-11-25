const {sequelizeDb, sequelizeConfig} = require('./database')// estamos utilizando o recurso de desestruturação de objetos para importar apenas os módulos necessários.

//CRIANDO TABELA
const atendimento = sequelizeConfig.define(
    'atendimento',
    {
        animal:{type:sequelizeDb.TEXT},
        data:{type:sequelizeDb.DATE},
        tipo_atendimento:{type:sequelizeDb.TEXT},
        preco:{type:sequelizeDb.FLOAT}
    }
)
atendimento.sync()
module.exports = atendimento