# Requisitos do Projeto de Inventário Distribuído

&emsp;&emsp;O projeto de Inventário Distribuído tem como objetivo desenvolver uma solução eficiente para o gerenciamento de estoque em tempo real, que abrange múltiplos centros de distribuição e lojas da Vivo. Com o crescimento da demanda por serviços digitais e a necessidade de otimizar processos logísticos, a Vivo tem a necessidade de melhorar a sincronização de estoques e a visibilidade das operações, garantindo que os clientes possam ter acesso rápido e confiável aos produtos disponíveis. Este documento descreve os requisitos funcionais e não funcionais do sistema, que foram elaborados para atender às necessidades críticas do projeto, assegurando alto desempenho, disponibilidade, segurança e escalabilidade.

## Requisitos Funcionais

### RF 1: Sincronização de Estoque em Tempo Real
O sistema deve sincronizar o estoque entre os centros de distribuição e as lojas em tempo real.

### RF 2: Consulta de Estoque por CEP
O sistema deve permitir a consulta de estoque baseado no CEP do cliente, retornando a loja mais próxima com o item disponível.

### RF 3: Integração com SAP ECC
O sistema deve integrar-se com a plataforma SAP ECC para validação de estoque no momento da finalização da compra.

### RF 4: Visualização de Dados em Dashboards
O sistema deve proporcionar dashboards para visualização em tempo real do status do inventário, utilizando Grafana.

### RF 5: Geração e Processamento de Arquivos de Dados
O sistema deve gerar e processar arquivos de dados das lojas e centros de distribuição periodicamente.

## Requisitos Não Funcionais

### RNF 1: Desempenho
O sistema deve suportar até 10.000 transações simultâneas sem degradação significativa de desempenho.

#### Plano de teste
* Realizar testes de carga utilizando ferramentas como Apache JMeter para simular 10.000 transações simultâneas e monitorar o tempo de resposta e uso de recursos.

### RNF 2: Disponibilidade
O sistema deve ter uma disponibilidade mínima de 99,9% ao longo de um ano.

#### Plano de teste
* Implementar monitoramento contínuo com ferramentas como AWS CloudWatch para rastrear o uptime e detectar qualquer tempo de inatividade.

### RNF 3: Escalabilidade
O sistema deve ser capaz de escalar horizontalmente para acomodar picos de demanda sem intervenção manual.

#### Plano de teste
* Configurar auto-scaling em Kubernetes e realizar testes de estresse para verificar se novos pods são adicionados automaticamente durante picos de demanda.

### RNF 4: Segurança
O sistema deve garantir a segurança dos dados através de criptografia em trânsito e em repouso.

#### Plano de teste
* Realizar testes de penetração para identificar vulnerabilidades e verificar se os dados são criptografados corretamente usando SSL/TLS para dados em trânsito e AWS KMS para dados em repouso.

### RNF 5: Manutenibilidade
O sistema deve ser facilmente mantido e atualizado, com um tempo máximo de recuperação (MTTR) de 2 horas para qualquer falha.

#### Plano de teste
* Documentar todos os procedimentos de manutenção e realizar simulações de falhas para medir e garantir que o tempo de recuperação esteja dentro do limite especificado.

&emsp;&emsp;Os requisitos neste documento trilham o caminho para o desenvolvimento do Sistema de Inventário Distribuído, focando em fornecer uma solução que não apenas atenda às necessidades imediatas da Vivo, mas que também seja escalável, segura e facilmente mantida ao longo do tempo. Através da implementação rigorosa dos requisitos funcionais, como a sincronização em tempo real e a integração com a plataforma SAP ECC, aliados aos requisitos não funcionais, como desempenho e disponibilidade, o projeto conseguirá alcançar os objetivos propostos. A adoção dessas diretrizes garante uma solução eficaz, que contribuirá para a melhoria contínua das operações de estoque e logística, proporcionando uma experiência superior aos clientes da Vivo.