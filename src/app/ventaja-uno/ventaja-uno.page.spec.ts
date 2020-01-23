import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VentajaUnoPage } from './ventaja-uno.page';

describe('VentajaUnoPage', () => {
  let component: VentajaUnoPage;
  let fixture: ComponentFixture<VentajaUnoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentajaUnoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VentajaUnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
