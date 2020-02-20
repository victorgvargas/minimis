import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GetServiceService } from '../../services/get-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-search',
  templateUrl: './modal-search.component.html',
  styleUrls: ['./modal-search.component.css']
})
export class ModalSearchComponent implements OnInit {
  form : FormGroup = this.formBuilder.group({city : [null, Validators.required]});

  constructor(public dialogRef: MatDialogRef<ModalSearchComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private getData : GetServiceService,
              private formBuilder : FormBuilder) { }

  ngOnInit() {
    console.log(this.data);
  }

  selectCity(){
    if (this.form.valid) {
      if (this.data.indexOf(this.form.value.city) != -1) {
        alert("Not possible to retrieve data from the same city");
        return;
      }  
      this.getData.onGetData(this.form.value.city).subscribe(
        (res) => {
        this.dialogRef.close(res);
        },
        (err) => {
          console.log(err);
          alert('Error retrieving city');
        });
    }
    else {
      alert('City name is not valid!');
    }
  }

}
