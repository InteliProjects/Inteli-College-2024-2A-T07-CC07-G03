## Diagrama Casos de Uso:

&emsp;&emsp;O diagrama de casos de uso é uma ferramenta gráfica crucial na análise e design de sistemas, ilustrando como os atores interagem com o sistema para alcançar objetivos específicos. Ele destaca as funcionalidades essenciais do sistema e as interações dos usuários, facilitando a compreensão dos requisitos funcionais e garantindo que as necessidades dos usuários sejam atendidas. Essencialmente, o diagrama serve para esclarecer o comportamento do sistema em diversas situações, oferecendo uma base sólida para o desenvolvimento subsequente. Abaixo segue o diagrama utilizado no projeto junto com a explicação de cada caso de uso.

<div align="center">

<sub>Figura 01 - Diagrama Casos de Uso<sub>

![alt text](/artefatos/images/diagramacasosdeuso.png)

<sup>Fonte: Material produzido pelos autores (2024)</sup>

</div>

<div align="justify">

### Caso de Uso: Visualizar Dados em Dashboards

**Escopo:** Sistema de gestão de e-commerce.  
**Nível:** Operação.  
**Atores:** Administrador do Sistema.  
**Interessados e Interesses:** Administrador do Sistema deseja ter uma visão geral rápida e eficiente da performance operacional da loja e-commerce.  
**Pré-condições:** Administrador deve estar autenticado no sistema.  
**Pós-condições:** As métricas relevantes são apresentadas em formatos gráficos. 
**Fluxo Básico:**
  1. Administrador acessa o dashboard.
  2. O sistema apresenta diferentes widgets que resumem as métricas operacionais.
  3. Administrador visualiza as métricas atualizadas.
     
**Fluxos Alternativos:** N/A.
**Requisitos Especiais:** Os dashboards devem atualizar automaticamente com dados em tempo real.
**Lista de Variantes:** Dashboards personalizáveis pelo usuário.
**Frequência de Ocorrência:** Constante durante o uso do sistema.
**Problemas em Aberto:** Determinar a necessidade de dados históricos para comparações de desempenho.

### Caso de Uso: Visualizar Relatórios de Estoque

**Escopo:** Sistema de gestão de e-commerce.  
**Nível:** Operação.  
**Atores:** Administrador do Sistema, Equipe de Logística.  
**Interessados e Interesses:** Os usuários precisam de relatórios detalhados do estoque para tomar decisões de reabastecimento.  
**Pré-condições:** Os dados do estoque devem estar corretamente registrados e atualizados no sistema. 
**Pós-condições:** Relatórios fornecem insights sobre o status atual e histórico do estoque.
**Fluxo Básico:**
  1. O usuário seleciona a opção para gerar relatórios de estoque.
  2. O usuário especifica os critérios do relatório.
  3. O sistema gera e apresenta o relatório baseado nos critérios fornecidos.
     
 **Fluxos Alternativos:** Se os dados não estiverem disponíveis, o sistema notifica o usuário da falha.
 **Requisitos Especiais:** Capacidade de filtrar e organizar dados conforme necessário.
 **Lista de Variantes:** Exportação de relatórios.
 **Frequência de Ocorrência:** Diariamente.
 **Problemas em Aberto:** Ajustar os relatórios para exportação.

 ### Caso de Uso: Cadastrar Lojas

**Escopo:** Sistema de gestão de e-commerce.  
**Nível:** Configuração.  
**Atores:** Equipe de Logística.  
**Interessados e Interesses:** Logística precisa registrar novas lojas para expansão do serviço. 
**Pré-condições:** Usuário deve ter permissões adequadas.
**Pós-condições:** Nova loja adicionada ao sistema e disponível para operações e análises.
**Fluxo Básico:**
  1. Logística acessa a funcionalidade de cadastro de lojas.
  2. Insere os dados da loja no sistema.
  3. Sistema valida e registra a nova loja.
     
