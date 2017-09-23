import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { SuperHeroService } from './superHero.service';

import { Observable } from 'rxjs/Observable';

import { CardHero } from './card/card.entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  heroName = '';
  listHeros: Observable<CardHero[]>;
  loading = false;

  constructor (
    private _superHeroService: SuperHeroService,
    private _changeDetection: ChangeDetectorRef
  ) {}

  lookforHero () {
    this.loading = true;
    this.listHeros = this._superHeroService.getHeroes(this.heroName);
  }

  removeLoading(event) {
    if (this.loading) {
      this.loading = event;
      this._changeDetection.detectChanges();
    }
  }
}
