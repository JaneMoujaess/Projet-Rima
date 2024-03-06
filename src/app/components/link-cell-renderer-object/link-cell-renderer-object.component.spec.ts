import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkCellRendererObjectComponent } from './link-cell-renderer-object.component';

describe('LinkCellRendererObjectComponent', () => {
  let component: LinkCellRendererObjectComponent;
  let fixture: ComponentFixture<LinkCellRendererObjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkCellRendererObjectComponent]
    });
    fixture = TestBed.createComponent(LinkCellRendererObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
