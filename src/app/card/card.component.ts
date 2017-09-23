import {
    Component,
    Input,
    ChangeDetectionStrategy,
    Output,
    AfterViewInit,
    EventEmitter
} from '@angular/core';

import { CardHero } from './card.entity';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'hero-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements AfterViewInit {
    @Input()
    hero: CardHero;

    @Output()
    iFinished: EventEmitter<boolean> = new EventEmitter();

    ngAfterViewInit() {
        this.iFinished.emit(false);
    }
}