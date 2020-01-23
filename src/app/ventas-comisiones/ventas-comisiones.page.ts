import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-ventas-comisiones',
  templateUrl: './ventas-comisiones.page.html',
  styleUrls: ['./ventas-comisiones.page.scss'],
})
export class VentasComisionesPage implements OnInit {

  constructor(private menu:MenuController,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  open_menu () {
    this.menu.enable (true, 'first');
    this.menu.open ('first');
  }

}
