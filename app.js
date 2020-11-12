var messenger =require("./messenger");
messenger.printer(" Ashin...");
messenger.printer("Abhijith");
messenger.printer("Abhijith");

var http=require("http");
http.createServer(function(req,res) {
// res.write("Welcome to the server...")
// res.end()
if(req.url==="/"){
res.write("Welcome to the index page")
res.end()
}else if(req.url==="/login"){
res.write("Login page...")
res.end()
}else{
res.write(" error : Page not found. ...")
res.end()
}
}).listen(3300)
console.log("Server is listening to port nmber 3300")

