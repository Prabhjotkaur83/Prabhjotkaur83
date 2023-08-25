import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadNotesByadminComponent } from './upload-notes-byadmin.component';

describe('UploadNotesByadminComponent', () => {
  let component: UploadNotesByadminComponent;
  let fixture: ComponentFixture<UploadNotesByadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadNotesByadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadNotesByadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
