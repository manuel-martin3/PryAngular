import { Component } from '@angular/core';
import { PostService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService]
})
export class AppComponent {
  /*title = 'manuel';*/
  name : String;
  email : String;
  website : String;
  hobbies : String[];
  showHobbies : boolean;
  posts: Ipost[];

  constructor(private postService:PostService){  
    this.name = "manuel";
    this.email = "manuel@gmail.com";
    this.website = "https://www.google.com.pe";
    this.hobbies = ["correr", "nadar", "football"];
    this.showHobbies = false;
  
    this.postService.getPosts().subscribe(posts=> {
      this.posts=posts;
    });  
  }

  toggleHobbies(){
    this.showHobbies = !this.showHobbies;
  }
  
  newHobbies(hobby){
    this.hobbies.push(hobby.value);
    hobby.value = '';
    return false;
  }

}

interface Ipost {
  id: string;
  title:string;
  body: string;
}
