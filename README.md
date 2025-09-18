# GitWiki

![GitHub repo size](https://img.shields.io/github/repo-size/joaozanelato/gitwiki?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/joaozanelato/gitwiki?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/joaozanelato/gitwiki?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/joaozanelato/gitwiki?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/joaozanelato/gitwiki?style=for-the-badge)

<img src="https://i.postimg.cc/8PrRZ5Vy/image.png" alt="GitWiki">

> Visão da aplicação, onde é possível buscar e listar repositórios do GitHub, podendo visualizá-los ou removê-los da lista.

## 🚀 Sobre o Projeto

O **GitWiki** é uma interface web simples que permite aos usuários pesquisar por repositórios no GitHub e adicioná-los a uma lista local. Ao inserir o nome de um repositório no formato `usuario/repositorio`, a aplicação consome a API do GitHub para buscar e exibir informações detalhadas, que podem ser adicionadas a uma lista interativa.

Este projeto foi desenvolvido como uma forma de praticar o consumo de APIs e a manipulação de estado com React.

### ✨ Funcionalidades

-   **Busca de Repositórios**: Campo de busca para encontrar qualquer repositório público no GitHub.
-   **Adicionar à Lista**: Adiciona repositórios à tela, evitando duplicatas.
-   **Visualização de Detalhes**: Exibe o nome e o caminho completo do repositório.
-   **Remoção da Lista**: Permite remover um repositório da lista com um clique.
-   **Link Direto**: Oferece um link para acessar o repositório diretamente no GitHub.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

-   **React**: Biblioteca principal para a construção da interface.
-   **Vite**: Ferramenta de build para um desenvolvimento mais rápido e otimizado.
-   **Styled-Components**: Para a estilização dos componentes de forma isolada e dinâmica.
-   **Axios**: Para realizar as requisições à API do GitHub.
-   **GitHub API**: Para busca de dados dos repositórios.

---

## ⚙️ Como Executar

Siga os passos abaixo para executar o projeto localmente.

### **Pré-requisitos**

-   [Node.js](https://nodejs.org/en/) (versão 20 ou superior)
-   [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

### **Instalação**

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/joaozanelato/gitwiki.git](https://github.com/joaozanelato/gitwiki.git)
    ```
2.  Acesse o diretório do projeto:
    ```bash
    cd gitwiki/gitwiki
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```

### **Executando a Aplicação**

Para iniciar a aplicação em modo de desenvolvimento, execute o comando:

```bash
npm run dev
```

## 📫 Contribuindo para **GitWiki**

Para contribuir com **GitWiki**, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin gitwiki / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).


## 📝 Licença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.
