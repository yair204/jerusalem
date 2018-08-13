import { Component, OnInit } from '@angular/core';
import { Hotel } from './Hotel';
import { HotelService } from '../hotel.service';



@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {


// public hotels:string[];

public price:number;

hotels: Hotel[];

constructor(private hotelService: HotelService) { }

ngOnInit(){

  // this.hotels = ["קינג דיויד" ,"מצודת דוד","וולדוף אסטוריה","ענבל"]
  this.price = Math.floor(2383*Math.random())

	this.hotelService
      		.getHotels()
      		.subscribe((data: Hotel[]) => {
        		this.hotels = data;
        });
}
  
}