import { Injectable } from '@angular/core';

@Injectable()
export class Image {
    id: number;
    image: FormData;

    constructor(id: number, image: FormData) {
        this.id = id;
        this.image = this.image;
    }
}
