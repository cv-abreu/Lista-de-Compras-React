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

//product

app.get("/product", function(req,res){
	Product.findAll({order: [['Id', 'Asc']]}).then(function(product){
		res.render('product',{product: product});
	})
});
