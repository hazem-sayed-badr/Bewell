import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbheaderComponent } from './dbheader.component';

describe('DbheaderComponent', () => {
  let component: DbheaderComponent;
  let fixture: ComponentFixture<DbheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DbheaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
