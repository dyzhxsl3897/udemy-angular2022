import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogcompComponent } from './logcomp.component';

describe('LogcompComponent', () => {
  let component: LogcompComponent;
  let fixture: ComponentFixture<LogcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
