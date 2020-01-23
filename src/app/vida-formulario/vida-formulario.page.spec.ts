import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VidaFormularioPage } from './vida-formulario.page';

describe('VidaFormularioPage', () => {
  let component: VidaFormularioPage;
  let fixture: ComponentFixture<VidaFormularioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VidaFormularioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VidaFormularioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
