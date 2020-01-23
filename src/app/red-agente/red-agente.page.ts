import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-red-agente',
  templateUrl: './red-agente.page.html',
  styleUrls: ['./red-agente.page.scss'],
})
export class RedAgentePage implements OnInit {

  constructor(private menu:MenuController,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  open_menu () {
    this.menu.enable (true, 'first');
    this.menu.open ('first');
  }

}
