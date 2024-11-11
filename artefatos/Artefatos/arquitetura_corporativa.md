### Documentação da Arquitetura do Projeto com a Vivo

<div align="center">

<sub>Figura 01 - Diagrama de arquitetura<sub>

![alt text](/artefatos/images/arq-corporativa.png)

<sup>Fonte: Material produzido pelos autores (2024)</sup>

</div>

**Resumo da Arquitetura**

&emsp;&emsp;A arquitetura do sistema de inventário distribuído desenvolvido para a Vivo é projetada para otimizar a gestão de estoques em múltiplos centros de distribuição e lojas, oferecendo uma solução robusta, escalável e de alta performance. A arquitetura em nuvem utiliza serviços AWS para garantir segurança, tolerância a falhas e a capacidade de escalonamento automático para lidar com altos volumes de transações. Segue uma descrição detalhada do fluxo principal da aplicação e da infraestrutura implementada.

**Fluxo Principal da Aplicação**

&emsp;&emsp;O acesso à aplicação inicia-se quando um usuário qualquer tenta acessá-la, seja através de um navegador web ou um aplicativo móvel. O primeiro ponto de contato é o domínio da aplicação, gerenciado pelo AWS Route 53. Este serviço DNS não só traduz nomes de domínio em IPs, mas também roteia as solicitações de maneira eficiente para os recursos apropriados na AWS.

&emsp;&emsp;As requisições são então encaminhadas para o AWS CloudFront, uma CDN que melhora a entrega de conteúdo estático (como imagens, scripts, e arquivos CSS e HTML) reduzindo a latência e melhorando a experiência do usuário. O CloudFront busca seu conteúdo no AWS S3, onde os objetos estáticos da aplicação são armazenados, garantindo escalabilidade e alta disponibilidade.

&emsp;&emsp;Após a entrega de conteúdo estático, as requisições são direcionadas para o Elastic Load Balancer (ELB), que balanceia o tráfego entre as instâncias EC2 disponíveis. Isso assegura que nenhuma instância sofra sobrecarga, mantendo alta disponibilidade e performance da aplicação.

&emsp;&emsp;Quando a requisição alcança uma instância EC2, ocorre o processamento necessário, que pode incluir interações com o PostgreSQL do serviço AWS RDS, antes de a resposta ser enviada de volta ao usuário.

**Configuração de Segurança e Acesso**

&emsp;&emsp;O acesso seguro às instâncias EC2 dentro da rede privada é feito através de um bastion host. Usuários autorizados, munidos de uma chave PEM, usam esta instância EC2 para autenticar e realizar conexões SSH às outras instâncias na rede privada. Este método reforça a segurança ao centralizar o ponto de acesso e reduzir a superfície de ataque.

**Infraestrutura Detalhada**

&emsp;&emsp;A arquitetura se apoia fortemente em sub-redes privadas e públicas dentro de uma VPC (Virtual Private Cloud) para separar e gerenciar tráfego destinado ao backend e ao frontend da aplicação.

**Sub-redes Públicas e Privadas:**
- **Sub-redes Públicas:** São usadas para hospedar o Bastion Host e o Elastic Load Balancer (ELB). Esses componentes são expostos à internet, permitindo acesso controlado e balanceamento de carga.
- **Sub-redes Privadas:** Abrigam as instâncias EC2 do backend e os bancos de dados PostgreSQL gerenciados pelo AWS RDS. Essas sub-redes não são acessíveis diretamente da internet, o que aumenta a segurança dos dados e dos processos críticos da aplicação.

**NAT Gateways:** Instalados nas sub-redes públicas para permitir que as instâncias EC2 nas sub-redes privadas acessem a internet para atualizações e patches, sem expor essas instâncias diretamente à internet.

**AWS RDS - PostgreSQL:**
- O uso do AWS RDS com PostgreSQL oferece gerenciamento simplificado de bancos de dados, backups automáticos, e recuperação de desastres através de réplicas em multiplas zonas de disponibilidade. Isso assegura a continuidade do serviço mesmo em caso de falhas.

**Balanceamento de Carga e Alta Disponibilidade:**
- O ELB distribui o tráfego entre várias instâncias EC2, garantindo que a aplicação possa manejar aumentos de carga sem degradar a performance. Em caso de falha de uma instância, o ELB redireciona o tráfego para instâncias saudáveis, mantendo o serviço sempre disponível.

**Escalabilidade e Performance:**
- A arquitetura é projetada para escalabilidade automática através de grupos de Auto Scaling que ajustam o número de instâncias EC2 baseado no tráfego real observado. Isso permite que a aplicação se adapte dinamicamente a variações na demanda sem intervenção manual.

