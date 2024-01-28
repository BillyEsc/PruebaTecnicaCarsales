import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCharactersDialogComponent } from './list-characters-dialog.component';

describe('ListCharactersComponent', () => {
  let component: ListCharactersDialogComponent;
  let fixture: ComponentFixture<ListCharactersDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCharactersDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCharactersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
