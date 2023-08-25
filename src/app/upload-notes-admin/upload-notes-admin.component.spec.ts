import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadNotesAdminComponent } from './upload-notes-admin.component';

describe('UploadNotesAdminComponent', () => {
  let component: UploadNotesAdminComponent;
  let fixture: ComponentFixture<UploadNotesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadNotesAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadNotesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
