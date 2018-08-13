import { Component, OnInit } from '@angular/core';
import { Hotel } from './Hotel';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

	hotels: Hotel[];

 	constructor(private hotelService: HotelService) { }

  	ngOnInit() {
  		this.hotelService
      		.getHotels()
      		.subscribe((data: Hotel[]) => {
        		this.hotels = data;
        });
 	}
  //  deleteGame(id) {
  //    this.gameservice.deleteGame(id).subscribe(res => {
  //     console.log('Deleted');
  //   });
  //  }
}
