import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  constructor(private menu:MenuController,
    private navCtrl: NavController,) { }
  eventSource = [];

  calendar = {
    mode: 'month',
    currentDate: new Date()
  }

  ngOnInit() {
  }

  onEventSelected(){

  }
  onViewTitleChanged (){

  }
  onTimeSelected (){

  }

  open_menu () {
    this.menu.enable (true, 'first');
    this.menu.open ('first');
  }

}
