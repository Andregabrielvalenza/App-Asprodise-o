import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaludFormularioPage } from './salud-formulario.page';

describe('SaludFormularioPage', () => {
  let component: SaludFormularioPage;
  let fixture: ComponentFixture<SaludFormularioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaludFormularioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaludFormularioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
