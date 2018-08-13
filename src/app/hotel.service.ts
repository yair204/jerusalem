import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
  })
export class HotelService {

  
  uri: String = 'http://localhost:4000/hotels';

  constructor(private http: HttpClient) { }

  addhotel(name2, phone2, people2) {
    const obj = {
    name2: name2,
    phone2: phone2,
    people2: people2
    };
    this
      .http
      .post(`${this.uri}/add`, obj)
      .subscribe(res =>
        console.log('Done')
      );
  }


	getHotels() {
			return this
				.http
				.get(`${this.uri}`);
		}


}
