import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'dashboard-login-form-group',
  templateUrl: 'dashboard-login-form-group.component.html',
  styleUrls: ['dashboard-login-form-group.component.css'],
})
export class DashboardLoginFormGroup {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
