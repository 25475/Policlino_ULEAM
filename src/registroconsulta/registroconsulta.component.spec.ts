import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroconsultaComponent } from './registroconsulta.component';

describe('RegistroconsultaComponent', () => {
  let component: RegistroconsultaComponent;
  let fixture: ComponentFixture<RegistroconsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroconsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroconsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
