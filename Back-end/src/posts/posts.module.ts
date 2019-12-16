import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {PostResolver} from './posts.resolver';
import {PostsService} from './posts.service'
import { MongooseModule } from '@nestjs/mongoose';
import { posts } from './posts.schema';
@Module({
    imports: [MongooseModule.forFeature([{ name: 'post', schema: posts }])],
  providers: [PostResolver,PostsService],
})
export class PostModule {}
