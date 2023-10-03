# Documentação do Projeto

Este é um projeto de exemplo que demonstra a estrutura de um aplicativo Node.js usando TypeScript. O aplicativo é uma API simples para gerenciar tarefas (tasks) com várias operações, como criar, listar, atualizar, excluir e marcar como favoritas.

## Estrutura do Projeto

O projeto está organizado nas seguintes pastas e arquivos:

- `src`: A pasta raiz do projeto.
  - `infra`: Contém a infraestrutura do aplicativo.
    - `http`: Configuração para lidar com solicitações HTTP.
      - `api`: Configuração da API.
      - `app.ts`: Configuração do servidor Express.
      - `server.ts`: Arquivo de entrada do servidor.
  - `controllers`: Controladores que lidam com as requisições HTTP.
    - `taskController`: Controladores relacionados às tarefas.
      - `createTaskController.ts`: Controlador para criar uma nova tarefa.
      - `deleteTaskController.ts`: Controlador para excluir uma tarefa.
      - `favoriteTaskController.ts`: Controlador para marcar/desmarcar uma tarefa como favorita.
      - `getAllTasksController.ts`: Controlador para obter todas as tarefas ou filtrar por título.
      - `getTaskByIdController.ts`: Controlador para obter uma tarefa por ID.
      - `updateColorTaskController.ts`: Controlador para atualizar a cor de uma tarefa.
      - `updateTaskController.ts`: Controlador para atualizar uma tarefa.
  - `routes`: Configuração das rotas da API.
  - `middlewares`: Middleware de autenticação.
    - `middleware.ts`: Middleware para autenticação de token.
  - `repositories`: Repositórios para acessar dados das tarefas.
    - `implementations`: Implementações dos repositórios.
      - `inMemory`: Repositório em memória para armazenar as tarefas.
        - `taskRepositoryInMemory.ts`: Implementação do repositório em memória.
  - `interfaces`: Interfaces para os repositórios.
    - `tasksRepository.ts`: Interface para os repositórios de tarefas.
  - `model`: Define o modelo de dados da tarefa.
    - `Task`: Classe que representa uma tarefa.
  - `useCases`: Casos de uso da aplicação.
    - `tasksUseCase`: Casos de uso relacionados às tarefas.
      - `createTask`: Caso de uso para criar uma tarefa.
        - `createTaskDTO.ts`: DTO para criação de tarefa.
        - `createTaskUseCase.ts`: Caso de uso para criar uma tarefa.
      - `deleteTask`: Caso de uso para excluir uma tarefa.
        - `deleteTaskUseCase.ts`: Caso de uso para excluir uma tarefa.
      - `favoriteTask`: Caso de uso para marcar/desmarcar uma tarefa como favorita.
        - `favoriteTaskUseCase.ts`: Caso de uso para marcar/desmarcar uma tarefa como favorita.
      - `getAllTasks`: Caso de uso para listar todas as tarefas ou filtrar por título.
        - `getAllTasksUseCase.ts`: Caso de uso para listar todas as tarefas ou filtrar por título.
      - `findByIdTask`: Caso de uso para obter uma tarefa por ID.
        - `findByIdTaskUseCase.ts`: Caso de uso para obter uma tarefa por ID.
      - `updateColorTask`: Caso de uso para atualizar a cor de uma tarefa.
        - `updateColorTaskUseCase.ts`: Caso de uso para atualizar a cor de uma tarefa.
      - `updateTask`: Caso de uso para atualizar uma tarefa.
        - `updateTaskUseCase.ts`: Caso de uso para atualizar uma tarefa.
  - `index.ts`: Arquivo de entrada do aplicativo que configura e inicia o servidor.

## Configurações

O projeto utiliza o framework Express.js para criar a API.

Os dados das tarefas são armazenados em memória com a implementação `taskRepositoryInMemory`.

A autenticação é feita por meio de tokens, usando o middleware `AuthMiddleware` para verificar a presença do token e extrair o ID do usuário.

## Execução

Para executar o projeto, siga estas etapas:

1. Certifique-se de ter o Node.js instalado na sua máquina.
2. Execute `npm install` na raiz do projeto para instalar as dependências.
3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:
4. Execute `npm run dev` para iniciar o servidor. O servidor estará disponível em http://localhost:3333.

## Exemplo de Uso

A API oferece as seguintes rotas:

- `POST /task`: Cria uma nova tarefa.
- `GET /task`: Retorna todas as tarefas ou filtra por título (usando a consulta `title`).
- `GET /task/:id`: Retorna uma tarefa específica com base no ID.
- `DELETE /task/:id`: Exclui uma tarefa com base no ID.
- `PUT /task/:id`: Atualiza uma tarefa com base no ID.
- `PATCH /task/:id/favorite`: Marca ou desmarca uma tarefa como favorita.
- `PATCH /task/:id/update-color`: Atualiza a cor de uma tarefa.

## Observações

- Este é um projeto de exemplo com fins educacionais e não deve ser usado em produção sem configurações adicionais de segurança e armazenamento de dados em um banco de dados real.

- Para autenticação, a API espera que os clientes enviem um token de autenticação no cabeçalho `Authorization` no formato Bearer token.

- A lógica de autenticação é simplificada e depende da configuração da variável de ambiente `ACCESS_TOKEN_SECRET`.

- Os dados das tarefas são armazenados em memória com a implementação `taskRepositoryInMemory`. Em um aplicativo real, você usaria um banco de dados para armazenar dados persistentes.

Este é um exemplo de um projeto Node.js TypeScript para gerenciamento de tarefas. Sinta-se à vontade para usar este projeto como base e expandir suas funcionalidades de acordo com suas necessidades.
