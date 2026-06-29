import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClienteService } from '../../../services/cliente-service';
import { Cliente } from '../../../models/cliente';

@Component({
  selector: 'app-clientes-cadastro',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './clientes-cadastro.html',
  styleUrl: './clientes-cadastro.css',
})
export class ClientesCadastro {

  //Injeção de dependência da classe de serviço
  private clienteService = inject(ClienteService);

  //Mensagem
  mensagem = signal<string>('');

  //Estrutura do formulário
  formCadastro = new FormGroup({
    nome : new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(150)]),
    email : new FormControl('', [Validators.required, Validators.email]),
    cpf : new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{11}$/)])
  });

  //Função para capturar o evento de submit do formulário
  cadastrarCliente() {
    
    //Criar um objeto cliente para enviar os dados para a API
    const cliente : Cliente = {
      nome : this.formCadastro.value.nome!,
      email : this.formCadastro.value.email!,
      cpf : this.formCadastro.value.cpf!,
      dataHoraCadastro : new Date().toISOString()
    }

    //Fazendo a criação do cliente
    this.clienteService.criar(cliente)
      .subscribe(() => {
        this.mensagem.set('Cliente cadastrado com sucesso');
        this.formCadastro.reset();
      });
  }

}
