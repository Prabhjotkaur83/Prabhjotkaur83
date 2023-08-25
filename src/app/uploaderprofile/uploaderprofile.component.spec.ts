import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaderprofileComponent } from './uploaderprofile.component';

describe('UploaderprofileComponent', () => {
  let component: UploaderprofileComponent;
  let fixture: ComponentFixture<UploaderprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploaderprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploaderprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
