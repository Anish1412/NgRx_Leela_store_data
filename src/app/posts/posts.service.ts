import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Post } from '../Models/posts.model';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostsService extends EntityCollectionServiceBase<Post> {

  constructor(elementFactory:EntityCollectionServiceElementsFactory) { 
    // In 1st argument, in inverted comma, give entityName which you declared in entity-metadata.ts file in entityMetadatamap
    super('Post',elementFactory)
  }
}
