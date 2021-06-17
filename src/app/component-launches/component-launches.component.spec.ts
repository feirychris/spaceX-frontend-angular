import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLaunchesComponent } from './component-launches.component';

describe('ComponentLaunchesComponent', () => {
  let component: ComponentLaunchesComponent;
  let fixture: ComponentFixture<ComponentLaunchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentLaunchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentLaunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
