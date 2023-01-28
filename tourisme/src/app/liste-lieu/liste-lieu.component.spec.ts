import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeLieuComponent } from './liste-lieu.component';

describe('ListeLieuComponent', () => {
  let component: ListeLieuComponent;
  let fixture: ComponentFixture<ListeLieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeLieuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeLieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
