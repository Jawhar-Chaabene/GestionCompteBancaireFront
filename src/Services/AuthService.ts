import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private apiUrl = 'http://localhost:8080/api/login';

    constructor(private http: HttpClient) { }

    // Login method
    login(username: string, password: string): Observable<any> {
        return this.http.post(`${this.apiUrl}`, { username, password });
    }

    // Check if user is logged in
    isLoggedIn(): boolean {
        return !!localStorage.getItem('token'); // Assuming JWT is stored in localStorage
    }

    // Log out user by removing the token
    logout(): void {
        localStorage.removeItem('token');
    }

    // Get user claims
    getUserClaims(): Promise<any> {
        const token = localStorage.getItem('token');
        if (token) {
            const userClaims = JSON.parse(atob(token.split('.')[1])); // Decoding JWT payload
            return Promise.resolve(userClaims);
        }
        return Promise.reject('No user claims found');
    }
}
