import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  @Input() breadcrumbs:Breadcrumb[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

export type Breadcrumb = {
  path:string,
  url:string,
  isMatchingRoute?: boolean
}