import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-inversiones-solicitudes',
  templateUrl: './inversiones-solicitudes.page.html',
  styleUrls: ['./inversiones-solicitudes.page.scss'],
})
export class InversionesSolicitudesPage implements OnInit {

  constructor(private menu:MenuController,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  open_menu () {
    this.menu.enable (true, 'first');
    this.menu.open ('first');
  }

}
