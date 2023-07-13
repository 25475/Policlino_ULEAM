import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarpacienteComponent } from './buscarpaciente.component';

describe('BuscarpacienteComponent', () => {
  let component: BuscarpacienteComponent;
  let fixture: ComponentFixture<BuscarpacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarpacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarpacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
