import { Component, OnInit } from '@angular/core';

import { HotelService } from '../hotel.service';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-adminis',
  templateUrl: './adminis.component.html',
  styleUrls: ['./adminis.component.css']
})
export class AdminisComponent implements OnInit {
  

  public angForm2: FormGroup;
  constructor(private hotelservice: HotelService,private fb: FormBuilder) {
    
    this.createForm2();
   }


   createForm2() {
    this.angForm2 = this.fb.group({
      name2: [''],
      phone2: [''],
      people2:['']
   });
  }

  addHotel(name2, phone2,people2) {
    this.hotelservice.addhotel(name2, phone2,people2);
  }
  ngOnInit() {

    
  }

}
