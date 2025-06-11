const db = require("./db")


const User = db.sequelize.define('user',{

    username: {
        type:db.Sequelize.STRING
    },
    email: {
        type:db.Sequelize.STRING
    },
    
    password:{
        type:db.Sequelize.STRING
    },
    
});


//Criar a tabela


//User.sync({force:true})

module.exports = User