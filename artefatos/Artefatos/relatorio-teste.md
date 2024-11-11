# Descrição do Cenário de Teste

O teste de carga foi realizado utilizando o script k6 fornecido, que executa uma série de requisições HTTP GET para um endpoint específico (http://172.31.41.191), conforme a imagem abaixo foi realizado diversas requisições de sucesso e falha propositalmente para que tenha uma melhor análise do resultado do Grafana. O teste foi configurado para simular **1000 usuários virtuais (VUs)** executando requisições durante um período de **10 segundos**. O objetivo principal era avaliar o desempenho do endpoint sob carga, verificando a taxa de sucesso das requisições e o tempo de resposta, bem como identificar possíveis falhas.

<div align="center">

<sub>Imagem 01: Dashboard do Grafana</sub>

![Grafana](/artefatos/images/Grafana.jpeg)

<sup>Fonte: Material produzido pelos próprios autores (2024)</sup>

</div>

## Configuração do Teste

O script k6 possui a seguinte configuração:

- **Usuários Virtuais (VUs):** 1000
- **Duração do Teste:** 10 segundos
- **Requisição HTTP:** Método GET para http://172.31.41.191
- **Verificação de Status HTTP:** Foi implementada uma verificação para garantir que a resposta do servidor tenha o status HTTP 200.

## Análise dos Resultados no Grafana

Os resultados foram visualizados em um dashboard do Grafana, e abaixo estão os detalhes dos principais indicadores observados na imagem fornecida:

### Virtual Users (Usuários Virtuais)

- O gráfico de "Virtual Users" mostra o número de usuários ativos durante o teste.
- **Máximo (Max):** 1000 VUs
- **Mínimo (Min):** 528 VUs

O número de usuários virtuais atinge seu pico de 1000, conforme esperado, mas também mostra uma queda para 528, indicando que alguns usuários podem não ter concluído todas as requisições ou que houve um ajuste automático devido a falhas.

### Requests per Second (Requisições por Segundo)

- O gráfico de "Requests per Second" indica o número de requisições sendo enviadas ao servidor a cada segundo.
- **Média (Mean):** 17.9 requisições por segundo
- **Máximo (Max):** 317 requisições por segundo

A variação nas requisições por segundo sugere que houve momentos de pico em que o número de requisições aumentou significativamente, possivelmente devido à simultaneidade de usuários virtuais.

### Checks per Second (Verificações por Segundo)

- Este gráfico representa o número de verificações de status "200" realizadas por segundo.
- **Média (Mean):** 17.9
- **Total:** 554 verificações

A maioria das requisições bem-sucedidas foi verificada como "status is 200", confirmando que o servidor respondeu corretamente para um grande número de requisições.

### Errors per Second (Erros por Segundo)

- O gráfico de "Errors per Second" mostra o número de erros ocorrendo a cada segundo durante o teste.
- **Média (Mean):** 0.610 erros por segundo
- **Total:** 18.9 erros

Observa-se um pico de erros em um ponto específico do teste, indicando que o servidor pode ter falhado em responder adequadamente sob carga intensa.

### K6 Error Codes (Códigos de Erro do K6)

- Este painel mostra a distribuição dos códigos de erro registrados durante o teste.
  - **Código de Erro 1050:** 134 ocorrências
  - **Código de Erro 1211:** 1000 ocorrências
- **Total:** 33.21K requisições

Os códigos de erro 1050 e 1211 indicam problemas específicos durante o teste. Esses códigos precisam ser investigados para entender se representam falhas do servidor, timeout, ou outros tipos de problemas.

### HTTP Status Codes (Códigos de Status HTTP)

- Este painel indica a contagem de respostas HTTP recebidas durante o teste.
  - **Status 0:** 1130 requisições
  - **Status 200:** 32.08K requisições
- **Total:** 33.21K requisições

Um grande número de requisições foi bem-sucedido (HTTP 200), mas há um número significativo de respostas com status 0, que geralmente indica uma falha na conexão ou um problema do lado do cliente.

### HTTP Request Duration (Duração da Requisição HTTP)

A duração das requisições HTTP é detalhada com várias métricas:

- **Média (mean):** 6.67 segundos
- **Máximo (max):** 55.44 segundos
- **Mediana (med):** 4.42 segundos
- **Mínimo (min):** 0.21 ms
- **Percentil 90 (p90):** 13.86 segundos
- **Percentil 95 (p95):** 14.24 segundos

O tempo médio de resposta é relativamente alto (6.67 segundos), e o tempo máximo de 55.44 segundos é extremamente elevado, indicando problemas de latência e desempenho do servidor sob carga.


O teste realizado demonstra que o endpoint **http://172.31.41.191** foi submetido a uma carga significativa com 1000 usuários virtuais, mas enfrentou problemas de desempenho e estabilidade, que eram esperados por conta dos testes propositais de falha. A análise dos gráficos sugere que, embora muitas requisições tenham sido bem-sucedidas, houve um número considerável de falhas e tempos de resposta elevados. Além disso, a otimização da infraestrutura do servidor ou a aplicação pode ser necessária para melhorar o tempo de resposta e lidar melhor com cargas elevadas no futuro.
