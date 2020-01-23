import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VentajaDosPage } from './ventaja-dos.page';

describe('VentajaDosPage', () => {
  let component: VentajaDosPage;
  let fixture: ComponentFixture<VentajaDosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentajaDosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VentajaDosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
