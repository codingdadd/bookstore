import express, { request, response } from "express";
import { PORT, MONGODB_URL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookmodels.js";
import booksRoutes from "./routes/booksRoutes.js";
import cors from "cors";



const app = express();

app.use(cors());

//middle ware for parsing json
app.use(express.json());
// this is  cors for all  * 


// to connnect the routes with the app 
app.use("/books" , booksRoutes);




//  below cors is applied with the specific url and methods and allowed headers
// app.use(cors(
//     {
//         origin : "http://localhost:3000",
//         methods : ["GET", "POST", "PUT", "DELETE"],
//         allowedHeaders:["Content-Type", "Authorization"]
//     }
// ));

// app.post("/Book" , ( req , res ) => {
//     res.send( "Hello World!" );
// } );





console.log(MONGODB_URL)
mongoose.connect(MONGODB_URL) 
    .then(() =>{
        console.log("Connected to MongoDB");
        app.listen( PORT ,() => {
            console.log(`Server running on port ${PORT}`);});
        
    })
    .catch((error)=>{
        console.log(error);
    })