**Fluxos Alternativos:** Se os dados forem insuficientes ou incorretos, o sistema solicita correção.
**Requisitos Especiais:** Validação de dados de entrada para garantir a precisão.
**Lista de Variantes:** N/A.
**Frequência de Ocorrência:** Conforme necessário para expansão ou atualização das lojas.
**Problemas em Aberto:** Integração com sistemas externos de geolocalização para validação de endereços.

### Caso de Uso: Consultar Disponibilidade de Produto

**Escopo:** Sistema de gestão de e-commerce.  
**Nível:** Operação.  
**Atores:** Cliente.  
**Interessados e Interesses:** Cliente deseja verificar rapidamente a disponibilidade de um produto para fazer uma compra informada.  
**Pré-condições:** O sistema deve ter acesso atualizado ao inventário de produtos.  
**Pós-condições:** O cliente recebe informações sobre a disponibilidade do produto.  
**Fluxo Básico:**
1. Cliente acessa a funcionalidade de busca no site.
2. Cliente digita o nome ou código do produto desejado.
3. Sistema verifica a disponibilidade do produto nos estoques.
4. Sistema apresenta a disponibilidade junto com opções de compra ou reserva.
   
**Fluxos Alternativos:** Se o produto não estiver disponível, o sistema pode sugerir produtos similares ou a possibilidade de notificação quando disponível.  
**Requisitos Especiais:** Resposta rápida do sistema para consultas de disponibilidade.  
**Lista de Variantes:** Opção para o cliente reservar um produto fora de estoque.  
**Frequência de Ocorrência:** Muito frequente, sempre que o cliente visita o site.  
**Problemas em Aberto:** Integrar um sistema de notificação para informar os clientes sobre a reposição de estoques.

### Caso de Uso: Comprar Produto

**Escopo:** Sistema de gestão de e-commerce.  
**Nível:** Transação.  
**Atores:** Cliente.  
**Interessados e Interesses:** O cliente quer uma experiência de compra simples e segura.  
**Pré-condições:** O produto deve estar disponível.  
**Pós-condições:** A compra é processada e um pedido é criado.  
**Fluxo Básico:**
1. Cliente seleciona o produto desejado.
2. Cliente procede ao checkout.
3. Sistema processa o pagamento e confirma a transação.
   
**Fluxos Alternativos:** Falha no pagamento: o cliente é notificado e solicitado a tentar novamente.  
**Requisitos Especiais:** Segurança na transação de pagamento.  
**Frequência de Ocorrência:** Depende da atividade do cliente no site.  
**Problemas em Aberto:** Avaliar a integração com novos métodos de pagamento.

## Diagrama de Classes UML

&emsp;&emsp;O sistema desenvolvido tem como objetivo a gestão de produtos e estoque de diferentes locais, permitindo que operações como o cadastro, atualização e exclusão de produtos sejam realizadas, além de manter o controle do estoque e consultar informações sobre a disponibilidade dos itens em cada local. O sistema é composto por uma aplicação backend desenvolvida em Flask e um banco de dados MySQL, que armazena os dados essenciais para o funcionamento da aplicação. O diagrama de classes UML modela as principais entidades do sistema, que são Locais, Produto, e Estoque, além de incluir a estrutura que permite a comunicação com o banco de dados.

<div align="center">

<sub>Figura 02 - Diagrama de Classes UML<sub>

![alt text](/artefatos/images/diagramaclasses.png)

<sup>Fonte: Material produzido pelos autores (2024)</sup>

</div>

<div align="justify">

### Descrição das Entidades
&emsp;&emsp;A entidade **Locais** representa os diferentes locais físicos ou virtuais onde os produtos são armazenados e gerenciados. Os atributos principais dessa entidade incluem o id (identificador único), nome (nome do local), endereço, tipo (que pode ser, por exemplo, um centro de distribuição ou uma loja física), e cep (código postal do local). Essa entidade é fundamental para manter um controle detalhado de onde os produtos estão localizados e armazenados.


&emsp;&emsp;A classe **Produto** é central no sistema, representando cada item que pode ser comercializado. Seus principais atributos são o sku (código único do produto), nome, descrição, e preço. A relação entre Produto e Locais permite que o sistema rastreie em quais locais cada produto está disponível e em que quantidade. Cada produto pode estar associado a vários locais, e sua quantidade em estoque é gerenciada pela entidade Estoque.

