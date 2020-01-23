import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VidaListoPage } from './vida-listo.page';

describe('VidaListoPage', () => {
  let component: VidaListoPage;
  let fixture: ComponentFixture<VidaListoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VidaListoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VidaListoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
