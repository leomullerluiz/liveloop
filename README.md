# LiveLoop

LiveLoop é um aplicativo para consultar uma API de notícias. Ele permite que os usuários visualizem as últimas notícias de várias fontes de forma rápida e eficiente.

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

- **api/**: Contém a configuração do cliente HTTP e funções para chamadas de API.
- **assets/**: Contém arquivos estáticos como ícones e imagens.
- **components/**: Contém componentes reutilizáveis. Subpastas podem ser usadas para organizar componentes específicos, como `ui/` para componentes de interface do usuário.
- **hooks/**: Contém hooks personalizados.
- **lib/**: Contém utilitários e funções auxiliares.
- **pages/**: Contém componentes de páginas.
- **services/**: Contém serviços que encapsulam a lógica de chamadas de API.
- **styles/**: Contém arquivos CSS.
- **types/**: Contém definições de tipos TypeScript.

## Arquivos Principais

- **App.tsx**: Componente principal da aplicação.
- **main.tsx**: Ponto de entrada da aplicação.
- **routes.tsx**: Configuração das rotas da aplicação.

## Como Executar

Para executar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/liveloop.git
   ```
2. Navegue até o diretório do projeto:
   ```sh
   cd liveloop
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.