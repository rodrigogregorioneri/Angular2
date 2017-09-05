import { NgModule } from '@angular/core'; // Dependencia ANGULAR 2
import { BrowserModule } from '@angular/platform-browser'; // Dependencia que ajuda a renderizar no browser 
import { AppComponent } from './app.component' // Componente criado na pasta app

/**
 * @NgModule 
 * 
 * imports são as importações e necessaria vir com BrowserModule pois ele que defini onde vai renderizar no caso browser 
 * mas poderia ser em um app mobile ionic então poderia ser outro
 * 
 * declarations são os components que fazem parte desse modulos podem ter mais de um por enquanto só o AppComponent
 * 
 * bootstrap é responsavel por definir o componente que vai botar ou seja iniciar a aplicação nesse caso é AppComponent
 */

@NgModule({
   imports: [ BrowserModule],
   declarations: [ AppComponent],
   bootstrap: [AppComponent]
})
export class AppModule{

}