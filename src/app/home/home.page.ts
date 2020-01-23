import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular'; 
import { NotificationsComponent } from '../notifications/notifications.component';
import { PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = {
    initialSlide: 1,
    slidesPerView: 2.3,
    pagination: false
  };
  constructor(private menu:MenuController,
              private navCtrl: NavController,
              public popoverController: PopoverController) {}

  open_menu () {
    this.menu.enable (true, 'first');
    this.menu.open ('first');
  }

  async notifications(ev: any) {
    const popover = await this.popoverController.create({
        component: NotificationsComponent,
        event: ev,
        animated: true,
        showBackdrop: true,
        translucent: true
    });
    return await popover.present();
}

}
