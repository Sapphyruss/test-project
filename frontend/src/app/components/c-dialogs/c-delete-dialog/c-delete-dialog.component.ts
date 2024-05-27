import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-c-delete-dialog',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './c-delete-dialog.component.html',
  styleUrl: './c-delete-dialog.component.scss'
})
export class CDeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Array<any>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onClick() {
    this.dialogRef.close();
  }

  deleteMessage() {
    let message: string;
    message = 'Are you sure ? you want to delete this ?';
    if (this.data[1])
      return message;
    return message;
  }
}
