import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSucursalComponent } from './view-sucursal.component';

describe('ViewSucursalComponent', () => {
  let component: ViewSucursalComponent;
  let fixture: ComponentFixture<ViewSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSucursalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
