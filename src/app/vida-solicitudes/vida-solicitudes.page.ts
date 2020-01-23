import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-vida-solicitudes',
  templateUrl: './vida-solicitudes.page.html',
  styleUrls: ['./vida-solicitudes.page.scss'],
})
export class VidaSolicitudesPage implements OnInit {

  constructor(private menu:MenuController,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  open_menu () {
    this.menu.enable (true, 'first');
    this.menu.open ('first');
  }

}
