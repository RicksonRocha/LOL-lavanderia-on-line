import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/layouts/auth-layout/services/login.service';
import { User } from 'src/app/shared';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  permission?: string[];
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/initial-client',
    title: 'Pedidos Abertos - Cliente',
    icon: 'ni-tv-2 text-primary',
    class: '',
    permission: ['administrador', 'cliente'],
  },
  {
    path: '/client',
    title: 'Pedidos',
    icon: 'ni-tv-2 text-primary',
    class: '',
    permission: ['administrador', 'cliente'],
  },
  {
    path: '/dashboard',
    title: 'Realizar Pedido',
    icon: 'fa fa-shopping-cart text-green',
    class: '',
    permission: ['administrador', 'cliente'],
  },
  {
    path: '/purchase',
    title: 'Consultar Pedido',
    icon: 'ni ni-shop text-red',
    class: '',
    permission: ['administrador', 'cliente'],
  },
  {
    path: '/initial-employee',
    title: 'Pedidos Abertos - Funcionário',
    icon: 'ni-tv-2 text-primary',
    class: '',
    permission: ['administrador', 'funcionário'],
  },
  {
    path: '/admin',
    title: 'Pedidos',
    icon: 'ni-tv-2 text-primary',
    class: '',
    permission: ['administrador', 'funcionário'],
  },
  {
    path: '/roupas',
    title: 'Roupas',
    icon: 'ni ni-shop text-red',
    class: '',
    permission: ['administrador', 'funcionário'],
  },
  {
    path: '/funcionarios',
    title: 'Funcionários',
    icon: 'fa fa-shopping-cart text-green',
    class: '',
    permission: ['administrador', 'funcionário'],
  },
  {
    path: '/relatorios',
    title: 'Relatórios',
    icon: 'ni-tv-2 text-primary',
    class: '',
    permission: ['administrador'],
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => {
      if (menuItem?.permission?.includes(this.usuarioLogado.profile)) {
        return menuItem;
      }
    });
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }

  get usuarioLogado(): User | null {
    return this.loginService.userLogged;
  }
}
