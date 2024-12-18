import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from 'src/Modeles/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'http://localhost:8080/api/comptes'; // Replace with your Spring Boot API URL

  constructor(private http: HttpClient) { }

  createAccount(accountData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/save`, accountData); // Adjust endpoint as needed
  }
  // Method to fetch all comptes
  getAllAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(`${this.apiUrl}`); // Adjust endpoint if needed
  }
}
