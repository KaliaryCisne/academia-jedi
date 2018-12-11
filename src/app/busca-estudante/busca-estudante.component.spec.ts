import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaEstudanteComponent } from './busca-estudante.component';

describe('BuscaEstudanteComponent', () => {
  let component: BuscaEstudanteComponent;
  let fixture: ComponentFixture<BuscaEstudanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaEstudanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaEstudanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
