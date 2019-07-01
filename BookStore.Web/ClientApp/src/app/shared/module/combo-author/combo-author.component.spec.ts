import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboAuthorComponent } from './combo-author.component';

describe('ComboAuthorComponent', () => {
  let component: ComboAuthorComponent;
  let fixture: ComponentFixture<ComboAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        FormsModule,
        HttpClientModule
      ],
      declarations: [ ComboAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
