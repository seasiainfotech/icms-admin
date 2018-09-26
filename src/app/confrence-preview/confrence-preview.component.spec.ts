import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfrencePreviewComponent } from './confrence-preview.component';

describe('ConfrencePreviewComponent', () => {
  let component: ConfrencePreviewComponent;
  let fixture: ComponentFixture<ConfrencePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfrencePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfrencePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
