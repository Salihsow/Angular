import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaadElGhamidiComponent } from './saad-el-ghamidi.component';

describe('SaadElGhamidiComponent', () => {
  let component: SaadElGhamidiComponent;
  let fixture: ComponentFixture<SaadElGhamidiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaadElGhamidiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaadElGhamidiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
