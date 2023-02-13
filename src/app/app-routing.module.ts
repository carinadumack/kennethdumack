import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WorkgroupComponent} from "./pages/workgroup/workgroup.component";
import {HomeComponent} from "./pages/home/home.component";
import {ProtistologyComponent} from "./pages/detail-protistology/protistology/protistology.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'workgroup', component: WorkgroupComponent},
  {path: 'protistology', component: ProtistologyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
