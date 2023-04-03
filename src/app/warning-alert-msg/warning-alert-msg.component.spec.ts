import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningAlertMsgComponent } from './warning-alert-msg.component';

describe('WarningAlertMsgComponent', () => {
  let component: WarningAlertMsgComponent;
  let fixture: ComponentFixture<WarningAlertMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarningAlertMsgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarningAlertMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
