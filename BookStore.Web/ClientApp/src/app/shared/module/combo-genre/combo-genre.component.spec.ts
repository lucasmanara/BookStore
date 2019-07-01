import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboGenreComponent } from './combo-genre.component';

describe('ComboGenreComponent', () => {
  let component: ComboGenreComponent;
  let fixture: ComponentFixture<ComboGenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        FormsModule,
        HttpClientModule
      ],
      declarations: [ ComboGenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
