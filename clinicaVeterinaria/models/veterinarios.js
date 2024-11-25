const database = require('./database')// Importando o banco de dados
const atendimento = require('./atendimento')// importando a tabela departamento

//CRIANDO A TABELA
const veterinarios = database.sequelizeConfig.define(
    'veterinarios',// o nome da tabela
    {
        nome:{type:database.sequelizeDb.STRING},
        especialidade:{type:database.sequelizeDb.TEXT},
        contato:{type:database.sequelizeDb.INTEGER}
    }
)
/*
Não iremos criar os campos 'id_funcionário' e a chave estrangeira, pois o sequelize irá criar esses campos automaticamente, ou seja, tanto a chave primária quanto chave estrangeira são criados pelo sequelize
*/

//CRIANDO A CHAVE ESTRANGEIRA
// Estou dizendo que departamento possui muitos funcionários
atendimento.hasMany(veterinarios,{
    onDelete:'CASCADE',
    onUpdate: 'CASCADE'
})
veterinarios.belongsTo(atendimento)// Estou dizendo que funcionário pertence a apenas 1 departamento

veterinarios.sync()
module.exports = veterinarios