import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from 'src/app/Models/posts.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostlistComponent implements OnInit {
  posts$!:Observable<Post[]>;
  constructor(private postService:PostsService){}

  ngOnInit(): void {
    // This will do http call 
    // This will add "es" as plural for this component route-path. if it has 's' at end
    // else it will add 's'
    // For e.g. http://localhost:4200/api/postses/
    // Coming from Resolver Service
    this.posts$ = this.postService.entities$;
  }

  deletePost(id:any){
    if(confirm("Do you want to delete this Post?")){
      this.postService.delete(id);
    }
  }
}
