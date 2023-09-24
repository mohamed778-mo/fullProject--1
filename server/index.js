const express =require("express") ;
const bodyParser =require('body-parser') 
const mongoose =require('mongoose')
const cors =require("cors")
require("dotenv").config()
const postRoutes =require("../server/routes/post")
const userRoutes =require("./routes/users")


const app =express();

app.use(express.json())

app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

app.use('/posts',postRoutes);

app.use('/users',userRoutes);



// -------------
const PORT = process.env.PORT || 5000 ; 
const url = process.env.CONNECTION_URL
console.log(url)
mongoose.connect(url,{
    useNewUrlParser: true ,
     useUnifiedTopology: true
})
.then(()=> console.log("done connection !!"))
.catch((error)=> console.log(error.message));

app.listen(PORT,()=> console.log(`server running on port ${PORT}`))


// mongoose.set('useFindAndModify', false);


