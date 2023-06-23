# Sistema de Pontos (CredMarket)
Este é um sistema de pontos de fidelidade para um supermercado, onde os clientes podem acumular pontos ao fazer compras e resgatá-los posteriormente por vouchers de desconto. O sistema é composto por duas áreas distintas: a área do cliente e a área administrativa.

## Área do Cliente
A área do cliente permite que os usuários acessem suas informações pessoais, verifiquem a quantidade de pontos acumulados, naveguem pelos produtos disponíveis e resgatem vouchers de desconto. As seguintes rotas estão disponíveis:

- `/login`: Rota para fazer login na conta do cliente.
- `/register`: Rota para registrar uma nova conta de cliente.
- `/account`: Rota para visualizar e editar as informações da conta do cliente.
- `/products`: Rota para navegar pelos produtos disponíveis no supermercado e resgatar vouchers de desconto se baseando no produto desejato.
- `/vouchers`: Rota para visualizar os vouchers.

## Área Administrativa
A área administrativa é destinada aos funcionários do supermercado e fornece recursos adicionais para gerenciar o sistema de pontos. Além das funcionalidades presentes na área do cliente, os funcionários têm acesso às seguintes rotas:

- `/admin/login`: Rota para fazer login na conta de administrador.
- `/admin/register`: Rota para registrar uma nova conta de administrador.
- `/admin/account`: Rota para visualizar e editar as informações da conta do administrador.
- `/admin/products`: Rota para gerenciar os produtos disponíveis no supermercado, incluindo adicionar (possibilidade de acrecentar a edição e a exclusão).
- `/admin/vouchers`: Rota para gerenciar os vouchers de desconto disponíveis.
- `/admin/clients`: Rota para visualizar informações dos clientes registrados, como nome e email.

## Requisitos e Configuração
Para executar o sistema de pontos de supermercado, são necessários os seguintes requisitos:

**Node.js: certifique-se de ter o Node.js instalado em seu sistema.**
**Banco de dados: MySQL.**

Após cumprir os requisitos acima, siga as etapas abaixo para configurar e executar o sistema:

1. Clone este repositório em sua máquina local:
```bash
git clone https://github.com/carlos-hss/dash-benefitsclubcredfranco.git.
```

2. Navegue até o diretório raiz do projeto:
```bash
cd nome-do-repositorio.
```

3. Instale as dependências do projeto:
```bash
npm install | yarn.
```

4. Defina as configurações do banco de dados no arquivo de configuração apropriado.

5. Inicie o servidor:
```bash
yarn dev
```
6. Acesse o sistema de pontos CredMarket em seu navegador:
```bash
http://localhost:3000 | Rota adicionada no .env
```

## Considerações Finais
Este sistema de pontos de supermercado foi desenvolvido para fornecer uma solução simples e eficiente para o gerenciamento de pontos e vouchers de desconto.