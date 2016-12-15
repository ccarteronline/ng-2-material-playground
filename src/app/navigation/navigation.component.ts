import { Component, OnInit, Input} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }   from 'rxjs/Rx';
import { TestServiceService }    from '../services/test-service.service';
import { TestStructure }    from '../services/test-structure';
declare var $: any

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers: [TestServiceService]
})

export class NavigationComponent implements OnInit {
    testApiStructure: Observable<TestStructure>;
    @Input() title: string;

    constructor(
        private testServiceService: TestServiceService
    ) {}

    ngOnInit() {
        console.log('loaded Nav');
    }

    clickHamburger(e): void {
        console.log(e);

        this.testServiceService.getJsonFromApi()
            .subscribe(
                testApiStructure => this.testApiStructure = testApiStructure,
                error => console.error('Error: ' + error),
                () => console.log(this.testApiStructure)
            );
    }

}
