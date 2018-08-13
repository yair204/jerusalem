import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
providedIn: 'root'
})
export class GameService {

  uri: String = 'http://localhost:4000/games';

  constructor(private http: HttpClient) { }

  addGame(name, phone, people) {
    const obj = {
    name: name,
    phone: phone,
    people: people
    };
    this
      .http
      .post(`${this.uri}/add`, obj)
      .subscribe(res =>
        console.log('Done')
      );
  }


	getGames() {
			return this
				.http
				.get(`${this.uri}`);
		}



}
