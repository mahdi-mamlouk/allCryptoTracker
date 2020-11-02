import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


import { LiteCoinService } from '../services/lite-coin.service';
import { RippleService } from '../services/ripple.service';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page implements OnInit {

  fiat = 'USD';
  ripple$: Observable<Crypto>;

  constructor(private ripple: RippleService) {}

  ngOnInit() {
    this.getRipplePrice();
  }

  getRipplePrice() {
    this.ripple$ = this.ripple.getRipplePrice(this.fiat);
  }
}
