import { Component } from '@angular/core';
import { GLOBAL } from '../app-config';
import { MemberService } from 'src/Services/member.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
//import {_db} from 'src/assets/_db.json';
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
  //  nom = 'glid2';
  //bch namlou tableau
  constructor(private MS: MemberService,
    private dialog: MatDialog) { }
  dataSource: any[] = GLOBAL._DB.members;

  delete(id: string): void {
    // 1 lancer la boite
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '400px',
      width: '600px',
    });
    // 2 attendre le resultat de user 
    dialogRef.afterClosed().subscribe((x) => {
      // 3 si user a fait le click sur confirm 
      if (x) {
        // appeler le service 
        this.MS.ONDELETE(id).subscribe(() => {
          this.dataSource = this.MS.tab
        })
      }
    })
  }

  displayedColumns: string[] = ['1', '2', '3', '4', '5', '6', '7'];


}
