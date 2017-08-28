import { Component, ChangeDetectionStrategy } from '@angular/core';
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
  listHeros: CardHero[];
  loading = false;

  constructor (private _superHeroService: SuperHeroService) {}

  lookforHero () {
    this.loading = true;
    this._superHeroService.getHeroes(this.heroName)
    .subscribe(
      data => {
        this.listHeros = data;
        this.loading = false;
      },
      err => { console.error ('Error: ', err); }
    );
  }
}
