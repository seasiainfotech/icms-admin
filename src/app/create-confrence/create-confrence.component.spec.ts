import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConfrenceComponent } from './create-confrence.component';

describe('CreateConfrenceComponent', () => {
  let component: CreateConfrenceComponent;
  let fixture: ComponentFixture<CreateConfrenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateConfrenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateConfrenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
