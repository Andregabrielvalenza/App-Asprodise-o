import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InversionesSolicitudesPage } from './inversiones-solicitudes.page';

describe('InversionesSolicitudesPage', () => {
  let component: InversionesSolicitudesPage;
  let fixture: ComponentFixture<InversionesSolicitudesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InversionesSolicitudesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InversionesSolicitudesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
