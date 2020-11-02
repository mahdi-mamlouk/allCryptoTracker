import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { EtherumService } from '../services/etherum.service';
import { LiteCoinService } from '../services/lite-coin.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit {

  fiat = 'USD';
  liteCoin$: Observable<Crypto>;

  constructor(private liteCoin: LiteCoinService) {}

  ngOnInit() {
    this.getLiteCoinPrice();
  }

  getLiteCoinPrice() {
    this.liteCoin$ = this.liteCoin.getLiteCoinPrice(this.fiat);
  }
}
