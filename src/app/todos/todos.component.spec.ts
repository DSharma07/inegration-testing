import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';


describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      declarations: [ TodosComponent ],
      providers : [ TodoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  // ngOnInit() with observables
  it('should load todos from server', () => {
    let service = TestBed.get(TodoService);
    spyOn(service, 'getTodos').and.returnValue(Observable.from([ [1,2,3] ]));

    fixture.detectChanges();

    expect(component.todos.length).toBe(3);
  });

  // below line of codes to test the ngOnInit() with promises 

  // it('should load todos from server', fakeAsync(() => {
  //   let service = TestBed.get(TodoService);
  //   spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([ 1,2,3 ]));

  //   fixture.detectChanges();

  //   tick();
  //   expect(component.todos.length).toBe(3);
  // }));
});
