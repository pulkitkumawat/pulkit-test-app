import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';
import { Router } from "@angular/router"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  inputText;
  userid;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  search() {
    this.userService.getUser(this.inputText).subscribe((output) => {
      if (output[0]) {
        this.router.navigate(['/posts'], { state: { data: { id: output[0].id, name: output[0].name } } });
      }
      else {


        Swal.fire('User not found !!')
      }
    });

  }
}
