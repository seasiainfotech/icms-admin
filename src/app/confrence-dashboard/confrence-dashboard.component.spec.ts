import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfrenceDashboardComponent } from './confrence-dashboard.component';

describe('ConfrenceDashboardComponent', () => {
  let component: ConfrenceDashboardComponent;
  let fixture: ComponentFixture<ConfrenceDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfrenceDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfrenceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
