import { Component, OnInit } from '@angular/core';
import { PropertyDetailService } from '../shared/property-detail.service';
import { PropertyDetail} from '../shared/property-detail.model';
@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  constructor(public service:PropertyDetailService
  ) { }

  ngOnInit(): void {
    this.service.refreshList();//initialize the list
  }
  populateForm(seletedRow:PropertyDetail){
    this.service.formData = Object.assign({},seletedRow) ;//this object assign is used for avoiding to change the row at the same time the form does
  }

  onSave(id:number){
    
  }
}
