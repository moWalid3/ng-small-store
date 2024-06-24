import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { provideHttpClient, withInterceptors} from '@angular/common/http';
import { baseUrlInterceptor } from './interceptors/base-url.interceptor';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    NotfoundComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [
    provideHttpClient(withInterceptors([baseUrlInterceptor])),
  ],
  exports: [NavbarComponent, FooterComponent, RouterModule, FormsModule],
})
export class SharedModule {}
