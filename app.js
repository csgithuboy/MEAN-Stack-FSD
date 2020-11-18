// var messenger =require("./messenger");
// messenger.printer(" Ashin...");
// messenger.printer("Abhijith");
// messenger.printer("Abhijith");

// var http=require("http");
// http.createServer(function(req,res) {
// // res.write("Welcome to the server...")
// // res.end()
// if(req.url==="/"){
// res.write("Welcome to the index page")
// res.end()
// }else if(req.url==="/login"){
// res.write("Login page...")
// res.end()
// }else{
// res.write(" error : Page not found. ...")
// res.end()
// }
// }).listen(3300)
// console.log("Server is listening to port nmber 3300")


// app.get('/', function(req,res) {
// res.send("Hello.......")
// });
// app.listen(3300);
// app.get('/login', function(req,res){
//     if(req.url==="/login")
//     {
//     res.send("this is login page....")
//     }
// })
const express=require('express')
const app= express();
const booksRouter=express.Router();
const authorsRouter=express.Router();
app.set('view engine', 'ejs')
app.set('views', __dirname+'/src/views')
app.use(express.static('./public')) 
app.use('/books',booksRouter)
app.use('/authors',authorsRouter)
//Creatd router
app.get('/', function(req,res) {
// res.send("welcome to the blank page...")
// res.sendFile(_dirname+"/src/views/index.html")
// res.render("index",{books :['book1', 'book2'],titleName:'Library'})
   res.render("index1",
   {
    nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Author'}],
    title:"Library"
})
})

var books=[
    {
        title:'goyfouyf',
        author:'uykfykf',
        genre:'drama',
        img:"a.jpeg"
    },
    {
        title:'goyfouyf',
        author:'uykfykf',
        genre:'drama',
        img:"a2.jpeg"
    },
    {
        title:'goyfouyf',
        author:'uykfykf',
        genre:'drama',
        img:"a3.jpeg"
    }
]

var authors=[
    {
        title:'Pathumma',
        author:'basheer',
        genre:'drama',
        img:"a.jpeg"
    },
    {
        title:'Death',
        author:'Sadhguru',
        genre:'Spirituality',
        img:"a2.jpeg"
    },
    {
        title:'two states',
        author:'chetan bhagath',
        genre:'drama',
        img:"a3.jpeg"
    }
]

booksRouter.get('/',function(req,res){
    res.render("books",
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Author'}],
        title:"Books",
        books
    })
})

authorsRouter.get('/',function(req,res){
    res.render("authors",
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Author'}],
        title:"Authors",
        authors
    })
})

booksRouter.get('/:id', function(req,res) {
    const id=req.params.id;
    res.render("book",
    {
    nav:[{link: '/books', name: 'Books'},
    {link: '/authors', name: 'Author'}],
    title: "Book",
    book:books[id]
    })
    })

authorsRouter.get('/:id', function(req,res) {
        const id=req.params.id;
        res.render("author",
        {
        nav:[{link: '/books', name: 'Books'},
        {link: '/authors', name: 'Author'}],
        title: "Book",
        author:authors[id]
        })
        })    

app.get('/login', function(req,res){
res.render("login")
})
app.listen(3000);