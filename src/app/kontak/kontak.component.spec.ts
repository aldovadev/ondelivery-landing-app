import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontakComponent } from './kontak.component';

describe('KontakComponent', () => {
  let component: KontakComponent;
  let fixture: ComponentFixture<KontakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KontakComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KontakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
