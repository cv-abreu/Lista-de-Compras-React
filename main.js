const express = require ("express");
const app = express();
const path= require('path');
const {engine} = require ("express-handlebars");
const bodyParser = require ("body-parser");
const moment = require ('moment)')


const User = require ("./models/User");
const Product = require ('./models/Product');

