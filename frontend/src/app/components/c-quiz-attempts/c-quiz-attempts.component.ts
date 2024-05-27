import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

// Third and custom element imports
import { ToastrService } from 'ngx-toastr';
import { CDeleteDialogComponent } from '../c-dialogs/c-delete-dialog/c-delete-dialog.component';

@Component({
  selector: 'app-c-quiz-attempts',
  standalone: true,
  imports: [],
  templateUrl: './c-quiz-attempts.component.html',
  styleUrl: './c-quiz-attempts.component.scss'
})
export class CQuizAttemptsComponent {

  constructor(
    private dialog: MatDialog,
    private toastr: ToastrService
  ) {}

  deleteElement() {
    this.dialog.open(CDeleteDialogComponent, {
      width: '500px',
    })
    this.showSuccess();
  }

  showSuccess() {
    this.toastr.info('Success!', 'Deleted!', {
      positionClass: 'toast-bottom-right',
    });
  }
}
