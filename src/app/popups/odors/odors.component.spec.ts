import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdorsComponent } from './odors.component';

describe('OdorsComponent', () => {
  let component: OdorsComponent;
  let fixture: ComponentFixture<OdorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OdorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
