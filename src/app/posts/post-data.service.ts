import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Post } from '../Models/posts.model';
import { Observable, map } from 'rxjs';
import { Update } from '@ngrx/entity';

@Injectable()
export class PostDataService extends DefaultDataService<Post> {
  constructor(http:HttpClient,httpUrlGenerator:HttpUrlGenerator) {
    super('Post',http,httpUrlGenerator);
  }

  override getAll(): Observable<Post[]>{
    return this.http.get<Post[]>(`https://posts-772f3-default-rtdb.firebaseio.com/posts.json`)
    .pipe(map((data)=>{
      let posts: Post[] = [];
      for(let key in data){
        data[key]['id'] = key;
        posts.push(data[key]);
      }
      return posts;
    }))
  }

  addPost(post:Post){
    return this.http.post<{ name:string }>(`https://posts-772f3-default-rtdb.firebaseio.com/posts.json`,post)
    .pipe(map((data)=>{
      return { ...post,id: data.name };
    }))
  }

  override update(post:Update<Post>):Observable<Post>{
    return this.http.put<Post>(`https://posts-772f3-default-rtdb.firebaseio.com/posts/${post.id}.json`,
    {...post.changes});
  }

  override delete(id:string): Observable<string> {
      return this.http.delete(`https://posts-772f3-default-rtdb.firebaseio.com/posts/${id}.json`)
      .pipe(map((data)=>{
        return id;
      }))
  }
}
