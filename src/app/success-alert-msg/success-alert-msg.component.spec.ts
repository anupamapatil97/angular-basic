import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessAlertMsgComponent } from './success-alert-msg.component';

describe('SuccessAlertMsgComponent', () => {
  let component: SuccessAlertMsgComponent;
  let fixture: ComponentFixture<SuccessAlertMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessAlertMsgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessAlertMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
