// Each flashcard belongs to a topic (topicoId)
const flashcards = [
  // Tópico 1 – O que é Inteligência?
  { id: 1, topicoId: 1, provaId: 1, frente: "Como podemos definir Inteligência?", verso: "É a habilidade de adquirir e aplicar conhecimento para resolver problemas complexos." },
  // Tópico 2 – Resolução Lógica

  // Tópico 2 – Resolução Lógica (Definições de Termos)
  { id: 2,  topicoId: 2, provaId: 1, frente: "Como o Raciocínio Dedutivo tira suas conclusões?", verso: "Tira conclusões a partir de premissas conhecidas. A sentença criada é necessariamente verdadeira." },
  { id: 3, topicoId: 2, provaId: 1, frente: "Como o Raciocínio Indutivo tira suas conclusões?", verso: "Tira conclusões apenas analisando uma parte dos objetos ou eventos. As conclusões são prováveis, e logicamente não garantidas." },
  { id: 4, topicoId: 2, provaId: 1, frente: "Como o Raciocínio Abdutivo tira suas conclusões?", verso: "A conclusões são tiradas a partir das informações disponíveis, mas que podem estar erradas." },
  { id: 5, topicoId: 2, provaId: 1, frente: "O exemplo 'Se bancos pedem COBOL e Jailson trabalha em um banco, talvez ele programe em COBOL' ilustra qual raciocínio?", verso: "O Raciocínio Abdutivo." },
  { id: 6, topicoId: 2, provaId: 1, frente: "O exemplo 'Robert é sociólogo -> Sociólogo é bacharel -> Logo, Robert é bacharel' ilustra qual raciocínio?", verso: "O Raciocínio Dedutivo." },

  // Tópico 3 – O que é IA?
  { id: 7, topicoId: 3, provaId: 1, frente: "Pelo critério comportamental, como sabemos se uma habilidade foi reproduzida na IA?", verso: "Quando a máquina consegue produzir e exibir um comportamento semelhante ao dos humanos na mesma tarefa." },
  { id: 8, topicoId: 3, provaId: 1, frente: "O que dita o critério de Funcionalidade na Inteligência Artificial?", verso: "Que não importa como o sistema realiza a função por baixo dos panos, o importante é apenas se ela foi realizada de forma eficaz." },
  { id: 9, topicoId: 3, provaId: 1, frente: "Qual o principal argumento do critério Cognitivo?", verso: "Que se a máquina não sente, não entende ou não tem consciência real, é apenas uma simulação superficial e não reprodução genuína." },
  { id: 10, topicoId: 3, provaId: 1, frente: "Como o Teste de Turing funciona?", verso: "O teste consiste em colocar um humano para conversar com uma máquina, se o humano não conseguir identificar se está quem está conversando com ele é humano ou uma máquina, então a máquina passou no teste." },
  { id: 11, topicoId: 3, provaId: 1, frente: "Para qual finadlidade o Teste de Turing é utilizadao?", verso: "Para descobrir se a máquina pode ser considerada intêligente ou não." },

  // Tópico 4 – Agentes Racionais e Inteligentes
  { id: 12, topicoId: 4, provaId: 1, frente: "O que avaliam as 'Medidas de performance' (Performance measure)?", verso: "São critérios projetados para medir o nível de sucesso do agente após uma sequência de ações no ambiente." },
  { id: 13, topicoId: 4, provaId: 1, frente: "Um agente inteligente age visando maximizar o quê?", verso: "Maximizar o valor esperado das suas medidas de desempenho." },
  { id: 14, topicoId: 4, provaId: 1, frente: "No modelo PEAS, qual é o papel dos Sensores (Sensors)?", verso: "São as entradas. Os meios pelos quais o agente consegue sentir e ler as propriedades do ambiente ao seu redor." },
  { id: 15, topicoId: 4, provaId: 1, frente: "No modelo PEAS, qual é o papel dos Atuadores (Actuators)?", verso: "São as saídas. Os meios e ferramentas que o agente utiliza para executar ações e alterar o ambiente." },
  { id: 16, topicoId: 4, provaId: 1, frente: "No modelo PEAS, o que o Environment (Ambiente) define?", verso: "SDefine o ambiente em que o agente estará submetido." },
  { id: 17, topicoId: 4, provaId: 1, frente: "No modelo PEAS, a função de Performance é utilizada com qual finalidade?", verso: "A finalidade da função de Performance é definir como o sucesso do agente será avaliado. Pode ter múltiplos critérios"},
  { id: 18, topicoId: 4, provaId: 1, frente: "Por que o ChatGPT é definido como Reativo ao usuário?", verso: "Porque ele não monitora o ambiente de forma independente; ele aguarda um 'input' (ordem) para processar uma resposta." },
  { id: 19, topicoId: 4, provaId: 1, frente: "O que define a 'Racionalidade' de um agente?", verso: "É a capacidade de tomar a ação que se espera que maximize o seu sucesso, com base no que ele percebe." },

  // Tópico 5 – Tipos de Ambiente
  { id: 17, topicoId: 5, provaId: 1, frente: "O que caracteriza um ambiente Totalmente observável?", verso: "O agente tem acesso completo ao estado do ambiente a cada momento." },
  { id: 18, topicoId: 5, provaId: 1, frente: "O que caracteriza um ambiente Parcialmente observável?", verso: "O agente não tem acesso ao ambiente completo, podendo ocorrer mudanças que não serão do seu conhecimento." },
  { id: 21, topicoId: 5, provaId: 1, frente: "O que caracteriza um ambiente Episódico?", verso: "A experiência do agente é dividida em episódios independentes entre si." },
  { id: 22, topicoId: 5, provaId: 1, frente: "O que caracteriza um ambiente Sequencial?", verso: "A próxima ação do agente depende das ações anteriores." },
  { id: 23, topicoId: 5, provaId: 1, frente: "O que caracteriza um ambiente Dinâmico?", verso: "O ambiente pode sofrer alterações enquanto o agente toma decisões." },
  { id: 24, topicoId: 5, provaId: 1, frente: "O que caracteriza um ambiente Estático?", verso: "O ambiente não sofre alterações." },
  { id: 25, topicoId: 5, provaId: 1, frente: "O que caracteriza um ambiente Discreto?", verso: "É possível enumerar as ações e percepções do ambiente." },
  { id: 26, topicoId: 5, provaId: 1, frente: "O que caracteriza um ambiente Contínuo?", verso: "Não é possível enumerar todas as ações e percepções do ambiente." },
  { id: 27, topicoId: 5, provaId: 1, frente: "O que caracteriza um ambiente Single-agent?", verso: "O ambiente possui apenas um agente." },
  { id: 28, topicoId: 5, provaId: 1, frente: "O que caracteriza um ambiente Multi-agent?", verso: "O ambiente possui múltiplos agentes que podem cooperar ou competir entre si." },
  { id: 29, topicoId: 5, provaId: 1, frente: "Qual a diferença central de um ambiente Estático para um Dinâmico?", verso: "O estático permanece paralisado; o dinâmico sofre alterações externas contínuas enquanto o agente 'pensa' para tomar sua decisão." },
  { id: 30, topicoId: 5, provaId: 1, frente: "Um cenário de trânsito em que o layout muda constantemente é considerado um ambiente Contínuo ou Discreto?", verso: "Contínuo, pois as possíveis percepções e as variáveis de ação não podem ser exatamente enumeradas ou contadas limitadamente." },
  { id: 31, topicoId: 5, provaId: 1, frente: "Se vários agentes interagem cooperando ou competindo no mesmo cenário, como chamamos esse ambiente?", verso: "Multi-agent (Múltiplos agentes)" },

  // Tópico 6 – Tipos de Agentes
  { id: 32, topicoId: 6, provaId: 1, frente: "Por que apenas o agente reativo baseado em modelo consegue operar em ambientes parcialmente observáveis?", verso: "Porque, diferente do reativo simples, ele mantém uma memória/histórico de percepções e ações passadas para compensar o que ele não enxerga." },
  { id: 33, topicoId: 6, provaId: 1, frente: "O que o agente baseado em objetivo utiliza para ajudar em suas decisões?", verso: "Ele utiliza técnicas focadas de busca e planejamento orientadas a chegar ao estado final." },
  { id: 34, topicoId: 6, provaId: 1, frente: "O que orienta as decisões de um agente baseado em utilidade?", verso: "Funções matemáticas de utilidade que atribuem valores e recompensas aos estados para priorizar a melhor rota (mais rápida/barata)." },
  { id: 35, topicoId: 6, provaId: 1, frente: "O agente reativo simples precisa que o ambiente seja totalmente ou parcialmente observável?", verso: "Totalmente observável, pois não tem memória de curto ou longo prazo para preencher lacunas de visão." },

  // Tópico 7 – Problemas de Busca
  { id: 36, topicoId: 7, provaId: 1, frente: "No contexto de busca, o que significa a Função Sucessora?", verso: "É  o conjunto de ações que o agente pode tomar daquele ponto em diante e as consequências que elas vão gerar." },
  { id: 37, topicoId: 7, provaId: 1, frente: "Como é calculado o Custo do caminho?", verso: "É o somatório numérico dos custos individuais de cada aresta/ação que o agente tomou ao longo do seu trajeto." },
  { id: 38, topicoId: 7, provaId: 1, frente: "O que define a 'Solução' formal de um problema de busca?", verso: "A solução é exatamente a sequência inteira de ações (o trajeto mapeado) que sai do estado inicial e chega ao estado objetivo." },
  { id: 39, topicoId: 7, provaId: 1, frente: "Qual o tipo de agente preferido para ser aplicado em algoritmos de Problemas de Busca?", verso: "Agentes baseados em objetivo inseridos em ambientes observáveis, discretos e determinísticos." },

  { id: 40, topicoId: 7, provaId: 1, frente: "O que é o Espaço de estados em um problema de busca?", verso: "É o conjunto de todos os estados possíveis que podem ser alcançados a partir do estado inicial." },
  { id: 41, topicoId: 7, provaId: 1, frente: "O que é o Estado inicial em um problema de busca?", verso: "É o local ou estado onde o agente começa a busca." },
  { id: 42, topicoId: 7, provaId: 1, frente: "Qual a função do Teste de objetivo em um problema de busca?", verso: "Determinar se o agente alcançou o objetivo desejado." },
  { id: 43, topicoId: 7, provaId: 1, frente: "O que é Abstração em problemas de busca?", verso: "É o processo de remover detalhes da representação do problema para torná-lo viável de resolver." },
  { id: 44, topicoId: 7, provaId: 1, frente: "Qual o problema de um modelo excessivamente detalhado em problemas de busca?",verso: "Ele pode se tornar inviável de resolver."},
  { id: 45, topicoId: 7, provaId: 1, frente: "Qual o problema de um modelo com poucos detalhes em problemas de busca?", verso: "Ele pode não permitir uma solução adequada." },

  // Tópico 8 – Grafos e Árvores de Busca
  { id: 46, topicoId: 8, provaId: 1, frente: "No Grafo de espaço de estado, o que o 'Teste de objetivo' tenta encontrar?", verso: "Ele tenta identificar se o nó atual pertence ao conjunto restrito de nós que foram especificados previamente como meta/objetivo." },
  { id: 47, topicoId: 8, provaId: 1, frente: "Em um Grafo de espaço de estados, quantas vezes um mesmo estado ocorre?", verso: "Cada estado do problema ocorre apenas uma única vez na sua representação." },
  { id: 48, topicoId: 8, provaId: 1, frente: "O que cada nó de uma Árvore de busca representa na prática?", verso: "Representa um caminho completo e individual mapeado dentro do grafo de espaço de estados até aquele determinado momento." },
  { id: 49, topicoId: 8, provaId: 1, frente: "Na maioria das aplicações de problemas complexos, a árvore é desenhada inteiramente na memória de uma vez?", verso: "Não, isso raramente ocorre porque a quantidade de ramificações tornaria a alocação de memória impossível." },
  { id: 50, topicoId: 8, provaId: 1, frente: "O que são 'Nós' (Nodes) em um grafo?", verso: "São os círculos que representam cada estado ou situação possível no problema." },
  { id: 51, topicoId: 8, provaId: 1, frente: "O que são 'Arestas' (Edges) em um grafo?", verso: "São as linhas que conectam os nós, representando as ações e seus custos." },

  // Tópico 9 – Algoritmos Não Informados
  { id: 52, topicoId: 9, provaId: 1, frente: "Qual é o outro termo clássico pelo qual os Algoritmos Não Informados são conhecidos?", verso: "Busca cega." },
  { id: 53, topicoId: 9, provaId: 1, frente: "O que caracteriza os Algoritmos Não Informados?", verso: "Utilizam apenas as informações fornecidas na descrição do problema, sem conhecimento adicional." },
  { id: 54, topicoId: 9, provaId: 1, frente: "O que significa Fringe em algoritmos de busca?", verso: "É o próximo nó que será expandido." },
  { id: 55, topicoId: 9, provaId: 1, frente: "O que significa Expansão em algoritmos de busca?", verso: "É o processo de pegar um nó e expandir seus filhos." },
  { id: 56, topicoId: 9, provaId: 1, frente: "O que são Estratégias de exploração?", verso: "São estratégias utilizadas para escolher qual será o próximo nó expandido." },
  { id: 57, topicoId: 9, provaId: 1, frente: "O que significa a propriedade 'Completo' em algoritmos de busca?", verso: "Significa que, se existir uma solução, o algoritmo garante que ela será encontrada." },
  { id: 58, topicoId: 9, provaId: 1, frente: "O que significa a propriedade 'Ótimo' em algoritmos de busca?", verso: "Significa que o algoritmo encontra a solução de menor custo entre todas as possíveis." },
  { id: 59, topicoId: 9, provaId: 1, frente: "O que mede a Complexidade de tempo em algoritmos de busca?", verso: "Mede quanto tempo o algoritmo leva para encontrar a solução." },
  { id: 60, topicoId: 9, provaId: 1, frente: "O que mede a Complexidade de espaço em algoritmos de busca?", verso: "Mede quanta memória é necessária para realizar a busca." },
  { id: 61, topicoId: 9, provaId: 1, frente: "O que representa a notação 'b' em complexidade de busca?", verso: "Representa o fator de ramificação, ou seja, o número médio de filhos de cada nó." },
  { id: 62, topicoId: 9, provaId: 1, frente: "O que representa a notação 'm' em complexidade de busca?", verso: "Representa a profundidade máxima da árvore de busca." },
  { id: 63, topicoId: 9, provaId: 1, frente: "O que representa a notação 'd' em complexidade de busca?", verso: "Representa a profundidade limite." },
  { id: 64, topicoId: 9, provaId: 1, frente: "O que representa a notação 's' em complexidade de busca?", verso: "Representa a profundidade da primeira solução encontrada." },
  { id: 65, topicoId: 9, provaId: 1, frente: "O que representa a notação 'C*' em complexidade de busca?", verso: "Representa o custo da melhor solução possível." },
  { id: 66, topicoId: 9, provaId: 1, frente: "O que representa a notação 'ε' em complexidade de busca?", verso: "Representa o menor custo positivo de uma aresta." },
  { id: 67, topicoId: 9, provaId: 1, frente: "Qual é a principal limitação da busca não informada?", verso: "Ela explora opções em todas as direções sem informações sobre a localização do objetivo." },
  { id: 68, topicoId: 9, provaId: 1, frente: "Por que a busca não informada é ineficiente em problemas de larga escala?", verso: "Porque não possui informações sobre a direção do objetivo e acaba explorando muitos estados desnecessários." },
  { id: 69, topicoId: 9, provaId: 1, frente: "Qual algoritmo é mais indicado para encontrar o menor caminho?", verso: "BFS." },
  { id: 70, topicoId: 9, provaId: 1, frente: "Qual algoritmo é mais indicado para utilizar menos memória?", verso: "DFS." },
  { id: 71, topicoId: 9, provaId: 1, frente: "Qual algoritmo é mais indicado para encontrar o menor custo?", verso: "UCS." },
  { id: 72, topicoId: 9, provaId: 1, frente: "O custo é considerado nos algoritmos BFS e DFS?", verso: "Não. BFS e DFS não consideram custo." },
  { id: 73, topicoId: 9, provaId: 1, frente: "Qual algoritmo tende a exigir menos processamento por visitar menos nós?", verso: "Busca em profundidade (DFS)." },
  { id: 74, topicoId: 9, provaId: 1, frente: "O que deve ser considerado ao escolher um algoritmo de busca?", verso: "O número de passos necessários para alcançar a solução." },

  // Tópico 10 – DFS e BFS
  { id: 75, topicoId: 10, provaId: 1, frente: "Qual estrutura de dados a Busca em Profundidade (DFS) utiliza?", verso: "Utiliza uma pilha (LIFO)." },
  { id: 76, topicoId: 10, provaId: 1, frente: "A Busca em Profundidade (DFS) é completa?", verso: "Apenas se houver prevenção de ciclos." },
  { id: 77, topicoId: 10, provaId: 1, frente: "Qual estrutura de dados a Busca em Largura (BFS) utiliza?", verso: "Utiliza uma fila (FIFO)." },
  { id: 78, topicoId: 10, provaId: 1, frente: "A Busca em Largura (BFS) é completa?", verso: "Sim, se a profundidade da solução for finita." },
  { id: 79, topicoId: 10, provaId: 1, frente: "A Busca em Largura (BFS) é ótima?", verso: "Apenas se todos os custos das arestas forem iguais." },
  { id: 80, topicoId: 10, provaId: 1, frente: "A Busca em Profundidade (DFS) consegue achar o custo ótimo?", verso: "Não. A DFS encontra primeiro a solução que estiver mais à esquerda no mapa, independentemente dela ser mais profunda ou cara." },
  { id: 81, topicoId: 10, provaId: 1, frente: "Qual é a Complexidade de Espaço da Busca em Largura (BFS)?", verso: "Consome muita memória: O(b<sup>s</sup>)." },
  { id: 82, topicoId: 10, provaId: 1, frente: "Em qual cenário extremo a Busca em Profundidade (DFS) deixa de ser Completa?", verso: "Se não houver mecanismos para prevenir ciclos repetitivos, o algoritmo pode ficar preso em um galho infinito." },
  { id: 83, topicoId: 10, provaId: 1, frente: "Entre a DFS e a BFS, qual prioriza expandir os vértices vizinhos do nível atual antes de descer as ramificações?", verso: "A Busca em Largura (BFS)." },

  // Tópico 11 – UCS, DLS e IDS
  { id: 84, topicoId: 11, provaId: 1, frente: "A Busca de Custo Uniforme (UCS) é completa?", verso: "Sim, assumindo custos positivos e solução de custo finito." },
  { id: 85, topicoId: 11, provaId: 1, frente: "A Busca de Custo Uniforme (UCS) é ótima?", verso: "Sim." },
  { id: 86, topicoId: 11, provaId: 1, frente: "Qual a complexidade de tempo da Busca de Custo Uniforme (UCS)?", verso: "O(b<sup>C*/ε</sup>)." },
  { id: 87, topicoId: 11, provaId: 1, frente: "Qual a complexidade de espaço da Busca de Custo Uniforme (UCS)?", verso: "O(b<sup>C*/ε</sup>)." },
  { id: 88, topicoId: 11, provaId: 1, frente: "A Busca em Profundidade com Limite (DLS) é completa?", verso: "Não, se a solução estiver em profundidade maior que d." },
  { id: 89, topicoId: 11, provaId: 1, frente: "A Busca em Profundidade com Limite (DLS) é ótima?", verso: "Não." },
  { id: 90, topicoId: 11, provaId: 1, frente: "Qual a complexidade de tempo da Busca em Profundidade com Limite (DLS)?", verso: "O(b<sup>d</sup>)." },
  { id: 91, topicoId: 11, provaId: 1, frente: "Qual a complexidade de espaço da Busca em Profundidade com Limite (DLS)?", verso: "O(bd)." },
  { id: 92, topicoId: 11, provaId: 1, frente: "A Busca com Aprofundamento Iterativo (IDS) é completa?", verso: "Sim." },
  { id: 93, topicoId: 11, provaId: 1, frente: "A Busca com Aprofundamento Iterativo (IDS) é ótima?", verso: "Sim." },
  { id: 94, topicoId: 11, provaId: 1, frente: "Qual a complexidade de tempo da Busca com Aprofundamento Iterativo (IDS)?", verso: "O(b<sup>d</sup>)." },
  { id: 95, topicoId: 11, provaId: 1, frente: "Qual a complexidade de espaço da Busca com Aprofundamento Iterativo (IDS)?", verso: "O(bd)." },
  { id: 96, topicoId: 11, provaId: 1, frente: "O algoritmo UCS foca os seus esforços de ramificação em qual métrica?", verso: "Ele expande sempre o vértice ou ramificação que possui o menor custo financeiro acumulado até ali." },
  { id: 97, topicoId: 11, provaId: 1, frente: "Na Busca em Profundidade com Limite (DLS), o que é a variável 'd'?", verso: "É a barreira/limite máximo de profundidade que o algoritmo tem permissão para explorar." },
  { id: 98, topicoId: 11, provaId: 1, frente: "Qual estrutura de dados gerencia a expansão de menor valor na Busca de Custo Uniforme (UCS)?", verso: "A Fila de Prioridades (Priority Queue)." },

  // Tópico 12 – Busca Informada
  { id: 99, topicoId: 12, provaId: 1, frente: "O que diferencia a busca informada da cega na hora de decidir o caminho?", verso: "Ela utiliza informações extras e de domínio do problema (Heurísticas) para estimar qual braço está mais perto do alvo." },
  { id: 100, topicoId: 12, provaId: 1, frente: "A heurística fornece um mapa completo de todo o caminho perfeito da raiz até o nó objetivo?", verso: "Não, a orientação matemática da heurística serve apenas para avaliar qual sucessor local adjacente parece ser melhor." },
  { id: 101, topicoId: 12, provaId: 1, frente: "O que a heurística visa melhorar drasticamente no desempenho do software?", verso: "Reduzir o imenso custo computacional desnecessário e acelerar a obtenção da solução isolando áreas irrelevantes." },
  { id: 102, topicoId: 12, provaId: 1, frente: "A função heurística h(n) estima qual distância ou peso do problema?", verso: "Ela estima puramente o quão perto (o custo) do estado atual 'n' até alcançar o estado objetivo." },

  // Tópico 13 – Greedy Search
  { id: 103, topicoId: 13, provaId: 1, frente: "Na fórmula do Greedy Search, o que indica que alcançamos nosso estado objetivo?", verso: "Quando a estimativa h(n) bate o valor zero." },
  { id: 104, topicoId: 13, provaId: 1, frente: "O algoritmo Greedy Search considera ou ignora o histórico de custos que ele já gastou?", verso: "Ele ignora totalmente. Baseia-se exclusivamente em quão promissor o próximo nó parece ser (h(n))." },
  { id: 105, topicoId: 13, provaId: 1, frente: "A Greedy Search pode ficar presa infinitamente num problema?", verso: "Sim. Como não garante otimidade nem completude, sem checagem de estados ela se perde em loops." },
  { id: 106, topicoId: 13, provaId: 1, frente: "Num cenário em que a heurística utilizada seja terrível, qual a complexidade de tempo da Busca Gulosa?", verso: "Ela regride e performa como o pior caso da profundidade: O(b<sup>m</sup>)." },
  { id: 107, topicoId: 13, provaId: 1, frente: "A Greedy Search é completa?", verso: "Não. Ela pode nunca encontrar uma solução e ficar presa em ciclos." },
  { id: 108, topicoId: 13, provaId: 1, frente: "A Greedy Search é ótima?", verso: "Não. Nem sempre encontra o melhor caminho." },

  // Tópico 14 – A* Search
  { id: 109, topicoId: 14, provaId: 1, frente: "O que representa h(n) na fórmula do A*?", verso: "Representa a estimativa heurística até o objetivo." },
  { id: 110, topicoId: 14, provaId: 1, frente: "O que representa f(n) na fórmula do A*?", verso: "Representa o valor utilizado para escolher o próximo nó a ser expandido." },
  { id: 111, topicoId: 14, provaId: 1, frente: "A busca A* é completa?", verso: "Sim." },
  { id: 112, topicoId: 14, provaId: 1, frente: "O que representa g(n) na fórmula do A*?", verso: "Representa o custo acumulado até o estado atual." },
  { id: 113, topicoId: 14, provaId: 1, frente: "O algoritmo A* foi concebido juntando os príncipios de quais duas buscas?", verso: "A Busca de Custo Uniforme (UCS) para garantir preço, e a Greedy Search para garantir rumo/foco ao alvo." },
  { id: 114, topicoId: 14, provaId: 1, frente: "Para a Busca A* ser atestada como de fato 'Ótima', quais devem ser as propriedades da Heurística escolhida?", verso: "A heurística acoplada nela precisa obrigatoriamente ser Aceitável (admissível) e Consistente." },
  { id: 115, topicoId: 14, provaId: 1, frente: "Qual comportamento visual pode descrever a expansão dos nós feita pelo Algoritmo A*?", verso: "O A* adiciona 'contornos gradualmente' direcionados (em formato de ondas radiais) indo em direção do estado objetivo." },

  // Tópico 15 – Admissibilidade
  { id: 116, topicoId: 15, provaId: 1, frente: "O que define uma Heurística Inadmissível no A*?", verso: "Ela joga as estimativas para o alto, superestimando o custo de rotas boas e fazendo a IA perder as soluções ótimas do problema." },
  { id: 117, topicoId: 15, provaId: 1, frente: "O que define uma Heurística Adimissível no A*?", verso: "Ela não superestima o custo, levando o algoritmo a encontrar o melhor caminho." },
  { id: 118, topicoId: 15, provaId: 1, frente: "Qual fórmula prova que a Heurística é Admissível frente ao custo real h*(n)?", verso: "A premissa de que a estimativa h(n) nunca pode ser maior que o real: 0 ≤ h(n) ≤ h*(n)." },
  { id: 119, topicoId: 15, provaId: 1, frente: "Como se obtém uma Heurística Admissível relaxando um problema na IA?", verso: "Você remove/afrouxa restrições físicas do problema real original (ex: deixar ignorar paredes). O custo rápido dessa versão torna-se uma excelente estimativa." },
  { id: 120, topicoId: 15, provaId: 1, frente: "Se no seu código você tem acesso a diversas heurísticas diferentes porém admissíveis, qual você injeta no A*?", verso: "Aquela que jogar o valor mais ALTO (pois corta caminhos inúteis rápido), desde que, logicamente, não ultrapasse a barreira admissível h*(n)." },

  // Tópico 16 – Game Theory e Adversarial Search
  { id: 121, topicoId: 16, provaId: 1, frente: "Para que um conceito se enquadre em teoria dos jogos na máquina, quais condições ele deve cumprir?", verso: "Ter regras nítidas, ter conjunto limitado/finito de jogadas, agentes agindo de modo racional e resultados definidos com clareza." },
  { id: 122, topicoId: 16, provaId: 1, frente: "No que os chamados Zero-Sum Games (Jogos de Soma Zero) diferem dos demais?", verso: "Eles englobam a competição pura, onde o dano de um é estritamente o lucro do outro, ou seja, funções de utilidade totalmente opostas." },
  { id: 123, topicoId: 16, provaId: 1, frente: "O que flexibiliza as regras diplomáticas nos General Games?", verso: "Que os agentes não têm utilidades presas. Eles podem trair (competir), unir-se temporariamente (cooperar) ou ignorar uns aos outros." },
  { id: 124, topicoId: 16, provaId: 1, frente: "A métrica avaliada pelos agentes no estado terminal dos jogos chama-se custo de ramificação ou função de utilidade?", verso: "Função de utilidade (pois buscam ativamente maximizar a pontuação no último estado, não minimizar trajetos de custo)." },
  { id: 125, topicoId: 16, provaId: 1, frente: "O que é a Busca Adversarial?", verso: "É a busca realizada em ambientes competitivos onde o agente deve considerar as jogadas de um oponente que quer atrapalhá-lo." },
  

  // Tópico 17 – Algoritmo MINIMAX
  { id: 126, topicoId: 17, provaId: 1, frente: "Enquanto o agente principal do Minimax (o jogador MAX) foca em maximizar seus ganhos de utilidade, como ele aborda o adversário (MIN)?", verso: "Ele cria lógicas ativas para sufocar e minimizar completamente as opções de utilidade do inimigo no tabuleiro." },
  { id: 127, topicoId: 17, provaId: 1, frente: "O MINIMAX faz um trajeto defensivo, isso porque ele assume que o oponente MIN se comportará de qual maneira no futuro?", verso: "O MINIMAX teme o pior. Ele assume que o MIN é inteligente e jogará sempre da forma perfeita e mais dolorosa para o próprio MAX." },
  { id: 128, topicoId: 17, provaId: 1, frente: "De acordo com o funcionamento 'bottom-up' do algoritmo Minimax, de onde ele extrai seus valores numéricos reais?", verso: "Diretamente das 'folhas' da árvore (finais do jogo) e vai retornando esses números de vitória ou derrota para cima até chegar ao estado/raiz do turno atual." },
  { id: 129, topicoId: 17, provaId: 1, frente: "Se um humano cometer um erro contra um bot Minimax, a pontuação programada dele diminui ou é perdida?", verso: "Pelo contrário. Como ele não comete erros, a pontuação que estava predefinida será jogada ainda mais para cima, explorando a falha subótima humana."},


  // Tópico 19 – Poda Alfa-Beta
  { id: 130, topicoId: 18, provaId: 1, frente: "Qual o objetivo principal da <b>Poda Alfa-Beta</b> no algoritmo Minimax?", verso: "Evitar a expansão de nós que <b>não afetarão a decisão final</b>, reduzindo o número de estados explorados em árvores muito extensas." },
  { id: 131, topicoId: 18, provaId: 1, frente: "Defina o <b>Valor Alfa (α)</b> e seu valor inicial.", verso: "É o melhor valor (maior) encontrado pelo <b>MAX</b> até o momento. Nunca diminui. Inicialmente é <b>-<span style='font-size: 1.2em;'>∞</span></b>." },
  { id: 132, topicoId: 18, provaId: 1, frente: "Defina o <b>Valor Beta (β)</b> e seu valor inicial.", verso: "É o melhor valor (menor) encontrado pelo <b>MIN</b> até o momento. Nunca aumenta. Inicialmente é <b>+<span style='font-size: 1.2em;'>∞</span></b>." },
  { id: 133, topicoId: 18, provaId: 1, frente: "Qual a condição matemática para ocorrer uma <b>Poda Alfa</b>?", verso: "Ocorre em um nó <b>MIN</b> quando seu valor Beta se torna menor ou igual ao Alfa de um ancestral: <b>β(n) ≤ α(i)</b>." },
  { id: 134, topicoId: 18, provaId: 1, frente: "Qual a condição matemática para ocorrer uma <b>Poda Beta</b>?", verso: "Ocorre em um nó <b>MAX</b> quando seu valor Alfa se torna maior ou igual ao Beta de um ancestral: <b>α(n) ≥ β(i)</b>." },
  { id: 135, topicoId: 18, provaId: 1, frente: "Verdadeiro ou Falso: A poda Alfa-Beta altera o resultado final da busca em comparação ao Minimax puro.", verso: "<b>Falso.</b> A poda não afeta o resultado final da busca; ela apenas economiza tempo computacional." },
  { id: 136, topicoId: 18, provaId: 1, frente: "Como a <b>ordem de busca</b> dos nós afeta o algoritmo?", verso: "A quantidade de podas depende da ordem. Uma boa ordenação pode <b>dobrar a profundidade</b> da pesquisa, reduzindo a complexidade de tempo para <b>O(b<sup>m/2</sup>)</b>." },
  { id: 137, topicoId: 18, provaId: 1, frente: "Por que a utilidade dos estados é calculada <b>dinamicamente</b> e não pré-armazenada?", verso: "Porque o número de combinações cresce exponencialmente, tornando <b>inviável</b> armazenar a utilidade de todos os estados possíveis na memória." },
  
  /* ── DECISÕES IMPERFEITAS ── */
  { id: 138, topicoId: 20, provaId: 1, frente: "Qual a principal limitação do algoritmo <b>MINIMAX puro</b> em jogos reais?", verso: "A necessidade de expandir a árvore até os <b>estados terminais</b>, o que consome tempo excessivo em jogos complexos (como o Xadrez)." },
  { id: 139, topicoId: 20, provaId: 1, frente: "O que caracteriza uma <b>Decisão Imperfeita</b> na busca competitiva?", verso: "A interrupção da pesquisa em uma <b>profundidade limitada (d)</b>, sem atingir obrigatoriamente os nós folha terminais." },
  { id: 140, topicoId: 20, provaId: 1, frente: "O que substitui a função de utilidade em buscas de profundidade limitada?", verso: "A <b>Função de Avaliação (Heurística)</b>, que estima a utilidade esperada de um nó que ainda não é terminal." },
  { id: 141, topicoId: 20, provaId: 1, frente: "Qual a consequência de usar <b>Decisões Imperfeitas</b> quanto à qualidade da jogada?", verso: "A <b>garantia de jogo ótimo desaparece</b>, uma vez que o algoritmo passa a trabalhar com estimativas heurísticas."},

  /* ── FUNÇÃO DE AVALIAÇÃO ── */
  { id: 142, topicoId: 20, provaId: 1, frente: "Explique o <b>Trade-off</b> na escolha de funções de avaliação.", verso: "Funções <b>precisas</b> são lentas (menos tempo para buscar fundo na árvore); funções <b>rápidas</b> permitem buscas em níveis mais profundos." },
  { id: 143, topicoId: 20, provaId: 1, frente: "Como a escala de valores funciona em <b>Estados Intermediários</b>?", verso: "Diferente dos terminais (fixos), podem ter <b>qualquer valor</b> (ex: 5, 20, 100), onde valores maiores beneficiam o MAX e menores o MIN." },
  { id: 144, topicoId: 20, provaId: 1, frente: "O <b>Teste de Objetivo</b> deve ser alterado ao usar funções de avaliação?", verso: "<b>Não.</b> Ele deve ser sempre baseado nas <b>regras do jogo</b> (ex: vitória real), independentemente da pontuação heurística calculada." },

  // ── PROVA 2 · Tópico 21 – Busca Local ──
  { id: 145, topicoId: 21, provaId: 2, frente: "Qual é a principal vantagem da busca local em relação à memória?", verso: "Ela consome pouca memória porque não armazena a árvore de busca, trabalhando apenas com o estado atual de forma iterativa." },
  { id: 146, topicoId: 21, provaId: 2, frente: "O que representam as 'configurações' no espaço de estados da busca local?", verso: "Representam o conjunto completo de todas as soluções possíveis para o problema, mesmo aquelas com conflitos estruturais." },
  { id: 147, topicoId: 21, provaId: 2, frente: "Qual é o grande risco de usar apenas decisões locais na exploração de vizinhos?", verso: "O algoritmo ficar preso em um máximo local e considerá-lo a resposta final, ignorando o verdadeiro máximo global." },
  { id: 148, topicoId: 21, provaId: 2, frente: "No problema das 8 rainhas resolvido por busca local, o que define cada configuração?", verso: "O posicionamento de todas as 8 rainhas simultaneamente no tabuleiro, independentemente de haver ataques mútuos." },
  { id: 149, topicoId: 21, provaId: 2, frente: "O que diferencia um máximo local de um máximo global na topologia de busca?", verso: "O máximo local é maior apenas que seus vizinhos diretos; o máximo global é o pico absoluto e mais alto de toda a paisagem." },
  { id: 150, topicoId: 21, provaId: 2, frente: "O que diferencia um mínimo local de um mínimo global na topologia de busca?", verso: "O mínimo local é menor que seus vizinhos imediatos; o mínimo global representa o ponto mais baixo e ideal de toda a paisagem." },
  { id: 151, topicoId: 21, provaId: 2, frente: "Qual método caminha em direção ao ponto mais baixo da função objetivo?", verso: "A Descida de Gradiente (Gradient Descent), usada para encontrar o mínimo global." },
  { id: 152, topicoId: 21, provaId: 2, frente: "Qual método realiza a estratégia contrária à descida de gradiente buscando o pico?", verso: "A Subida de Encosta (Hill Climbing), que busca alcançar o máximo global caminhando para estados progressivamente maiores." },

  // ── PROVA 2 · Tópico 22 – Hill Climbing ──
  { id: 153, topicoId: 22, provaId: 2, frente: "Por que o Hill Climbing tradicional é apelidado de 'busca local gulosa'?", verso: "Porque ele avalia apenas os vizinhos imediatos e escolhe a melhor opção instantânea, sem planejar os caminhos futuros." },
  { id: 154, topicoId: 22, provaId: 2, frente: "Sob qual condição o algoritmo Hill Climbing encerra sua execução?", verso: "Quando nenhum dos estados vizinhos possui um valor superior ao do estado atual." },
  { id: 155, topicoId: 22, provaId: 2, frente: "O que são 'Cordilheiras' no contexto espacial do Hill Climbing?", verso: "Extensas sequências de máximos locais que fazem o algoritmo parar antes de atingir o pico global." },
  { id: 156, topicoId: 22, provaId: 2, frente: "O que caracteriza a anomalia topológica chamada de 'Platô'?", verso: "Uma região plana onde todos os vizinhos têm exatamente o mesmo valor, gerando buscas laterais infinitas ou paradas prematuras." },
  { id: 157, topicoId: 22, provaId: 2, frente: "O que são 'Shoulders' (ombros) e qual o desafio que trazem?", verso: "Platôs com saídas para picos melhores, mas onde o algoritmo falha em detectar a direção correta para avançar." },
  { id: 158, topicoId: 22, provaId: 2, frente: "Em qual cenário geométrico específico o Hill Climbing garante otimalidade?", verso: "Em problemas convexos, onde há apenas um pico principal e nenhum máximo local intermediário." },
  { id: 159, topicoId: 22, provaId: 2, frente: "Como funciona a variante 'Random-Restart Hill Climbing'?", verso: "Ela executa o algoritmo repetidamente a partir de estados iniciais aleatórios, guardando o melhor resultado geral." },
  { id: 160, topicoId: 22, provaId: 2, frente: "O Random-Restart Hill Climbing consegue escapar de quais estruturas?", verso: "Ele consegue escapar de máximos locais e de shoulders, iniciando em uma nova região do espaço." },
  { id: 161, topicoId: 22, provaId: 2, frente: "O Random-Restart Hill Climbing resolve eficientemente o problema dos Platôs?", verso: "Não, ele ainda apresenta pouco ou nenhum progresso significativo dentro de regiões planas de platô." },

  // ── PROVA 2 · Tópico 23 – Simulated Annealing (Têmpera Simulada) ──
  { id: 162, topicoId: 23, provaId: 2, frente: "Qual técnica o Simulated Annealing combina com a subida de encosta para ser mais robusto?", verso: "Um processo de escolha aleatória baseado em probabilidade." },
  { id: 163, topicoId: 23, provaId: 2, frente: "Qual a função da variável 'temperatura' no Simulated Annealing?", verso: "Medir e ditar a probabilidade de o algoritmo aceitar voluntariamente um estado pior que o atual." },
  { id: 164, topicoId: 23, provaId: 2, frente: "Como o algoritmo se comporta dinamicamente quando a temperatura está alta?", verso: "Ele aceita movimentos ruins com frequência elevada, aumentando drasticamente a flexibilidade e a exploração." },
  { id: 165, topicoId: 23, provaId: 2, frente: "O que acontece com as escolhas ruins quando a temperatura fica baixa?", verso: "A aceitação de movimentos ruins despenca, restringindo o algoritmo a focar apenas em melhorias estritas." },
  { id: 166, topicoId: 23, provaId: 2, frente: "Qual o benefício prático de se permitir 'chacoalhar' a busca com movimentos piores?", verso: "Permitir que o algoritmo escape de armadilhas como máximos locais e explore novas regiões promissoras." },
  { id: 167, topicoId: 23, provaId: 2, frente: "Sob qual condição teórica estrita o Simulated Annealing é considerado ótimo?", verso: "Quando a temperatura diminui de forma infinitamente lenta e o algoritmo pode rodar sem limites temporais." },
  { id: 168, topicoId: 23, provaId: 2, frente: "Por que na aplicação prática o Simulated Annealing perde a característica de ótimo?", verso: "Porque atingir a convergência ideal demandaria um tempo de execução e custo computacional excessivamente altos." },
  { id: 169, topicoId: 23, provaId: 2, frente: "O Simulated Annealing é classificado como um algoritmo completo na prática?", verso: "Não, pois pode sofrer interrupções temporais ou demorar muito para localizar a solução." },

  // ── PROVA 2 · Tópico 24 – Local Beam Search (Busca em feixe local) ──
  { id: 170, topicoId: 24, provaId: 2, frente: "O que diferencia a memória do Local Beam Search do Hill Climbing?", verso: "Em vez de armazenar apenas 1 estado atual, ele mantém um conjunto simultâneo de (k) estados." },
  { id: 171, topicoId: 24, provaId: 2, frente: "Se configurarmos um fator (k = 5), como o Local Beam Search iniciará?", verso: "Ele iniciará gerando exatamente 5 estados iniciais totalmente aleatórios." },
  { id: 172, topicoId: 24, provaId: 2, frente: "Como funciona a seleção de novos estados a cada iteração do feixe local?", verso: "Ele gera todos os vizinhos possíveis dos (k) estados atuais e filtra apenas os (k) melhores absolutos entre todos." },
  { id: 173, topicoId: 24, provaId: 2, frente: "Quando ocorre o encerramento do algoritmo Local Beam Search?", verso: "Quando o estado que representa o objetivo do problema é encontrado entre os vizinhos gerados." },
  { id: 174, topicoId: 24, provaId: 2, frente: "Por que o Local Beam Search falha em garantir a otimalidade global?", verso: "Porque ele pode convergir o feixe prematuramente para máximos locais e descartar estados promissores precocemente." },
  { id: 175, topicoId: 24, provaId: 2, frente: "Por que o Local Beam Search não é considerado um algoritmo completo?", verso: "Porque limitar a busca a apenas (k) estados paralelos pode apagar caminhos cruciais para a solução única." },
  { id: 176, topicoId: 24, provaId: 2, frente: "Qual é o defeito crônico da versão tradicional do Local Beam Search?", verso: "A falta de diversidade, fazendo com que os (k) estados fiquem aglomerados em uma mesma região restrita do espaço." },
  { id: 177, topicoId: 24, provaId: 2, frente: "Como a Busca em Feixe Local Estocástica corrige a falta de diversidade?", verso: "Utilizando probabilidade combinada à função objetivo para selecionar os sucessores, dando chance a nós menos promissores." },
  { id: 178, topicoId: 24, provaId: 2, frente: "Qual a vantagem de dar chances a nós menos promissores no feixe estocástico?", verso: "Aumentar a diversidade genética da busca e evitar o aprisionamento coletivo em máximos locais." },
  { id: 179, topicoId: 24, provaId: 2, frente: "Quem determina a quantidade de ramificações mantidas ativas no Beam Search?", verso: "A constante inteira (k), definida antes do início da busca." },

  // ── PROVA 2 · Tópico 25 – Algoritmos Genéticos ──
  { id: 180, topicoId: 25, provaId: 2, frente: "Em qual princípio biológico os Algoritmos Genéticos (AG) são inspirados?", verso: "No processo de seleção natural e evolução das espécies." },
  { id: 181, topicoId: 25, provaId: 2, frente: "O que representa cada 'indivíduo' em uma população de Algoritmo Genético?", verso: "Representa uma possível solução (estado ou cromossomo) mapeada para o problema." },
  { id: 182, topicoId: 25, provaId: 2, frente: "Quem define quais indivíduos têm maior chance de gerar descendentes?", verso: "A função objetivo, que beneficia os indivíduos mais aptos." },
  { id: 183, topicoId: 25, provaId: 2, frente: "O que define conceitualmente uma 'geração' nos AGs?", verso: "O conjunto completo da população de indivíduos existente em um determinado momento da execução." },
  { id: 184, topicoId: 25, provaId: 2, frente: "Quais são as três etapas sequenciais pelas quais uma geração passa?", verso: "Seleção, Crossover (cruzamento) e Mutação." },
  { id: 185, topicoId: 25, provaId: 2, frente: "Por que os Algoritmos Genéticos são considerados não completos?", verso: "Porque podem convergir de forma prematura para extremos locais ou encerrar antes de mapear regiões vitais." },
  { id: 186, topicoId: 25, provaId: 2, frente: "Verdadeiro ou Falso: Algoritmos Genéticos sempre localizam o máximo global.", verso: "Falso. O resultado final gerado frequentemente pode ser apenas uma solução ótima local." },
  { id: 187, topicoId: 25, provaId: 2, frente: "Qual o princípio operacional do 'Algoritmo da Formiga'?", verso: "A simulação de depósito de feromônios, onde caminhos mais curtos acumulam mais rastro e atraem mais agentes." },
  { id: 188, topicoId: 25, provaId: 2, frente: "Qual o uso cotidiano comum para o Algoritmo da Formiga?", verso: "Otimização de trajetos e roteamento eficiente de tráfego em sistemas de GPS." },
  { id: 189, topicoId: 25, provaId: 2, frente: "O que acontece com os indivíduos a cada avanço de geração?", verso: "Espera-se que a população evolua e se torne gradualmente mais adaptada às restrições do problema." },

  // ── PROVA 2 · Tópico 26 – Representação de um problema com Algoritmos Genéticos ──
  { id: 190, topicoId: 26, provaId: 2, frente: "O que é um 'gene' e o que ele forma ao ser agrupado?", verso: "O gene é uma posição específica de um vetor finito (uma característica); o grupo deles forma o cromossomo." },
  { id: 191, topicoId: 26, provaId: 2, frente: "Por que a representação binária (0 e 1) é a mais comum para cromossomos?", verso: "Facilita a implementação computacional e simplifica a execução mecânica de crossover e mutação." },
  { id: 192, topicoId: 26, provaId: 2, frente: "Quando é recomendado trocar a codificação binária por uma codificação decimal?", verso: "Em problemas complexos que lidam com variáveis contínuas." },
  { id: 193, topicoId: 26, provaId: 2, frente: "O que mede o chamado 'Fitness Score' de um indivíduo?", verso: "A qualidade da solução proposta por ele, correspondendo diretamente ao valor da função objetivo." },
  { id: 194, topicoId: 26, provaId: 2, frente: "Como funciona a dinâmica do método 'Roulette Wheel Selection'?", verso: "A probabilidade de escolha é proporcional à aptidão; indivíduos com maior fitness ocupam mais fatias da roleta." },
  { id: 195, topicoId: 26, provaId: 2, frente: "Qual o defeito em permitir reposição pura na seleção por roleta?", verso: "O mesmo indivíduo cruzar consigo mesmo, gerando clones idênticos e destruindo a diversidade genética." },
  { id: 196, topicoId: 26, provaId: 2, frente: "Como funciona o operador biológico 'One-point crossover'?", verso: "Aplica um único ponto de corte fixo e troca as metades finais dos dois cromossomos pais." },
  { id: 197, topicoId: 26, provaId: 2, frente: "Qual a diferença do 'Uniform crossover' para os métodos de pontos de corte?", verso: "Cada gene do filho é sorteado individualmente e de forma independente entre o pai e a mãe." },
  { id: 198, topicoId: 26, provaId: 2, frente: "Qual o papel principal da etapa de 'Mutação'?", verso: "Introduzir modificações aleatórias em genes específicos para restaurar a diversidade e escapar de máximos locais." },
  { id: 199, topicoId: 26, provaId: 2, frente: "O que define o 'Elitismo' dentro da evolução das gerações?", verso: "A estratégia de isolar e transferir intactos os melhores indivíduos atuais diretamente para a próxima geração." },

  // ── PROVA 2 · Tópico 28 – Seleção de atributos (feature selection) ──
  { id: 200, topicoId: 28, provaId: 2, frente: "Qual a finalidade de aplicar a seleção de atributos em conjuntos de dados?", verso: "Remover dados inúteis ou desnecessários para turbinar e acelerar a performance dos modelos preditivos." },
  { id: 201, topicoId: 28, provaId: 2, frente: "Como atua o método de seleção conhecido como 'Filter'?", verso: "Avalia de forma estatística e isolada cada atributo, operando completamente independente do algoritmo de aprendizado." },
  { id: 202, topicoId: 28, provaId: 2, frente: "Como funciona a dinâmica de seleção de atributos do tipo 'Embedded'?", verso: "A seleção ocorre de forma integrada e automática durante o próprio processo de treinamento do modelo." },
  { id: 203, topicoId: 28, provaId: 2, frente: "Qual modelo clássico de Machine Learning realiza seleção Embedded nativamente?", verso: "As Árvores de Decisão, que identificam a importância das variáveis durante suas divisões (splits)." },
  { id: 204, topicoId: 28, provaId: 2, frente: "Como opera a estratégia de seleção por métodos de 'Wrapper'?", verso: "Ela treina o modelo repetidamente testando diferentes combinações de atributos e validando o score final." },
  { id: 205, topicoId: 28, provaId: 2, frente: "Qual o ponto de partida do algoritmo 'Forward Selection'?", verso: "Um modelo vazio, contendo exatamente zero atributos selecionados." },
  { id: 206, topicoId: 28, provaId: 2, frente: "Como o Forward Selection adiciona novas variáveis a cada passo?", verso: "Ele injeta a variável isolada que causa o maior incremento de performance no modelo atual." },
  { id: 207, topicoId: 28, provaId: 2, frente: "Qual a estratégia inversa aplicada pelo método 'Backward Elimination'?", verso: "Inicia o modelo com 100% dos atributos disponíveis e descarta a variável menos relevante a cada rodada." },
  { id: 208, topicoId: 28, provaId: 2, frente: "O que é mandatório configurar tanto no Forward quanto no Backward para evitar processamento infinito?", verso: "Critérios claros de parada, limitando a adição ou remoção quando não houver ganho estatístico significativo." }

];

export default flashcards;