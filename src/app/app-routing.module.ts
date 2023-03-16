import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PartnerComponent } from './partner/partner.component';
import { KontakComponent } from './kontak/kontak.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
{path:'home', component: HomeComponent},
{path:'about', component: AboutComponent},
{path:'partner', component: PartnerComponent},
{path:'kontak', component: KontakComponent},
{path:'privacy-policy', component: PrivacyPolicyComponent},
{path:'navbar', component: NavbarComponent},
{path:'footer', component: FooterComponent},
{path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
