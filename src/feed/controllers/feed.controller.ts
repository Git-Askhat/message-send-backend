import { FeedService } from './../services/feed.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { FeedPost } from '../models/post.interface';
import { Observable } from 'rxjs';
import { DeleteResult } from 'typeorm';

@Controller('data')
export class FeedController {
    constructor(private feedService: FeedService) {}

    @Post()
    create(@Body() post: FeedPost): Observable<FeedPost> {
        return this.feedService.createPost(post)
    }

    @Get()
    findAll(): Observable<FeedPost[]> {
        return this.feedService.findAllPosts()
    }

    @Delete(':id') 
    delete(@Param('id') id: number): Observable<DeleteResult> {
        return this.feedService.deletePost(id);
    }
}
