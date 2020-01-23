import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MenuController, NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
  animations: [
    trigger('animation-top', [
      transition(':enter',
        [style({ transform: 'translateY(-12%)', opacity: 0 }),
        animate('154ms', style({ transform: 'translateY(0)', 'opacity': 1 }))]),
      transition(':leave',
        [style({ transform: 'translateY(0)', 'opacity': 1 }),
        animate('154ms', style({ transform: 'translateY(-12%)', 'opacity': 0 }))])
    ])
  ]
})
export class ClientePage implements OnInit {

  constructor(private menu:MenuController,
    private navCtrl: NavController,) { }

  ngOnInit() {
  }

  open_menu () {
    this.menu.enable (true, 'first');
    this.menu.open ('first');
  }

}
