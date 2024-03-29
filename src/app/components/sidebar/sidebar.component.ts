import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    hidden: boolean;
}

let user = localStorage.getItem('user');
let  isAdmin = user == 'Admin';
let  isTeacher = user == 'Docente';
let  isStudent = user == 'Estudiante';

export const ROUTES: RouteInfo[] = [
    { path: '/register-user', title: 'Registro de usuario',  icon:'users_single-02', hidden: isAdmin },
    { path: '/course-list', title: 'Lista de cursos',  icon:'files_single-copy-04', hidden: isStudent || isTeacher},
    { path: '/course-students', title: 'Estudiantes',  icon:'files_single-copy-04', hidden: isTeacher },
    { path: '/task', title: 'Tareas',  icon:'design_bullet-list-67', hidden: isTeacher || isStudent },
    { path: '/grades', title: 'Notas',  icon:'design_bullet-list-67', hidden: isStudent || isTeacher},
    { path: '/exam-list', title: 'Examenes', icon: 'now-ui-icons design_vector', hidden: isStudent || isTeacher },
    
    // { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
    // { path: '/icons', title: 'Icons',  icon:'education_atom', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'location_map-big', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'ui-1_bell-53', class: '' },
    // { path: '/user-profile', title: 'User Profile',  icon:'users_single-02', class: '' },
    // { path: '/table-list', title: 'Table List',  icon:'design_bullet-list-67', class: '' },
    // { path: '/typography', title: 'Typography',  icon:'text_caps-small', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
