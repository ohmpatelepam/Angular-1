import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinuereadingComponent } from './continuereading.component';

describe('ContinuereadingComponent', () => {
  let component: ContinuereadingComponent;
  let fixture: ComponentFixture<ContinuereadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinuereadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinuereadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
