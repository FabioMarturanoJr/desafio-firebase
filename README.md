# EduPulses-api

## Questão 1

- `firebase projects:create`

Obs: caso o primeiro projeto seja atravez do CLI, será nescessárioa aceitar os termos da google, a forma mais facil que achei foi acessar atravez da plataforma e criar um projeto paralelo assim aceitando os tesmos de uso, para os outros projetos esse opção ja vai estar salva.

- `firebase init hosting` selecionar o projeto criado para sincronizar com o local

Inicializar a bibliote das functions

- `firebase init functions`

Definir: 
 - linguagem 
 - uso de eslint
 - instalação das dependencias
 
 ---
## Questão 2 e 3

### Como rodar o projeto ? 

- `cd functions`

- `npm run serve`

### endpoints disponiveis 

`http://localhost:5001/edupulses-api-fabio/us-central1/app/fibonacci/5`

- numero ao final da url define a quantidade de numeros a retornar

`http://localhost:5001/edupulses-api-fabio/us-central1/app/fabioStreet`

- retorna dados da minha rua e municipio