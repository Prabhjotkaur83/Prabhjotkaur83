import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmynotesComponent } from './viewmynotes.component';

describe('ViewmynotesComponent', () => {
  let component: ViewmynotesComponent;
  let fixture: ComponentFixture<ViewmynotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmynotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewmynotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
