import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PorqueResgistrarPage } from './porque-resgistrar.page';

describe('PorqueResgistrarPage', () => {
  let component: PorqueResgistrarPage;
  let fixture: ComponentFixture<PorqueResgistrarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorqueResgistrarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PorqueResgistrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
