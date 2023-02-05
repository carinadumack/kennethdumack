import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WorkgroupComponent} from "./pages/workgroup/workgroup.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'workgroup', component: WorkgroupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
