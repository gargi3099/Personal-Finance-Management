import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberChildComponent } from './member-child.component';

describe('MemberChildComponent', () => {
  let component: MemberChildComponent;
  let fixture: ComponentFixture<MemberChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
