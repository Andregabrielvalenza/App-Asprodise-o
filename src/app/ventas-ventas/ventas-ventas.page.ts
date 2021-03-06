import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-ventas-ventas',
  templateUrl: './ventas-ventas.page.html',
  styleUrls: ['./ventas-ventas.page.scss'],
})
export class VentasVentasPage implements OnInit {

  constructor(private menu:MenuController,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  open_menu () {
    this.menu.enable (true, 'first');
    this.menu.open ('first');
  }

}
