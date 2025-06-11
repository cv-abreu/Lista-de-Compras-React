const db = require("./db")

const Pontuacao = db.sequelize.define('product',{
   
    name: {
        type:db.Sequelize.STRING
    },

    type: {
        type:db.Sequelize.STRING
    },

    price: {
        type:db.Sequelize.FLOAT
    },
    
    
});

//Criar a tabela

//Product.sync({force:true})



module.exports = Product