import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AdminComponent } from './pages/admin/admin.component';
import { RoupasComponent } from './pages/roupas/roupas.component';
import { FuncionariosComponent } from './pages/funcionarios/funcionarios.component';
import { RelatoriosComponent } from './pages/relatorios/relatorios.component';
import { ReceitaComponent } from './pages/receita/receita.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { InitialClientComponent } from './pages/initial-client/client.component';
import { InitialEmployeeComponent } from './pages/initial-employee/initial-employee.component';
import { FieisComponent } from './pages/fieis/fieis.component';
import { SharedModule } from './shared';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    AdminComponent,
    RoupasComponent,
    FuncionariosComponent,
    RelatoriosComponent,
    ReceitaComponent,
    ClientesComponent,
    FieisComponent,
    InitialClientComponent,
    InitialEmployeeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
