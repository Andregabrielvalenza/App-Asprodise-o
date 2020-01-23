import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VentasVentasPage } from './ventas-ventas.page';

describe('VentasVentasPage', () => {
  let component: VentasVentasPage;
  let fixture: ComponentFixture<VentasVentasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasVentasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VentasVentasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
