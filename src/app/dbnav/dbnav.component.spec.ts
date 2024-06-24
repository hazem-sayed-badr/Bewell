import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbnavComponent } from './dbnav.component';

describe('DbnavComponent', () => {
  let component: DbnavComponent;
  let fixture: ComponentFixture<DbnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DbnavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
