import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-salud-solicitudes',
  templateUrl: './salud-solicitudes.page.html',
  styleUrls: ['./salud-solicitudes.page.scss'],
})
export class SaludSolicitudesPage implements OnInit {

  constructor(private menu:MenuController,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  open_menu () {
    this.menu.enable (true, 'first');
    this.menu.open ('first');
  }

}
