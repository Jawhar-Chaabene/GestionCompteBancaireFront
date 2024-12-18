import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {
  //forçage de type 
  // confirmdialog => boite de dialogue
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) { } // bch ma 3adech yothhor 3ala page kemla




  title = "Are u sure?";
  content = "metyakked ???";
  cancel = "Cancel";
  delete = "confirm";
}
