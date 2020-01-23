import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-inversiones-formulario',
  templateUrl: './inversiones-formulario.page.html',
  styleUrls: ['./inversiones-formulario.page.scss'],
})
export class InversionesFormularioPage implements OnInit {

  constructor(private menu:MenuController,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  open_menu () {
    this.menu.enable (true, 'first');
    this.menu.open ('first');
  }

}
