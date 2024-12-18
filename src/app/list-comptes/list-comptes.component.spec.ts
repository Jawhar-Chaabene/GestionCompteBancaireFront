import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComptesComponent } from './list-comptes.component';

describe('ListComptesComponent', () => {
  let component: ListComptesComponent;
  let fixture: ComponentFixture<ListComptesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListComptesComponent]
    });
    fixture = TestBed.createComponent(ListComptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
