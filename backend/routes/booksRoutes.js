import express from "express";
import {Book} from "../models/bookmodels.js";
const router = express.Router();

// routes to add new book into database
//routes to add new book into database
router.post("/" ,async ( request , response ) => {
try{
    if(
        
        !request.body.title ||
        !request.body.author ||
        !request.body.publishedYear
    ){
        return response.status(400).send({
            message :"send all required field: title , author , publishedYear" 
        });
    }
    const newBook = {
        title : request.body.title,
        author : request.body.author,
        publishedYear : request.body.publishedYear
    };

    const book = await Book.create(newBook);

    return response.status(201).send(book);
} 
 

catch(error){
    console.log(error.message)
    response.status(500).send({
        message : error.message
    })
}
});

//route to get all books from database
router.get("/", async ( request , response) => {
    try{
         const book = await Book.find();
         return response.status(200).json({
            count: book.length,
            books : book
         }
            
         );
    }
    catch(error){
        console.log(error.message)
        response.status(500).send({
            message : error.message})
    }
});
//route to get 1 books from database by id 
router.get("/:id", async ( request , response) => {
    try{
        const { id } = request.params;
         const book = await Book.findById(id);
         return response.status(200).json(book);
    }
    catch(error){
        console.log(error.message)
        response.status(500).send({
            message : error.message})
    }
});

//router to update a book 


router.put("/:id",  async (request,response) => {
    try{
        
        if(
        !request.body.title ||
    !request.body.author ||
    !request.body.publishedYear
        

    ){
       
       return response.status(400).send({
            message: "Kindly fill proper detail"
        })
    }
    const {id} = request.params

    const result = await Book.findByIdAndUpdate(id , request.body)
    
    if(!result){
        return response.status(404 ).json({message:"Book not found"

        })
    }else{
        return response.status(200).send({message:"book updates successfully"})
    }

    }
    catch(error){
        response.status(500).send({
            message: Error.message
        })
    }
        
    
})
// route to delete a book
router.delete("/:id", async (request , repsonse) => {
    try{
        const {id} = request.params;
        const result = await Book.findByIdAndDelete(id);

        if(!result){
            return repsonse.status(404).json({message: "not found"})
        }
        else{
            return repsonse.status(200).send({message: "Ok"})
        }
       

    }
    catch(error){
        repsonse.status(500).send({
            message: error.message
        })
    }
})

export default router;