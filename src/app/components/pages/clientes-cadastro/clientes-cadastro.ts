import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

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

  //Estrutura do formulário
  formCadastro = new FormGroup({
    nome : new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(150)]),
    email : new FormControl('', [Validators.required, Validators.email]),
    cpf : new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{11}$/)])
  });

  //Função para capturar o evento de submit do formulário
  cadastrarCliente() {
    console.log(this.formCadastro.value);
  }

}
