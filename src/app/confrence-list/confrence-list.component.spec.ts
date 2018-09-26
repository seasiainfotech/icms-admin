import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfrenceListComponent } from './confrence-list.component';

describe('ConfrenceListComponent', () => {
  let component: ConfrenceListComponent;
  let fixture: ComponentFixture<ConfrenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfrenceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfrenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
