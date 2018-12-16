import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnDestroy {

  mobileQuery: MediaQueryList;
  isloggedin = true;

  problem1active = true;
  problem2active = true;
  problem3active = true;
  problem4active = true;
  problem5active = true;
  problem6active = true;


    private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  receiveProblem1($event) {
    this.problem1active = $event;
  }
  // receiveProblem2($event) {
  //   this.problem2active = $event;
  // }
  // receiveProblem3($event) {
  //   this.problem3active = $event;
  // }
  // receiveProblem4($event) {
  //   this.problem4active = $event;
  // }
  // receiveProblem5($event) {
  //   this.problem5active = $event;
  // }
  // receiveProblem6($event) {
  //   this.problem6active = $event;
  // }
  loginMessage($event) {
    this.isloggedin = $event;
  }
}
