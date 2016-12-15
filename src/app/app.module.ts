import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { AnimationObjectComponent } from './animation-object/animation-object.component';
import { CrudComponent } from './crud/crud.component';
import { FooterComponent } from './footer/footer.component';
import { ModalsComponent } from './modals/modals.component';
import { ToastNotificationsComponent } from './toast-notifications/toast-notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TwoWayBindingComponent,
    AnimationObjectComponent,
    CrudComponent,
    FooterComponent,
    ModalsComponent,
    ToastNotificationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
