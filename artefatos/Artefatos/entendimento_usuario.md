## 1. Introdução 

&emsp;&emsp;A presente pesquisa foi conduzida com o objetivo de aprofundar a compreensão da experiência dos usuários na plataforma de compras da Vivo, com foco específico na identificação de problemas relacionados à disponibilidade de produtos, eficiência dos processos de compra e percepção geral dos consumidores sobre o serviço oferecido. Em um ambiente digital onde as expectativas dos clientes estão em constante evolução, é imperativo que a plataforma atenda de maneira eficaz a essas demandas para manter a competitividade e a satisfação dos usuários.

&emsp;&emsp;A justificativa para esta pesquisa reside na necessidade estratégica de mapear e entender os gargalos operacionais e as falhas que impactam negativamente a experiência do cliente. Detectar essas questões é essencial para implementar melhorias que não apenas aprimorem a usabilidade e a confiabilidade da plataforma, mas também reforcem a fidelidade do cliente e protejam a imagem da marca Vivo.

[Link para o Formulário da Pesquisa](https://docs.google.com/forms/d/1zZ3hEFeMZoyUQ23NIapLRT_etasHB_1A72WO8lvTEG4/edit)

## 2. Objetivo da imersão preliminar 

&emsp;&emsp;O objetivo da imersão preliminar foi realizar uma pesquisa exploratória com o intuito de obter uma compreensão aprofundada do contexto e dos desafios relacionados à sincronização de estoque na Vivo. Esta etapa inicial foi fundamental para orientar o desenvolvimento de uma solução eficaz, garantindo que as necessidades e expectativas da empresa fossem plenamente compreendidas. A imersão incluiu atividades como o Kick-off Meeting com os stakeholders da Vivo e observações em campo, possibilitando uma visão clara e detalhada dos processos e das dificuldades enfrentadas.

### 2.1 Metodologia e Atividades Realizadas

#### 2.1.1 Kick-off Meeting

&emsp;&emsp;Durante o primeiro contato com os principais envolvidos na operação de estoque da Vivo, foram discutidos os objetivos do projeto, os desafios atuais e as expectativas para a solução proposta. Este diálogo permitiu identificar as principais dificuldades, como a desatualização de dados de estoque e a falta de integração em tempo real de forma fluida e eficaz.

#### 2.1.2 Definição de Prioridades

&emsp;&emsp;As informações obtidas nesse primeiro contato foram cruciais para definir as áreas de foco da pesquisa e as funcionalidades prioritárias para o desenvolvimento da solução.

### 2.2 Resultados da Imersão Preliminar

&emsp;&emsp;A imersão preliminar proporcionou insights valiosos que guiaram a elaboração da pesquisa qualiquantitativa subsequente. Os principais desafios identificados incluíram a necessidade de automação dos processos manuais, a importância da escalabilidade para lidar com variações no volume de vendas, e a necessidade urgente de visibilidade em tempo real dos níveis de estoque.

&emsp;&emsp;Esses insights foram essenciais para garantir que a pesquisa subsequente fosse bem direcionada e abordasse as questões mais críticas para a Vivo, assegurando que a solução final atenda plenamente às necessidades operacionais e estratégicas da empresa.

### 2.3 Tecnologias Discutidas

- **EC2:** Utilização de máquinas virtuais para o código da aplicação, garantindo flexibilidade e controle sobre o ambiente de desenvolvimento e produção.
- **S3:** Implementação para garantir a escalabilidade da aplicação, permitindo o armazenamento e recuperação eficiente de grandes volumes de dados.
- **RDS:** Uso de serviços de banco de dados relacionais para armazenamento seguro e confiável dos dados essenciais da aplicação.
- **Grafana:** Ferramenta escolhida para a visualização de dados, oferecendo dashboards interativos que auxiliam no monitoramento e na análise do desempenho do sistema.
- **Kubernetes:** Solução para o gerenciamento da aplicação, permitindo a orquestração de contêineres e garantindo escalabilidade, resiliência e automação na implantação e manutenção dos serviços.

## 3. Realização da pesquisa qualiquantitativa 

### 3.1 Elaboração e Aplicação da Pesquisa

&emsp;&emsp;A pesquisa foi estruturada utilizando uma abordagem qualiquantitativa, que combina a profundidade da análise qualitativa com a precisão da análise quantitativa. Inicialmente, foram identificados os principais pontos de fricção na experiência de compra dos usuários, como problemas de indisponibilidade de produtos, discrepâncias nos dados de estoque, e dificuldades na finalização de pedidos. Com base nesses aspectos, foi desenvolvido um questionário que buscou capturar tanto a frequência com que esses problemas ocorrem quanto as percepções dos usuários sobre o impacto dessas falhas em sua experiência geral.

&emsp;&emsp;A pesquisa foi aplicada utilizando o método de amostragem bola de neve, onde um grupo inicial de respondentes foi selecionado com base em sua interação frequente com a plataforma. Estes, por sua vez, encaminharam o questionário a outros usuários com perfis semelhantes. Este método permitiu a obtenção de uma amostra diversificada e representativa dos usuários da plataforma.

### 3.2 Sumarização dos Resultados e Representação Gráfica

&emsp;&emsp;Os resultados da pesquisa foram esclarecedores, destacando gargalos significativos na experiência de compra dos usuários. A análise revelou que a indisponibilidade de produtos é uma das principais causas de frustração, frequentemente resultando em desistência da compra ou em migração para outras plataformas concorrentes. Além disso, problemas na finalização das compras, como falhas de processamento e lentidão no carregamento, também foram identificados como fatores críticos que afetam negativamente a confiança dos clientes na plataforma.

&emsp;&emsp;Um gráfico de pizza foi utilizado para ilustrar a distribuição das respostas em relação à frequência desses problemas, facilitando a visualização de quais questões são mais recorrentes entre os usuários. A análise revelou que os gargalos e falhas identificados culminam em uma diminuição significativa da satisfação do cliente, aumento da taxa de abandono de carrinhos e, em última instância, na perda de oportunidades de vendas.

&emsp;&emsp;Esses resultados evidenciam a necessidade urgente de otimizações na plataforma, com foco na melhoria da disponibilidade de produtos e na robustez do processo de finalização de compras. A correção dessas falhas não apenas melhorará a experiência do usuário, mas também contribuirá para o fortalecimento da relação entre a Vivo e seus clientes, promovendo uma maior fidelidade e confiança na marca.

## 4. Personas

&emsp;&emsp;As personas são utilizadas como forma de mapear o principal usuário do projeto que se desenvolve. Elas são baseadas em comportamentos reais, de formas que um usuário pode utilizar o produto para chegar no objetivo final. Cada persona é elaborada de forma a retratar características específicas de indivíduos reais, representando grupos distintos de usuários que podem utilizar o produto ou serviço em questão. Essas características incluem informações como idade, gênero, profissão, interesses, hábitos de consumo, desafios enfrentados e objetivos a serem alcançados.

&emsp;&emsp;Para a Vivo foram desenvolvidas duas personas que representam o usuário final do projeto. Ambos com necessidades parecidas que ajudam a desenvolver melhor as funcionalidades da aplicação.

### 4.1 Persona: Mariana Silva

### 4.1.1 Informações básicas
- **Idade:** 34 anos
- **Profissão:** Gerente de Marketing em uma empresa de Publicidade
- **Localização:** São Paulo, SP

&emsp;&emsp;Mariana é uma gerente de marketing que trabalha em uma grande agência de publicidade. Para ela, é extremamente importante a eficiência e rapidez em suas contratações de serviço já que é uma profissional ocupada. A empresa de Mariana é cliente da Vivo há muitos anos e aprecia a confiabilidade dos produtos e serviços, no entanto, encontra dificuldades com certos atrasos e prazos de entrega com a Vivo.

#### 4.1.2 Objetivos
- Comprar um laptop e smartphone para acessar sites de e-commerce
- Receber o produto rapidamente
- Garantir que o produto escolhido está disponível e seja entregue no prazo esperado

#### 4.1.3 Dores
- Prazo de entrega longo, especialmente quando ocorre atrasos no processamento ou envio do pedido
- Experiências anteriores no site onde o estoque não estava atualizado, levando ao cancelamento do produto
- Falta de clareza sobre a disponibilidade real dos produtos

#### 4.1.4 Necessidades
- Experiência de compra fácil e rápida, com informações claras sobre disponibilidade do estoque
- Atualizações em tempo real sobre o pedido e prazo de entrega
- Confiança de que o produto que comprou será entregue no prazo esperado

#### 4.1.5 Cenários de Uso
&emsp;&emsp;Mariana acessa o site da Vivo para comprar um novo smartphone. Ela insere seus dados para verificação de estoque e tempo de entrega, então o sistema de inventário distribuído da Vivo verifica em tempo real a disponibilidade do produto e confirma que ele pode ser entregue no mesmo dia. Mariana finaliza a compra com confiança, sabendo que o sistema da Vivo é confiável e que ela receberá seu smartphone no prazo prometido.

### 4.2 Persona: João Oliveira

#### 4.2.1 Informações básicas
- **Idade:** 28 anos
- **Profissão:** Desenvolvedor de Software
- **Localização:** São Paulo, SP

&emsp;&emsp;João é um desenvolvedor de software que trabalha em uma startup de tecnologia. Ele valoriza a conectividade constante e a qualidade da rede, pois precisa estar sempre online para acessar servidores remotos, participar de reuniões virtuais e colaborar com sua equipe. João é um cliente exigente que busca sempre as melhores soluções tecnológicas para facilitar seu trabalho e melhorar sua produtividade. Embora ele aprecie a cobertura de rede da Vivo, já enfrentou problemas com a qualidade do suporte técnico, especialmente quando precisou de assistência urgente para resolver questões de conectividade.

#### 4.2.2 Objetivos
- Garantir uma conexão de internet rápida e estável para trabalhar remotamente
- Resolver rapidamente qualquer problema de conectividade que possa surgir
- Acessar planos que ofereçam benefícios adicionais, como serviços de armazenamento em nuvem e segurança online

#### 4.2.3 Dores
- Instabilidade ocasional na conexão de internet, que afeta sua produtividade
- Dificuldade em obter suporte técnico rápido e eficiente para solucionar problemas urgentes
- Planos que não oferecem benefícios tecnológicos extras, como maior capacidade de dados ou serviços integrados de TI

#### 4.2.4 Necessidades
- Conexão de internet confiável e de alta velocidade, sem interrupções
- Suporte técnico eficiente e acessível 24/7 para resolver problemas de conectividade
- Planos de internet que incluam serviços adicionais, como backup em nuvem e segurança avançada

#### 4.2.5 Cenários de Uso
&emsp;&emsp;João acessa o site da Vivo para atualizar seu plano de internet. Ele verifica as opções disponíveis e escolhe um plano premium que inclui conexão de alta velocidade, maior capacidade de dados e serviços adicionais de segurança online. Durante a configuração, ele entra em contato com o suporte técnico da Vivo para tirar dúvidas sobre a instalação do serviço em sua residência. A equipe de suporte da Vivo oferece um atendimento ágil e eficiente, solucionando rapidamente suas questões, e João finaliza a atualização do plano com a confiança de que terá a conexão e os serviços que precisa para seu trabalho.

### 4.3 Conclusão
&emsp;&emsp;A construção das personas Mariana Silva e João Oliveira foi fundamental para entender melhor as necessidades e expectativas dos principais usuários do sistema de inventário distribuído da Vivo. Essas personas representam perfis distintos de clientes que, embora possuam objetivos e desafios diferentes, compartilham a necessidade de uma experiência de compra eficiente, confiável e que atenda às suas demandas de forma rápida e segura. 
