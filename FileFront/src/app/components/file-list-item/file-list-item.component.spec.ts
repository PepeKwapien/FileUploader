import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileListItemComponent } from './file-list-item.component';

describe('FileListItemComponent', () => {
  let component: FileListItemComponent;
  let fixture: ComponentFixture<FileListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
