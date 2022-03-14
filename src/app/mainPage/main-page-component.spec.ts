import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiTestComponent } from './main-page-component';

describe('ApiTestComponent', () => {
  let component: ApiTestComponent;
  let fixture: ComponentFixture<ApiTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
