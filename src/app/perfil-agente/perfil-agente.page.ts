import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-perfil-agente',
  templateUrl: './perfil-agente.page.html',
  styleUrls: ['./perfil-agente.page.scss'],
})
export class PerfilAgentePage implements OnInit {

  constructor(private menu:MenuController,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  open_menu () {
    this.menu.enable (true, 'first');
    this.menu.open ('first');
  }

}
