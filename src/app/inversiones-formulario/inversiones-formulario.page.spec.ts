import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InversionesFormularioPage } from './inversiones-formulario.page';

describe('InversionesFormularioPage', () => {
  let component: InversionesFormularioPage;
  let fixture: ComponentFixture<InversionesFormularioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InversionesFormularioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InversionesFormularioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
