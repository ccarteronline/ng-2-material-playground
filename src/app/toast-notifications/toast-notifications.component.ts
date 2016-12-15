import { Component, OnInit } from '@angular/core';

declare var $: any
declare var Materialize: any

@Component({
  selector: 'app-toast-notifications',
  templateUrl: './toast-notifications.component.html',
  styleUrls: ['./toast-notifications.component.css']
})
export class ToastNotificationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  bringUpToast(): void {
      console.log('bringing up toast');
      var toastContent = $('<span>I am toast content</span>');
      Materialize.toast(toastContent, 5000);
  }

}
