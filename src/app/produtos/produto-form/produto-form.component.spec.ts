import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoFormComponent } from './produto-form.component';

describe('ProdutoFormComponent', () => {
  let component: ProdutoFormComponent;
  let fixture: ComponentFixture<ProdutoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
