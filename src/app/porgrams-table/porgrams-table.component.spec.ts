import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorgramsTableComponent } from './porgrams-table.component';

describe('PorgramsTableComponent', () => {
  let component: PorgramsTableComponent;
  let fixture: ComponentFixture<PorgramsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PorgramsTableComponent]
    });
    fixture = TestBed.createComponent(PorgramsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
