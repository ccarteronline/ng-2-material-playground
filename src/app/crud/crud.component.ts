import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }   from 'rxjs/Rx';
import { TestServiceService }    from '../services/test-service.service';
import { TestStructure }    from '../services/test-structure';
import { TestPostStructure } from '../services/test-post-structure';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  testApiStructure: Observable<TestStructure>;
  testPostStucture: Observable<TestPostStructure>;

  testId = '';
  testName = '';
  testItem = '';
  postCrudItems = ''
  postName = '';
  postMessage = '';
  GETerrorMessage = '';
  POSTerrorMessage = '';
  testPostStructure = {
      message: 'My message'
  }

  constructor(
      private testServiceService: TestServiceService
  ) {}

  ngOnInit() {
      console.log('loaded crud component');
  }

  getFromApi(e):void {
      console.log('event: ', e);
      this.testServiceService.getJsonFromApi()
          .subscribe(
              testApiStructure => this.testApiStructure = testApiStructure,
              error => this.GETerrorMessage = ('ERROR: ' + error),
              () => this.populateCrudItems(this.testApiStructure)
          );
  }

  sendToApi(e):void {
      console.log('event: ', e);
      this.testServiceService.postToApi(this.testPostStructure)
          .subscribe(
              testPostStucture => this.testPostStucture = testPostStucture,
              error => this.POSTerrorMessage = ('ERROR: ' + error),
              () => this.populatePostItems(this.testPostStucture)
          );
  }

  populateCrudItems(crud): void {
      this.testId = crud.id;
      this.testName = crud.name;
      this.testItem = crud.item;
  }

  populatePostItems(items): void {
      this.postName = items.name;
      this.postMessage = items.message;
  }

}
