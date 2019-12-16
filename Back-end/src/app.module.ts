import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import {PostModule} from './posts/posts.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/ch'),
    PostModule,
    GraphQLModule.forRoot({
      autoSchemaFile:'schema.gql'
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
