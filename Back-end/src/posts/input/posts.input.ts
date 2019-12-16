import {InputType,Field,Int} from 'type-graphql';
@InputType()
export class PostType{
    @Field()
    username:String;
    @Field()
    caption:String;
    @Field()
    comments:String;
    @Field(()=>Int)
    PostID:Number;
    @Field()
    imageURL:String;
    @Field()
    DateAdded:String
    @Field()
    _id:String;
}