import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BitcoinService } from '../services/bitcoin.service';
import { EtherumService } from '../services/etherum.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  fiat = 'USD';
  ethereum$: Observable<Crypto>;

  constructor(private ethereum: EtherumService) {}

  ngOnInit() {
    this.getEthereumPrice();
  }

  getEthereumPrice() {
    this.ethereum$ = this.ethereum.getEtherumPrice(this.fiat);
  }
}
