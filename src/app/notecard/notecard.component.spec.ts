import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotecardComponent } from './notecard.component';

describe('NotecardComponent', () => {
  let component: NotecardComponent;
  let fixture: ComponentFixture<NotecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotecardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
