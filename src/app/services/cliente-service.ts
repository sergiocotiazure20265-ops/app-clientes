import { inject, Service } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente';

@Service()
export class ClienteService {

    //Atributo para armazenar o endereço da API
    private readonly apiUrl = environment.apiClientes;

    //Injeção de dependência do HttpClient
    private httpClient = inject(HttpClient);

    //Função para fazer uma chamada POST para a API
    //realizar o cadastro de um cliente
    criar(cliente: Cliente) {
        return this.httpClient.post(this.apiUrl, cliente);
    }

}