&emsp;&emsp;A classe **Estoque** tem como objetivo armazenar as quantidades de produtos em cada local específico. Ela contém os atributos id (identificador do estoque), sku (referência ao produto), id_local (referência ao local onde o produto está armazenado), e quantidade. A classe Estoque também gerencia a conexão com o banco de dados por meio de métodos como connect() e executeQuery(), que são responsáveis por realizar operações de consulta e atualização no banco, como verificar a quantidade de um produto específico em determinado local.

### Fluxo das Operações

As operações realizadas no sistema seguem um padrão de CRUD (Create, Read, Update, Delete). A aplicação permite que um usuário:

- Crie novos produtos, inserindo detalhes como nome, descrição, preço e SKU, e registre esses produtos em diferentes locais.
- Leia os registros existentes no banco de dados, consultando todos os produtos disponíveis e suas quantidades no estoque para cada local.
- Atualize registros existentes, permitindo que o usuário modifique as informações de um produto, como nome ou preço, ou ajuste a quantidade disponível em um local específico.
- Delete um produto específico, removendo-o da tabela de produtos, além de excluir qualquer relação com o estoque.
  
Além disso, a aplicação inclui uma funcionalidade de pesquisa por SKU, permitindo que o usuário busque um produto específico e veja suas informações detalhadas, bem como sua quantidade no estoque.

&emsp;&emsp;A integração com o banco de dados MySQL é realizada pela classe Estoque, que gerencia a conexão e execução de queries SQL, como SELECT, INSERT, UPDATE, e DELETE. A classe oferece abstração suficiente para que as operações sejam realizadas de forma segura e eficiente, sem expor diretamente os detalhes da conexão ao banco. Isso garante que o sistema possa ser escalável e de fácil manutenção, já que qualquer modificação no banco de dados ou nas consultas pode ser centralizada nessa classe.

&emsp;&emsp;O sistema proposto é uma solução eficiente para a gestão de produtos e controle de estoque, permitindo que os administradores de loja façam as operações necessárias com facilidade e garantindo a integridade das informações por meio da integração com o banco de dados MySQL. O diagrama de classes representa a estrutura essencial do sistema, destacando as principais entidades e suas relações, além de demonstrar a forma como o sistema interage com o banco de dados para executar suas funções.


## Diagrama de Sequência UML

&emsp;&emsp;O diagrama de sequência é uma ferramenta essencial para modelar a interação entre os diferentes componentes de um sistema em tempo de execução. Ele mostra o fluxo de mensagens e ações desencadeadas por cada interação, ajudando a compreender como os componentes cooperam para executar um processo específico em um sistema distribuído.

O diagrama abaixo ilustra o processo de requisição de um usuário que acessa um website via um Load Balancer. Este diagrama detalha a sequência de interações entre o usuário, o Load Balancer, as instâncias de servidores EC2 privados, o banco de dados, e o Bastion Host, que é utilizado para gerenciar as instâncias EC2 via SSH.

<div align="center">

<sub>Figura 03 - Diagrama de Sequência UML<sub>

![alt text](/artefatos/images/diagrama_sequencia.png)

<sup>Fonte: Material produzido pelos autores (2024)</sup>

</div>

### Descrição do Fluxo

**Interação Usuário -> Load Balancer:**  
O usuário acessa o website por meio de um Load Balancer (ELB), que distribui o tráfego entre diferentes instâncias de backend.

**Encaminhamento para EC2 Privado 1:**  
O Load Balancer encaminha o tráfego para uma das instâncias EC2 privadas. Neste caso, o tráfego é direcionado para a instância EC2 Privado 1.

**Requisição ao Banco de Dados:**  
A instância EC2 Privado 1 faz uma requisição ao banco de dados (RDS) para obter os dados necessários.

**Retorno dos Dados:**  
O banco de dados retorna os dados para o EC2 Privado 1, que repassa a resposta ao Load Balancer.

