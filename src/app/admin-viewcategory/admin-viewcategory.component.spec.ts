import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewcategoryComponent } from './admin-viewcategory.component';

describe('AdminViewcategoryComponent', () => {
  let component: AdminViewcategoryComponent;
  let fixture: ComponentFixture<AdminViewcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewcategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
