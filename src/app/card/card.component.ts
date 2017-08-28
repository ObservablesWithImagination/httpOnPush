import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { CardHero } from './card.entity';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'hero-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
    @Input()
    hero: CardHero;
}