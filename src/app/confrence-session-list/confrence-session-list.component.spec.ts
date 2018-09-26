import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfrenceSessionListComponent } from './confrence-session-list.component';

describe('ConfrenceSessionListComponent', () => {
  let component: ConfrenceSessionListComponent;
  let fixture: ComponentFixture<ConfrenceSessionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfrenceSessionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfrenceSessionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
