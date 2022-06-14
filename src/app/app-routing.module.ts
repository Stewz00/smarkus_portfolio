import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataProtectionComponent } from './pages/data-protection/data-protection/data-protection.component';
import { ImprintComponent } from './pages/imprint/imprint/imprint.component';


const routes: Routes = [
// home component:   { path: '', component:  },
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-protection', component: DataProtectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
