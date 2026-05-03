// Each flashcard belongs to a topic (topicoId)
const flashcards = [
  // Tópico 1 – O que é Inteligência?
  // Tópico 2 – Resolução Lógica
  { id: 6, topicoId: 2, frente: "Por que as conclusões do raciocínio indutivo nunca são absolutamente certas?", verso: "Porque ele assume uma regra geral baseada apenas na observação de uma parcela (amostragem) dos eventos." },
  { id: 7, topicoId: 2, frente: "O exemplo 'Se bancos pedem COBOL e Jailson trabalha em um banco, talvez ele programe em COBOL' ilustra qual raciocínio?", verso: "O Raciocínio Abdutivo." },
  { id: 8, topicoId: 2, frente: "O exemplo 'Robert é sociólogo -> Sociólogo é bacharel -> Logo, Robert é bacharel' ilustra qual raciocínio?", verso: "O Raciocínio Dedutivo." },

  // Tópico 3 – O que é IA?
  { id: 9, topicoId: 3, frente: "Pelo critério comportamental, como sabemos se uma habilidade foi reproduzida na IA?", verso: "Quando a máquina consegue produzir e exibir um comportamento semelhante ao dos humanos na mesma tarefa." },
  { id: 10, topicoId: 3, frente: "O que dita o critério de Funcionalidade na Inteligência Artificial?", verso: "Que não importa como o sistema realiza a função por baixo dos panos, o importante é apenas se ela foi realizada de forma eficaz." },
  { id: 11, topicoId: 3, frente: "Qual o principal argumento do critério Cognitivo?", verso: "Que se a máquina não sente, não entende ou não tem consciência real, é apenas uma simulação superficial e não reprodução genuína." },
  { id: 12, topicoId: 3, frente: "O Teste de Turing exige avaliações matemáticas ou de código?", verso: "Não, exige apenas que, em uma conversa às cegas, um humano não consiga distinguir se está falando com uma pessoa ou com uma máquina." },

  // Tópico 4 – Agentes Racionais e Inteligentes
  { id: 13, topicoId: 4, frente: "O que avaliam as 'Medidas de performance' (Performance measure)?", verso: "São critérios projetados para medir o nível de sucesso do agente após uma sequência de ações no ambiente." },
  { id: 14, topicoId: 4, frente: "Segundo o texto, um agente inteligente age visando maximizar o quê?", verso: "Maximizar o valor esperado das suas medidas de desempenho." },
  { id: 15, topicoId: 4, frente: "No modelo PEAS, qual é o papel dos Sensores (Sensors)?", verso: "São as entradas. Os meios pelos quais o agente consegue sentir e ler as propriedades do ambiente ao seu redor." },
  { id: 16, topicoId: 4, frente: "No modelo PEAS, qual é o papel dos Atuadores (Actuators)?", verso: "São as saídas. Os meios e ferramentas que o agente utiliza para executar ações e alterar o ambiente." },

  // Tópico 5 – Tipos de Ambiente
  { id: 17, topicoId: 5, frente: "O que caracteriza um ambiente Totalmente observável?", verso: "O agente tem acesso completo e ininterrupto a todas as informações e ao estado total do ambiente a cada momento." },
  { id: 18, topicoId: 5, frente: "Qual a diferença central de um ambiente Estático para um Dinâmico?", verso: "O estático permanece paralisado; o dinâmico sofre alterações externas contínuas enquanto o agente 'pensa' para tomar sua decisão." },
  { id: 19, topicoId: 5, frente: "Um cenário de trânsito em que o layout muda constantemente é considerado um ambiente Contínuo ou Discreto?", verso: "Contínuo, pois as possíveis percepções e as variáveis de ação não podem ser exatamente enumeradas ou contadas limitadamente." },
  { id: 20, topicoId: 5, frente: "Se vários agentes interagem cooperando ou competindo no mesmo cenário, como chamamos esse ambiente?", verso: "Multi-agent (Múltiplos agentes)." },

  // Tópico 6 – Tipos de Agentes
  { id: 21, topicoId: 6, frente: "Por que apenas o agente reativo baseado em modelo consegue operar em ambientes parcialmente observáveis?", verso: "Porque, diferente do reativo simples, ele mantém uma memória/histórico de percepções e ações passadas para compensar o que ele não enxerga." },
  { id: 22, topicoId: 6, frente: "O que o agente baseado em objetivo utiliza para ajudar em suas decisões?", verso: "Ele utiliza técnicas focadas de busca e planejamento orientadas a chegar ao estado final." },
  { id: 23, topicoId: 6, frente: "O que orienta as decisões de um agente baseado em utilidade?", verso: "Funções matemáticas de utilidade que atribuem valores e recompensas aos estados para priorizar a melhor rota (mais rápida/barata)." },
  { id: 24, topicoId: 6, frente: "O agente reativo simples precisa que o ambiente seja totalmente ou parcialmente observável?", verso: "Totalmente observável, pois não tem memória de curto ou longo prazo para preencher lacunas de visão." },

  // Tópico 7 – Problemas de Busca
  { id: 25, topicoId: 7, frente: "No contexto de busca, o que significa a Função Sucessora?", verso: "É o catálogo com o conjunto de ações que o agente pode tomar daquele ponto em diante e as consequências que elas vão gerar." },
  { id: 26, topicoId: 7, frente: "Como é calculado o Custo do caminho?", verso: "É o somatório numérico dos custos individuais de cada aresta/ação que o agente tomou ao longo do seu trajeto." },
  { id: 27, topicoId: 7, frente: "O que define a 'Solução' formal de um problema de busca?", verso: "A solução é exatamente a sequência inteira de ações (o trajeto mapeado) que sai do estado inicial e chega ao estado objetivo." },
  { id: 28, topicoId: 7, frente: "Qual o tipo de agente preferido para ser aplicado em algoritmos de Problemas de Busca?", verso: "Agentes baseados em objetivo inseridos em ambientes observáveis, discretos e determinísticos." },

  // Tópico 8 – Grafos e Árvores de Busca
  { id: 29, topicoId: 8, frente: "No Grafo de espaço de estado, o que o 'Teste de objetivo' tenta encontrar?", verso: "Ele tenta identificar se o nó atual pertence ao conjunto restrito de nós que foram especificados previamente como meta/objetivo." },
  { id: 30, topicoId: 8, frente: "Na matemática perfeita de um Grafo de espaço de estados, quantas vezes um mesmo estado ocorre?", verso: "Cada estado do problema ocorre apenas uma única vez na sua representação." },
  { id: 31, topicoId: 8, frente: "O que cada nó de uma Árvore de busca representa na prática?", verso: "Representa um caminho completo e individual mapeado dentro do grafo de espaço de estados até aquele determinado momento." },
  { id: 32, topicoId: 8, frente: "Na maioria das aplicações de problemas complexos, a árvore é desenhada inteiramente na memória de uma vez?", verso: "Não, isso raramente ocorre porque a quantidade de ramificações tornaria a alocação de memória impossível." },

  // Tópico 9 – Algoritmos Não Informados
  { id: 33, topicoId: 9, frente: "Qual é o outro termo clássico pelo qual os Algoritmos Não Informados são conhecidos?", verso: "Busca Cega." },
  { id: 34, topicoId: 9, frente: "No contexto de complexidade Big O Notation, o que significa a métrica 'b'?", verso: "É o Fator de Ramificação (branching factor), que indica o número médio de nós filhos criados a partir de cada estado." },
  { id: 35, topicoId: 9, frente: "O que significa a ação de 'Expansão' de um nó na busca?", verso: "É o ato computacional de pegar um nó da fronteira, rodar a função sucessora e revelar todos os seus descendentes/filhos." },
  { id: 36, topicoId: 9, frente: "Na propriedade de Busca, o que é medido quando nos perguntamos se a solução é 'Ótima'?", verso: "Avaliamos se a estratégia garante matematicamente achar a solução de menor custo entre todas as existentes." },

  // Tópico 10 – DFS e BFS
  { id: 37, topicoId: 10, frente: "A Busca em Profundidade (DFS) consegue achar o custo ótimo?", verso: "Não. A DFS encontra primeiro a solução que estiver mais à esquerda no mapa, independentemente dela ser mais profunda ou cara." },
  { id: 38, topicoId: 10, frente: "No tocante a memória, qual é a Complexidade de Espaço da Busca em Largura (BFS)?", verso: "Consome muita memória: O(b^s)." },
  { id: 39, topicoId: 10, frente: "Em qual cenário extremo a Busca em Profundidade (DFS) deixa de ser Completa?", verso: "Se não houver mecanismos para prevenir ciclos repetitivos, o algoritmo pode ficar preso em um galho infinito." },
  { id: 40, topicoId: 10, frente: "Entre a DFS e a BFS, qual prioriza expandir os vértices vizinhos do nível atual antes de descer as ramificações?", verso: "A Busca em Largura (BFS)." },

  // Tópico 11 – UCS, DLS e IDS
  { id: 41, topicoId: 11, frente: "O algoritmo UCS foca os seus esforços de ramificação em qual métrica?", verso: "Ele expande sempre o vértice ou ramificação que possui o menor custo financeiro acumulado até ali." },
  { id: 42, topicoId: 11, frente: "Na Busca em Profundidade com Limite (DLS), o que é a variável 'd'?", verso: "É a barreira/limite máximo de profundidade que o algoritmo tem permissão para explorar." },
  { id: 43, topicoId: 11, frente: "Qual a complexidade de espaço da Busca de Custo Uniforme (UCS)?", verso: "O(b^(C*/ε))." },
  { id: 44, topicoId: 11, frente: "Qual estrutura de dados gerencia a expansão de menor valor na Busca de Custo Uniforme (UCS)?", verso: "A Fila de Prioridades (Priority Queue)." },

  // Tópico 12 – Busca Informada
  { id: 45, topicoId: 12, frente: "O que diferencia a busca informada da cega na hora de decidir o caminho?", verso: "Ela utiliza informações extras e de domínio do problema (Heurísticas) para estimar qual braço está mais perto do alvo." },
  { id: 46, topicoId: 12, frente: "A heurística fornece um mapa completo de todo o caminho perfeito da raiz até o nó objetivo?", verso: "Não, a orientação matemática da heurística serve apenas para avaliar qual sucessor local adjacente parece ser melhor." },
  { id: 47, topicoId: 12, frente: "O que a heurística visa melhorar drasticamente no desempenho do software?", verso: "Reduzir o imenso custo computacional desnecessário e acelerar a obtenção da solução isolando áreas irrelevantes." },
  { id: 48, topicoId: 12, frente: "A função heurística h(n) estima qual distância ou peso do problema?", verso: "Ela estima puramente o quão perto (o custo) do estado atual 'n' até alcançar o estado objetivo." },

  // Tópico 13 – Greedy Search
  { id: 49, topicoId: 13, frente: "Na fórmula do Greedy Search, o que indica que alcançamos nosso estado objetivo?", verso: "Quando a estimativa h(n) bate o valor zero." },
  { id: 50, topicoId: 13, frente: "O algoritmo Greedy Search considera ou ignora o histórico de custos que ele já gastou?", verso: "Ele ignora totalmente. Baseia-se exclusivamente em quão promissor o próximo nó parece ser (h(n))." },
  { id: 51, topicoId: 13, frente: "A Greedy Search pode ficar presa infinitamente num problema?", verso: "Sim. Como não garante otimidade nem completude, sem checagem de estados ela se perde em loops." },
  { id: 52, topicoId: 13, frente: "Num cenário em que a heurística utilizada seja terrível, qual a complexidade de tempo da Busca Gulosa?", verso: "Ela regride e performa como o pior caso da profundidade: O(b^m)." },

  // Tópico 14 – A* Search
  { id: 53, topicoId: 14, frente: "O algoritmo A* foi concebido juntando os príncipios de quais duas buscas?", verso: "A Busca de Custo Uniforme (UCS) para garantir preço, e a Greedy Search para garantir rumo/foco ao alvo." },
  { id: 54, topicoId: 14, frente: "Para a Busca A* ser atestada como de fato 'Ótima', quais devem ser as propriedades da Heurística escolhida?", verso: "A heurística acoplada nela precisa obrigatoriamente ser Aceitável (admissível) e Consistente." },
  { id: 55, topicoId: 14, frente: "Considerando algoritmos ótimos com uma mesma heurística admissível, como o A* se sai na quantidade de caminhos analisados?", verso: "Ele destrói a competição expandindo o menor número de caminhos/nós possíveis." },
  { id: 56, topicoId: 14, frente: "Qual comportamento visual pode descrever a expansão dos nós feita pelo Algoritmo A*?", verso: "O A* adiciona 'contornos gradualmente' direcionados (em formato de ondas radiais) indo em direção do estado objetivo." },

  // Tópico 15 – Admissibilidade
  { id: 57, topicoId: 15, frente: "O que define uma Heurística Inadmissível no A*?", verso: "Ela joga as estimativas para o alto, superestimando o custo de rotas boas e fazendo a IA perder as soluções ótimas do problema." },
  { id: 58, topicoId: 15, frente: "Qual fórmula prova que a Heurística é Admissível frente ao custo real h*(n)?", verso: "A premissa de que a estimativa h(n) nunca pode ser maior que o real: 0 ≤ h(n) ≤ h*(n)." },
  { id: 59, topicoId: 15, frente: "Como se obtém uma Heurística Admissível relaxando um problema na IA?", verso: "Você remove/afrouxa restrições físicas do problema real original (ex: deixar ignorar paredes). O custo rápido dessa versão torna-se uma excelente estimativa." },
  { id: 60, topicoId: 15, frente: "Se no seu código você tem acesso a diversas heurísticas diferentes porém admissíveis, qual você injeta no A*?", verso: "Aquela que jogar o valor mais ALTO (pois corta caminhos inúteis rápido), desde que, logicamente, não ultrapasse a barreira admissível h*(n)." },

  // Tópico 16 – Game Theory e Adversarial Search
  { id: 61, topicoId: 16, frente: "Para que um conceito se enquadre em teoria dos jogos na máquina, quais condições ele deve cumprir?", verso: "Ter regras nítidas, ter conjunto limitado/finito de jogadas, agentes agindo de modo racional e resultados definidos com clareza." },
  { id: 62, topicoId: 16, frente: "No que os chamados Zero-Sum Games (Jogos de Soma Zero) diferem dos demais?", verso: "Eles englobam a competição pura, onde o dano de um é estritamente o lucro do outro, ou seja, funções de utilidade totalmente opostas." },
  { id: 63, topicoId: 16, frente: "O que flexibiliza as regras diplomáticas nos General Games?", verso: "Que os agentes não têm utilidades presas. Eles podem trair (competir), unir-se temporariamente (cooperar) ou ignorar uns aos outros." },
  { id: 64, topicoId: 16, frente: "A métrica avaliada pelos agentes no estado terminal dos jogos chama-se custo de ramificação ou função de utilidade?", verso: "Função de utilidade (pois buscam ativamente maximizar a pontuação no último estado, não minimizar trajetos de custo)." },

  // Tópico 17 – Algoritmo MINIMAX
  { id: 65, topicoId: 17, frente: "Enquanto o agente principal do Minimax (o jogador MAX) foca em maximizar seus ganhos de utilidade, como ele aborda o adversário (MIN)?", verso: "Ele cria lógicas ativas para sufocar e minimizar completamente as opções de utilidade do inimigo no tabuleiro." },
  { id: 66, topicoId: 17, frente: "O MINIMAX faz um trajeto defensivo, isso porque ele assume que o oponente MIN se comportará de qual maneira no futuro?", verso: "O MINIMAX teme o pior. Ele assume que o MIN é inteligente e jogará sempre da forma perfeita e mais dolorosa para o próprio MAX." },
  { id: 67, topicoId: 17, frente: "De acordo com o funcionamento 'bottom-up' do algoritmo Minimax, de onde ele extrai seus valores numéricos reais?", verso: "Diretamente das 'folhas' da árvore (finais do jogo) e vai retornando esses números de vitória ou derrota para cima até chegar ao estado/raiz do turno atual." },
  { id: 68, topicoId: 17, frente: "Se um humano cometer um erro contra um bot Minimax, a pontuação programada dele diminui ou é perdida?", verso: "Pelo contrário. Como ele não comete erros, a pontuação que estava predefinida será jogada ainda mais para cima, explorando a falha subótima humana." }
];

export default flashcards;
