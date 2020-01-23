import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-agregar-editar-meta',
  templateUrl: './agregar-editar-meta.page.html',
  styleUrls: ['./agregar-editar-meta.page.scss'],
})
export class AgregarEditarMetaPage implements OnInit {

  constructor(private menu:MenuController,
    private navCtrl: NavController,) { }

  ngOnInit() {
  }

  open_menu () {
    this.menu.enable (true, 'first');
    this.menu.open ('first');
  }

}
