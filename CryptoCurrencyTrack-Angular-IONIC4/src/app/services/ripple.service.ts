import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RippleService {

  private ROOT_URL = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/XRP';

  constructor(private http: HttpClient) { }

  getRipplePrice(fiat: string) {
    return this.http.get<Crypto>(`${this.ROOT_URL}${fiat}`);
}
}
