import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = ""
  password = ""

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  updateUser() {
    console.log(this.email);
    console.log(this.password);
    this.authService.login(this.email, this.password).subscribe(
      response => {
        localStorage.setItem('user', "Admin");
        localStorage.setItem("token", response.toString());
      }
    );
    window.location.reload();
  }

}
