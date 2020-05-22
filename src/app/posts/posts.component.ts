import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Post } from '../posts/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts;
  userName: string;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userName = history.state.data.name;
    this.userService.getPostsById(history.state.data.id).subscribe((output) => {
      this.posts = output;
    });
  }

}
