/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RecordcardComponent } from './recordcard.component';

describe('RecordcardComponent', () => {
  let component: RecordcardComponent;
  let fixture: ComponentFixture<RecordcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
