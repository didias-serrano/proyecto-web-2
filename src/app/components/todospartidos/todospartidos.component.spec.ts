import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodospartidosComponent } from './todospartidos.component';

describe('TodospartidosComponent', () => {
  let component: TodospartidosComponent;
  let fixture: ComponentFixture<TodospartidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodospartidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodospartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
