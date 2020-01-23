import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-agregar-editar-evento',
  templateUrl: './agregar-editar-evento.page.html',
  styleUrls: ['./agregar-editar-evento.page.scss'],
})
export class AgregarEditarEventoPage implements OnInit {

  constructor(private menu:MenuController,
    private navCtrl: NavController,) { }

  ngOnInit() {
  }

  open_menu () {
    this.menu.enable (true, 'first');
    this.menu.open ('first');
  }

}
