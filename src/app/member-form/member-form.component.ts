import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from 'src/Services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  //injection de depandances ya3ni créer une instance privé dans le constructeur mel service bch nejem ne5dem 
  idcourant!: string;
  // member_recuperer!: Member;
  constructor(private MS: MemberService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }


  form!: FormGroup; // el "!" bch ya3tiha valeur par défaut 7asb l type hethy l variable bch yeteb3ath fiha l formulaire

  ngOnInit(): void {
    // recuperer id de la route courante
    this.idcourant = this.activatedRoute.snapshot.params['id']; // capture d'image hal snapshot
    console.log(this.idcourant);
    if (!!this.idcourant) {
      this.MS.getMemberById(this.idcourant).subscribe((x) => { //
        this.initForm2(x);
      })
    }
    else this.initForm();
  }
  // if (id) existe det a une valeur =>
  // getMemberbyId(id)=> initForm2(memberFind)
  // else => je suis dans create
  // this.initForm();

  initForm2(x: any): void // initialisation mta3 l formulaire ya9a3dou yestanew fel les valeurs mel html 
  {
    this.form = new FormGroup({
      cin: new FormControl(x.cin, [Validators.required]),
      name: new FormControl(x.name, [Validators.required]),
      cv: new FormControl(x.cv, [Validators.required]),
      type: new FormControl(x.type, [Validators.required]),
    })
  }
  initForm(): void // initialisation mta3 l formulaire ya9a3dou yestanew fel les valeurs mel html 
  {
    this.form = new FormGroup({
      cin: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      cv: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
    })
  }
  onsub(): void {
    if (!!this.idcourant) {
      this.MS.updateMember(this.idcourant, this.form.value).subscribe(() => {
        this.router.navigate(['/members']);
      })
    }
    else {
      console.log(this.form.value) // nchouf fel user chno dakhel
      const memberToSave = this.form.value;
      // appeler la fct du service onsave: generateur 
      this.MS.ONSAVE(memberToSave).subscribe(() => {
        this.router.navigate(['/members'])
      })
    }
  }
}
