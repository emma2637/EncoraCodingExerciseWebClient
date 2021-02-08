import { Component, OnInit } from '@angular/core';
import { PropertyDetailService } from 'src/app/shared/property-detail.service';
import {NgForm} from "@angular/forms";
import { PropertyDetail } from 'src/app/shared/property-detail.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-property-detail-from',
  templateUrl: './property-detail-from.component.html',
  styles: [
  ]
})
export class PropertyDetailFromComponent implements OnInit {

  //dependency injection
  constructor(public service:PropertyDetailService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
   this.updateRecord(form);
  }

  updateRecord(form:NgForm){
  this.service.putPropertyDetail().subscribe(
    res=>{
      this.resetForm(form)
      this.service.refreshList()
      this.toastr.success('Updated successfully','Property Detail')
     },
    err => {console.error(err);}
    );

  }
  
  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new PropertyDetail();
  }
}
