import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RedAgentePage } from './red-agente.page';

describe('RedAgentePage', () => {
  let component: RedAgentePage;
  let fixture: ComponentFixture<RedAgentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedAgentePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RedAgentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
