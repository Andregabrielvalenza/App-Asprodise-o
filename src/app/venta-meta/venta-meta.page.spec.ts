import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VentaMetaPage } from './venta-meta.page';

describe('VentaMetaPage', () => {
  let component: VentaMetaPage;
  let fixture: ComponentFixture<VentaMetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentaMetaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VentaMetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
