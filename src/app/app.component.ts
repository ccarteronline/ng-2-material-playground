import { Component, trigger, state, animate, transition, style } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }   from 'rxjs/Rx';
import { TestServiceService }    from './services/test-service.service';
import { TestStructure }    from './services/test-structure';
declare var $: any
declare var Materialize: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TestServiceService]
})
export class AppComponent {
    testApiStructure: Observable<TestStructure>;
    title = 'Title of Web app';

    constructor(
        private testServiceService: TestServiceService
    ) {}

    ngOnInit() {
        console.log('loaded component');
    }

    ngAfterViewInit() {
        console.log('after view init');
    }
    getFromApi(e):void {
        console.log('event: ', e);
        this.testServiceService.getJsonFromApi()
            .subscribe(
                testApiStructure => this.testApiStructure = testApiStructure,
                error => console.error('Error: ' + error),
                () => console.log(this.testApiStructure)
            );
    }

    openSideNav():void {
        $(".button-collapse").sideNav();
    }
}
