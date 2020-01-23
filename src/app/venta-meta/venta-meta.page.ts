import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-venta-meta',
  templateUrl: './venta-meta.page.html',
  styleUrls: ['./venta-meta.page.scss'],
})
export class VentaMetaPage implements OnInit {

  constructor(private menu:MenuController,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  open_menu () {
    this.menu.enable (true, 'first');
    this.menu.open ('first');
  }

}
