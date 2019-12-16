import * as mongoose from 'mongoose';
export const posts = new mongoose.Schema({
    username:String,
    caption:String,
    comments:String,
    PostID:Number,
    imageURL:String,
    DateAdded:String,
    _id:String
});