**Recuperação de Desastres e Backup**

&emsp;&emsp;Para garantir a confiabilidade e a continuidade dos negócios, o sistema implementa estratégias de recuperação de desastres robustas:

- **Backups Automáticos e Snapshots**: O AWS RDS permite a configuração de backups automáticos, que são realizados diariamente e mantidos por um período definido pelo usuário. Além disso, podem ser feitos snapshots do estado atual do banco de dados a qualquer momento, que podem ser armazenados e usados para restaurar o sistema em caso de falhas críticas.

- **Multi-AZ Deployments para RDS**: Ao configurar o RDS para operar em múltiplas zonas de disponibilidade, assegura-se que, em caso de falha de uma zona, outra possa assumir imediatamente, minimizando o tempo de inatividade e maximizando a disponibilidade do serviço.

- **Isolamento de Falhas**: A utilização de sub-redes privadas e públicas ajuda a isolar componentes da aplicação, de modo que uma falha em uma área não afeta outras. Isso é crucial para manter a estabilidade operacional e a segurança.

**Conformidade e Segurança**

&emsp;&emsp;A infraestrutura foi projetada para cumprir rigorosos padrões de segurança e conformidade, o que é essencial para operar no setor de telecomunicações:

- **IAM (Identity and Access Management)**: Usado para controlar o acesso aos recursos da AWS, garantindo que somente usuários e sistemas autorizados possam fazer alterações na infraestrutura.
- **VPC Security Groups e NACLs**: Configurações de grupos de segurança e listas de controle de acesso a rede (NACLs) são utilizadas para definir regras de tráfego permitido entre as instâncias e serviços, protegendo contra acessos indesejados.

- **Criptografia**: Tanto os dados em trânsito quanto em repouso são criptografados, utilizando as ferramentas e serviços disponibilizados pela AWS, como a criptografia de volume do EBS e a criptografia padrão do S3 e RDS.

- **Auditoria e Monitoramento**: Utilização de serviços como AWS CloudTrail e Amazon CloudWatch para monitorar e registrar atividades na infraestrutura, facilitando a detecção de comportamentos anômalos e potenciais vulnerabilidades.

&emsp;&emsp;Esta arquitetura busca não apenas atender às necessidades atuais da Vivo, mas também adaptar-se a futuras expansões ou mudanças nas demandas do negócio, mantendo a eficiência e a eficácia da gestão de inventário.

**Benefícios e Impacto no Negócio**

&emsp;&emsp;A arquitetura proposta para o sistema de inventário distribuído da Vivo traz diversos benefícios que alinham diretamente com as necessidades e objetivos estratégicos da empresa:

- **Melhoria na Experiência do Cliente**: Ao garantir a sincronização em tempo real do inventário e a rápida resposta às requisições dos clientes, a plataforma melhora significativamente a experiência de compra, aumentando a satisfação do cliente e potencialmente elevando as taxas de conversão.

- **Redução de Custos Operacionais**: A automação e a eficiência proporcionadas pela infraestrutura em nuvem reduzem os custos associados ao gerenciamento de inventário e operações de TI. O autoescalamento e o balanceamento de carga permitem um uso mais eficiente dos recursos, minimizando o desperdício e reduzindo custos com infraestrutura.

- **Agilidade nos Processos de Negócio**: Com a aplicação em nuvem, a Vivo pode implementar mudanças mais rapidamente e com menor risco. As atualizações e novas funcionalidades podem ser distribuídas de forma mais ágil, permitindo que a empresa responda rapidamente às mudanças no mercado ou demandas dos consumidores.

- **Alta Disponibilidade e Resiliência**: A arquitetura projetada para tolerância a falhas e recuperação rápida de desastres garante que o sistema esteja sempre disponível, mesmo em face de falhas de hardware ou desastres naturais, mantendo operações críticas sempre online.

- **Escalabilidade Dinâmica**: Capacidade de ajustar recursos automaticamente para lidar com picos de demanda sem intervenção manual, assegurando que a plataforma possa lidar com altos volumes de transações especialmente em períodos de alta demanda, como promoções e lançamentos de novos produtos.

- **Segurança e Conformidade**: A estrutura cumpre com as normativas de segurança e privacidade necessárias para operações no setor de telecomunicações, protegendo dados sensíveis e mantendo a confiança dos usuários.

**Conclusão**

&emsp;&emsp;A implementação dessa arquitetura robusta e escalável para o sistema de inventário distribuído da Vivo representa um passo significativo para a modernização das operações da empresa, apoiando sua jornada de transformação digital. Além disso, prepara a infraestrutura para futuras inovações e melhorias, garantindo que a Vivo permaneça competitiva e relevante em um mercado em rápida evolução.


