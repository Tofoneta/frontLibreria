import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSucursalComponent } from './add-sucursal.component';

describe('AddSucursalComponent', () => {
  let component: AddSucursalComponent;
  let fixture: ComponentFixture<AddSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSucursalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/*
function agregarCampo(): void {
  const items = document.getElementById("items");
  const nuevoItem = document.createElement("input");
  nuevoItem.type = "text";
  nuevoItem.name = `item${items.children.length + 1}`;
  items.appendChild(nuevoItem);
  items.appendChild(document.createElement("br"));
}
*/