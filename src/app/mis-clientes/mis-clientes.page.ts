import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-mis-clientes',
  templateUrl: './mis-clientes.page.html',
  styleUrls: ['./mis-clientes.page.scss'],
})
export class MisClientesPage implements OnInit {

  constructor(private menu:MenuController,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  open_menu () {
    this.menu.enable (true, 'first');
    this.menu.open ('first');
  }

}
