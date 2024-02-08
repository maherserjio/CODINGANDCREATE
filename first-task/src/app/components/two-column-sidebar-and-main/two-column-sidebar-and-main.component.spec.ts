import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnSidebarAndMainComponent } from './two-column-sidebar-and-main.component';

describe('TwoColumnSidebarAndMainComponent', () => {
  let component: TwoColumnSidebarAndMainComponent;
  let fixture: ComponentFixture<TwoColumnSidebarAndMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwoColumnSidebarAndMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwoColumnSidebarAndMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
