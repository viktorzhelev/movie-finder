import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService : AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    console.log('logout...');
    this.authService.logout().subscribe(
      data =>{
          localStorage.clear();
          this.authService.setAuthtoken('');
          this.router.navigate(['/login']);
      }
    )
  }

}
