const express = require ("express");
const app = express();
const path= require('path');
const {engine} = require ("express-handlebars");
const bodyParser = require ("body-parser");
const moment = require ('moment)')



const User = require ("./models/User");
const Product = require ("./models/Product");

//configurando handlebars

app.engine('handlebars', engine({
	defaultLayout: 'main',
	helpers:{
		formatDate:(date) =>{
			return moment(date).format('DD/MM/YYYY')
		}
	}
}))

app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname+'/public')));



//home

app.get("/", function(req,res){
	res.render("home");

});


//user

app.get("/user", function(req,res){
	User.findAll({order: [['Id', 'Asc']]}).then(function(user){
		res.render('user',{user: user});
	})
});

app.get("/userAdd", function(req, res){
	res.render("userAdd");
});

app.get("/userEdit/:Id", function(req, res) {
  User.findByPk(req.params.Id)
  .then(function(user) {
	res.render("userEdit", {
      username: user.username,
      email: user.username,
      password: user.password
    });
  }).catch(function(erro) {
    res.send("Erro " + erro);
  });
});

app.post('/userPut/:id', function(req, res){
	User.update({
		username: req.body.username,
		email: req.body.email,
		password:req.body.password,
	},
	{
		where:{ Id: req.params.id}
	}).then(function(){
		res.redirect('/user')
		//res.send("Cadastro atualizado com sucesso!")
	}).catch(function(erro){
		res.send("Erro ao tentar atualizar o cadastro" + erro)
	})
});


app.post("/userPost", function(req, res){
	User.create({
		username: req.body.username,
        email: req.body.email,
        password: req.body.password,
	}).then(function(){
		res.redirect('/user')
		//res.send("Usuáriocadastrado com sucesso")
	}).catch(function(erro){
		res.send("Erro ao realizar o cadastramento do Usuário! " + erro)
	})
});

app.get('/userDelete/:user', function(req, res){
	User.destroy({
		where: {'user' : req.params.username}
	}).then(function(){
		res.redirect('/user')
		//res.send("User deletado com sucesso!")
	}).catch(function(erro){
		res.send("Erro ao realizar a exclusão do usuário")
	})

});

//product

app.get("/product", function(req,res){
	Product.findAll({order: [['Id', 'Asc']]}).then(function(product){
		res.render('product',{product: product});
	})
});

app.get("/productAdd", function(req, res){
	res.render("productAdd");
});

app.get("/productEdit/:Id", function(req, res) {
  Product.findByPk(req.params.Id)
  .then(function(product) {
	res.render("productEdit", {
      name: product.name,
      type: product.type,
      price: product.price
    });
  }).catch(function(erro) {
    res.send("Erro " + erro);
  });
});

app.post('/productPut/:id', function(req, res){
	Product.update({
		name: req.body.name,
		type: req.body.type,
		price:req.body.price,
	},
	{
		where:{ Id: req.params.id}
	}).then(function(){
		res.redirect('/product')
		//res.send("Produto atualizado com sucesso!")
	}).catch(function(erro){
		res.send("Erro ao atualizar o produto" + erro)
	})
});


app.post("/productPost", function(req, res){
	Product.create({
		name: req.body.name,
        type: req.body.type,
        price: req.body.price,
	}).then(function(){
		res.redirect('/product')
		//res.send("Produto cadastrado com sucesso")
	}).catch(function(erro){
		res.send("Erro ao realizar o cadastramento do Produto! " + erro)
	})
});

app.get('/productDelete/:product', function(req, res){
	Product.destroy({
		where: {'product' : req.params.name}
	}).then(function(){
		res.redirect('/product')
		//res.send("Produto deletado com sucesso!")
	}).catch(function(erro){
		res.send("Erro ao realizar a exclusão do Produto")
	})

});

//Server

app.listen(8081);
console.log("Servidor rodando em http://localhost:8081");
