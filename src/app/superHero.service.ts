import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { HashUserService, AuthUser } from './hash-user.service';
import { CardHero } from './card/card.entity';

@Injectable()
export class SuperHeroService {
    constructor(private _http: Http, private _hashUser: HashUserService) {}

    getHeroes(name: string): Observable<CardHero[]> {
        let url = 'v1/public/characters?limit=5&offset=0';
        const authUser: AuthUser = this._hashUser.getAuthUser();

        url = url + `&ts=${authUser.ts}&apikey=${authUser.apiKey}&hash=${authUser.hash}`;
        url = url + `&nameStartsWith=${name}`;

        return this._http.get(url)
        .map(response => {
            console.log(response);
            return response.json().data.results.map( hero => {
                const img = `${hero.thumbnail.path}.${hero.thumbnail.extension}`;
                return {
                    id: hero.id,
                    name: hero.name,
                    description: (hero.description) ? hero.description: 'Info not aviable',
                    img: img
                };
            });
        });
    }
}
