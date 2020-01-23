import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VidaSolicitudesPage } from './vida-solicitudes.page';

describe('VidaSolicitudesPage', () => {
  let component: VidaSolicitudesPage;
  let fixture: ComponentFixture<VidaSolicitudesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VidaSolicitudesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VidaSolicitudesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
