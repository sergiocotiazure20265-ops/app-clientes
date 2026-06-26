/*
    Modelo de dados para cliente
*/
export interface Cliente {
    id? : number; //identificador do cliente
    nome : string; //nome do cliente
    email : string; ///email do cliente
    cpf : string; //cpf do cliente
    dataHoraCadastro? : string; //data e hora do cadastro
}
