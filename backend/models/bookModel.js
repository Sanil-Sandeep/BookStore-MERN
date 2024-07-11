import mongoose from "mongoose";


const bookSchema = mongoose.Schema(
    {
        bookId: {
            type: String,
            unique: true,
        },
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publishYear: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);



export const Book = mongoose.model('Book', bookSchema);