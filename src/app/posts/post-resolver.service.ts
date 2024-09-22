import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { PostsService } from './posts.service';
import { Observable, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostResolverService implements Resolve<boolean>{

  constructor(private postService:PostsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.postService.loaded$.pipe(
      tap((loaded)=>{
        if(!loaded){
          this.postService.getAll();
        }
      }),
      first()
    )
  }
}
