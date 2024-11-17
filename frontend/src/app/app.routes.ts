import { Routes } from '@angular/router';
import { ConnectionComponent } from './components/connection/connection.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { UserComponent } from './components/user/user.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

export const routes: Routes = [
    {path: 'connection', component: ConnectionComponent},
    {path: 'products', component: ProductComponent},
    {path: 'users', component: UserComponent},
    {path: 'user-profile', component: UserProfileComponent},
    {path: '', component: HomeComponent},
];