**Resposta ao Usuário:**  
O Load Balancer encaminha a resposta final para o usuário, completando o ciclo da requisição.

**Conexão SSH para Gerenciamento:**  
Além das operações de requisição e resposta, o diagrama mostra o papel do Bastion Host, que é usado para conectar-se via SSH às instâncias EC2 privadas para manutenção e gerenciamento seguro.

### Detalhes Importantes

1. **Distribuição de Tráfego:**  
   O Load Balancer (ELB) distribui o tráfego entre as instâncias EC2, garantindo alta disponibilidade e desempenho do sistema.

2. **Requisição de Dados:**  
   As instâncias EC2 fazem a comunicação direta com o banco de dados (RDS), garantindo que as informações estejam sempre atualizadas e disponíveis.

3. **Gerenciamento via Bastion Host:**  
   O Bastion Host é uma solução segura para estabelecer conexões SSH com as instâncias EC2 privadas, permitindo o gerenciamento remoto e protegido.

### Considerações

Este diagrama de sequência oferece uma visão clara do fluxo de operações em um sistema distribuído, detalhando as interações entre o usuário, o balanceador de carga, os servidores backend e o banco de dados. A adição do Bastion Host garante um gerenciamento seguro das instâncias EC2 privadas.


## Diagrama de Implantação UML
&emsp;&emsp;O diagrama de implantação UML é uma ferramenta fundamental para representar visualmente a arquitetura de um sistema, demonstrando a relação entre seus componentes e como eles interagem durante a execução. Ele é utilizado para ilustrar a distribuição física de componentes de software e hardware em diferentes nós, fornecendo uma visão clara da configuração do ambiente de implementação.

<div align="center">

<sub>Figura 04: Diagrama de Implantação UML e texto</sub>

![Persona do projeto](/artefatos/images/diag-implantacao.png)

<sup>Fonte: Material produzido pelos próprios autores (2024)</sup>
</div>

&emsp;&emsp;O cliente web é a interface de usuário, desenvolvida utilizando a aplicação React, que é responsável por permitir que os usuários interajam com o sistema de inventário distribuído. Essa interface pode ser acessada a partir de navegadores, proporcionando uma experiência interativa para o usuário final. A partir dessa aplicação, o usuário realiza requisições que são enviadas para o backend, solicitando informações como disponibilidade de estoque ou prazo de entrega.

&emsp;&emsp;No backend, há um servidor Node.js que processa essas requisições. Ele é responsável por servir as APIs REST ou GraphQL, que são os meios de comunicação entre o cliente e o restante da infraestrutura. O uso de GraphQL ou REST permite uma comunicação flexível e eficiente, onde as informações requisitadas são entregues ao cliente de forma otimizada, minimizando o tempo de resposta. O backend também é o ponto central de integração entre o cliente web e os demais componentes do sistema.

&emsp;&emsp;A API conecta-se tanto ao banco de dados distribuído quanto aos centros de distribuição e lojas. O banco de dados distribuído é fundamental para garantir que as informações sobre estoque estejam disponíveis em vários locais ao mesmo tempo, permitindo uma sincronização quase em tempo real entre diferentes pontos de venda e centros de distribuição. Esse tipo de banco de dados oferece alta disponibilidade e tolerância a falhas, essenciais para lidar com grandes volumes de transações e garantir a integridade dos dados.

&emsp;&emsp;Os centros de distribuição e lojas estão interligados com o sistema, recebendo e enviando informações de estoque. Esses centros são responsáveis pela movimentação física dos produtos e pelo controle de estoque, enquanto o sistema garante que todas as operações sejam devidamente refletidas no banco de dados, assegurando que o cliente final sempre tenha acesso a informações precisas sobre a disponibilidade dos produtos.

&emsp;&emsp;O diagrama mostra a eficiência do sistema de inventário distribuído, destacando como ele foi projetado para integrar vários centros de distribuição e lojas. A escolha de tecnologias como React e Node.js, combinadas com uma arquitetura distribuída, garante que o sistema seja escalável e confiável, atendendo tanto às demandas do negócio quanto às necessidades dos usuários.