import {ObjectType,Field,Int,ID} from 'type-graphql';
@ObjectType()
export class CreatePostDto{
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
    DateAdded:String;
    @Field()
    _id:String;
}