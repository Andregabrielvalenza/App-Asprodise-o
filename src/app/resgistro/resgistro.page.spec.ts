import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResgistroPage } from './resgistro.page';

describe('ResgistroPage', () => {
  let component: ResgistroPage;
  let fixture: ComponentFixture<ResgistroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResgistroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResgistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
