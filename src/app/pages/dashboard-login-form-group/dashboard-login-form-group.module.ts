import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { DashboardLoginFormGroup } from './dashboard-login-form-group.component'

const routes = [
  {
    path: '',
    component: DashboardLoginFormGroup,
  },
]

@NgModule({
  declarations: [DashboardLoginFormGroup],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [DashboardLoginFormGroup],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardLoginFormGroupModule {}
