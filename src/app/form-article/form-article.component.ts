import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/Services/article.service';

@Component({
  selector: 'app-form-article',
  templateUrl: './form-article.component.html',
  styleUrls: ['./form-article.component.css']
})
export class FormArticleComponent implements OnInit {

  form!: FormGroup;
  currentItemId!: string;

  constructor(private AS: ArticleService, private router: Router, private activatedRoute: ActivatedRoute, private dialogRef: MatDialogRef<FormArticleComponent
  >) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = new FormGroup({
      titre: new FormControl(null, [Validators.required]),

      type: new FormControl(null, [Validators.required]),
      lien: new FormControl(null, [Validators.required]),
      sourcepdf: new FormControl(null, []),

    });
  }

  // onsub(): void {
  //   console.log(this.form.value);
  //   const articleToSave = { ...this.form.value }; // Pas besoin de copier l'article existant ici, à moins que vous ne vouliez le faire pour une raison spécifique

  //   // Appeler une méthode dans le service pour ajouter cet article
  //   this.AS.saveArticle(articleToSave).subscribe(() => {
  //     this.router.navigate(['article']); // Utilisation correcte de router.navigate
  //   });
  // }
  save() {
    this.dialogRef.close(this.form.value);
    this.AS.onsave(this.form.value).subscribe(() => {
      this.router.navigate(['/articles'])
    })
  }

  close() {
    this.dialogRef.close();
  }

}
