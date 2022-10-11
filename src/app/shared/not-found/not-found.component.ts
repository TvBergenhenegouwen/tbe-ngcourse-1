import { ActivatedRoute, Data } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
    errorMessage: string;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        // this.errorMessage = this.route.snapshot.data['message'];
        this.route.data.subscribe(
            (data: Data) => {
                this.errorMessage = data['message'];
            },
        );
    }
}
