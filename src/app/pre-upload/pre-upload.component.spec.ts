import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreUploadComponent } from './pre-upload.component';

describe('PreUploadComponent', () => {
  let component: PreUploadComponent;
  let fixture: ComponentFixture<PreUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
