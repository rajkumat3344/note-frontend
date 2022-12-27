import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodedetailsComponent } from './nodedetails.component';

describe('NodedetailsComponent', () => {
  let component: NodedetailsComponent;
  let fixture: ComponentFixture<NodedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
