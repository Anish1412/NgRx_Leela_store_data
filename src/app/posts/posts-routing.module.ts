import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostlistComponent } from './postlist/postlist.component';
import { AddpostComponent } from './addpost/addpost.component';
import { EditpostComponent } from './editpost/editpost.component';
import { PostResolverService } from './post-resolver.service';
import { SinglepostComponent } from './singlepost/singlepost.component';

const routes: Routes = [
    { path:'', component:PostlistComponent, resolve : { posts : PostResolverService } },
    { path:'addpost', component: AddpostComponent },
    { path:'editpost/:id', component: EditpostComponent },
    { path:'details/:id', component: SinglepostComponent, resolve : { posts : PostResolverService } }  
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
