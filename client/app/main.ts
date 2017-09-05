import { platformBrowserDynamic} from '@angular/platform-browser-dynamic'; //  Responsavel por adicionar no main.ts o modulo principal
import { AppModule } from './app.module';  // import do modulo principal 

const platform = platformBrowserDynamic(); // instancia de platformBrowserDynamic

platform.bootstrapModule(AppModule); // definindo o bootstrap da aplicação