import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService } from 'src/Services/account.service';
import { Account } from 'src/Modeles/account';

@Component({
  selector: 'app-list-comptes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-comptes.component.html',
  styleUrls: ['./list-comptes.component.css']
})
export class ListComptesComponent implements OnInit {
  comptes: Account[] = []; // Holds the list of comptes
  errorMessage: string = ''; // For error handling

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.fetchComptes();
  }

  fetchComptes(): void {
    this.accountService.getAllAccounts().subscribe({
      next: (data: Account[]) => {
        this.comptes = data;
        console.log('Comptes fetched:', data);
      },
      error: (error) => {
        this.errorMessage = 'Erreur lors de la récupération des comptes.';
        console.error('Error:', error);
      }
    });
  }
}
