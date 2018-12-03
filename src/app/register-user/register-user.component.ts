import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-services.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent {

  email = ""
  password = ""
  rol = ""
  roles = ["Estudiante", "Admin", "Docente"]
  name = ""
  lastName = ""

  constructor(
    private authService: AuthService,
    private toastr: ToastrService
  ) {

  }

  updateUser() {
    console.log(this.email);
    console.log(this.password);
    console.log(this.name);
    console.log(this.lastName);
    console.log(this.rol);
    localStorage.setItem('user', "Admin");
    this.authService.register(this.email, this.password, this.rol, this.name, this.lastName).subscribe();
    this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span> Usuario registrado correctamente</b>.', '', {
      timeOut: 8000,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-info alert-with-icon",
      positionClass: 'toast-' + 'top' + '-' + 'right'
    });
  }

}
