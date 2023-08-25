import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmynotesComponent } from './editmynotes.component';

describe('EditmynotesComponent', () => {
  let component: EditmynotesComponent;
  let fixture: ComponentFixture<EditmynotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditmynotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditmynotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
