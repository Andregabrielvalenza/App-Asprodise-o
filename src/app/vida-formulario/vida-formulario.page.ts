import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-vida-formulario',
  templateUrl: './vida-formulario.page.html',
  styleUrls: ['./vida-formulario.page.scss'],
})
export class VidaFormularioPage implements OnInit {

  constructor(private menu:MenuController,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  open_menu () {
    this.menu.enable (true, 'first');
    this.menu.open ('first');
  }

}
