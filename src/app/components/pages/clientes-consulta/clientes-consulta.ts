import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ClienteService } from '../../../services/cliente-service';
import { Cliente } from '../../../models/cliente';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-clientes-consulta',
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  templateUrl: './clientes-consulta.html',
  styleUrl: './clientes-consulta.css',
})
export class ClientesConsulta implements OnInit {

  //Atributo para injeção de dependência da classe de serviço
  private clienteService = inject(ClienteService);

  //Número da paginação
  p = signal<number>(1);

  //Atributo para armazenar a listagem de clientes obtidos
  clientes = signal<Cliente[]>([]);

  //Função reservada executada quando a página abre
  ngOnInit(): void {
    this.clienteService.obterTodos()
      .subscribe((data) => {
        this.clientes.set(data);
      });
  }

}
