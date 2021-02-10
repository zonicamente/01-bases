import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { SettingComponent } from './component/shared/setting/setting.component';
import { MenuComponent } from './component/shared/menu/menu.component';
import { VentasComponent } from './content/reporte/ventas/ventas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    SettingComponent,
    MenuComponent,
    VentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
