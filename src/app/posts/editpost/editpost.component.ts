import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../posts.service';
import { PostDataService } from '../post-data.service';
import { Update } from '@ngrx/entity';
import { Post } from 'src/app/Models/posts.model';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {
  id!:string;
  editPost:FormGroup = new FormGroup({
    title: new FormControl(null,[Validators.required]),
    content: new FormControl(null,[Validators.required])
  })
  constructor(private postService:PostsService,private paramID:ActivatedRoute,private route:Router) {}

  ngOnInit(): void {
    this.paramID.params.subscribe((res)=>{
      this.id = res['id']
    })
    this.postService.entities$.subscribe((res)=>{
      if(res){
        let post = res.find(res => res.id === this.id);
        this.editPost.patchValue({
          title: post?.title,
          content: post?.content
        })
      }
    })
  }

  editPostData(){
    let editData = {
        ...this.editPost.value,
        id: this.id
    }
    this.postService.update(editData);
    this.route.navigate(['/posts']);
  }
}
