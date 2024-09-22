import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { AddpostComponent } from './addpost/addpost.component';
import { EditpostComponent } from './editpost/editpost.component';
import { PostlistComponent } from './postlist/postlist.component';
import { SinglepostComponent } from './singlepost/singlepost.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { PostDataService } from './post-data.service';
import { PostResolverService } from './post-resolver.service';
import { Post } from '../Models/posts.model';

const entityMetadata : EntityMetadataMap = {
  Post : {
     sortComparer: sortName,
      entityDispatcherOptions: {
          // It will not wait for http request for making changes, it will automatically update the store
          optimisticUpdate: true,
          optimisticDelete: true,
      }
  }
}

function sortName(a:Post,b:Post){
  return a.title.localeCompare(b.title);
}

@NgModule({
  declarations: [
    AddpostComponent,
    EditpostComponent,
    PostlistComponent,
    SinglepostComponent,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    ReactiveFormsModule
  ],
  providers:[PostDataService,PostResolverService]
})
export class PostsModule { 
  constructor(eds:EntityDefinitionService,entityDataService:EntityDataService,postDataService:PostDataService) {
    eds.registerMetadataMap(entityMetadata),
    entityDataService.registerService('Post',postDataService)
  }
}
