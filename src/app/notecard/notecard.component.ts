import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { EllipsisDirective } from 'ngx-ellipsis';

@Component({
  selector: 'app-notecard',
  templateUrl: './notecard.component.html',
  styleUrls: ['./notecard.component.scss']
})
export class NotecardComponent implements OnInit{
  @Input() title!: string;
  @Input() body!: string;

  @ViewChild(EllipsisDirective) ellipsisRef!: EllipsisDirective;

  showMore = false;

  showMoreButton = false;

  hideLessButton = true;
  
  constructor(private cd: ChangeDetectorRef){}

  ngOnInit(): void{
    this.hideLessButton = false;
  }

  truncated(index: number) {
    this.showMoreButton = index === null;
  }

  showComplete() {
    if (this.ellipsisRef) {
      this.showMore = !this.showMore;
      this.cd.detectChanges();
      this.ellipsisRef.applyEllipsis();
    }

    this.hideLessButton = this.showMore;
  }
}
