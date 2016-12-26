/*
 * tesla-stats.component.ts
 */

import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Stat } from '../../models/stat.interface';

@Component({
  selector: 'tesla-stats',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tesla-stats.component.html',
  styleUrls: ['./tesla-stats.component.scss']
})
export class TeslaStatsComponent implements OnInit {

  @Input() stats: Stat[];

  constructor() { }

  ngOnInit() {
  }

}
