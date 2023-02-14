import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WorkgroupComponent} from "./pages/workgroup/workgroup.component";
import {HomeComponent} from "./pages/home/home.component";
import {ProtistologyComponent} from "./pages/detail-protistology/protistology/protistology.component";
import {
  WastewaterTreatmentComponent
} from "./pages/detail-wastewater-treatment/wastewater-treatment/wastewater-treatment.component";
import {SoilBiologyComponent} from "./pages/detail-soil-biology/soil-biology/soil-biology.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'workgroup', component: WorkgroupComponent},
  {path: 'protistology', component: ProtistologyComponent},
  {path: 'wastewater-treatment', component: WastewaterTreatmentComponent},
  {path: 'soil-biology', component: SoilBiologyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
