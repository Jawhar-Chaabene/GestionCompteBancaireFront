import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/Services/AuthService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = ''; // For displaying error messages

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin(): void {
    const { username, password } = this.loginForm.value;

    // Call login method from AuthService
    this.authService.login(username, password).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        // Store token in localStorage or sessionStorage
        localStorage.setItem('token', response.token); // Assuming token is returned in the response
        alert('Login successful!');
        this.router.navigate(['/dashboard']); // Redirect to dashboard or home page
      },
      error: (err) => {
        console.error('Login failed:', err);
        this.errorMessage = 'Invalid username or password.'; // Set error message
      }
    });
  }
}
