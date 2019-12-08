import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  maLopHoc: string;
}
@Component({
  selector: 'app-join-class',
  templateUrl: './join-class.component.html',
  styleUrls: ['./join-class.component.css']
})
export class JoinClassComponent implements OnInit {
  maLopHoc:string;

  constructor(public dialog:MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(JoinClassDialog, {
      width: '650px',
      height:'500px',
      data: {name: this.maLopHoc}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.maLopHoc = result;
    });
  }
  ngOnInit() {
  }

}
export class JoinClassDialog{
  constructor(
    public dialogRef: MatDialogRef<JoinClassDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}