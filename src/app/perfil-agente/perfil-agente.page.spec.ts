import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerfilAgentePage } from './perfil-agente.page';

describe('PerfilAgentePage', () => {
  let component: PerfilAgentePage;
  let fixture: ComponentFixture<PerfilAgentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilAgentePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilAgentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
