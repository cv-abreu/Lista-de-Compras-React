const express = require ("express");
const app = express();

app.get("/", function(req,res){
    res.sendFile(__dirname +"/src/index.html")

})


app.listen(8085, function(){
    console.log("INICIANDO SERVIDOR NA PORTA 8085")
});
