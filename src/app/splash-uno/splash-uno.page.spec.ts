import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SplashUnoPage } from './splash-uno.page';

describe('SplashUnoPage', () => {
  let component: SplashUnoPage;
  let fixture: ComponentFixture<SplashUnoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplashUnoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SplashUnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
