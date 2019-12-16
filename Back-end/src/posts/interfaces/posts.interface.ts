import {Document} from 'mongoose';
export interface post extends Document{
    readonly username:String,
    readonly caption:String,
    readonly comments:String,
    readonly PostID:Number,
    readonly imageURL:String,
    readonly DateAdded:String,
    readonly _id: any
}