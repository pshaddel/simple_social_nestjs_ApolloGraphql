import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { post } from './interfaces/posts.interface';
import { CreatePostDto } from './dto/create-post.dto';
import {PostType} from './input/posts.input';

@Injectable()
export class PostsService {
  constructor(@InjectModel('post') private readonly postModel: Model<post>) {}

  async createPost(createPostDto: PostType): Promise<post> {
    //   let testData = {username:"Ali",comments:"hi how u doin,second comment,third comment", caption:"hello I'm Genius",PostID:34,DateAdded:"2018-12-10",imageURL:"images"}
    const createdPost = new this.postModel(createPostDto);
    return await createdPost.save();
  }
  async findAll(): Promise<post[]> {
    return await this.postModel.find().sort( { DateAdded: -1 } ).exec();
  }

//   async createPost(input): Promise<post[]> {
//     return await this.postModel.create(input);
//   }

}