import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernotesComponent } from './usernotes.component';

describe('UsernotesComponent', () => {
  let component: UsernotesComponent;
  let fixture: ComponentFixture<UsernotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsernotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsernotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
