// topicoId links each question to a topic in topicos.js
const questoes = [
  // ----------------------------------------------------
  // TÓPICO 1: O que é Inteligência?
  // ----------------------------------------------------
  {
    id: 1,
    topicoId: 1,
    question: "Como o texto define a Inteligência?",
    options: [
      "A capacidade de armazenar informações estáticas sem esquecê-las.",
      "A habilidade de adquirir e aplicar conhecimento para resolver problemas complexos.",
      "A destreza física para realizar tarefas repetitivas.",
      "A capacidade de processar cálculos matemáticos mais rápido que um computador.",
      "A habilidade exclusiva de comunicação verbal entre seres da mesma espécie."
    ],
    correct: 1,
    explanation: "Inteligência é a habilidade de adquirir e aplicar conhecimento visando a resolução de problemas complexos."
  },

  // ----------------------------------------------------
  // TÓPICO 2: Resolução Lógica
  // ----------------------------------------------------
  {
    id: 6,
    topicoId: 2,
    question: "Qual tipo de raciocínio lógico tira conclusões que não são logicamente garantidas, apenas prováveis?",
    options: [
      "Raciocínio Indutivo",
      "Raciocínio Dedutivo",
      "Raciocínio Abdutivo",
      "Raciocínio Matemático",
      "Raciocínio Analítico"
    ],
    correct: 0,
    explanation: "O raciocínio indutivo baseia-se em analisar uma parte dos eventos, logo, suas conclusões nunca são absolutamente certas."
  },
  {
    id: 7,
    topicoId: 2,
    question: "A afirmação 'Robert é sociólogo → Para ser sociólogo é preciso ser bacharel → Logo, Robert é bacharel' é um exemplo de qual raciocínio?",
    options: [
      "Indutivo",
      "Abdutivo",
      "Sintético",
      "Filosófico",
      "Dedutivo",
    ],
    correct: 4,
    explanation: "Este é um clássico exemplo de dedução, que utiliza o modus ponens e parte de premissas conhecidas para gerar uma sentença necessariamente verdadeira."
  },
  {
    id: 8,
    topicoId: 2,
    question: "Qual raciocínio trabalha com informações disponíveis para criar uma conclusão possível, mas que pode estar errada?",
    options: [
      "Dedutivo",
      "Comportamental",
      "Indutivo",
      "Abdutivo",
      "Cognitivo"
    ],
    correct: 3,
    explanation: "A abdução (raciocínio abdutivo) usa a melhor informação disponível no momento para inferir uma conclusão que faz sentido, mas que não tem garantia de acerto."
  },
  {
    id: 9,
    topicoId: 2,
    question: "Sobre o Raciocínio Dedutivo, é correto afirmar que:",
    options: [
      "Ele utiliza apenas a observação de uma amostra isolada.",
      "Ele tira conclusões que são prováveis, porém nunca certas.",
      "A sentença criada por ele é necessariamente verdadeira se as premissas forem verdadeiras.",
      "Ele sempre está errado dependendo do observador.",
      "Ele não utiliza o método de modus ponens."
    ],
    correct: 2,
    explanation: "No dedutivo, as conclusões retiradas a partir de premissas conhecidas garantem uma sentença verdadeira."
  },
  {
    id: 10,
    topicoId: 2,
    question: "Observar vários patos brancos e concluir que 'todos os patos são brancos' é uma falha característica de qual tipo de raciocínio?",
    options: [
      "Raciocínio Dedutivo",
      "Raciocínio Indutivo",
      "Raciocínio Abdutivo",
      "Raciocínio Exclusivo",
      "Raciocínio Hipotético"
    ],
    correct: 1,
    explanation: "Essa é a limitação do raciocínio indutivo: assumir uma regra geral baseada apenas na observação de uma parcela dos eventos."
  },

  // ----------------------------------------------------
  // TÓPICO 3: O que é Inteligência Artificial?
  // ----------------------------------------------------
  {
    id: 11,
    topicoId: 3,
    question: "O que é necessário para uma máquina passar no Teste de Turing?",
    options: [
      "Vencer o campeão mundial em uma partida de xadrez.",
      "Resolver um problema matemático sem nenhum detalhe prévio.",
      "Enganar um humano em uma conversa, fazendo-o acreditar que está falando com outro humano.",
      "Demonstrar sentimentos e empatia genuína durante uma sessão terapêutica.",
      "Executar comandos físicos através de braços robóticos perfeitamente."
    ],
    correct: 2,
    explanation: "O teste consiste em o avaliador humano não conseguir distinguir se a entidade com quem ele conversa é uma máquina ou uma pessoa."
  },
  {
    id: 12,
    topicoId: 3,
    question: "Quando avaliamos uma máquina pelo critério Comportamental, estamos focando em:",
    options: [
      "Como o sistema internamente processa o código.",
      "Se a máquina sente dor ou emoções enquanto executa a tarefa.",
      "Se a função foi realizada de forma eficaz, independente do método.",
      "Apenas na velocidade em que ela processa dados binários.",
      "Se a máquina produz um comportamento semelhante ao dos seres humanos."
    ],
    correct: 4,
    explanation: "O critério comportamental é focado estritamente na reprodução de comportamentos externos que se assemelham às ações humanas."
  },
  {
    id: 13,
    topicoId: 3,
    question: "Segundo o critério de Funcionalidade, a reprodução de uma habilidade:",
    options: [
      "Só é válida se a máquina tiver autoconsciência.",
      "Só é válida se reproduzir perfeitamente os movimentos físicos humanos.",
      "Não importa como o sistema realiza a função, apenas se ela foi resolvida de forma eficaz.",
      "Exige que a máquina use raciocínio abdutivo.",
      "Depende exclusivamente do modelo PEAS."
    ],
    correct: 2,
    explanation: "Na funcionalidade, o resultado final eficaz é o que importa, ignorando o caminho ou o método utilizado para alcançá-lo."
  },
  {
    id: 14,
    topicoId: 3,
    question: "O argumento que afirma que 'se a máquina não sente e não tem consciência, é apenas uma simulação superficial' baseia-se em qual critério?",
    options: [
      "Critério de Funcionalidade",
      "Critério Comportamental",
      "Critério de Turing",
      "Critério Cognitivo",
      "Critério de Abstração"
    ],
    correct: 3,
    explanation: "O critério cognitivo exige que haja entendimento, sentimento ou consciência para considerar a reprodução genuína."
  },
  {
    id: 15,
    topicoId: 3,
    question: "A Inteligência Artificial pode ser definida como o campo que cria máquinas que:",
    options: [
      "Pensam e agem igual ou semelhante aos humanos.",
      "Apenas substituem a força de trabalho física humana.",
      "Realizam apenas cálculos matemáticos estáticos.",
      "Funcionam independentes de energia elétrica.",
      "São exclusivamente baseadas em raciocínio indutivo."
    ],
    correct: 0,
    explanation: "A IA é definida como o ramo da ciência da computação voltado para criar máquinas que pensam e agem de forma semelhante à humana."
  },

  // ----------------------------------------------------
  // TÓPICO 4: Agentes Racionais e Inteligentes
  // ----------------------------------------------------
  {
    id: 16,
    topicoId: 4,
    question: "Qual componente permite que um agente racional perceba o ambiente em que está inserido?",
    options: [
      "Atuadores",
      "Sensores",
      "Medidas de performance",
      "Modelos LLM",
      "Abstrações"
    ],
    correct: 1,
    explanation: "Os Sensores são os meios pelos quais a entidade sente/percebe o mundo exterior."
  },
  {
    id: 17,
    topicoId: 4,
    question: "Os Atuadores em um agente racional servem para:",
    options: [
      "Perceber mudanças climáticas no ambiente.",
      "Avaliar se a missão foi um sucesso.",
      "Apenas receber inputs de texto do usuário.",
      "Planejar heurísticas de curto prazo.",
      "Interagir e agir no ambiente ao redor."
    ],
    correct: 4,
    explanation: "Atuadores são os meios de ação mecânica ou digital (ferramentas de ação) através dos quais o agente modifica ou atua no ambiente."
  },
  {
    id: 18,
    topicoId: 4,
    question: "O que a 'Performance measure' (Medida de performance) avalia no modelo PEAS?",
    options: [
      "O comportamento real que o agente demonstrou durante toda a tarefa.",
      "O tempo exato de processamento da CPU.",
      "O critério de sucesso do agente, projetado conforme os resultados esperados.",
      "O número de sensores instalados no agente.",
      "A aleatoriedade do ambiente em que atua."
    ],
    correct: 2,
    explanation: "As medidas de desempenho são critérios projetados para medir o sucesso com base nos resultados finais desejados, não apenas no comportamento no meio do caminho."
  },
  {
    id: 19,
    topicoId: 4,
    question: "O modelo PEAS é uma sigla para:",
    options: [
      "Performance, Environment, Actuators, Sensors",
      "Planning, Execution, Action, Strategy",
      "Processing, Environment, Agent, System",
      "Performance, Episodic, Actuators, Sequential",
      "Protocol, Entity, Application, Sensor"
    ],
    correct: 0,
    explanation: "PEAS traduz-se para Performance, Environment (Ambiente), Actuators (Atuadores) e Sensors (Sensores)."
  },
  
  {
  id: 20,
  topicoId: 4,
  question: "Por que o ChatGPT NÃO é classificado como um agente segundo o texto?",
  options: [
    "Porque carece de uma métrica de desempenho PEAS definida.",
    "Porque sua arquitetura impede a interação em tempo real.",
    "Porque falha ao processar percepções de forma contínua.",
    "Porque depende de um input direto do usuário para agir.",
    "Porque opera apenas em bancos de dados estáticos."
  ],
  correct: 3,
  explanation: "Agentes operam de forma autônoma. O ChatGPT é reativo: ele precisa que um usuário envie um prompt para iniciar uma ação, não agindo de forma independente no ambiente."
  },

  // ----------------------------------------------------
  // TÓPICO 5: Tipos de Ambiente
  // ----------------------------------------------------
  {
    id: 21,
    topicoId: 5,
    question: "Quando um agente tem acesso completo ao estado do ambiente a cada momento, esse ambiente é:",
    options: [
      "Parcialmente observável",
      "Estocástico",
      "Contínuo",
      "Dinâmico",
      "Totalmente observável"
    ],
    correct: 4,
    explanation: "Ambientes totalmente observáveis não possuem incertezas quanto ao estado atual, todos os dados necessários estão disponíveis aos sensores."
  },
  {
    id: 22,
    topicoId: 5,
    question: "Qual a principal diferença de um ambiente Estocástico para um Determinístico?",
    options: [
      "O Estocástico não permite o uso de sensores.",
      "O Estocástico possui incertezas e aleatoriedades no resultado.",
      "O Estocástico não muda, permanecendo estático o tempo todo.",
      "O Estocástico exige apenas um agente no ambiente.",
      "No Estocástico, a experiência é dividida em episódios curtos."
    ],
    correct: 1,
    explanation: "No ambiente determinístico, a ação causa um próximo estado previsível. No estocástico, fatores de incerteza (sorte, física complexa) impedem a previsão 100% precisa."
  },
  {
    id: 23,
    topicoId: 5,
    question: "Se a ação atual que um agente toma afeta diretamente as opções das suas próximas ações no futuro, o ambiente é:",
    options: [
      "Episódico",
      "Discreto",
      "Totalmente observável",
      "Sequencial",
      "Multi-agent"
    ],
    correct: 3,
    explanation: "No ambiente sequencial, as decisões de hoje impactam o ambiente de amanhã (diferente do episódico, onde as ações são contidas e isoladas)."
  },
  {
    id: 24,
    topicoId: 5,
    question: "Um carro autônomo dirigindo em uma rodovia lida com um ambiente que está em constante mutação enquanto ele toma decisões. Este ambiente é classificado como:",
    options: [
      "Estático",
      "Determinístico",
      "Episódico",
      "Single-agent",
      "Dinâmico"
    ],
    correct: 4,
    explanation: "Se o ambiente muda enquanto o agente 'pensa' e toma sua decisão (como o movimento dos outros carros), ele é Dinâmico."
  },
  {
    id: 25,
    topicoId: 5,
    question: "Um jogo de xadrez onde o tabuleiro possui 64 casas exatas e um número finito e contabilizável de ações possíveis é um exemplo de ambiente:",
    options: [
      "Discreto",
      "Contínuo",
      "Estocástico",
      "Dinâmico",
      "Parcialmente observável"
    ],
    correct: 0,
    explanation: "Ambientes discretos permitem enumerar claramente todas as percepções e ações possíveis (ao contrário do contínuo, onde as possibilidades e os dados do sensor são quase infinitos)."
  },
  // ----------------------------------------------------
  // TÓPICO 6: Tipos de Agentes
  // ----------------------------------------------------
  {
    id: 26,
    topicoId: 6,
    question: "Qual agente age baseando-se apenas na percepção atual, sem guardar nenhum histórico do passado?",
    options: [
      "Agente reativo baseado em modelo",
      "Agente baseado em objetivo",
      "Agente reativo simples (por reflexo)",
      "Agente baseado em utilidade",
      "Agente com abstração estocástica"
    ],
    correct: 2,
    explanation: "O agente reativo simples toma decisões apenas pelo que vê agora (reflexo). Por não ter memória, o ambiente precisa ser totalmente observável."
  },
  {
    id: 27,
    topicoId: 6,
    question: "Qual é a principal vantagem do Agente reativo baseado em modelo em relação ao simples?",
    options: [
      "Ele não usa sensores, focando apenas em atuadores.",
      "Ele guarda um histórico de percepções, permitindo operar em ambientes parcialmente observáveis.",
      "Ele foca exclusivamente na minimização de custos.",
      "Ele planeja o caminho inteiro antes de dar o primeiro passo.",
      "Ele ignora as mudanças do ambiente ao longo do tempo."
    ],
    correct: 1,
    explanation: "Por manter um histórico, ele consegue entender como o ambiente evolui, o que o torna capaz de funcionar mesmo quando não enxerga tudo."
  },
  {
    id: 28,
    topicoId: 6,
    question: "Qual característica diferencia de forma marcante o 'Agente baseado em utilidade'?",
    options: [
      "Ele busca qualquer objetivo, não se importando com o tempo.",
      "Ele maximiza a qualidade do resultado usando funções de utilidade.",
      "Ele não planeja o futuro, agindo de forma totalmente aleatória.",
      "Ele funciona apenas em ambientes contínuos e multi-agent.",
      "Ele é incapaz de tomar decisões em ambientes determinísticos."
    ],
    correct: 1,
    explanation: "Enquanto o agente de objetivo só quer chegar lá, o agente de utilidade quer chegar lá da melhor forma possível (maximizando a utilidade)."
  },
  {
    id: 29,
    topicoId: 6,
    question: "Qual agente usa o estado atual e o objetivo para planejar uma sequência de ações por meio de busca?",
    options: [
      "Agente de ambiente dinâmico",
      "Agente reativo simples",
      "Agente reativo baseado em modelo",
      "Agente baseado em utilidade estática",
      "Agente baseado em objetivo"
    ],
    correct: 4,
    explanation: "O Agente baseado em objetivo foca as suas decisões e técnicas de busca na aproximação até alcançar o objetivo final."
  },
  {
    id: 30,
    topicoId: 6,
    question: "Para que um agente reativo simples funcione adequadamente, o ambiente deve ser obrigatoriamente:",
    options: [
      "Totalmente observável",
      "Parcialmente observável",
      "Estocástico e dinâmico",
      "Contínuo e multi-agent",
      "Episódico e sem objetivo"
    ],
    correct: 0,
    explanation: "Como o agente por reflexo não tem memória/histórico, se ele não enxergar todo o ambiente a cada momento, ele não conseguirá agir corretamente."
  },

  // ----------------------------------------------------
  // TÓPICO 7: Problemas de Busca
  // ----------------------------------------------------
  {
    id: 31,
    topicoId: 7,
    question: "Qual o tipo de ambiente ideal exigido para que problemas de busca tradicionais sejam aplicados?",
    options: [
      "Parcialmente observável, contínuo e episódico",
      "Totalmente observável, discreto e determinístico",
      "Dinâmico, estocástico e sequencial",
      "Estático, contínuo e multi-agent",
      "Discreto, multi-agent e não-observável"
    ],
    correct: 1,
    explanation: "Os problemas de busca operam perfeitamente sob a premissa de um ambiente onde não há surpresas (totalmente observável e determinístico) e as opções são contáveis (discreto)."
  },
  {
    id: 32,
    topicoId: 7,
    question: "Nos 5 elementos de um problema de busca, qual elemento informa as consequências que cada ação irá desencadear?",
    options: [
      "Estado inicial",
      "Teste de objetivo",
      "Custo do caminho",
      "Espaço de estados",
      "Função sucessora",
    ],
    correct: 4,
    explanation: "A Função sucessora define o conjunto de ações disponíveis em um estado e as consequências (para qual estado aquilo te leva)."
  },
  {
    id: 33,
    topicoId: 7,
    question: "Como é definida uma 'Solução' no contexto de problemas de busca?",
    options: [
      "O uso do menor tempo de processamento possível de um algoritmo.",
      "A eliminação de estados repetidos na memória.",
      "O caminho do estado inicial até alcançar o objetivo.",
      "A identificação de todos os nós em um ambiente parcialmente observável.",
      "O teste único que valida o agente."
    ],
    correct: 2,
    explanation: "O objetivo da busca é encontrar o trajeto de ações do ponto A (estado inicial) ao ponto B (objetivo)."
  },
  {
    id: 34,
    topicoId: 7,
    question: "O processo de remover detalhes da representação de um problema no mundo real é chamado de:",
    options: [
      "Abstração",
      "Ramificação",
      "Heurística",
      "Fringe",
      "Modus ponens"
    ],
    correct: 0,
    explanation: "A abstração permite equilibrar os detalhes: nem complexo demais (inviável de resolver), nem simples demais (não soluciona corretamente)."
  },
  {
    id: 35,
    topicoId: 7,
    question: "O conjunto de todos os estados possíveis que podem ser alcançados a partir do começo do jogo é o:",
    options: [
      "Custo acumulado",
      "Espaço de estados",
      "Grafo contínuo",
      "Ambiente de teste",
      "Ambiente estocástico"
    ],
    correct: 1,
    explanation: "O Espaço de estados engloba absolutamente todas as variações de estados que as ações do agente conseguem alcançar."
  },

  // ----------------------------------------------------
  // TÓPICO 8: Grafos e Árvores de Busca
  // ----------------------------------------------------
  {
    id: 36,
    topicoId: 8,
    question: "No 'Grafo de espaço de estado', o que as arestas (edges) representam?",
    options: [
      "Os estados estáticos do tabuleiro.",
      "As funções sucessoras.",
      "A quantidade de memória utilizada pelo processo.",
      "Os testes de objetivo falhos.",
      "As restrições do agente."
    ],
    correct: 1,
    explanation: "Enquanto os nós são os estados, as arestas são as 'pontes' (funções sucessoras e seus custos) que ligam um estado ao outro."
  },
  {
    id: 37,
    topicoId: 8,
    question: "Por que uma Árvore de Busca pode tornar-se infinita?",
    options: [
      "Porque o ambiente é sempre estático e não permite ações.",
      "Porque cada estado só pode ocorrer uma vez no processo de busca.",
      "Porque ela não tem ramificações, apenas uma linha reta vertical.",
      "Devido à muita repetição de estados, podendo entrar em caminhos repetitivos sem fim.",
      "Porque o custo do caminho é igual a zero em todas as arestas."
    ],
    correct: 3,
    explanation: "Diferente do Grafo, na Árvore o mesmo estado pode ser explorado por caminhos diferentes, criando loops e estruturas repetidas infinitas."
  },
  {
    id: 38,
    topicoId: 8,
    question: "Sobre o Grafo de espaço de estado, é correto afirmar que:",
    options: [
      "Ele sempre é construído 100% na memória do computador, independentemente do tamanho.",
      "Cada estado ocorre várias vezes para facilitar a leitura.",
      "Cada estado ocorre apenas uma única vez.",
      "Ele representa o processo prático em vez da matemática do problema.",
      "Ele ignora os nós objetivos."
    ],
    correct: 2,
    explanation: "Na matemática do grafo, um estado único é mapeado apenas uma vez, diferentemente da árvore de busca que desdobra o processo."
  },
  {
    id: 39,
    topicoId: 8,
    question: "Na árvore de busca, um nó na árvore representa especificamente:",
    options: [
      "Uma ação física isolada que não afeta o estado.",
      "Um caminho completo e único no grafo de espaço de estados que leva àquele estado.",
      "O limite de processamento da busca.",
      "A soma de utilidades do ambiente estocástico.",
      "Uma falha na função sucessora."
    ],
    correct: 1,
    explanation: "Cada nó que aparece na árvore carrega o 'peso' da trajetória até ele, correspondendo a um caminho único para aquele estado."
  },
  {
    id: 40,
    topicoId: 8,
    question: "O conjunto de nós que indica que a busca pode ser encerrada com sucesso no Grafo é chamado de:",
    options: [
      "Fringe",
      "Expansão",
      "Big O Notation",
      "Árvore relaxada",
      "Teste de objetivo",
    ],
    correct: 4,
    explanation: "O teste de objetivo determina quais são os nós específicos que servem de meta/objetivo final do problema."
  },

  // ----------------------------------------------------
  // TÓPICO 9: Algoritmos Não Informados
  // ----------------------------------------------------
  {
    id: 41,
    topicoId: 9,
    question: "Algoritmos não informados também são conhecidos como:",
    options: [
      "Buscas Heurísticas",
      "Buscas Inteligentes",
      "Buscas por Poda",
      "Buscas Cegas",
      "Buscas Admissíveis"
    ],
    correct: 3,
    explanation: "Recebem esse nome porque exploram caminhos sem nenhuma informação extra de proximidade ao alvo, operando de forma 'cega'."
  },
  {
    id: 42,
    topicoId: 9,
    question: "Na avaliação Big O, a propriedade 'Completo' avalia se o algoritmo:",
    options: [
      "Varre todo o espaço de memória do computador.",
      "Garante a descoberta de uma solução caso ela exista.",
      "Acha a solução ótima com o menor caminho.",
      "É capaz de agir sem nenhum sensor.",
      "Pode se adaptar a ambientes dinâmicos e contínuos."
    ],
    correct: 1,
    explanation: "A completude garante que o programa não ficará travado se houver de fato uma resposta válida no problema."
  },
  {
    id: 43,
    topicoId: 9,
    question: "Qual algoritmo é escolhido especificamente quando o objetivo é gastar MENOS memória?",
    options: [
      "BFS (Busca em Largura)",
      "DFS (Busca em Profundidade)",
      "UCS (Busca de Custo Uniforme)",
      "Algoritmo A*",
      "IDS (Aprofundamento Iterativo)"
    ],
    correct: 1,
    explanation: "O DFS (Busca em Profundidade) possui a vantagem de usar complexidade espacial O(bm), o que gasta significativamente menos memória que as buscas em largura."
  },
  {
    id: 45,
    topicoId: 9,
    question: "Um detalhe importante na aplicação da Busca em Profundidade (DFS) e Busca em Largura (BFS) é que ambas:",
    options: [
      "Não consideram o custo das ações ao formar os caminhos.",
      "Usam sempre heurísticas admissíveis.",
      "São algoritmos informados.",
      "Consomem exatamente o mesmo tanto de memória (O(b^s)).",
      "Funcionam bem em jogos de soma-zero puramente competitivos."
    ],
    correct: 0,
    explanation: "O material pontua que 'O custo NÃO é considerado em BFS e DFS', pois contam apenas o nível de profundidade ou ramificações cegas."
  },

  // ----------------------------------------------------
  // TÓPICO 10: DFS e BFS
  // ----------------------------------------------------
 {
  id: 46,
  topicoId: 10,
  question: "A Busca em Largura (BFS) utiliza qual estrutura de dados?",
  options: [
    "Fila de Prioridades (Heurística)",
    "Fila Convencional (tipo FIFO)",
    "Pilha de Dados (tipo LIFO)",
    "Lista Encadeada (Ordenada)",
    "Tabela de Dispersão (Hash)"
  ],
  correct: 1,
  explanation: "A DFS explora os vizinhos mais recentes primeiro (mergulhando no caminho), o que caracteriza o comportamento de Pilha: o último a entrar é o primeiro a sair (LIFO)."
  },
  {
    id: 47,
    topicoId: 10,
    question: "A Busca em Profundidade (DFS) é considerada ótima sob quais condições?",
    options: [
      "Sempre que o ambiente de busca não apresentar ciclos.",
      "Nunca é ótima, pois ignora o custo do caminho percorrido.",
      "Apenas quando todos os passos do grafo possuem custo 1.",
      "Sempre que o fator de ramificação da árvore for um par.",
      "Apenas quando a estrutura utilizada for uma Fila (FIFO)."
    ],
    correct: 1,
    explanation: "A DFS mergulha no primeiro caminho que encontra e aceita a primeira solução achada (a mais à esquerda). Mesmo que exista uma rota mais curta ou barata em outro ramo, ela não a prioriza."
  },
  {
    id: 48,
    topicoId: 10,
    question: "Qual é a notação de complexidade de tempo para a Busca em Largura (BFS), sendo 's' a profundidade da primeira solução?",
    options: [
      "O(b<sup>m</sup>)",
      "O(bm)",
      "O(s<sup>b</sup>)",
      "O(b<sup>s</sup>)",
      "O(m<sup>b</sup>)"
    ],
    correct: 3,
    explanation: "O BFS expande todos os nós do nível atual. Se a solução está no nível 's' e a ramificação é 'b', ele percorre O(b^s) no tempo e espaço."
  },
  {
    id: 49,
    topicoId: 10,
    question: "A Busca em Profundidade (DFS) utiliza qual estrutura de dados?",
    options: [
      "Fila de Prioridades baseada em heurísticas",
      "Fila (FIFO)",
      "Pilha (LIFO)",
      "Vetor Contínuo",
      "Tabela Hash"
    ],
    correct: 2,
    explanation: "DFS explora os vizinhos mais recentes primeiro, usando o comportamento de pilha (Last In, First Out - LIFO)."
  },
  {
    id: 50,
    topicoId: 10,
    question: "Sobre a optimalidade do algoritmo BFS (Busca em Largura), é correto afirmar:",
    options: [
      "É ótimo em qualquer cenário computacional.",
      "É ótimo apenas se os custos das arestas forem todos iguais.",
      "É completamente subótimo, nunca acha a melhor rota.",
      "Depende do uso de heurísticas consistentes.",
      "Só é ótimo se a ramificação da árvore tender ao infinito."
    ],
    correct: 1,
    explanation: "Como a BFS não avalia o peso da aresta (só o número de passos), ela só crava o menor custo financeiro/real se todos os saltos tiverem rigorosamente o mesmo custo unitário."
  },
  // ----------------------------------------------------
  // TÓPICO 11: UCS, DLS e IDS
  // ----------------------------------------------------
  {
    id: 51,
    topicoId: 11,
    question: "A Busca de Custo Uniforme (UCS) utiliza qual estrutura de dados para expandir os vértices?",
    options: [
      "Fila (FIFO) simples",
      "Pilha (LIFO)",
      "Lista circular",
      "Árvore binária de busca",
      "Fila de prioridades"
    ],
    correct: 4,
    explanation: "Por focar no menor custo acumulado, a UCS utiliza uma fila de prioridades para garantir que o nó com o menor valor será o próximo a sair."
  },
  {
    id: 52,
    topicoId: 11,
    question: "Para que a Busca de Custo Uniforme (UCS) seja considerada Completa, qual condição deve ser assumida?",
    options: [
      "O ambiente deve possuir múltiplos agentes operando.",
      "O custo do caminho deve ignorar as arestas com peso zero.",
      "A solução deve estar em uma profundidade infinita.",
      "Os custos das arestas devem ser positivos, e o valor de ε > 0.",
      "Ela deve ser combinada com uma heurística admissível."
    ],
    correct: 3,
    explanation: "Se houver custos nulos ou negativos, a UCS pode ficar presa em um loop infinito que não aumenta o custo do caminho. Daí a exigência de ε > 0."
  },
  {
    id: 53,
    topicoId: 11,
    question: "Qual o principal risco que faz com que a Busca em Profundidade com Limite (DLS) NÃO seja completa?",
    options: [
      "Se houver muitos empates nos custos dos nós.",
      "Se a solução procurada estiver em uma profundidade maior que o limite 'd' estipulado.",
      "Se o fator de ramificação for menor que 2.",
      "Se ela utilizar a estrutura de Fila de Prioridades.",
      "Se não tiver suporte para heurísticas."
    ],
    correct: 1,
    explanation: "Como a DLS corta a busca na profundidade máxima 'd', se o objetivo estiver no nível d+1 (ou mais fundo), ele nunca será encontrado."
  },
  {
    id: 54,
    topicoId: 11,
    question: "O algoritmo IDS (Busca com Aprofundamento Iterativo) combina as vantagens de quais outras duas buscas?",
    options: [
      "Greedy Search e A*",
      "UCS e BFS",
      "DFS e UCS",
      "BFS e DFS",
      "DLS e Greedy Search"
    ],
    correct: 3,
    explanation: "Ele traz a garantia de achar a melhor solução (ótimo/completo da BFS) e a economia radical de espaço/memória (da DFS)."
  },
  {
    id: 55,
    topicoId: 11,
    question: "Qual a complexidade de espaço exigida pela Busca em Profundidade com Limite (DLS)?",
    options: [
      "O(b^d)",
      "O(bd)",
      "O(b^m)",
      "O(b^(C*/ε))",
      "O(1)"
    ],
    correct: 1,
    explanation: "Assim como a DFS original que gasta O(bm), a DLS consome apenas O(bd) de memória, onde 'b' é a ramificação e 'd' é a profundidade limite."
  },

  // ----------------------------------------------------
  // TÓPICO 12: Busca Informada
  // ----------------------------------------------------
  {
    id: 56,
    topicoId: 12,
    question: "Qual é a principal diferença entre uma busca informada e uma busca cega (não informada)?",
    options: [
      "A busca informada explora apenas grafos contínuos.",
      "A busca informada não se importa com a performance do agente.",
      "A busca informada utiliza estratégias e heurísticas para estimar a proximidade do objetivo.",
      "A busca informada visita todos os nós da árvore antes de parar.",
      "A busca informada nunca é capaz de encontrar o menor caminho."
    ],
    correct: 2,
    explanation: "Ela usa conhecimento adicional (a heurística) para 'mirar' em direção ao objetivo em vez de atirar no escuro."
  },
  {
    id: 57,
    topicoId: 12,
    question: "A função heurística h(n) em um algoritmo tem como finalidade principal:",
    options: [
      "Superestimar os custos para evitar caminhos subótimos.",
      "Estimar o custo do estado atual 'n' até o estado objetivo.",
      "Contar o número de nós que já foram visitados pelo agente.",
      "Impedir que o agente entre em loops durante a DFS.",
      "Ignorar o objetivo principal e focar na utilidade secundária."
    ],
    correct: 1,
    explanation: "A função h(n) tenta adivinhar o quão perto ou quão barato é ir de onde você está agora (n) até a meta final."
  },
  {
    id: 58,
    topicoId: 12,
    question: "Sobre as funções heurísticas, assinale a alternativa verdadeira:",
    options: [
      "Para um problema específico, só é possível criar uma única heurística válida.",
      "Elas tomam decisões absolutas e perfeitas para o caminho inteiro do começo ao fim.",
      "A orientação fornecida por elas serve apenas para decisões locais entre sucessores imediatos.",
      "Elas obrigatoriamente aumentam a complexidade de tempo de qualquer busca.",
      "Não podem ser aplicadas em ambientes parcialmente observáveis."
    ],
    correct: 2,
    explanation: "A heurística é apenas uma dica que te ajuda a decidir qual é o melhor passo a ser dado a partir do local atual (decisão local), não prevendo o futuro completo com perfeição."
  },
  {
    id: 59,
    topicoId: 12,
    question: "Qual é o principal ganho ao se implementar uma boa busca heurística?",
    options: [
      "Aumentar o gasto de memória em troca de respostas instantâneas.",
      "Transformar ambientes dinâmicos em estáticos.",
      "Reduzir o custo computacional e acelerar significativamente a obtenção de soluções.",
      "Possibilitar o uso de pilhas LIFO em vez de filas de prioridade.",
      "Remover a necessidade do agente ter atuadores."
    ],
    correct: 2,
    explanation: "O objetivo de toda heurística é encurtar atalhos inteligentes, evitando varrer opções ruins e economizando processamento computacional."
  },
  {
    id: 60,
    topicoId: 12,
    question: "Um dos usos primários da informação heurística em problemas de IA é guiar o algoritmo nas decisões de qual nós:",
    options: [
      "Adicionar ao teste de Turing.",
      "Descartar completamente da memória local.",
      "Expandir em seguida a partir da borda/fronteira (fringe).",
      "Converter em estado determinístico.",
      "Dividir entre a busca episódica e sequencial."
    ],
    correct: 2,
    explanation: "A heurística ajuda a ranquear a fronteira (fringe) para decidir qual nó é o mais promissor para ser aberto e explorado no próximo turno."
  },

  // ----------------------------------------------------
  // TÓPICO 13: Greedy Search
  // ----------------------------------------------------
  {
    id: 61,
    topicoId: 13,
    question: "O algoritmo Greedy Search (Busca Gulosa) decide qual nó expandir baseando-se EXCLUSIVAMENTE em:",
    options: [
      "No custo real percorrido do início até o momento: g(n).",
      "No limite de profundidade máximo da árvore: d.",
      "Na função heurística estimada até o objetivo: h(n).",
      "Na soma do custo real e da estimativa heurística.",
      "No número total de ramificações do estado anterior."
    ],
    correct: 2,
    explanation: "O foco único do Greedy Search é o quão 'perto' ele acha que está do fim (h(n)), ignorando completamente o quanto já custou chegar até ali."
  },
  {
    id: 62,
    topicoId: 13,
    question: "O que significa dizer que h(n) = 0 em um problema avaliado pela Greedy Search?",
    options: [
      "Que o algoritmo encontrou um ciclo sem saída.",
      "Que o nó atual 'n' é o estado objetivo do problema.",
      "Que o custo das arestas ao redor é nulo.",
      "Que a heurística falhou e não pode estimar o valor.",
      "Que o ambiente tornou-se não observável."
    ],
    correct: 1,
    explanation: "Se a estimativa de custo para chegar no alvo é zero, isso prova matematicamente que você já está pisando em cima do alvo (estado objetivo)."
  },
  {
    id: 63,
    topicoId: 13,
    question: "Por que a Greedy Search NÃO é considerada Ótima nem Completa?",
    options: [
      "Porque o fator de ramificação dela é infinito em todos os cenários.",
      "Porque não usa estruturas de repetição LIFO.",
      "Porque as estimativas sempre retornam o dobro do valor real da rota.",
      "Porque ela sempre visita primeiro os nós da extremidade direita do grafo.",
      "Porque pode se prender em ciclos infinitos e nem sempre acha o melhor caminho."
    ],
    correct: 4,
    explanation: "O excesso de confiança na heurística local pode levá-la por becos sem saída infinitos (incompleta) ou caminhos desnecessariamente caros (não ótima)."
  },
  {
    id: 64,
    topicoId: 13,
    question: "Qual algoritmo clássico não-informado possui comportamento estrutural semelhante à Greedy Search de 'seguir um caminho reto do início ao fim'?",
    options: [
      "Busca de Custo Uniforme (UCS)",
      "Busca em Largura (BFS)",
      "Busca em Profundidade (DFS)",
      "Aprofundamento Iterativo (IDS)",
      "Algoritmo A*"
    ],
    correct: 2,
    explanation: "Assim como a DFS, a Gulosa prefere ir se afundando rapidamente num único caminho que parece promissor até o final, em vez de tatear cuidadosamente os níveis (como o BFS faz)."
  },
  {
    id: 65,
    topicoId: 13,
    question: "Com uma heurística de péssima qualidade, qual é a complexidade de tempo do pior caso na Greedy Search?",
    options: [
      "O(bd)",
      "O(b<sup>s</sup>)",
      "O(1)",
      "O(b<sup>m</sup>)",
      "O(s<sup>m</sup>)"
    ],
    correct: 3,
    explanation: "Se a heurística for ruim, a busca gulosa se comporta de maneira ineficiente parecida com a de um DFS travado no limite máximo do grafo, custando O(b^m)."
  },

  // ----------------------------------------------------
  // TÓPICO 14: A* Search
  // ----------------------------------------------------
  {
    id: 66,
    topicoId: 14,
    question: "O algoritmo A* é fundamentalmente criado pela combinação de quais dois algoritmos de busca?",
    options: [
      "BFS e DFS",
      "DLS e IDS",
      "UCS (Custo Uniforme) e Greedy Search",
      "Greedy Search e BFS",
      "Busca Informada e Minimax"
    ],
    correct: 2,
    explanation: "O A* pega o controle de custo passado acumulado da UCS e mescla com a visão otimista de futuro da Greedy Search."
  },
  {
    id: 67,
    topicoId: 14,
    question: "Na famosa equação de escolha do A* ( f(n) = g(n) + h(n) ), o que representa a função g(n)?",
    options: [
      "O valor constante atribuído a ambientes dinâmicos.",
      "A estimativa de custo de 'n' até a vitória.",
      "O valor numérico do estado terminal do jogo.",
      "A contagem total de ramificações do grafo.",
      "O custo real acumulado do estado inicial até o nó atual 'n'."
    ],
    correct: 4,
    explanation: "g(n) garante que a A* não ignore quão caro foi o caminho que ela já percorreu até pisar no nó 'n'."
  },
  {
    id: 68,
    topicoId: 14,
    question: "Se a heurística h(n) de um A* for admissível e consistente, qual destas afirmativas é verdadeira?",
    options: [
      "Ele deixa de ser completo.",
      "Ele garantidamente será Ótimo e achará o menor caminho.",
      "A função f(n) diminuirá drasticamente ao longo do trajeto.",
      "A complexidade de tempo se tornará constante O(1).",
      "Ele perderá a capacidade de resolver ambientes observáveis."
    ],
    correct: 1,
    explanation: "As garantias matemáticas da admissibilidade e consistência fazem com que o A* nunca seja enganado, achando sempre a rota perfeitamente ótima."
  },
  {
    id: 69,
    topicoId: 14,
    question: "Comparado a outros algoritmos de busca ótima que partem do mesmo início e usam a mesma heurística admissível, o A* se destaca por:",
    options: [
      "Expandir o menor número de caminhos possíveis.",
      "Dispensar totalmente o uso da memória.",
      "Priorizar estados estocásticos.",
      "Processar sem usar funções de fila de prioridade.",
      "Ocultar estados finais múltiplos."
    ],
    correct: 0,
    explanation: "Ele é extremamente eficiente; nenhum algoritmo genérico consegue achar a solução abrindo menos nós do que o A* quando ambos partilham a mesma visão/heurística do problema."
  },
  {
    id: 70,
    topicoId: 14,
    question: "Qual o padrão de progressão no espaço que a busca A* realiza em problemas práticos?",
    options: [
      "Avança de forma retilínea única.",
      "Cria e expande apenas nós nas diagonais.",
      "Faz picos aleatórios saltando a árvore.",
      "Reescreve o estado anterior a cada passo novo.",
      "Adiciona contornos gradualmente aos nós."
    ],
    correct: 4,
    explanation: "O A* avança abrindo 'fronteiras' circulares/ovais progressivamente focadas na direção do alvo final, como ondas radiais se espalhando no mapa."
  },

  // ----------------------------------------------------
  // TÓPICO 15: Admissibilidade
  // ----------------------------------------------------
  {
    id: 71,
    topicoId: 15,
    question: "O que acontece quando uma heurística é considerada 'Inadmissível' (pessimista)?",
    options: [
      "Ela não usa estimativas no A*.",
      "Ela nunca consegue alcançar o objetivo principal.",
      "Ela superestima o custo real, o que acarreta no algoritmo não achar a solução ótima.",
      "Ela ignora restrições do ambiente relaxado.",
      "Ela descarta a variável g(n)."
    ],
    correct: 2,
    explanation: "Se a heurística chuta o valor para cima, o algoritmo desiste de caminhos que seriam muito bons por achar (erroneamente) que eles custam demais."
  },
  {
    id: 72,
    topicoId: 15,
    question: "Qual é a equação matemática correta que comprova que uma heurística h(n) é Admissível em relação ao custo verdadeiro h*(n)?",
    options: [
      "h(n) > h*(n) + 1",
      "f(n) = h(n)",
      "0 ≤ h(n) ≤ h*(n)",
      "h(n) = g(n) + h*(n)",
      "h*(n) < 0 ≤ h(n)"
    ],
    correct: 2,
    explanation: "A heurística admissível deve ser positiva (maior ou igual a 0) e nunca chutar mais alto que o custo verdadeiro real h*(n)."
  },
  {
    id: 73,
    topicoId: 15,
    question: "Uma técnica comum para criar boas heurísticas admissíveis é criar um 'Problema Relaxado'. O que é isso?",
    options: [
      "Um problema onde a máquina reduz o poder de processamento pela metade.",
      "Uma versão do problema original com as restrições removidas/diminuídas.",
      "Um problema onde o estado inicial é idêntico ao estado terminal.",
      "Um problema que possui múltiplos agentes adversários.",
      "Um ambiente totalmente não-observável."
    ],
    correct: 1,
    explanation: "Problemas relaxados permitem movimentos teóricos 'inválidos' (como atravessar paredes). Resolver o problema dessa forma gera um custo 'otimista', servindo como uma excelente heurística para o jogo real restrito."
  },
  {
    id: 74,
    topicoId: 15,
    question: "Se há múltiplas heurísticas admissíveis criadas para resolver um mesmo problema, qual regra deve ser usada na escolha?",
    options: [
      "Escolher a que fornece o menor valor numérico sempre.",
      "Fazer uma média de todas as heurísticas e dividir por 2.",
      "Ignorar todas e usar a busca cega (não informada).",
      "Multiplicar os valores das heurísticas entre si.",
      "Escolher a que possua o maior valor sem ultrapassar o custo verdadeiro h*(n)."
    ],
    correct: 4,
    explanation: "Quanto mais alta a heurística estimar (desde que nunca passe do teto h*), melhor guiado será o algoritmo, cortando mais opções ruins da lista."
  },
  {
    id: 75,
    topicoId: 15,
    question: "Qual destas afirmações define a regra sobre heurísticas Admissíveis e Consistentes (Monotonicidade)?",
    options: [
      "Toda heurística admissível é consistente, mas nem toda consistente é admissível.",
      "Não há nenhuma relação cruzada entre consistência e admissibilidade.",
      "Toda heurística consistente é admissível, mas nem toda admissível é consistente.",
      "A admissibilidade torna o valor de f(n) estritamente decrescente.",
      "Apenas problemas multi-agent exigem heurísticas consistentes."
    ],
    correct: 2,
    explanation: "Consistência é uma regra durona (f(n) nunca decrescer); se ela consegue isso, ela ganha a faixa de admissível de brinde. Mas uma admissível normal pode flutuar os valores e falhar no teste de consistência."
  },

  // ----------------------------------------------------
  // TÓPICO 16: Game Theory e Adversarial Search
  // ----------------------------------------------------
  {
    id: 76,
    topicoId: 16,
    question: "Qual das opções abaixo NÃO é um requisito base para conseguir representar um problema como um jogo?",
    options: [
      "Regras claramente definidas.",
      "Acesso infinito a ramificações estocásticas no início.",
      "Resultados bem definidos.",
      "Conjunto finito de ações.",
      "Agentes que tomam decisões racionais."
    ],
    correct: 1,
    explanation: "Modelar jogos matemáticos exige contornos finitos e lógicos (ações finitas, regras, decisões ótimas/racionais, e vitórias/derrotas claras)."
  },
  {
    id: 77,
    topicoId: 16,
    question: "No ambiente de jogos determinísticos, o que o agente agora tenta fazer em relação aos números da Função de Utilidade?",
    options: [
      "Minimizar permanentemente a utilidade.",
      "Zerá-la a cada turno concluído.",
      "Maximizar a sua própria pontuação/utilidade no estado terminal.",
      "Equilibrar para que o adversário tire as mesmas notas.",
      "Ignorar os números para evitar o teste de Turing."
    ],
    correct: 2,
    explanation: "No mundo dos caminhos você queria gastar o menor 'custo' de gasolina. Nos jogos, você quer acumular os maiores 'pontos' de utilidade para ganhar o estado terminal."
  },
  {
    id: 78,
    topicoId: 16,
    question: "O que caracteriza os cenários classificados como 'Zero-Sum Games' (Jogos de Soma Zero)?",
    options: [
      "As funções de utilidade entre os jogadores são opostas e conflitantes.",
      "Os jogadores nunca fazem pontos; o placar será sempre zero.",
      "Os agentes cooperam independentes para chegar ao fim juntos.",
      "É um modelo onde a máquina Deep Blue não consegue jogar.",
      "Não ocorre competição, apenas indiferença estratégica."
    ],
    correct: 0,
    explanation: "É uma competição pura. O +1 para você significa fatalmente o -1 para o oponente, anulando as somas e tornando as estratégias perfeitamente reversas."
  },
  {
    id: 79,
    topicoId: 16,
    question: "Em 'General Games' (Jogos Gerais), como as utilidades dos agentes se comportam?",
    options: [
      "Elas são espelhadas perfeitamente para resultar sempre em empate.",
      "Elas não existem, o jogo é avaliado apenas por estética comportamental.",
      "São puramente focadas em punir o outro agente sem obter vantagens.",
      "Elas são opostas matematicamente em 100% do tempo.",
      "São independentes: os agentes podem cooperar, competir ou simplesmente agir com indiferença entre si."
    ],
    correct: 4,
    explanation: "Jogos gerais são realistas, espelhando dinâmicas onde alianças, traições ou focar apenas em si mesmo coexistem na matemática do tabuleiro."
  },
  {
    id: 80,
    topicoId: 16,
    question: "No contexto da inteligência artificial aplicada em jogos, o que foi o projeto 'Deep Blue'?",
    options: [
      "O primeiro robô aspirador de pó com sensores avançados.",
      "O modelo LLM predecessor do ChatGPT desenvolvido para responder charadas.",
      "A primeira máquina a ganhar um jogo de xadrez contra um humano campeão mundial usando busca competitiva.",
      "A primeira interface a resolver labirintos com Greedy Search.",
      "Um algoritmo genético voltado para ambientes estocásticos marítimos."
    ],
    correct: 2,
    explanation: "A Deep Blue (da IBM) fez história ao usar a árvore e força bruta do 'Adversarial Search' para dominar a utilidade e vencer Garry Kasparov."
  },

  // ----------------------------------------------------
  // TÓPICO 17: Algoritmo MINIMAX
  // ----------------------------------------------------
  {
    id: 81,
    topicoId: 17,
    question: "No algoritmo MINIMAX, o foco central das decisões do jogador MAX é:",
    options: [
      "Maximizar a velocidade de processamento.",
      "Minimizar sua utilidade para ceder o jogo ao oponente de forma ética.",
      "Atingir o nível mais baixo da árvore rapidamente.",
      "Buscar cooperar com o jogador MIN sempre que possível.",
      "Maximizar a sua função de utilidade, ao mesmo tempo em que reduz ao máximo a utilidade do jogador MIN."
    ],
    correct: 4,
    explanation: "O MAX fará de tudo para puxar a balança para cima (sucesso dele), sabendo que o MIN tentará o exato oposto no turno seguinte."
  },
  {
    id: 82,
    topicoId: 17,
    question: "A metodologia 'bottom-up' do MINIMAX aplicada em árvores de jogo significa que ele:",
    options: [
      "Apaga as folhas da árvore gradualmente para poupar a memória do sistema.",
      "Ignora os níveis MAX durante as ramificações inferiores.",
      "Calcula as utilidades nas folhas do jogo (terminais) e vai repassando esses valores de baixo para cima até a raiz.",
      "Usa BFS apenas quando a busca atinge o limite episódico.",
      "Adiciona nós raízes artificiais na extremidade debaixo."
    ],
    correct: 2,
    explanation: "Ele olha para todos os fins de jogo lá embaixo (quem ganha, empata ou perde) e propaga essa 'certeza' de volta pelo caminho para a primeira jogada na raiz."
  },
  {
    id: 83,
    topicoId: 17,
    question: "Se a árvore de jogo do MINIMAX intercala as decisões entre o agente e o seu oponente, a 'raiz' da árvore sempre será de quem?",
    options: [
      "Do jogador MAX.",
      "Do jogador MIN.",
      "Um nível estocástico aleatório.",
      "Um nível sem nenhum poder de escolha.",
      "Do árbitro generalista."
    ],
    correct: 0,
    explanation: "Como a jogada atual (o presente no topo da árvore) é do nosso agente tentando achar o melhor caminho para ele, a raiz será um momento decisivo MAX."
  },
  {
    id: 84,
    topicoId: 17,
    question: "O jogador MAX no sistema toma a sua decisão assumindo logicamente que o jogador MIN se comportará de que maneira?",
    options: [
      "MIN vai errar a cada 3 movimentos devido a fatores de indução heurística.",
      "MIN jogará subotimamente, tentando apenas prolongar o jogo.",
      "MIN não enxerga a utilidade real de toda a árvore, apenas o fringe atual.",
      "MIN fará jogadas aleatórias que o MAX pode explorar estatisticamente.",
      "MIN escolherá a jogada perfeita para o pior cenário do agente MAX."
    ],
    correct: 4,
    explanation: "É um cálculo defensivamente seguro. O algoritmo prefere agir esperando o adversário mais inteligente possível (pior dano ao MAX) do que tentar a sorte."
  },
  {
    id: 85,
    topicoId: 17,
    question: "O que ocorre quando um humano joga de forma 'subótima' (comete um erro desatento) contra o MINIMAX?",
    options: [
      "O MINIMAX empata a partida instantaneamente, pois só sabe jogar contra perfeição.",
      "O algoritmo é forçado a resetar o jogo de soma-zero.",
      "A utilidade garantida é perdida e o MAX sofrerá uma redução na pontuação terminal.",
      "A árvore de jogo entra em redundância episódica e crasha.",
      "O resultado e os movimentos previstos diferem, mas o MAX ganhará uma 'pontuação/utilidade' ainda maior que o garantido."
    ],
    correct: 4,
    explanation: "O caminho que o MINIMAX planejou contava com o humano fechando todas as portas. Se o humano erra e abre uma porta, o MAX abandona o plano modesto, pega a porta aberta e massacra os lucros."
  },

  // ----------------------------------------------------
  // TÓPICO 3: O que é Inteligência Artificial? (Adicionais)
  // ----------------------------------------------------
  {
    id: 86,
    topicoId: 3,
    question: "Sobre o Teste de Turing, assinale a alternativa INCORRETA:",
    options: [
      "Baseia-se na capacidade de um sistema computacional mimetizar o comportamento humano em diálogo.",
      "A máquina é considerada inteligente se o avaliador não distinguir quem é humano.",
      "O teste exige que a máquina possua consciência e sentimentos internos comprovados.",
      "Consiste em uma interação mediada entre um humano e uma entidade oculta.",
      "É um dos métodos mais clássicos para validar a inteligência em máquinas."
    ],
    correct: 2,
    explanation: "O teste de Turing avalia apenas o comportamento externo (simulação), não exigindo consciência interna (critério cognitivo)."
  },
  {
    id: 87,
    topicoId: 3,
    question: "Analise as afirmações sobre os critérios de avaliação de IA:\nI. O critério comportamental foca na eficácia do resultado final.\nII. A funcionalidade prioriza o 'como' o sistema realiza a função.\nIII. O critério cognitivo nega a reprodução genuína sem consciência.\n\nEstá(ão) correta(s):",
    options: ["Apenas I", "Apenas III", "I e II", "II e III", "I, II e III"],
    correct: 1,
    explanation: "I está errada (funcionalidade foca no resultado). II está errada (funcionalidade ignora o método)."
  },
  {
    id: 88,
    topicoId: 3,
    question: "Verdadeiro ou Falso: O critério de Funcionalidade afirma que a eficácia da tarefa é o único fator determinante para validar uma habilidade reproduzida.",
    options: ["Verdadeiro", "Falso"],
    correct: 0,
    explanation: "Na funcionalidade, importa apenas se a função foi realizada de forma eficaz."
  },
  {
    id: 89,
    topicoId: 3,
    question: "Em relação ao campo da IA, qual das opções não condiz com as definições apresentadas?",
    options: [
      "Busca criar sistemas que agem de forma semelhante aos humanos.",
      "É um ramo da ciência da computação.",
      "Restringe-se exclusivamente à execução de cálculos matemáticos puros.",
      "Envolve a simulação de processos de pensamento humano.",
      "Pode ser avaliada por critérios que vão além do simples resultado."
    ],
    correct: 2,
    explanation: "A IA visa agir e pensar como humanos, não sendo apenas uma calculadora estática."
  },
  {
    id: 90,
    topicoId: 3,
    question: "Analise as premissas:\nI. Conversar com uma máquina sem identificá-la é o cerne do Teste de Turing.\nII. A simulação superficial é aceita pelo critério de funcionalidade.\n\nAssinale a correta:",
    options: [
      "I e II são verdadeiras.",
      "I é verdadeira e II é falsa.",
      "I é falsa e II é verdadeira.",
      "Ambas são falsas.",
      "II anula a validade de I."
    ],
    correct: 0,
    explanation: "Ambas as premissas estão alinhadas com as definições de Turing e Funcionalidade."
  },
  {
    id: 91,
    topicoId: 3,
    question: "Qual opção apresenta a relação correta entre o critério e sua exigência?",
    options: [
      "Cognitivo -> Comportamento externo.",
      "Funcionalidade -> Consciência plena.",
      "Comportamental -> Habilidade semelhante à humana.",
      "Turing -> Medição de velocidade de processamento.",
      "IA -> Substituição total do pensamento por hardware."
    ],
    correct: 2,
    explanation: "O comportamental avalia se a máquina produz comportamento semelhante ao humano."
  },
  {
    id: 92,
    topicoId: 3,
    question: "Verdadeiro ou Falso: Para o critério Cognitivo, uma máquina que resolve problemas complexos sem entender o que faz é considerada inteligente no nível máximo.",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "O critério cognitivo exige consciência e entendimento genuíno."
  },

  // ----------------------------------------------------
  // TÓPICO 4: Agentes Racionais e Inteligentes (Adicionais)
  // ----------------------------------------------------
  {
    id: 93,
    topicoId: 4,
    question: "Sobre os Agentes Racionais, é INCORRETO afirmar que:",
    options: [
      "Eles percebem o ambiente através de sensores.",
      "Eles utilizam atuadores para realizar ações.",
      "Sua meta é sempre agir conforme o comportamento esperado, independente do resultado.",
      "Buscam maximizar o valor esperado das medidas de desempenho.",
      "São entidades que agem em prol de um objetivo pré-definido."
    ],
    correct: 2,
    explanation: "As medidas de desempenho focam no resultado esperado, não no comportamento esperado."
  },
  {
    id: 94,
    topicoId: 4,
    question: "Analise as afirmações sobre o modelo PEAS:\nI. O 'Environment' define onde o agente atua.\nII. 'Performance' avalia o sucesso do agente.\nIII. 'Sensors' são as ferramentas de ação.\n\nEstá(ão) correta(s):",
    options: ["Apenas I", "I e II", "Apenas III", "II e III", "I, II e III"],
    correct: 1,
    explanation: "Sensors são para sentir, não para agir (Atuadores agem)."
  },
  {
    id: 95,
    topicoId: 4,
    question: "Verdadeiro ou Falso: O ChatGPT é considerado um agente racional pleno porque consegue responder perguntas de forma autônoma sem intervenção.",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "O texto afirma que ele não é um agente pois depende de input/ordem do usuário para agir."
  },
  {
    id: 96,
    topicoId: 4,
    question: "A medida de performance de um agente inteligente deve ser projetada com base em:",
    options: [
      "Comportamentos predeterminados pelo programador.",
      "Resultados finais desejados no ambiente.",
      "Capacidade de armazenamento de dados.",
      "Número de sensores disponíveis no hardware.",
      "Velocidade de resposta em milissegundos."
    ],
    correct: 1,
    explanation: "As medidas são projetadas conforme os resultados esperados."
  },
  {
    id: 97,
    topicoId: 4,
    question: "Considere um robô aspirador. Qual das alternativas abaixo corresponde corretamente ao seu modelo PEAS?",
    options: [
      "Performance: Sensores de colisão.",
      "Environment: Motor das rodas.",
      "Actuators: Escovas e sucção.",
      "Sensors: Limpeza da casa.",
      "Performance: Piso da sala."
    ],
    correct: 2,
    explanation: "Escovas e sucção são meios de agir no ambiente (atuadores)."
  },
  {
    id: 98,
    topicoId: 4,
    question: "Analise as premissas:\nI. Um agente racional toma ações para atingir um objetivo.\nII. O sucesso do agente é medido pela 'Performance measure'.\n\nAssinale a opção correta:",
    options: [
      "Ambas são falsas.",
      "I é verdadeira e II é falsa.",
      "I e II são verdadeiras.",
      "II justifica a invalidez de I.",
      "I é exclusiva para humanos."
    ],
    correct: 2,
    explanation: "Ambas definem corretamente os pilares de um agente inteligente."
  },
  {
    id: 99,
    topicoId: 4,
    question: "O que diferencia um agente de uma simples ferramenta computacional (como uma LLM pura)?",
    options: [
      "A habilidade de processar linguagem natural.",
      "A presença de uma base de conhecimento vasta.",
      "A capacidade de agir autonomamente sem receber uma ordem implícita.",
      "O uso de algoritmos de deep learning.",
      "A conexão com a internet em tempo real."
    ],
    correct: 2,
    explanation: "Agentes agem autonomamente; ferramentas como LLMs precisam de input do usuário."
  },

  // ----------------------------------------------------
  // TÓPICO 5: Tipos de Ambiente (Adicionais)
  // ----------------------------------------------------
  {
    id: 100,
    topicoId: 5,
    question: "Em relação aos tipos de ambiente, assinale a opção INCORRETA:",
    options: [
      "No ambiente estático, o mundo não muda enquanto o agente pensa.",
      "Ambientes estocásticos possuem resultados previsíveis sem incertezas.",
      "O xadrez é um exemplo de ambiente discreto.",
      "Em ambientes multi-agent, os agentes podem competir ou cooperar.",
      "Um ambiente totalmente observável permite acesso a todo o estado."
    ],
    correct: 1,
    explanation: "Estocásticos possuem incertezas; determinísticos são previsíveis."
  },
  {
    id: 101,
    topicoId: 5,
    question: "Analise as características:\nI. Experiência dividida em partes independentes.\nII. Ação atual não afeta o futuro distante.\n\nEssas características definem um ambiente:",
    options: ["Sequencial", "Contínuo", "Estocástico", "Episódico", "Dinâmico"],
    correct: 3,
    explanation: "No episódico, as ações não dependem umas das outras."
  },
  {
    id: 102,
    topicoId: 5,
    question: "Verdadeiro ou Falso: Um carro autônomo opera em um ambiente discreto porque as regras de trânsito são enumeráveis.",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "Carros autônomos operam em ambientes contínuos (sensores e ações não enumeráveis)."
  },
  {
    id: 103,
    topicoId: 5,
    question: "Se o ambiente sofre alterações externas enquanto o agente processa a informação, ele é:",
    options: ["Estático", "Dinâmico", "Determinístico", "Episódico", "Single-agent"],
    correct: 1,
    explanation: "Ambientes dinâmicos mudam durante a decisão do agente."
  },
  {
    id: 104,
    topicoId: 5,
    question: "Qual a relação correta entre o jogo de tabuleiro e seu ambiente?",
    options: [
      "Xadrez -> Contínuo.",
      "Xadrez -> Estocástico.",
      "Xadrez -> Discreto.",
      "Xadrez -> Parcialmente observável.",
      "Xadrez -> Dinâmico."
    ],
    correct: 2,
    explanation: "No xadrez, ações e percepções são enumeráveis (discreto)."
  },
  {
    id: 105,
    topicoId: 5,
    question: "Analise as afirmações:\nI. No ambiente determinístico, o estado atual + ação define o próximo estado.\nII. No ambiente sequencial, a ação atual depende das anteriores.\n\nEstá(ão) correta(s):",
    options: ["Apenas I", "Apenas II", "Ambas as afirmações", "Nenhuma das afirmações", "I anula II"],
    correct: 2,
    explanation: "Ambas as definições estão corretas segundo o texto."
  },
  {
    id: 106,
    topicoId: 5,
    question: "Verdadeiro ou Falso: Em um ambiente parcialmente observável, o agente possui acesso completo ao estado do mundo via sensores.",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "Parcialmente observável significa que o agente NÃO tem acesso completo."
  },

  // ----------------------------------------------------
  // TÓPICO 6: Tipos de Agentes (Adicionais)
  // ----------------------------------------------------
  {
    id: 107,
    topicoId: 6,
    question: "Sobre os tipos de agentes, qual afirmação é INCORRETA?",
    options: [
      "Agentes reativos simples não guardam histórico.",
      "Agentes baseados em modelo operam bem em ambientes parcialmente observáveis.",
      "Agentes baseados em objetivo usam funções de utilidade para escolher a rota mais barata.",
      "Agentes baseados em utilidade visam maximizar a qualidade do resultado.",
      "Agentes baseados em objetivo planejam sequências de ações."
    ],
    correct: 2,
    explanation: "Agentes de objetivo apenas buscam o alvo. Quem busca 'mais barato' ou 'qualidade' é o de utilidade."
  },
  {
    id: 108,
    topicoId: 6,
    question: "Analise os agentes:\nI. Reativo Simples: Baseado no estado atual.\nII. Baseado em Modelo: Entende como o ambiente evolui.\nIII. Baseado em Utilidade: Atribui valores aos estados.\n\nEstá(ão) correta(s):",
    options: ["Apenas I", "I e III", "II e III", "Apenas II", "I, II e III"],
    correct: 4,
    explanation: "As três definições estão corretas."
  },
  {
    id: 109,
    topicoId: 6,
    question: "Verdadeiro ou Falso: O agente reativo simples pode operar com sucesso em ambientes onde o estado não é totalmente visível.",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "Ele exige que o ambiente seja totalmente observável por não ter histórico."
  },
  {
    id: 110,
    topicoId: 6,
    question: "Qual agente utiliza técnicas de busca e planejamento focadas exclusivamente em atingir um estado final específico?",
    options: [
      "Agente reativo simples",
      "Agente baseado em objetivo",
      "Agente baseado em utilidade",
      "Agente de ambiente dinâmico",
      "Agente de reflexo estocástico"
    ],
    correct: 1,
    explanation: "O foco do agente baseado em objetivo é usar busca para atingir a meta."
  },
  {
    id: 111,
    topicoId: 6,
    question: "A função de utilidade é uma ferramenta essencial para:",
    options: [
      "Agentes de reflexo simples.",
      "Agentes baseados em objetivo básico.",
      "Agentes baseados em utilidade.",
      "Agentes puramente sequenciais.",
      "Agentes de ambiente estático."
    ],
    correct: 2,
    explanation: "Agentes baseados em utilidade usam essas funções para avaliar estados."
  },
  {
    id: 112,
    topicoId: 6,
    question: "Analise:\nI. O agente baseado em modelo mantém histórico de percepções.\nII. O agente de utilidade ignora a qualidade do resultado final.\n\nAssinale a correta:",
    options: [
      "I e II são verdadeiras.",
      "I é verdadeira e II é falsa.",
      "I é falsa e II é verdadeira.",
      "Ambas são falsas.",
      "II é necessária para I."
    ],
    correct: 1,
    explanation: "Agente de utilidade foca justamente na qualidade (maximização)."
  },
  {
    id: 113,
    topicoId: 6,
    question: "Verdadeiro ou Falso: 'Agentes reativos baseados em modelo' operam tentando prever como o ambiente mudará de acordo com suas ações.",
    options: ["Verdadeiro", "Falso"],
    correct: 0,
    explanation: "Correto. Eles buscam entender a evolução do ambiente."
  },

  // ----------------------------------------------------
  // TÓPICO 7: Problemas de Busca (Adicionais)
  // ----------------------------------------------------
  {
    id: 114,
    topicoId: 7,
    question: "Sobre os elementos de problemas de busca, a alternativa INCORRETA é:",
    options: [
      "Estado Inicial: Onde a busca começa.",
      "Custo do Caminho: Soma dos custos das ações.",
      "Teste de Objetivo: Define as ações que o agente pode tomar.",
      "Espaço de Estados: Conjunto de todos os estados alcançáveis.",
      "Função Sucessora: Define ações e consequências."
    ],
    correct: 2,
    explanation: "Teste de objetivo determina se o fim foi alcançado. Quem define ações é a Função Sucessora."
  },
  {
    id: 115,
    topicoId: 7,
    question: "Analise as definições:\nI. A solução é a sequência de ações para chegar ao objetivo.\nII. Abstração demais pode impossibilitar a resolução.\nIII. Custo do caminho avalia a performance medida pelo sensor.\n\nEstá(ão) correta(s):",
    options: ["Apenas I", "I e II", "II e III", "Apenas III", "I, II e III"],
    correct: 1,
    explanation: "Custo do caminho é a soma dos custos das ações, não uma medição de sensor direta."
  },
  {
    id: 116,
    topicoId: 7,
    question: "Verdadeiro ou Falso: Um problema de busca detalhado demais é sempre preferível, pois garante uma solução perfeita e rápida.",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "Muito detalhe torna a resolução inviável computacionalmente."
  },
  {
    id: 117,
    topicoId: 7,
    question: "A 'Abstração' em busca é necessária para:",
    options: [
      "Aumentar o número de estados no espaço.",
      "Remover detalhes irrelevantes da representação do problema.",
      "Mudar o ambiente de discreto para contínuo.",
      "Garantir que a função sucessora seja infinita.",
      "Substituir o teste de objetivo."
    ],
    correct: 1,
    explanation: "Abstração é o processo de remover detalhes para tornar o problema tratável."
  },
  {
    id: 118,
    topicoId: 7,
    question: "Qual elemento é responsável por validar se o estado atual é o estado meta?",
    options: [
      "Função Sucessora",
      "Espaço de Estados",
      "Custo do Caminho",
      "Teste de Objetivo",
      "Estado Inicial"
    ],
    correct: 3,
    explanation: "O Teste de Objetivo faz essa validação."
  },
  {
    id: 119,
    topicoId: 7,
    question: "Analise:\nI. O espaço de estados inclui apenas o ponto de partida e o de chegada.\nII. O custo do caminho é o somatório dos pesos das arestas percorridas.\n\nEstá(ão) correta(s):",
    options: [
      "Apenas I",
      "Apenas II",
      "Ambas",
      "Nenhuma",
      "I justifica II"
    ],
    correct: 1,
    explanation: "Espaço de estados inclui TODOS os estados alcançáveis, não apenas início e fim."
  },
  {
    id: 120,
    topicoId: 7,
    question: "Verdadeiro ou Falso: Problemas de busca tradicionalmente assumem que o ambiente é estocástico para testar a robustez do agente.",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "Eles assumem ambientes determinísticos, onde as ações têm resultados certos."
  },

  // ----------------------------------------------------
  // TÓPICO 8: Grafos e Árvores de Busca (Adicionais)
  // ----------------------------------------------------
  {
    id: 121,
    topicoId: 8,
    question: "Sobre Grafos e Árvores, assinale a opção INCORRETA:",
    options: [
      "Em um grafo, os nós representam os estados.",
      "Na árvore de busca, nós representam caminhos únicos.",
      "O grafo de espaço de estados é sempre construído totalmente na memória antes da busca começar.",
      "A árvore de busca pode conter estados repetidos.",
      "As arestas no grafo representam as funções sucessoras."
    ],
    correct: 2,
    explanation: "O grafo raramente é construído totalmente na memória devido ao seu tamanho."
  },
  {
    id: 122,
    topicoId: 8,
    question: "Analise:\nI. No grafo, cada estado ocorre apenas uma vez.\nII. Na árvore, um estado pode aparecer em vários nós.\nIII. A árvore pode ser infinita em casos de repetição de estados.\n\nEstá(ão) correta(s):",
    options: ["Apenas I", "I e II", "II e III", "Apenas III", "I, II e III"],
    correct: 4,
    explanation: "As três afirmações descrevem as diferenças fundamentais entre grafos e árvores de busca."
  },
  {
    id: 123,
    topicoId: 8,
    question: "Verdadeiro ou Falso: Um nó na árvore de busca corresponde a um único estado do grafo, ignorando o trajeto feito para chegar até ele.",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "Cada nó na árvore corresponde a um caminho completo no grafo."
  },
  {
    id: 124,
    topicoId: 8,
    question: "O que representam as arestas (edges) no contexto de grafos de estados?",
    options: [
      "A pontuação final do agente.",
      "As funções sucessoras (ação e custo).",
      "O limite de memória da CPU.",
      "A profundidade máxima da árvore.",
      "O histórico de falhas do teste de objetivo."
    ],
    correct: 1,
    explanation: "Arestas ligam estados através de ações e seus respectivos custos."
  },
  {
    id: 125,
    topicoId: 8,
    question: "A repetição de estados é um fenômeno que afeta principalmente:",
    options: [
      "A definição do estado inicial.",
      "A estrutura da Árvore de Busca.",
      "A validade do Teste de Objetivo.",
      "A construção matemática do Grafo estático.",
      "A função de utilidade do agente."
    ],
    correct: 1,
    explanation: "Na árvore, a repetição gera estrutura redundante e pode torná-la infinita."
  },
  {
    id: 126,
    topicoId: 8,
    question: "Analise:\nI. Árvores de busca mostram o processo de exploração.\nII. Grafos de estados mostram a representação do problema.\n\nEstá(ão) correta(s):",
    options: [
      "Ambas as afirmações",
      "Apenas I",
      "Apenas II",
      "Nenhuma",
      "I é subconjunto de II"
    ],
    correct: 0,
    explanation: "Definições corretas das funções de cada estrutura."
  },
  {
    id: 127,
    topicoId: 8,
    question: "Verdadeiro ou Falso: O teste de objetivo em um grafo é geralmente um conjunto de múltiplos nós distribuídos aleatoriamente.",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "Na maioria dos casos, é um só nó específico."
  },

  // ----------------------------------------------------
  // TÓPICO 9: Algoritmos Não Informados (Adicionais)
  // ----------------------------------------------------
  {
    id: 128,
    topicoId: 9,
    question: "Sobre algoritmos não informados, assinale a opção INCORRETA:",
    options: [
      "Busca cega não possui informações sobre a localização do objetivo.",
      "O 'Fringe' representa o próximo nó a ser expandido.",
      "A complexidade de tempo é medida pelo uso de memória RAM.",
      "A busca em largura é útil para encontrar o menor caminho em número de passos.",
      "Sem poda, os algoritmos podem entrar em busca infinita."
    ],
    correct: 2,
    explanation: "Complexidade de tempo mede o tempo; memória é medida pela complexidade de espaço."
  },
  {
    id: 129,
    topicoId: 9,
    question: "Analise as notações:\nI. 'b' é o fator de ramificação.\nII. 'm' é a profundidade máxima.\nIII. 'd' é a profundidade da solução.\n\nSegundo as definições, está(ão) correta(s):",
    options: ["I e II", "II e III", "Apenas I", "Apenas II", "I, II e III"],
    correct: 0,
    explanation: "No texto, 'd' é o limite de profundidade (DLS/IDS) e 's' é a profundidade da primeira solução."
  },
  {
    id: 130,
    topicoId: 9,
    question: "Verdadeiro ou Falso: A busca em profundidade (DFS) é preferível quando o recurso mais escasso no sistema é a memória RAM.",
    options: ["Verdadeiro", "Falso"],
    correct: 0,
    explanation: "Correto. DFS visita menos nós e gasta menos memória (O(bm))."
  },
  {
    id: 131,
    topicoId: 9,
    question: "A estratégia de busca 'Não Informada' baseia-se em:",
    options: [
      "Estimativas heurísticas de proximidade.",
      "Apenas na descrição do problema e teste de objetivo.",
      "Conhecimento prévio do mapa completo.",
      "Cálculo de funções de utilidade complexas.",
      "Histórico de jogadas de agentes adversários."
    ],
    correct: 1,
    explanation: "Buscas cegas usam apenas a informação dada na descrição do problema."
  },
  {
    id: 132,
    topicoId: 9,
    question: "Para garantir o menor custo em uma busca cega, deve-se utilizar:",
    options: ["BFS", "DFS", "UCS", "IDS", "Greedy Search"],
    correct: 2,
    explanation: "UCS (Busca de Custo Uniforme) é focada no menor custo."
  },
  {
    id: 133,
    topicoId: 9,
    question: "Analise as premissas:\nI. A busca cega é eficiente em problemas de larga escala.\nII. Estratégias de exploração escolhem o próximo nó a expandir.\n\nAssinale a opção correta:",
    options: [
      "I e II são verdadeiras.",
      "I é falsa e II é verdadeira.",
      "I é verdadeira e II é falsa.",
      "Ambas são falsas.",
      "I justifica o sucesso de II."
    ],
    correct: 1,
    explanation: "Busca cega é INEFICIENTE em problemas de larga escala."
  },
  {
    id: 134,
    topicoId: 9,
    question: "Verdadeiro ou Falso: A propriedade 'Ótimo' em busca garante que a solução encontrada é a que exige menos tempo de processamento.",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "Ótimo garante o MENOR CUSTO de caminho, não o tempo de processamento."
  },

  // ----------------------------------------------------
  // TÓPICO 10: DFS e BFS (Adicionais)
  // ----------------------------------------------------
  {
    id: 135,
    topicoId: 10,
    question: "Sobre DFS e BFS, assinale a afirmação INCORRETA:",
    options: [
      "DFS utiliza uma Pilha (LIFO).",
      "BFS utiliza uma Fila (FIFO).",
      "BFS é sempre ótima, independente do custo das arestas.",
      "DFS pode ser incompleta se houver ciclos infinitos.",
      "A complexidade de espaço da BFS é O(b^s)."
    ],
    correct: 2,
    explanation: "BFS só é ótima se os custos das arestas forem todos iguais."
  },
  {
    id: 136,
    topicoId: 10,
    question: "Analise:\nI. DFS encontra a solução mais à esquerda.\nII. BFS expande nível por nível.\nIII. DFS tem complexidade de tempo O(b^m).\n\nEstá(ão) correta(s):",
    options: ["Apenas I", "Apenas II", "I e II", "II e III", "I, II e III"],
    correct: 4,
    explanation: "Todas as características listadas estão corretas para DFS e BFS."
  },
  {
    id: 137,
    topicoId: 10,
    question: "Verdadeiro ou Falso: A Busca em Largura (BFS) é completa mesmo se a profundidade da solução 's' for infinita.",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "BFS é completa se 's' for FINITO."
  },
  {
    id: 138,
    topicoId: 10,
    question: "Qual algoritmo possui complexidade de espaço linear (O(bm)) em relação à profundidade?",
    options: ["BFS", "UCS", "DFS", "IDS", "A*"],
    correct: 2,
    explanation: "A Busca em Profundidade (DFS) é a que economiza memória desta forma."
  },
  {
    id: 139,
    topicoId: 10,
    question: "A principal falha da Busca em Profundidade (DFS) em termos de optimalidade é:",
    options: [
      "Gastar memória demais.",
      "Não encontrar nenhuma solução.",
      "Aceitar a primeira solução que encontra (mais à esquerda).",
      "Explorar todos os níveis antes de descer.",
      "Depender de heurísticas inconsistentes."
    ],
    correct: 2,
    explanation: "DFS para na primeira solução que acha, sem verificar se há outras melhores."
  },
  {
    id: 140,
    topicoId: 10,
    question: "Analise:\nI. LIFO (Pilha) -> DFS.\nII. FIFO (Fila) -> BFS.\n\nAssinale a correta:",
    options: [
      "Ambas as correlações estão corretas.",
      "Apenas I está correta.",
      "Apenas II está correta.",
      "Ambas estão invertidas.",
      "As estruturas não se aplicam a estes algoritmos."
    ],
    correct: 0,
    explanation: "Definição correta das estruturas de dados usadas."
  },
  {
    id: 141,
    topicoId: 10,
    question: "Verdadeiro ou Falso: A Busca em Largura (BFS) pode encontrar o caminho mais curto em número de passos, mas ignora o peso financeiro das ações.",
    options: ["Verdadeiro", "Falso"],
    correct: 0,
    explanation: "Correto. Ela foca no nível (passos), não nos custos individuais."
  },

  // ----------------------------------------------------
  // TÓPICO 11: UCS, DLS e IDS (Adicionais)
  // ----------------------------------------------------
  {
    id: 142,
    topicoId: 11,
    question: "Sobre UCS, DLS e IDS, qual afirmação é INCORRETA?",
    options: [
      "UCS expande o vértice de menor custo acumulado.",
      "DLS é completa se a solução estiver além do limite 'd'.",
      "IDS combina as vantagens de BFS e DFS.",
      "DLS evita ciclos reduzindo a complexidade.",
      "UCS utiliza fila de prioridades."
    ],
    correct: 1,
    explanation: "DLS NÃO é completa se a solução estiver além do limite."
  },
  {
    id: 143,
    topicoId: 11,
    question: "Analise as propriedades:\nI. IDS é Ótima e Completa.\nII. UCS é Ótima e Completa (sob condições).\nIII. DLS gasta memória O(b^d).\n\nEstá(ão) correta(s):",
    options: ["I e II", "II e III", "Apenas I", "Apenas II", "I, II e III"],
    correct: 0,
    explanation: "DLS gasta O(bd) de memória, não O(b^d). IDS/UCS são ótimas/completas."
  },
  {
    id: 144,
    topicoId: 11,
    question: "Verdadeiro ou Falso: O algoritmo IDS é menos eficiente em memória que o BFS.",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "IDS é MAIS eficiente em memória (O(bd)) que o BFS (O(b^s))."
  },
  {
    id: 145,
    topicoId: 11,
    question: "Qual algoritmo exige que o custo das arestas (ε) seja maior que zero para garantir completude?",
    options: ["BFS", "DFS", "UCS", "DLS", "Minimax"],
    correct: 2,
    explanation: "UCS exige custos positivos (ε > 0) para não travar."
  },
  {
    id: 146,
    topicoId: 11,
    question: "No algoritmo DLS, se o limite 'd' for menor que a profundidade máxima 'm', o que ocorre?",
    options: [
      "O algoritmo se torna estocástico.",
      "A memória utilizada aumenta exponencialmente.",
      "A busca é reduzida e evita caminhos muito longos.",
      "A solução ótima é garantida.",
      "A função sucessora é desativada."
    ],
    correct: 2,
    explanation: "DLS reduz a complexidade ao evitar caminhos além de 'd'."
  },
  {
    id: 147,
    topicoId: 11,
    question: "Analise:\nI. IDS aumenta o limite de profundidade a cada iteração.\nII. UCS expande o nó com maior custo primeiro para economizar.\n\nAssinale a correta:",
    options: [
      "I e II são verdadeiras.",
      "I é verdadeira e II é falsa.",
      "I é falsa e II é verdadeira.",
      "Ambas são falsas.",
      "II anula a eficiência de I."
    ],
    correct: 1,
    explanation: "UCS expande o de MENOR custo."
  },
  {
    id: 148,
    topicoId: 11,
    question: "Verdadeiro ou Falso: A Busca de Custo Uniforme (UCS) é inspirada na lógica da busca em profundidade, mas com foco em custos.",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "Ela é inspirada na busca em LARGURA (BFS)."
  },

  // ----------------------------------------------------
  // TÓPICO 12: Busca Informada (Adicionais)
  // ----------------------------------------------------
  {
    id: 149,
    topicoId: 12,
    question: "Em relação à Busca Informada, assinale a opção INCORRETA:",
    options: [
      "Usa informações adicionais para guiar o caminho.",
      "Heurísticas ajudam a reduzir o custo computacional.",
      "A heurística fornece um planejamento global perfeito desde o início.",
      "h(n) estima a distância até o objetivo.",
      "Diferentes heurísticas podem ser aplicadas ao mesmo problema."
    ],
    correct: 2,
    explanation: "A heurística fornece orientações apenas para decisões LOCAIS."
  },
  {
    id: 150,
    topicoId: 12,
    question: "Analise:\nI. Busca cega explora todas as direções aleatoriamente.\nII. Heurísticas são estratégias baseadas em conhecimento específico.\nIII. h(n) = 0 se n for o estado meta.\n\nEstá(ão) correta(s):",
    options: ["I e II", "II e III", "Apenas I", "Apenas III", "I, II e III"],
    correct: 4,
    explanation: "Todas as premissas estão corretas conforme o material."
  },
  {
    id: 151,
    topicoId: 12,
    question: "Verdadeiro ou Falso: A orientação de uma heurística é usada exclusivamente para escolher a próxima ação sucessora a partir do estado atual.",
    options: ["Verdadeiro", "Falso"],
    correct: 0,
    explanation: "Correto. Refere-se a decisões locais."
  },
  {
    id: 152,
    topicoId: 12,
    question: "Qual o objetivo principal de utilizar uma função heurística em IA?",
    options: [
      "Aumentar a complexidade do algoritmo.",
      "Substituir o teste de objetivo por um valor aleatório.",
      "Acelerar a obtenção de soluções e reduzir custos computacionais.",
      "Mudar o ambiente para parcialmente observável.",
      "Remover a necessidade de sensores no agente."
    ],
    correct: 2,
    explanation: "Objetivo central da heurística."
  },
  {
    id: 153,
    topicoId: 12,
    question: "Sobre a formulação de heurísticas, é correto dizer:",
    options: [
      "Só existe uma heurística correta para cada problema.",
      "Elas são baseadas em busca não informada.",
      "Pode-se formular várias heurísticas para um único problema.",
      "Elas garantem completude em ambientes dinâmicos.",
      "Não utilizam conhecimento específico do domínio."
    ],
    correct: 2,
    explanation: "Pode-se criar várias estimativas (heurísticas) para o mesmo problema."
  },
  {
    id: 154,
    topicoId: 12,
    question: "Analise:\nI. A busca informada é também chamada de busca heurística.\nII. h(n) estima o custo do estado 'n' até o objetivo.\n\nAssinale a correta:",
    options: [
      "I e II são verdadeiras.",
      "I é verdadeira e II é falsa.",
      "I é falsa e II é verdadeira.",
      "Ambas são falsas.",
      "II é o dobro de I."
    ],
    correct: 0,
    explanation: "Definições básicas de busca informada e h(n)."
  },
  {
    id: 155,
    topicoId: 12,
    question: "Verdadeiro ou Falso: Buscas heurísticas são classificadas como um subconjunto das buscas cegas.",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "São categorias opostas (Informada vs Não Informada/Cega)."
  },

  // ----------------------------------------------------
  // TÓPICO 13: Greedy Search (Adicionais)
  // ----------------------------------------------------
  {
    id: 156,
    topicoId: 13,
    question: "Sobre a Greedy Search, assinale a opção INCORRETA:",
    options: [
      "Expande o nó que estima estar mais próximo do objetivo.",
      "Baseia-se exclusivamente na função h(n).",
      "É completa mesmo se não lidar com estados repetidos.",
      "Não é ótima pois pode ignorar caminhos melhores.",
      "Segue um caminho do início ao fim de forma direta."
    ],
    correct: 2,
    explanation: "Greedy Search pode NÃO ser completa se ficar presa em loops de estados repetidos."
  },
  {
    id: 157,
    topicoId: 13,
    question: "Analise:\nI. h(n) estima o custo do caminho mais barato até o alvo.\nII. Na meta, h(n) = 0.\nIII. A qualidade da heurística afeta as complexidades de tempo e espaço.\n\nEstá(ão) correta(s):",
    options: ["Apenas I", "I e II", "II e III", "Apenas III", "I, II e III"],
    correct: 4,
    explanation: "Todas as propriedades da função h(n) e do impacto da heurística estão corretas."
  },
  {
    id: 158,
    topicoId: 13,
    question: "Verdadeiro ou Falso: A Greedy Search assemelha-se estruturalmente à busca em largura (BFS).",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "Ela assemelha-se à busca em PROFUNDIDADE (DFS) por seguir um caminho reto."
  },
  {
    id: 159,
    topicoId: 13,
    question: "No pior cenário (heurística ruim), a complexidade de tempo da Greedy Search é:",
    options: ["O(bd)", "O(bm)", "O(b^m)", "O(1)", "O(s)"],
    correct: 2,
    explanation: "Pior caso é O(b^m), similar a uma DFS cega."
  },
  {
    id: 160,
    topicoId: 13,
    question: "O que acontece se a Greedy Search não possuir controle de estados repetidos?",
    options: [
      "Ela se torna Ótima.",
      "O sistema pode ficar preso em um loop infinito.",
      "A complexidade de espaço cai para O(1).",
      "Ela passa a usar o custo g(n).",
      "A função sucessora dobra de valor."
    ],
    correct: 1,
    explanation: "Loops são o grande risco da falta de controle de estados na Greedy Search."
  },
  {
    id: 161,
    topicoId: 13,
    question: "Analise:\nI. A busca gulosa expande os nós vizinhos (fringe).\nII. Estimativas de custo podem não ser precisas.\n\nAssinale a correta:",
    options: [
      "I e II são verdadeiras.",
      "I é verdadeira e II é falsa.",
      "I é falsa e II é verdadeira.",
      "Ambas são falsas.",
      "I depende de II ser falso."
    ],
    correct: 0,
    explanation: "Definição de operação e admissão de erro na estimativa."
  },
  {
    id: 162,
    topicoId: 13,
    question: "Verdadeiro ou Falso: Greedy Search garante encontrar a solução ótima se o espaço de estados for finito.",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "Ela NÃO é ótima nem completa garantidamente."
  },

  // ----------------------------------------------------
  // TÓPICO 14: A* Search (Adicionais)
  // ----------------------------------------------------
  {
    id: 163,
    topicoId: 14,
    question: "Sobre o algoritmo A*, assinale a opção INCORRETA:",
    options: [
      "Utiliza a fórmula f(n) = g(n) + h(n).",
      "Combina a lógica de UCS e Greedy Search.",
      "Expande o maior número de caminhos para garantir a solução.",
      "Adiciona contornos gradualmente aos nós.",
      "É ótimo se a heurística for admissível e consistente."
    ],
    correct: 2,
    explanation: "A* expande o MENOR número de caminhos comparado a outros algoritmos ótimos."
  },
  {
    id: 164,
    topicoId: 14,
    question: "Analise a fórmula f(n) = g(n) + h(n):\nI. g(n) é o custo acumulado até o estado atual.\nII. h(n) é a estimativa até o objetivo.\nIII. f(n) é o valor usado para escolher o nó.\n\nEstá(ão) correta(s):",
    options: ["Apenas I", "I e II", "II e III", "Apenas III", "I, II e III"],
    correct: 4,
    explanation: "Divisão exata dos componentes da função de avaliação do A*."
  },
  {
    id: 165,
    topicoId: 14,
    question: "Verdadeiro ou Falso: No pior caso, a complexidade de tempo do A* é O(b^s).",
    options: ["Verdadeiro", "Falso"],
    correct: 0,
    explanation: "Correto. Depende da qualidade da heurística, mas o pior caso é exponencial na profundidade da solução."
  },
  {
    id: 166,
    topicoId: 14,
    question: "O que o g(n) garante no algoritmo A*?",
    options: [
      "A completude em ambientes dinâmicos.",
      "Que o custo acumulado não seja ignorado na escolha do caminho.",
      "Que a heurística seja sempre zero.",
      "A eliminação de sensores de atuadores.",
      "A alternância entre MIN e MAX."
    ],
    correct: 1,
    explanation: "g(n) traz a componente de custo real (UFS/UCS) para a decisão."
  },
  {
    id: 167,
    topicoId: 14,
    question: "A* Search é considerado um algoritmo:",
    options: ["Não Informado", "Cego", "Informado", "Puramente Aleatório", "Episódico"],
    correct: 2,
    explanation: "Utiliza heurística (informação adicional)."
  },
  {
    id: 168,
    topicoId: 14,
    question: "Analise:\nI. A* utiliza o custo acumulado da UFS.\nII. A* utiliza a heurística da Greedy Search.\n\nAssinale a correta:",
    options: [
      "Ambas as afirmações",
      "Apenas I",
      "Apenas II",
      "Nenhuma",
      "I é incompatível com II"
    ],
    correct: 0,
    explanation: "A* é a fusão dessas duas lógicas."
  },
  {
    id: 169,
    topicoId: 14,
    question: "Verdadeiro ou Falso: Heurísticas admissíveis podem tornar o A* subótimo se g(n) for muito alto.",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "Heurísticas admissíveis (+ consistência) GARANTEM que o A* seja ótimo."
  },

  // ----------------------------------------------------
  // TÓPICO 15: Admissibilidade (Adicionais)
  // ----------------------------------------------------
  {
    id: 170,
    topicoId: 15,
    question: "Sobre Admissibilidade e Consistência, assinale a opção INCORRETA:",
    options: [
      "Heurísticas admissíveis nunca superestimam o custo real.",
      "Uma heurística consistente faz com que o valor f(n) nunca diminua.",
      "Toda heurística admissível é obrigatoriamente consistente.",
      "A admissibilidade exige que 0 ≤ h(n) ≤ h*(n).",
      "Heurísticas inadmissíveis podem ignorar caminhos ótimos."
    ],
    correct: 2,
    explanation: "O texto diz: 'Toda heurística consistente é admissível, mas nem toda heurística admissível é consistente'."
  },
  {
    id: 171,
    topicoId: 15,
    question: "Analise:\nI. Heurística otimista = Admissível.\nII. Heurística pessimista = Inadmissível.\nIII. Heurística admissível pode levar a caminhos ruins.\n\nEstá(ão) correta(s):",
    options: ["I e II", "II e III", "Apenas I", "Apenas III", "I, II e III"],
    correct: 4,
    explanation: "Definições e observações corretas sobre tipos de heurísticas."
  },
  {
    id: 172,
    topicoId: 15,
    question: "Verdadeiro ou Falso: Para criar uma heurística admissível, pode-se resolver um 'problema relaxado' sem utilizar busca.",
    options: ["Verdadeiro", "Falso"],
    correct: 0,
    explanation: "Correto. O custo da solução ótima do problema relaxado é a heurística admissível."
  },
  {
    id: 173,
    topicoId: 15,
    question: "Considere h*(n) = 15. Qual das seguintes heurísticas h(n) é admissível?",
    options: ["20", "25", "16", "10", "15.1"],
    correct: 3,
    explanation: "Admissível deve ser ≤ h*(n). 10 é a única opção menor que 15."
  },
  {
    id: 174,
    topicoId: 15,
    question: "A consistência (monotonicidade) de uma heurística garante que:",
    options: [
      "A solução será encontrada em O(1).",
      "O valor f(n) nunca diminui ao longo do caminho.",
      "O custo do caminho seja sempre zero.",
      "O ambiente mude de determinístico para estocástico.",
      "A função sucessora seja removida."
    ],
    correct: 1,
    explanation: "Definição de heurística consistente."
  },
  {
    id: 175,
    topicoId: 15,
    question: "Analise:\nI. Heurísticas que superestimam o custo podem levar a soluções não ótimas.\nII. Deve-se escolher a heurística com maior valor (≤ h*) entre múltiplas admissíveis.\n\nAssinale a correta:",
    options: [
      "I e II são verdadeiras.",
      "I é verdadeira e II é falsa.",
      "I é falsa e II é verdadeira.",
      "Ambas são falsas.",
      "II torna I irrelevante."
    ],
    correct: 0,
    explanation: "Ambas as premissas estão no material sobre admissibilidade."
  },
  {
    id: 176,
    topicoId: 15,
    question: "Verdadeiro ou Falso: No jogo 8-puzzle, permitir qualquer movimento sem restrições é um exemplo de problema relaxado.",
    options: ["Verdadeiro", "Falso"],
    correct: 0,
    explanation: "Correto. Menos restrições definem o problema relaxado."
  },

  // ----------------------------------------------------
  // TÓPICO 16: Game Theory e Adversarial Search (Adicionais)
  // ----------------------------------------------------
  {
    id: 177,
    topicoId: 16,
    question: "Sobre jogos e busca adversarial, assinale a opção INCORRETA:",
    options: [
      "Jogos exigem regras claras e decisões racionais.",
      "Em jogos de soma-zero, os agentes têm funções de utilidade independentes.",
      "A função de utilidade substitui a minimização de custo pela maximização de pontos.",
      "A busca adversarial ocorre em ambientes competitivos.",
      "Deep Blue utilizou busca adversarial para vencer no xadrez."
    ],
    correct: 1,
    explanation: "Em jogos de soma-zero (Zero-Sum), as utilidades são OPOSTAS, não independentes."
  },
  {
    id: 178,
    topicoId: 16,
    question: "Analise:\nI. General Games: Agentes podem cooperar ou competir.\nII. Zero-Sum Games: Competição pura (Adversarial).\nIII. Jogos possuem definições determinísticas.\n\nEstá(ão) correta(s):",
    options: ["Apenas I", "I e II", "II e III", "Apenas III", "I, II e III"],
    correct: 4,
    explanation: "Todas as classificações de jogos apresentadas estão corretas."
  },
  {
    id: 179,
    topicoId: 16,
    question: "Verdadeiro ou Falso: Na função de utilidade, o agente deve focar em minimizar o custo do caminho até o estado terminal.",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "O agente deve focar em MAXIMIZAR sua pontuação/utilidade."
  },
  {
    id: 180,
    topicoId: 16,
    question: "O que caracteriza os 'General Games'?",
    options: [
      "Apenas um agente no ambiente.",
      "Funções de utilidade necessariamente opostas.",
      "Indiferença, cooperação ou competição entre agentes.",
      "Ausência total de regras definidas.",
      "Ambientes obrigatoriamente estocásticos."
    ],
    correct: 2,
    explanation: "Definição de jogos gerais conforme o texto."
  },
  {
    id: 181,
    topicoId: 16,
    question: "No contexto de jogos, o 'Espaço Inicial' identifica:",
    options: [
      "A pontuação final máxima.",
      "O estado de começo e qual jogador inicia a partida.",
      "O fim da função sucessora.",
      "A heurística admissível do oponente.",
      "A soma de utilidades dos vizinhos."
    ],
    correct: 1,
    explanation: "Definição de estado/espaço inicial em jogos."
  },
  {
    id: 182,
    topicoId: 16,
    question: "Analise:\nI. Busca Adversarial é também conhecida como busca competitiva.\nII. Xadrez é um exemplo de jogo com definições determinísticas.\n\nAssinale a correta:",
    options: [
      "I e II são verdadeiras.",
      "I é verdadeira e II é falsa.",
      "I é falsa e II é verdadeira.",
      "Ambas são falsas.",
      "I é o oposto de II."
    ],
    correct: 0,
    explanation: "Ambas as premissas estão corretas."
  },
  {
    id: 183,
    topicoId: 16,
    question: "Verdadeiro ou Falso: Um jogo cooperativo puro é classificado como um Zero-Sum Game.",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "Zero-sum é competição pura/oposta."
  },

  // ----------------------------------------------------
  // TÓPICO 17: Algoritmo MINIMAX (Adicionais)
  // ----------------------------------------------------
  {
    id: 184,
    topicoId: 17,
    question: "Sobre o algoritmo MINIMAX, assinale a opção INCORRETA:",
    options: [
      "MAX tenta maximizar sua utilidade.",
      "MIN tenta minimizar a utilidade de MAX.",
      "Utiliza uma abordagem puramente top-down (de cima para baixo).",
      "Assume que o adversário joga de forma perfeita (ótima).",
      "Os níveis da árvore se alternam entre MIN e MAX."
    ],
    correct: 2,
    explanation: "O algoritmo utiliza o método bottom-up (de baixo para cima) para retornar valores das folhas até a raiz."
  },
  {
    id: 185,
    topicoId: 17,
    question: "Analise as premissas:\nI. No nível MIN, escolhe-se o menor valor entre os filhos.\nII. No nível MAX, escolhe-se o maior valor entre os filhos.\nIII. A raiz da árvore sempre representa o jogador MIN.\n\nEstá(ão) correta(s):",
    options: ["I e II", "II e III", "Apenas I", "Apenas II", "I, II e III"],
    correct: 0,
    explanation: "O primeiro nível (raiz) sempre será MAX."
  },
  {
    id: 186,
    topicoId: 17,
    question: "Verdadeiro ou Falso: Se o oponente humano jogar de forma subótima (cometer erros), o MINIMAX obterá uma utilidade menor que a prevista.",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "Se o oponente erra, o MAX recebe uma 'pontuação' MAIOR."
  },
  {
    id: 187,
    topicoId: 17,
    question: "O valor MINIMAX pode ser definido como:",
    options: [
      "A soma de todas as heurísticas dos nós folha.",
      "O menor valor que o jogador MAX consegue ceder sem saber a próxima jogada de MIN.",
      "A profundidade máxima 'm' da árvore de jogo.",
      "O custo acumulado das arestas no modo kernel.",
      "A média aritmética das utilidades terminais."
    ],
    correct: 1,
    explanation: "Definição de valor Minimax presente no texto."
  },
  {
    id: 188,
    topicoId: 17,
    question: "O uso de funções heurísticas no MINIMAX ocorre quando:",
    options: [
      "O estado do jogo é terminal.",
      "O jogador MIN decide cooperar.",
      "Um estado não é terminal (não se pode atingir as folhas).",
      "O ambiente é episódico e single-agent.",
      "A árvore de jogo é nula."
    ],
    correct: 2,
    explanation: "Heurísticas substituem valores terminais quando a busca é limitada."
  },
  {
    id: 189,
    topicoId: 17,
    question: "Analise:\nI. MINIMAX não comete erros contra adversários imperfeitos.\nII. Retornar o caminho previsto é útil se o humano for imprevisível.\n\nAssinale a correta:",
    options: [
      "I é verdadeira e II é falsa.",
      "I é falsa e II é verdadeira.",
      "Ambas são verdadeiras.",
      "Ambas são falsas.",
      "II justifica I."
    ],
    correct: 0,
    explanation: "Se o humano é imprevisível (subótimo), o caminho previsto perde a utilidade (não faz sentido retornar)."
  },
  {
    id: 190,
    topicoId: 17,
    question: "Verdadeiro ou Falso: No algoritmo MINIMAX, as arestas da árvore representam as jogadas possíveis de ambos os jogadores.",
    options: ["Verdadeiro", "Falso"],
    correct: 0,
    explanation: "Correto. Nós são estados, arestas são jogadas."
  }
];

export default questoes;
