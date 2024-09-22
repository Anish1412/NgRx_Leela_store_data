import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';
import { Post } from 'src/app/Models/posts.model';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css']
})
export class SinglepostComponent implements OnInit {
  id!:string;
  post!:Post | any;
  constructor(private paramID:ActivatedRoute,private postService:PostsService){}

  ngOnInit(): void {
      this.paramID.params.subscribe((res)=>{
        this.postService.entities$.subscribe((res)=>{
          this.post = res.find((res)=>{ return res.id === res['id'] })
        })
      })
  }
}
