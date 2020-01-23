import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeguroVidaPage } from './seguro-vida.page';

describe('SeguroVidaPage', () => {
  let component: SeguroVidaPage;
  let fixture: ComponentFixture<SeguroVidaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguroVidaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeguroVidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
