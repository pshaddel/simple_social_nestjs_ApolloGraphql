import {Resolver,Query,Mutation,Args} from '@nestjs/graphql';
import {PostsService} from './posts.service';
import {CreatePostDto} from './dto/create-post.dto';
import {PostType} from './input/posts.input';
@Resolver()
export class PostResolver {
  constructor(
    private readonly postsService: PostsService,
  ) {}

  @Query(()=>String)
  async hello() {
    return 'mytest';
  }

  @Query(()=>[CreatePostDto])
  async posts() {
    return this.postsService.findAll();
  }

  
  @Mutation(()=>CreatePostDto)
  async createPost(@Args('input') input:PostType) {
    return this.postsService.createPost(input);
  }



}