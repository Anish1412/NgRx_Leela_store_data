import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostlistComponent } from './posts/postlist/postlist.component';
import { AddpostComponent } from './posts/addpost/addpost.component';
import { EditpostComponent } from './posts/editpost/editpost.component';
import { SinglepostComponent } from './posts/singlepost/singlepost.component';
import { PostResolverService } from './posts/post-resolver.service';

const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'posts', loadChildren: ()=>import('./posts/posts.module').then((m)=> m.PostsModule ) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
