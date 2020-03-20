import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateDocumentComponent } from './update-document.component';


const routes: Routes = [{
  path:'',
  component:UpdateDocumentComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateDocumentRoutingModule { }
