import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonitemsComponent } from './jsonitems.component';

describe('JsonitemsComponent', () => {
  let component: JsonitemsComponent;
  let fixture: ComponentFixture<JsonitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
