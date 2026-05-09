// Each flashcard belongs to a topic (topicoId)
const flashcards = [
  // Tópico 1 – O que é Inteligência?
  { id: 1, topicoId: 1, frente: "Como podemos definir Inteligência?", verso: "É a habilidade de adquirir e aplicar conhecimento para resolver problemas complexos." },
  // Tópico 2 – Resolução Lógica

  // Tópico 2 – Resolução Lógica (Definições de Termos)
  { id: 2,  topicoId: 2, frente: "Como o Raciocínio Dedutivo tira suas conclusões?", verso: "Tira conclusões a partir de premissas conhecidas. A sentença criada é necessariamente verdadeira." },
  { id: 3, topicoId: 2, frente: "Como o Raciocínio Indutivo tira suas conclusões?", verso: "Tira conclusões apenas analisando uma parte dos objetos ou eventos. As conclusões são prováveis, e logicamente não garantidas." },
  { id: 4, topicoId: 2, frente: "Como o Raciocínio Abdutivo tira suas conclusões?", verso: "A conclusões são tiradas a partir das informações disponíveis, mas que podem estar erradas." },
  { id: 5, topicoId: 2, frente: "O exemplo 'Se bancos pedem COBOL e Jailson trabalha em um banco, talvez ele programe em COBOL' ilustra qual raciocínio?", verso: "O Raciocínio Abdutivo." },
  { id: 6, topicoId: 2, frente: "O exemplo 'Robert é sociólogo -> Sociólogo é bacharel -> Logo, Robert é bacharel' ilustra qual raciocínio?", verso: "O Raciocínio Dedutivo." },

  // Tópico 3 – O que é IA?
  { id: 7, topicoId: 3, frente: "Pelo critério comportamental, como sabemos se uma habilidade foi reproduzida na IA?", verso: "Quando a máquina consegue produzir e exibir um comportamento semelhante ao dos humanos na mesma tarefa." },
  { id: 8, topicoId: 3, frente: "O que dita o critério de Funcionalidade na Inteligência Artificial?", verso: "Que não importa como o sistema realiza a função por baixo dos panos, o importante é apenas se ela foi realizada de forma eficaz." },
  { id: 9, topicoId: 3, frente: "Qual o principal argumento do critério Cognitivo?", verso: "Que se a máquina não sente, não entende ou não tem consciência real, é apenas uma simulação superficial e não reprodução genuína." },
  { id: 10, topicoId: 3, frente: "Como o Teste de Turing funciona?", verso: "O teste consiste em colocar um humano para conversar com uma máquina, se o humano não conseguir identificar se está quem está conversando com ele é humano ou uma máquina, então a máquina passou no teste." },
  { id: 11, topicoId: 3, frente: "Para qual finadlidade o Teste de Turing é utilizadao?", verso: "Para descobrir se a máquina pode ser considerada intêligente ou não." },

  // Tópico 4 – Agentes Racionais e Inteligentes
  { id: 12, topicoId: 4, frente: "O que avaliam as 'Medidas de performance' (Performance measure)?", verso: "São critérios projetados para medir o nível de sucesso do agente após uma sequência de ações no ambiente." },
  { id: 13, topicoId: 4, frente: "Um agente inteligente age visando maximizar o quê?", verso: "Maximizar o valor esperado das suas medidas de desempenho." },
  { id: 14, topicoId: 4, frente: "No modelo PEAS, qual é o papel dos Sensores (Sensors)?", verso: "São as entradas. Os meios pelos quais o agente consegue sentir e ler as propriedades do ambiente ao seu redor." },
  { id: 15, topicoId: 4, frente: "No modelo PEAS, qual é o papel dos Atuadores (Actuators)?", verso: "São as saídas. Os meios e ferramentas que o agente utiliza para executar ações e alterar o ambiente." },
  { id: 16, topicoId: 4, frente: "No modelo PEAS, o que o Environment (Ambiente) define?", verso: "SDefine o ambiente em que o agente estará submetido." },
  { id: 17, topicoId: 4, frente: "No modelo PEAS, a função de Performance é utilizada com qual finalidade?", verso: "A finalidade da função de Performance é definir como o sucesso do agente será avaliado. Pode ter múltiplos critérios"},
  { id: 18, topicoId: 4, frente: "Por que o ChatGPT é definido como Reativo ao usuário?", verso: "Porque ele não monitora o ambiente de forma independente; ele aguarda um 'input' (ordem) para processar uma resposta." },
  { id: 19, topicoId: 4, frente: "O que define a 'Racionalidade' de um agente?", verso: "É a capacidade de tomar a ação que se espera que maximize o seu sucesso, com base no que ele percebe." },

  // Tópico 5 – Tipos de Ambiente
  { id: 17, topicoId: 5, frente: "O que caracteriza um ambiente Totalmente observável?", verso: "O agente tem acesso completo ao estado do ambiente a cada momento." },
  { id: 18, topicoId: 5, frente: "O que caracteriza um ambiente Parcialmente observável?", verso: "O agente não tem acesso ao ambiente completo, podendo ocorrer mudanças que não serão do seu conhecimento." },
  { id: 21, topicoId: 5, frente: "O que caracteriza um ambiente Episódico?", verso: "A experiência do agente é dividida em episódios independentes entre si." },
  { id: 22, topicoId: 5, frente: "O que caracteriza um ambiente Sequencial?", verso: "A próxima ação do agente depende das ações anteriores." },
  { id: 23, topicoId: 5, frente: "O que caracteriza um ambiente Dinâmico?", verso: "O ambiente pode sofrer alterações enquanto o agente toma decisões." },
  { id: 24, topicoId: 5, frente: "O que caracteriza um ambiente Estático?", verso: "O ambiente não sofre alterações." },
  { id: 25, topicoId: 5, frente: "O que caracteriza um ambiente Discreto?", verso: "É possível enumerar as ações e percepções do ambiente." },
  { id: 26, topicoId: 5, frente: "O que caracteriza um ambiente Contínuo?", verso: "Não é possível enumerar todas as ações e percepções do ambiente." },
  { id: 27, topicoId: 5, frente: "O que caracteriza um ambiente Single-agent?", verso: "O ambiente possui apenas um agente." },
  { id: 28, topicoId: 5, frente: "O que caracteriza um ambiente Multi-agent?", verso: "O ambiente possui múltiplos agentes que podem cooperar ou competir entre si." },
  { id: 29, topicoId: 5, frente: "Qual a diferença central de um ambiente Estático para um Dinâmico?", verso: "O estático permanece paralisado; o dinâmico sofre alterações externas contínuas enquanto o agente 'pensa' para tomar sua decisão." },
  { id: 30, topicoId: 5, frente: "Um cenário de trânsito em que o layout muda constantemente é considerado um ambiente Contínuo ou Discreto?", verso: "Contínuo, pois as possíveis percepções e as variáveis de ação não podem ser exatamente enumeradas ou contadas limitadamente." },
  { id: 31, topicoId: 5, frente: "Se vários agentes interagem cooperando ou competindo no mesmo cenário, como chamamos esse ambiente?", verso: "Multi-agent (Múltiplos agentes)" },

  // Tópico 6 – Tipos de Agentes
  { id: 32, topicoId: 6, frente: "Por que apenas o agente reativo baseado em modelo consegue operar em ambientes parcialmente observáveis?", verso: "Porque, diferente do reativo simples, ele mantém uma memória/histórico de percepções e ações passadas para compensar o que ele não enxerga." },
  { id: 33, topicoId: 6, frente: "O que o agente baseado em objetivo utiliza para ajudar em suas decisões?", verso: "Ele utiliza técnicas focadas de busca e planejamento orientadas a chegar ao estado final." },
  { id: 34, topicoId: 6, frente: "O que orienta as decisões de um agente baseado em utilidade?", verso: "Funções matemáticas de utilidade que atribuem valores e recompensas aos estados para priorizar a melhor rota (mais rápida/barata)." },
  { id: 35, topicoId: 6, frente: "O agente reativo simples precisa que o ambiente seja totalmente ou parcialmente observável?", verso: "Totalmente observável, pois não tem memória de curto ou longo prazo para preencher lacunas de visão." },

  // Tópico 7 – Problemas de Busca
  { id: 36, topicoId: 7, frente: "No contexto de busca, o que significa a Função Sucessora?", verso: "É  o conjunto de ações que o agente pode tomar daquele ponto em diante e as consequências que elas vão gerar." },
  { id: 37, topicoId: 7, frente: "Como é calculado o Custo do caminho?", verso: "É o somatório numérico dos custos individuais de cada aresta/ação que o agente tomou ao longo do seu trajeto." },
  { id: 38, topicoId: 7, frente: "O que define a 'Solução' formal de um problema de busca?", verso: "A solução é exatamente a sequência inteira de ações (o trajeto mapeado) que sai do estado inicial e chega ao estado objetivo." },
  { id: 39, topicoId: 7, frente: "Qual o tipo de agente preferido para ser aplicado em algoritmos de Problemas de Busca?", verso: "Agentes baseados em objetivo inseridos em ambientes observáveis, discretos e determinísticos." },

  { id: 40, topicoId: 7, frente: "O que é o Espaço de estados em um problema de busca?", verso: "É o conjunto de todos os estados possíveis que podem ser alcançados a partir do estado inicial." },
  { id: 41, topicoId: 7, frente: "O que é o Estado inicial em um problema de busca?", verso: "É o local ou estado onde o agente começa a busca." },
  { id: 42, topicoId: 7, frente: "Qual a função do Teste de objetivo em um problema de busca?", verso: "Determinar se o agente alcançou o objetivo desejado." },
  { id: 43, topicoId: 7, frente: "O que é Abstração em problemas de busca?", verso: "É o processo de remover detalhes da representação do problema para torná-lo viável de resolver." },
  { id: 44, topicoId: 7, frente: "Qual o problema de um modelo excessivamente detalhado em problemas de busca?",verso: "Ele pode se tornar inviável de resolver."},
  { id: 45, topicoId: 7, frente: "Qual o problema de um modelo com poucos detalhes em problemas de busca?", verso: "Ele pode não permitir uma solução adequada." },

  // Tópico 8 – Grafos e Árvores de Busca
  { id: 46, topicoId: 8, frente: "No Grafo de espaço de estado, o que o 'Teste de objetivo' tenta encontrar?", verso: "Ele tenta identificar se o nó atual pertence ao conjunto restrito de nós que foram especificados previamente como meta/objetivo." },
  { id: 47, topicoId: 8, frente: "Em um Grafo de espaço de estados, quantas vezes um mesmo estado ocorre?", verso: "Cada estado do problema ocorre apenas uma única vez na sua representação." },
  { id: 48, topicoId: 8, frente: "O que cada nó de uma Árvore de busca representa na prática?", verso: "Representa um caminho completo e individual mapeado dentro do grafo de espaço de estados até aquele determinado momento." },
  { id: 49, topicoId: 8, frente: "Na maioria das aplicações de problemas complexos, a árvore é desenhada inteiramente na memória de uma vez?", verso: "Não, isso raramente ocorre porque a quantidade de ramificações tornaria a alocação de memória impossível." },
  { id: 50, topicoId: 8, frente: "O que são 'Nós' (Nodes) em um grafo?", verso: "São os círculos que representam cada estado ou situação possível no problema." },
  { id: 51, topicoId: 8, frente: "O que são 'Arestas' (Edges) em um grafo?", verso: "São as linhas que conectam os nós, representando as ações e seus custos." },

  // Tópico 9 – Algoritmos Não Informados
  { id: 52, topicoId: 9, frente: "Qual é o outro termo clássico pelo qual os Algoritmos Não Informados são conhecidos?", verso: "Busca cega." },
  { id: 53, topicoId: 9, frente: "O que caracteriza os Algoritmos Não Informados?", verso: "Utilizam apenas as informações fornecidas na descrição do problema, sem conhecimento adicional." },
  { id: 54, topicoId: 9, frente: "O que significa Fringe em algoritmos de busca?", verso: "É o próximo nó que será expandido." },
  { id: 55, topicoId: 9, frente: "O que significa Expansão em algoritmos de busca?", verso: "É o processo de pegar um nó e expandir seus filhos." },
  { id: 56, topicoId: 9, frente: "O que são Estratégias de exploração?", verso: "São estratégias utilizadas para escolher qual será o próximo nó expandido." },
  { id: 57, topicoId: 9, frente: "O que significa a propriedade 'Completo' em algoritmos de busca?", verso: "Significa que, se existir uma solução, o algoritmo garante que ela será encontrada." },
  { id: 58, topicoId: 9, frente: "O que significa a propriedade 'Ótimo' em algoritmos de busca?", verso: "Significa que o algoritmo encontra a solução de menor custo entre todas as possíveis." },
  { id: 59, topicoId: 9, frente: "O que mede a Complexidade de tempo em algoritmos de busca?", verso: "Mede quanto tempo o algoritmo leva para encontrar a solução." },
  { id: 60, topicoId: 9, frente: "O que mede a Complexidade de espaço em algoritmos de busca?", verso: "Mede quanta memória é necessária para realizar a busca." },
  { id: 61, topicoId: 9, frente: "O que representa a notação 'b' em complexidade de busca?", verso: "Representa o fator de ramificação, ou seja, o número médio de filhos de cada nó." },
  { id: 62, topicoId: 9, frente: "O que representa a notação 'm' em complexidade de busca?", verso: "Representa a profundidade máxima da árvore de busca." },
  { id: 63, topicoId: 9, frente: "O que representa a notação 'd' em complexidade de busca?", verso: "Representa a profundidade limite." },
  { id: 64, topicoId: 9, frente: "O que representa a notação 's' em complexidade de busca?", verso: "Representa a profundidade da primeira solução encontrada." },
  { id: 65, topicoId: 9, frente: "O que representa a notação 'C*' em complexidade de busca?", verso: "Representa o custo da melhor solução possível." },
  { id: 66, topicoId: 9, frente: "O que representa a notação 'ε' em complexidade de busca?", verso: "Representa o menor custo positivo de uma aresta." },
  { id: 67, topicoId: 9, frente: "Qual é a principal limitação da busca não informada?", verso: "Ela explora opções em todas as direções sem informações sobre a localização do objetivo." },
  { id: 68, topicoId: 9, frente: "Por que a busca não informada é ineficiente em problemas de larga escala?", verso: "Porque não possui informações sobre a direção do objetivo e acaba explorando muitos estados desnecessários." },
  { id: 69, topicoId: 9, frente: "Qual algoritmo é mais indicado para encontrar o menor caminho?", verso: "BFS." },
  { id: 70, topicoId: 9, frente: "Qual algoritmo é mais indicado para utilizar menos memória?", verso: "DFS." },
  { id: 71, topicoId: 9, frente: "Qual algoritmo é mais indicado para encontrar o menor custo?", verso: "UCS." },
  { id: 72, topicoId: 9, frente: "O custo é considerado nos algoritmos BFS e DFS?", verso: "Não. BFS e DFS não consideram custo." },
  { id: 73, topicoId: 9, frente: "Qual algoritmo tende a exigir menos processamento por visitar menos nós?", verso: "Busca em profundidade (DFS)." },
  { id: 74, topicoId: 9, frente: "O que deve ser considerado ao escolher um algoritmo de busca?", verso: "O número de passos necessários para alcançar a solução." },

  // Tópico 10 – DFS e BFS
  { id: 75, topicoId: 10, frente: "Qual estrutura de dados a Busca em Profundidade (DFS) utiliza?", verso: "Utiliza uma pilha (LIFO)." },
  { id: 76, topicoId: 10, frente: "A Busca em Profundidade (DFS) é completa?", verso: "Apenas se houver prevenção de ciclos." },
  { id: 77, topicoId: 10, frente: "Qual estrutura de dados a Busca em Largura (BFS) utiliza?", verso: "Utiliza uma fila (FIFO)." },
  { id: 78, topicoId: 10, frente: "A Busca em Largura (BFS) é completa?", verso: "Sim, se a profundidade da solução for finita." },
  { id: 79, topicoId: 10, frente: "A Busca em Largura (BFS) é ótima?", verso: "Apenas se todos os custos das arestas forem iguais." },
  { id: 80, topicoId: 10, frente: "A Busca em Profundidade (DFS) consegue achar o custo ótimo?", verso: "Não. A DFS encontra primeiro a solução que estiver mais à esquerda no mapa, independentemente dela ser mais profunda ou cara." },
  { id: 81, topicoId: 10, frente: "Qual é a Complexidade de Espaço da Busca em Largura (BFS)?", verso: "Consome muita memória: O(b<sup>s</sup>)." },
  { id: 82, topicoId: 10, frente: "Em qual cenário extremo a Busca em Profundidade (DFS) deixa de ser Completa?", verso: "Se não houver mecanismos para prevenir ciclos repetitivos, o algoritmo pode ficar preso em um galho infinito." },
  { id: 83, topicoId: 10, frente: "Entre a DFS e a BFS, qual prioriza expandir os vértices vizinhos do nível atual antes de descer as ramificações?", verso: "A Busca em Largura (BFS)." },

  // Tópico 11 – UCS, DLS e IDS
  { id: 84, topicoId: 11, frente: "A Busca de Custo Uniforme (UCS) é completa?", verso: "Sim, assumindo custos positivos e solução de custo finito." },
  { id: 85, topicoId: 11, frente: "A Busca de Custo Uniforme (UCS) é ótima?", verso: "Sim." },
  { id: 86, topicoId: 11, frente: "Qual a complexidade de tempo da Busca de Custo Uniforme (UCS)?", verso: "O(b<sup>C*/ε</sup>)." },
  { id: 87, topicoId: 11, frente: "Qual a complexidade de espaço da Busca de Custo Uniforme (UCS)?", verso: "O(b<sup>C*/ε</sup>)." },
  { id: 88, topicoId: 11, frente: "A Busca em Profundidade com Limite (DLS) é completa?", verso: "Não, se a solução estiver em profundidade maior que d." },
  { id: 89, topicoId: 11, frente: "A Busca em Profundidade com Limite (DLS) é ótima?", verso: "Não." },
  { id: 90, topicoId: 11, frente: "Qual a complexidade de tempo da Busca em Profundidade com Limite (DLS)?", verso: "O(b<sup>d</sup>)." },
  { id: 91, topicoId: 11, frente: "Qual a complexidade de espaço da Busca em Profundidade com Limite (DLS)?", verso: "O(bd)." },
  { id: 92, topicoId: 11, frente: "A Busca com Aprofundamento Iterativo (IDS) é completa?", verso: "Sim." },
  { id: 93, topicoId: 11, frente: "A Busca com Aprofundamento Iterativo (IDS) é ótima?", verso: "Sim." },
  { id: 94, topicoId: 11, frente: "Qual a complexidade de tempo da Busca com Aprofundamento Iterativo (IDS)?", verso: "O(b<sup>d</sup>)." },
  { id: 95, topicoId: 11, frente: "Qual a complexidade de espaço da Busca com Aprofundamento Iterativo (IDS)?", verso: "O(bd)." },
  { id: 96, topicoId: 11, frente: "O algoritmo UCS foca os seus esforços de ramificação em qual métrica?", verso: "Ele expande sempre o vértice ou ramificação que possui o menor custo financeiro acumulado até ali." },
  { id: 97, topicoId: 11, frente: "Na Busca em Profundidade com Limite (DLS), o que é a variável 'd'?", verso: "É a barreira/limite máximo de profundidade que o algoritmo tem permissão para explorar." },
  { id: 98, topicoId: 11, frente: "Qual estrutura de dados gerencia a expansão de menor valor na Busca de Custo Uniforme (UCS)?", verso: "A Fila de Prioridades (Priority Queue)." },

  // Tópico 12 – Busca Informada
  { id: 99, topicoId: 12, frente: "O que diferencia a busca informada da cega na hora de decidir o caminho?", verso: "Ela utiliza informações extras e de domínio do problema (Heurísticas) para estimar qual braço está mais perto do alvo." },
  { id: 100, topicoId: 12, frente: "A heurística fornece um mapa completo de todo o caminho perfeito da raiz até o nó objetivo?", verso: "Não, a orientação matemática da heurística serve apenas para avaliar qual sucessor local adjacente parece ser melhor." },
  { id: 101, topicoId: 12, frente: "O que a heurística visa melhorar drasticamente no desempenho do software?", verso: "Reduzir o imenso custo computacional desnecessário e acelerar a obtenção da solução isolando áreas irrelevantes." },
  { id: 102, topicoId: 12, frente: "A função heurística h(n) estima qual distância ou peso do problema?", verso: "Ela estima puramente o quão perto (o custo) do estado atual 'n' até alcançar o estado objetivo." },

  // Tópico 13 – Greedy Search
  { id: 103, topicoId: 13, frente: "Na fórmula do Greedy Search, o que indica que alcançamos nosso estado objetivo?", verso: "Quando a estimativa h(n) bate o valor zero." },
  { id: 104, topicoId: 13, frente: "O algoritmo Greedy Search considera ou ignora o histórico de custos que ele já gastou?", verso: "Ele ignora totalmente. Baseia-se exclusivamente em quão promissor o próximo nó parece ser (h(n))." },
  { id: 105, topicoId: 13, frente: "A Greedy Search pode ficar presa infinitamente num problema?", verso: "Sim. Como não garante otimidade nem completude, sem checagem de estados ela se perde em loops." },
  { id: 106, topicoId: 13, frente: "Num cenário em que a heurística utilizada seja terrível, qual a complexidade de tempo da Busca Gulosa?", verso: "Ela regride e performa como o pior caso da profundidade: O(b<sup>m</sup>)." },
  { id: 107, topicoId: 13, frente: "A Greedy Search é completa?", verso: "Não. Ela pode nunca encontrar uma solução e ficar presa em ciclos." },
  { id: 108, topicoId: 13, frente: "A Greedy Search é ótima?", verso: "Não. Nem sempre encontra o melhor caminho." },

  // Tópico 14 – A* Search
  { id: 109, topicoId: 14, frente: "O que representa h(n) na fórmula do A*?", verso: "Representa a estimativa heurística até o objetivo." },
  { id: 110, topicoId: 14, frente: "O que representa f(n) na fórmula do A*?", verso: "Representa o valor utilizado para escolher o próximo nó a ser expandido." },
  { id: 111, topicoId: 14, frente: "A busca A* é completa?", verso: "Sim." },
  { id: 112, topicoId: 14, frente: "O que representa g(n) na fórmula do A*?", verso: "Representa o custo acumulado até o estado atual." },
  { id: 113, topicoId: 14, frente: "O algoritmo A* foi concebido juntando os príncipios de quais duas buscas?", verso: "A Busca de Custo Uniforme (UCS) para garantir preço, e a Greedy Search para garantir rumo/foco ao alvo." },
  { id: 114, topicoId: 14, frente: "Para a Busca A* ser atestada como de fato 'Ótima', quais devem ser as propriedades da Heurística escolhida?", verso: "A heurística acoplada nela precisa obrigatoriamente ser Aceitável (admissível) e Consistente." },
  { id: 115, topicoId: 14, frente: "Qual comportamento visual pode descrever a expansão dos nós feita pelo Algoritmo A*?", verso: "O A* adiciona 'contornos gradualmente' direcionados (em formato de ondas radiais) indo em direção do estado objetivo." },

  // Tópico 15 – Admissibilidade
  { id: 116, topicoId: 15, frente: "O que define uma Heurística Inadmissível no A*?", verso: "Ela joga as estimativas para o alto, superestimando o custo de rotas boas e fazendo a IA perder as soluções ótimas do problema." },
  { id: 117, topicoId: 15, frente: "O que define uma Heurística Adimissível no A*?", verso: "Ela não superestima o custo, levando o algoritmo a encontrar o melhor caminho." },
  { id: 118, topicoId: 15, frente: "Qual fórmula prova que a Heurística é Admissível frente ao custo real h*(n)?", verso: "A premissa de que a estimativa h(n) nunca pode ser maior que o real: 0 ≤ h(n) ≤ h*(n)." },
  { id: 119, topicoId: 15, frente: "Como se obtém uma Heurística Admissível relaxando um problema na IA?", verso: "Você remove/afrouxa restrições físicas do problema real original (ex: deixar ignorar paredes). O custo rápido dessa versão torna-se uma excelente estimativa." },
  { id: 120, topicoId: 15, frente: "Se no seu código você tem acesso a diversas heurísticas diferentes porém admissíveis, qual você injeta no A*?", verso: "Aquela que jogar o valor mais ALTO (pois corta caminhos inúteis rápido), desde que, logicamente, não ultrapasse a barreira admissível h*(n)." },

  // Tópico 16 – Game Theory e Adversarial Search
  { id: 121, topicoId: 16, frente: "Para que um conceito se enquadre em teoria dos jogos na máquina, quais condições ele deve cumprir?", verso: "Ter regras nítidas, ter conjunto limitado/finito de jogadas, agentes agindo de modo racional e resultados definidos com clareza." },
  { id: 122, topicoId: 16, frente: "No que os chamados Zero-Sum Games (Jogos de Soma Zero) diferem dos demais?", verso: "Eles englobam a competição pura, onde o dano de um é estritamente o lucro do outro, ou seja, funções de utilidade totalmente opostas." },
  { id: 123, topicoId: 16, frente: "O que flexibiliza as regras diplomáticas nos General Games?", verso: "Que os agentes não têm utilidades presas. Eles podem trair (competir), unir-se temporariamente (cooperar) ou ignorar uns aos outros." },
  { id: 124, topicoId: 16, frente: "A métrica avaliada pelos agentes no estado terminal dos jogos chama-se custo de ramificação ou função de utilidade?", verso: "Função de utilidade (pois buscam ativamente maximizar a pontuação no último estado, não minimizar trajetos de custo)." },
  { id: 125, topicoId: 16, frente: "O que é a Busca Adversarial?", verso: "É a busca realizada em ambientes competitivos onde o agente deve considerar as jogadas de um oponente que quer atrapalhá-lo." },
  

  // Tópico 17 – Algoritmo MINIMAX
  { id: 126, topicoId: 17, frente: "Enquanto o agente principal do Minimax (o jogador MAX) foca em maximizar seus ganhos de utilidade, como ele aborda o adversário (MIN)?", verso: "Ele cria lógicas ativas para sufocar e minimizar completamente as opções de utilidade do inimigo no tabuleiro." },
  { id: 127, topicoId: 17, frente: "O MINIMAX faz um trajeto defensivo, isso porque ele assume que o oponente MIN se comportará de qual maneira no futuro?", verso: "O MINIMAX teme o pior. Ele assume que o MIN é inteligente e jogará sempre da forma perfeita e mais dolorosa para o próprio MAX." },
  { id: 128, topicoId: 17, frente: "De acordo com o funcionamento 'bottom-up' do algoritmo Minimax, de onde ele extrai seus valores numéricos reais?", verso: "Diretamente das 'folhas' da árvore (finais do jogo) e vai retornando esses números de vitória ou derrota para cima até chegar ao estado/raiz do turno atual." },
  { id: 129, topicoId: 17, frente: "Se um humano cometer um erro contra um bot Minimax, a pontuação programada dele diminui ou é perdida?", verso: "Pelo contrário. Como ele não comete erros, a pontuação que estava predefinida será jogada ainda mais para cima, explorando a falha subótima humana."},


  // Tópico 19 – Poda Alfa-Beta
  { id: 130, topicoId: 18, frente: "Qual o objetivo principal da <b>Poda Alfa-Beta</b> no algoritmo Minimax?", verso: "Evitar a expansão de nós que <b>não afetarão a decisão final</b>, reduzindo o número de estados explorados em árvores muito extensas." },
  { id: 131, topicoId: 18, frente: "Defina o <b>Valor Alfa (α)</b> e seu valor inicial.", verso: "É o melhor valor (maior) encontrado pelo <b>MAX</b> até o momento. Nunca diminui. Inicialmente é <b>-<span style='font-size: 1.2em;'>∞</span></b>." },
  { id: 132, topicoId: 18, frente: "Defina o <b>Valor Beta (β)</b> e seu valor inicial.", verso: "É o melhor valor (menor) encontrado pelo <b>MIN</b> até o momento. Nunca aumenta. Inicialmente é <b>+<span style='font-size: 1.2em;'>∞</span></b>." },
  { id: 133, topicoId: 18, frente: "Qual a condição matemática para ocorrer uma <b>Poda Alfa</b>?", verso: "Ocorre em um nó <b>MIN</b> quando seu valor Beta se torna menor ou igual ao Alfa de um ancestral: <b>β(n) ≤ α(i)</b>." },
  { id: 134, topicoId: 18, frente: "Qual a condição matemática para ocorrer uma <b>Poda Beta</b>?", verso: "Ocorre em um nó <b>MAX</b> quando seu valor Alfa se torna maior ou igual ao Beta de um ancestral: <b>α(n) ≥ β(i)</b>." },
  { id: 135, topicoId: 18, frente: "Verdadeiro ou Falso: A poda Alfa-Beta altera o resultado final da busca em comparação ao Minimax puro.", verso: "<b>Falso.</b> A poda não afeta o resultado final da busca; ela apenas economiza tempo computacional." },
  { id: 136, topicoId: 18, frente: "Como a <b>ordem de busca</b> dos nós afeta o algoritmo?", verso: "A quantidade de podas depende da ordem. Uma boa ordenação pode <b>dobrar a profundidade</b> da pesquisa, reduzindo a complexidade de tempo para <b>O(b<sup>m/2</sup>)</b>." },
  { id: 137, topicoId: 18, frente: "Por que a utilidade dos estados é calculada <b>dinamicamente</b> e não pré-armazenada?", verso: "Porque o número de combinações cresce exponencialmente, tornando <b>inviável</b> armazenar a utilidade de todos os estados possíveis na memória." },
  
  /* ── DECISÕES IMPERFEITAS ── */
  { id: 138, topicoId: 20, frente: "Qual a principal limitação do algoritmo <b>MINIMAX puro</b> em jogos reais?", verso: "A necessidade de expandir a árvore até os <b>estados terminais</b>, o que consome tempo excessivo em jogos complexos (como o Xadrez)." },
  { id: 139, topicoId: 20, frente: "O que caracteriza uma <b>Decisão Imperfeita</b> na busca competitiva?", verso: "A interrupção da pesquisa em uma <b>profundidade limitada (d)</b>, sem atingir obrigatoriamente os nós folha terminais." },
  { id: 140, topicoId: 20, frente: "O que substitui a função de utilidade em buscas de profundidade limitada?", verso: "A <b>Função de Avaliação (Heurística)</b>, que estima a utilidade esperada de um nó que ainda não é terminal." },
  { id: 141, topicoId: 20, frente: "Qual a consequência de usar <b>Decisões Imperfeitas</b> quanto à qualidade da jogada?", verso: "A <b>garantia de jogo ótimo desaparece</b>, uma vez que o algoritmo passa a trabalhar com estimativas heurísticas."},

  /* ── FUNÇÃO DE AVALIAÇÃO ── */
  { id: 142, topicoId: 20, frente: "Explique o <b>Trade-off</b> na escolha de funções de avaliação.", verso: "Funções <b>precisas</b> são lentas (menos tempo para buscar fundo na árvore); funções <b>rápidas</b> permitem buscas em níveis mais profundos." },
  { id: 143, topicoId: 20, frente: "Como a escala de valores funciona em <b>Estados Intermediários</b>?", verso: "Diferente dos terminais (fixos), podem ter <b>qualquer valor</b> (ex: 5, 20, 100), onde valores maiores beneficiam o MAX e menores o MIN." },
  { id: 144, topicoId: 20, frente: "O <b>Teste de Objetivo</b> deve ser alterado ao usar funções de avaliação?", verso: "<b>Não.</b> Ele deve ser sempre baseado nas <b>regras do jogo</b> (ex: vitória real), independentemente da pontuação heurística calculada." }
];

export default flashcards;
