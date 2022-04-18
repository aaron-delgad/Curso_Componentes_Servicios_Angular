import { Component, OnInit } from '@angular/core';

import {StoreService} from '../../services/store.service';

@Component({
  selector: 'servicios-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeMenu = false;
  counter = 0;

  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(produ => {this.counter = produ.length;});
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

}
