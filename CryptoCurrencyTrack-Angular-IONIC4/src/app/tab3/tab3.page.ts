import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BitcoinService } from '../services/bitcoin.service';
import { EtherumService } from '../services/etherum.service';
import { LiteCoinService } from '../services/lite-coin.service';
import { RippleService } from '../services/ripple.service';
 
 

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  val = 1;
  fiat = 'USD';
  crypto = 'BTC';
  currency$: Observable<Crypto>;


  constructor(private bitcoinProv: BitcoinService,
    private etherum: EtherumService,
    private litecoin :LiteCoinService,
    private ripple :RippleService ) { }

  ngOnInit() {
     
    this.convert();
  }

  convert() {
    
    if (this.crypto === 'BTC') { this.currency$ = this.bitcoinProv.getBitoinPrice(this.fiat); }

    else if (this.crypto === 'ETH') { this.currency$ = this.etherum.getEtherumPrice(this.fiat); }

    else if (this.crypto === 'LTC') { this.currency$ = this.litecoin.getLiteCoinPrice(this.fiat);}
    
    else if  (this.crypto === 'XRP') { this.currency$ = this.ripple.getRipplePrice(this.fiat);}


    }


  }
