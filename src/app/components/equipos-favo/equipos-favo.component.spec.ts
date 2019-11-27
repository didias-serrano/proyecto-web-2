import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposFavoComponent } from './equipos-favo.component';

describe('EquiposFavoComponent', () => {
  let component: EquiposFavoComponent;
  let fixture: ComponentFixture<EquiposFavoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquiposFavoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiposFavoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
