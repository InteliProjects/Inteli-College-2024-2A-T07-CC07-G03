# Aprimoramento de Testes de Carga

## Introdução

&emsp;&emsp;Este documento apresenta uma análise comparativa de dois testes de carga realizados em um sistema de inventário distribuído. Utilizando as ferramentas K6 e Grafana, os testes foram conduzidos sob as mesmas condições e infraestrutura na AWS EC2. No primeiro cenário, o sistema operou sem a utilização de um balanceador de carga. No segundo, foi incorporado um Load Balancer da AWS para distribuir o tráfego entre duas instâncias EC2. O objetivo principal é avaliar o impacto que o balanceamento de carga tem na escalabilidade, nos tempos de resposta e na robustez geral da aplicação.

## Objetivo dos Testes

&emsp;&emsp;Simular condições extremas de tráfego, replicando situações como eventos promocionais de grande porte (por exemplo, Black Friday), onde o sistema precisa suportar um alto número de acessos simultâneos.

## Configuração dos Testes

&emsp;&emsp;Ambos os testes foram configurados para gerar até 30.000 requisições por segundo. A configuração do script K6 utilizado nos testes está descrita a seguir:

```javascript
export const options = {
  scenarios: {
    ramping_request_rate: {
      executor: 'ramping-arrival-rate',
      startRate: 0,
      timeUnit: '1s',
      preAllocatedVUs: 300,
      maxVUs: 35000,
      stages: [
        { target: 10000, duration: '1s' },
        { target: 20000, duration: '1s' },
        { target: 30000, duration: '1s' },
      ],
    },
  },
};
```

## Resultados

### Primeiro Teste: Sem Load Balancer

- **Usuários Virtuais (VUs)**: Pico de 1.000
- **Requisições por Segundo (RPS)**:
  - Média: 17,9 RPS
  - Pico: 317 RPS
- **Duração das Requisições HTTP**:
  - Média: 6,67 segundos
  - Mediana: 4,42 segundos
  - Mínimo: 0,21 ms
  - Máximo: 55,44 segundos
  - Percentis:
    - P90: 13,86 segundos
    - P95: 14,24 segundos

<div align="center">

<sub>Imagem 01: Dashboard do Grafana</sub>

![Grafana](/artefatos/images/Grafana.jpeg)

<sup>Fonte: Material produzido pelos próprios autores (2024)</sup>

</div>

&emsp;&emsp;Sem o uso do Load Balancer (ELB), o sistema demonstrou limitações significativas ao lidar com o alto volume de requisições. O tempo médio de resposta elevado e o pico de quase 55 segundos indicam gargalos e ineficiências no processamento sob carga intensa.

### Segundo Teste: Com Load Balancer

- **Usuários Virtuais (VUs)**: Pico de 15.000
- **Requisições por Segundo (RPS)**: 1.070 RPS
- **Duração das Requisições HTTP**:
  - Média: 1 segundo
  - Mediana: 837,06 ms
  - Mínimo: 234,2 ms
  - Máximo: 37,2 segundos
  - Percentis:
    - P90: 1,31 segundos
    - P95: 1,67 segundos

&emsp;&emsp;Com a implementação do Load Balancer da AWS, houve uma melhoria notável no desempenho. A carga distribuída entre duas instâncias EC2 resultou em um aumento significativo na taxa de requisições por segundo e na redução dos tempos de resposta. A maioria das requisições foi atendida em menos de 1 segundo, evidenciando uma maior eficiência.

## Validação dos Requisitos Funcionais e Não Funcionais

&emsp;&emsp;Os testes de carga realizados comprovam a conformidade do sistema com os requisitos não funcionais críticos definidos para o projeto. Em particular, o **RNF 1 (Desempenho)** foi validado ao demonstrar que, com a implementação do Load Balancer, o sistema suporta mais de 10.000 transações simultâneas sem degradação significativa de desempenho, mantendo tempos de resposta médios em torno de 1 segundo. Além disso, o **RNF 3 (Escalabilidade)** foi comprovado pela capacidade do sistema de escalar horizontalmente, distribuindo eficientemente a carga entre múltiplas instâncias EC2 durante picos de demanda.

&emsp;&emsp;Embora os testes tenham focado principalmente nos aspectos de desempenho e escalabilidade, a melhoria nos tempos de resposta e na capacidade de processamento também suporta os requisitos funcionais, como a **Sincronização de Estoque em Tempo Real (RF 1)** e a **Consulta de Estoque por CEP (RF 2)**, garantindo que essas funcionalidades críticas sejam executadas de forma eficiente mesmo sob alta carga. Dessa forma, os testes de carga não apenas validam a robustez técnica do sistema, mas também asseguram que as principais funcionalidades atendam às expectativas de desempenho e disponibilidade definidas nos requisitos.

## Conclusão

&emsp;&emsp;A adoção do balanceador de carga mostrou-se essencial para aprimorar o desempenho do sistema em condições de alta demanda. Comparando os resultados:

- **Escalabilidade Aprimorada:** O sistema suportou um número maior de requisições por segundo com o Load Balancer.
- **Redução nos Tempos de Resposta:** O tempo médio de resposta reduziu de 6,67 segundos para 1 segundo.
- **Distribuição Eficiente de Carga:** O balanceamento entre instâncias permitiu melhor alocação de recursos e menor latência.