import { Component, OnInit } from '@angular/core';
import { PropertyDetailService } from '../shared/property-detail.service';
import { PropertyDetail} from '../shared/property-detail.model';
import { NgForm } from '@angular/forms';
import { PropertyDetailFromComponent } from './property-detail-from/property-detail-from.component';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  //  isEditActive:boolean = false;
  //constructor(public service:PropertyDetailService, public formComponent:PropertyDetailFromComponent , private toastr:ToastrService ) { }
  constructor(public service:PropertyDetailService ) { }
  ngOnInit(): void {
    this.service.refreshList();//initialize the list
  }
  populateForm(seletedRow:PropertyDetail){
    this.service.formData = Object.assign({},seletedRow) ;//this object assign is used for avoiding to change the row at the same time the form does
  }
  createForm(){
    this.service.formData = new PropertyDetail();
  //  this.isEditActive = false;
  }

  
}
