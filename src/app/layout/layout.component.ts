import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/AuthService';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  user!: any;

  constructor(private authService: AuthService, private router: Router) {
    // Fetch user claims on component initialization
    this.authService.getUserClaims().then((x) => {
      this.user = x;
      console.log(this.user.displayName);
    }).catch((error) => {
      console.error(error);
      this.router.navigate(['/login']); // Redirect to login if no claims are found
    });
  }

  // Logout method
  LOGOUT(): void {
    this.authService.logout(); // Call logout to remove the token from localStorage
    this.router.navigate(['/login']); // Redirect to login page after logout
  }
}
