import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountService } from 'src/Services/account.service';
import { Account } from 'src/Modeles/account';

@Component({
  selector: 'app-ajouter-compte',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ajouter-compte.component.html',
  styleUrls: ['./ajouter-compte.component.css']
})
export class AjouterCompteComponent {
  accountForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService
  ) {
    // Define form controls matching the Account model
    this.accountForm = this.fb.group({
      nomClient: ['', [Validators.required]],
      solde: [0, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit(): void {
    if (this.accountForm.valid) {
      const account: Account = {
        nomClient: this.accountForm.value.nomClient,
        solde: this.accountForm.value.solde
      };

      this.accountService.createAccount(account).subscribe({
        next: (response) => {
          console.log('Compte ajouté avec succès:', response);
          alert('Compte ajouté avec succès!');
          this.accountForm.reset();
        },
        error: (error) => {
          console.error('Erreur lors de l’ajout du compte:', error);
          alert('Une erreur est survenue lors de l’ajout du compte.');
        }
      });
    }
  }
}  