import { Component,OnInit,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RestaurantService}  from '../services/restaurant.service';
import {CustomersService}  from '../services/customers.service';
import {Restaurant} from '../models/restaurant.model'
import {Customer} from '../models/customers.model'
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';
import * as $ from 'jquery';
import { GameService } from '../game.service';



@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {
  
  public restaurants: Restaurant[];
  public restaurant:Restaurant;
  public Time:Date;
  public time:string;
  public showSelected: boolean;
  public angForm: FormGroup;
 

  
  public id: number;
  private sub: any;


  constructor(private activatedRoute: ActivatedRoute,private restService: RestaurantService,
    private gameservice: GameService, private fb: FormBuilder) {
   

    this.createForm();
    
      

    this.Time = new Date();
    this.showSelected = false;
    
   }

refresh(): void {
  alert("הזמנתך בוצעה בהצלחה!");
  window.location.reload();
}

createForm() {
  this.angForm = this.fb.group({
    name: [''],
    phone: [''],
    people:['']
 });
}


addGame(name, phone,people) {
    this.gameservice.addGame(name, phone,people);
}







 ShowButton() {
        this.showSelected = true;
    }
    HideButton() {
        this.showSelected = false;
    }
 


  ngOnInit(){

      this.sub = this.activatedRoute.params.subscribe(params => {
       this.id = +params['id']; });
this.restaurants = this.restService.getRestuarents();

if (this.Time.getHours() < 22 && this.Time.getHours() >10 ) {

     this.time = "פתוח ";
}
else{

   this.time = "המסעדה סגורה כעת";
}
 

  }


  

   }