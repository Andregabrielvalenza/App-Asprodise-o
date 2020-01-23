import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeguroSaludPage } from './seguro-salud.page';

describe('SeguroSaludPage', () => {
  let component: SeguroSaludPage;
  let fixture: ComponentFixture<SeguroSaludPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguroSaludPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeguroSaludPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
