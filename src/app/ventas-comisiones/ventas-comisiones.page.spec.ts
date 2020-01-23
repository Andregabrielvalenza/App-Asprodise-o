import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VentasComisionesPage } from './ventas-comisiones.page';

describe('VentasComisionesPage', () => {
  let component: VentasComisionesPage;
  let fixture: ComponentFixture<VentasComisionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasComisionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VentasComisionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
