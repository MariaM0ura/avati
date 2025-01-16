# Login Form


## Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas no seu computador:

- **Node.js** (versão 14 ou superior)
- **npm** ou **yarn**

## Como rodar o projeto

### 1. Clone o repositório
Clone este repositório para a sua máquina local:

```bash
git clone https://github.com/MariaM0ura/avati
```

### 2. Acesse o diretório do projeto
Navegue até o diretório do projeto clonado:

```bash
cd avati
```

### 3. Instale as dependências
Instale todas as dependências do projeto com o comando:

#### Usando npm:
```bash
npm install
```

#### Usando yarn:
```bash
yarn install
```

### 4. Inicie o servidor de desenvolvimento
Inicie o servidor local para visualizar o projeto:

#### Usando npm:
```bash
npm start
```

#### Usando yarn:
```bash
yarn start
```

O projeto estará acessível em `http://localhost:3000` no seu navegador.

## Funcionalidades

- **Validação de e-mail**: Aceita apenas e-mails válidos.
- **Validação de senha**: Exige no mínimo 6 caracteres.
- **Mensagens de notificação**: Utiliza o React Toastify para exibir mensagens elegantes de erro e sucesso.
- **Design responsivo**: Compatível com dispositivos móveis e desktops.

## Tecnologias utilizadas

- **React**: Framework para construção da interface do usuário.
- **React Icons**: Ícones para inputs (usuário e senha).
- **React Toastify**: Notificações personalizáveis.
- **CSS**: Estilização customizada.

## Estrutura do Projeto

```
src/
├── Components/
│   └── Login.jsx       # Componente principal do formulário de login
│   └── Login.css       # Arquivo de estilos customizados
├── index.js            # Ponto de entrada do React
├── index.css           # Arquivo de estilos customizados
└── App.js              # Configuração principal do aplicativo
└── App.css              # Arquivo de estilos customizados

```

## Licença

Este projeto é de código aberto e está sob a licença [MIT](https://opensource.org/licenses/MIT).
