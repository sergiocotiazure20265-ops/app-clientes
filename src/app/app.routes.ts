import { Routes } from '@angular/router';
import { ClientesCadastro } from './components/pages/clientes-cadastro/clientes-cadastro';
import { ClientesConsulta } from './components/pages/clientes-consulta/clientes-consulta';
import { ClientesEdicao } from './components/pages/clientes-edicao/clientes-edicao';
import { ClientesDashboard } from './components/pages/clientes-dashboard/clientes-dashboard';

export const routes: Routes = [
    {
        path: "cadastrar-cliente", component: ClientesCadastro
    },
    {
        path: "consultar-clientes", component: ClientesConsulta
    },
    {
        path: "editar-cliente", component: ClientesEdicao
    },
    {
        path: "dashboard", component: ClientesDashboard
    },
    {
        /* Mapeamento da rota inicial do projeto */
        path: "", pathMatch: "full", redirectTo: "/dashboard"
    }
];
