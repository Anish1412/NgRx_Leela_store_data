import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostDataService } from '../post-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
  addPost:FormGroup = new FormGroup({
    title: new FormControl(null,[Validators.required]),
    content: new FormControl(null,[Validators.required])
  })

  constructor(private postDataService:PostDataService,private router:Router) {}

  ngOnInit(): void {}

  addPostData(){
    this.postDataService.addPost(this.addPost.value).subscribe((res)=>{
      if(res){
        this.router.navigate(['posts']);
      }
    })
  }
}
