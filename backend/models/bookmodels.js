import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        title:{
        type: String,
        required: true,
        },
        author:{
            type: String,
            required: true
        },
        
        publishedYear:{
            type: Date,
            required: true
        },
        
          
        },
    {
        timestamps: true})

export const Book = mongoose.model("Books", bookSchema)