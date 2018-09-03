import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoListComponent } from './produto-list.component';

describe('ProdutoListComponent', () => {
  let component: ProdutoListComponent;
  let fixture: ComponentFixture<ProdutoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
