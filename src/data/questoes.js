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
    explanation: "A definição literal apresentada no texto é a habilidade de adquirir e aplicar conhecimento visando a resolução de problemas complexos."
  },
  {
    id: 2,
    topicoId: 1,
    question: "De acordo com o material, quantos tipos de inteligência existem?",
    options: ["Cinco", "Sete", "Oito", "Nove", "Dez"],
    correct: 3,
    explanation: "O texto afirma explicitamente que existem nove tipos de inteligência."
  },
  {
    id: 3,
    topicoId: 1,
    question: "Qual das alternativas abaixo NÃO corresponde a um dos tipos de inteligência listados no material?",
    options: [
      "Espacial",
      "Musical",
      "Emocional",
      "Existencial",
      "Naturalista"
    ],
    correct: 2,
    explanation: "A inteligência 'Emocional' não está listada entre os nove tipos do texto (as categorias relacionadas a emoções/pessoas no texto são Interpessoal e Intrapessoal)."
  },
  {
    id: 4,
    topicoId: 1,
    question: "A inteligência focada no entendimento de si mesmo e no autoconhecimento é classificada como:",
    options: [
      "Intrapessoal",
      "Interpessoal",
      "Físico-cinestésica",
      "Linguística",
      "Existencial"
    ],
    correct: 0,
    explanation: "A inteligência intrapessoal é aquela voltada para o interior do indivíduo (diferente da interpessoal, que é voltada para o convívio com os outros)."
  },
  {
    id: 5,
    topicoId: 1,
    question: "A inteligência relacionada ao raciocínio lógico e habilidade com números é a:",
    options: [
      "Físico-cinestésica",
      "Existencial",
      "Naturalista",
      "Lógico-matemática",
      "Espacial"
    ],
    correct: 3,
    explanation: "A inteligência lógico-matemática engloba a habilidade de resolução lógica e matemática."
  },

  // ----------------------------------------------------
  // TÓPICO 2: Resolução Lógica
  // ----------------------------------------------------
  {
    id: 6,
    topicoId: 2,
    question: "Qual tipo de raciocínio lógico tira conclusões que não são logicamente garantidas, apenas prováveis?",
    options: [
      "Raciocínio Dedutivo",
      "Raciocínio Abdutivo",
      "Raciocínio Indutivo",
      "Raciocínio Matemático",
      "Raciocínio Analítico"
    ],
    correct: 2,
    explanation: "O raciocínio indutivo baseia-se em analisar uma parte dos eventos, logo, suas conclusões nunca são absolutamente certas."
  },
  {
    id: 7,
    topicoId: 2,
    question: "A afirmação 'Robert é sociólogo → Para ser sociólogo é preciso ser bacharel → Logo, Robert é bacharel' é um exemplo de qual raciocínio?",
    options: [
      "Indutivo",
      "Dedutivo",
      "Abdutivo",
      "Sintético",
      "Filosófico"
    ],
    correct: 1,
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
      "Se a máquina produz um comportamento semelhante ao dos seres humanos.",
      "Apenas na velocidade em que ela processa dados binários."
    ],
    correct: 3,
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
    question: "A Inteligência Artificial é definida no material como o campo que cria máquinas que:",
    options: [
      "Apenas substituem a força de trabalho física humana.",
      "Pensam e agem igual ou semelhante aos humanos.",
      "Realizam apenas cálculos matemáticos estáticos.",
      "Funcionam independentes de energia elétrica.",
      "São exclusivamente baseadas em raciocínio indutivo."
    ],
    correct: 1,
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
      "Interagir e agir no ambiente ao redor.",
      "Apenas receber inputs de texto do usuário.",
      "Planejar heurísticas de curto prazo."
    ],
    correct: 2,
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
      "Porque ele não tem uma medida de performance definida.",
      "Porque ele falha constantemente no teste de Turing.",
      "Porque não atua em um ambiente digital.",
      "Porque precisa de uma 'ordem' (input do usuário) para agir, não agindo de forma implícita e independente.",
      "Porque ele não utiliza bancos de dados."
    ],
    correct: 3,
    explanation: "Agentes operam e agem no ambiente de forma autônoma. O ChatGPT, como uma LLM, precisa que um usuário envie um prompt para iniciar uma ação."
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
      "O Estocástico possui incertezas e aleatoriedades no resultado, mesmo conhecendo a ação atual.",
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
      "Sequencial",
      "Totalmente observável",
      "Multi-agent"
    ],
    correct: 2,
    explanation: "No ambiente sequencial, as decisões de hoje impactam o ambiente de amanhã (diferente do episódico, onde as ações são contidas e isoladas)."
  },
  {
    id: 24,
    topicoId: 5,
    question: "Um carro autônomo dirigindo em uma rodovia lida com um ambiente que está em constante mutação enquanto ele toma decisões. Este ambiente é classificado como:",
    options: [
      "Estático",
      "Determinístico",
      "Dinâmico",
      "Episódico",
      "Single-agent"
    ],
    correct: 2,
    explanation: "Se o ambiente muda enquanto o agente 'pensa' e toma sua decisão (como o movimento dos outros carros), ele é Dinâmico."
  },
  {
    id: 25,
    topicoId: 5,
    question: "Um jogo de xadrez onde o tabuleiro possui 64 casas exatas e um número finito e contabilizável de ações possíveis é um exemplo de ambiente:",
    options: [
      "Contínuo",
      "Estocástico",
      "Discreto",
      "Dinâmico",
      "Parcialmente observável"
    ],
    correct: 2,
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
      "Ele maximiza a qualidade do resultado (mais rápido, mais barato) usando funções de utilidade.",
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
    question: "Segundo o material, qual agente usa o estado atual e o objetivo para planejar uma sequência de ações por meio de busca?",
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
      "Função sucessora",
      "Custo do caminho",
      "Espaço de estados"
    ],
    correct: 2,
    explanation: "A Função sucessora define o conjunto de ações disponíveis em um estado e as consequências (para qual estado aquilo te leva)."
  },
  {
    id: 33,
    topicoId: 7,
    question: "Como é definida uma 'Solução' no contexto de problemas de busca?",
    options: [
      "O uso do menor tempo de processamento possível de um algoritmo.",
      "A eliminação de estados repetidos na memória.",
      "A sequência de ações (caminho) do estado inicial até alcançar o objetivo.",
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
      "Ramificação",
      "Heurística",
      "Abstração",
      "Fringe",
      "Modus ponens"
    ],
    correct: 2,
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
      "As funções sucessoras (ação e custo para ir ao próximo estado).",
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
      "Teste de objetivo",
      "Big O Notation",
      "Árvore relaxada"
    ],
    correct: 2,
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
    question: "No resumo de usos, qual algoritmo é escolhido especificamente quando o objetivo é gastar MENOS memória?",
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
    id: 44,
    topicoId: 9,
    question: "O que significa a variável 'b' nas notações de complexidade de algoritmos de busca?",
    options: [
      "O tempo total de processamento",
      "O objetivo (best solution)",
      "A profundidade do primeiro erro",
      "O fator de ramificação (número médio de filhos de cada nó)",
      "O custo do limite heurístico"
    ],
    correct: 3,
    explanation: "A letra 'b' (de *branching factor*) é padrão em IA para indicar quantos ramos/filhos saem em média de cada nó da árvore."
  },
  {
    id: 45,
    topicoId: 9,
    question: "Um detalhe importante na aplicação da Busca em Profundidade (DFS) e Busca em Largura (BFS) é que ambas:",
    options: [
      "NÃO consideram o custo das ações ao formar os caminhos.",
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
    question: "Qual estrutura de dados gerencia a fila de nós na Busca em Largura (BFS)?",
    options: [
      "Pilha (LIFO)",
      "Lista Duplamente Encadeada",
      "Fila (FIFO)",
      "Árvore B",
      "Grafo Aleatório"
    ],
    correct: 2,
    explanation: "O BFS explora os níveis na ordem em que entram. O primeiro nó adicionado ao nível é o primeiro a ser explorado (First In, First Out - FIFO)."
  },
  {
    id: 47,
    topicoId: 10,
    question: "A Busca em Profundidade (DFS) é considerada ótima sob quais condições?",
    options: [
      "Quando não existem ciclos no ambiente.",
      "Ela nunca é ótima, pois encontra a solução mais à esquerda independente do custo.",
      "Quando todos os passos tiverem custo 1.",
      "Apenas quando o fator de ramificação é par.",
      "Quando a estrutura é em formato de Fila (FIFO)."
    ],
    correct: 1,
    explanation: "DFS mergulha no primeiro caminho que encontra e se agarra à primeira solução achada (a mais à esquerda). Mesmo que tenha uma rota mais barata à direita, ele não a vê primeiro."
  },
  {
    id: 48,
    topicoId: 10,
    question: "Qual é a notação de complexidade de tempo para a Busca em Largura (BFS), sendo 's' a profundidade da primeira solução?",
    options: [
      "O(b^m)",
      "O(bm)",
      "O(s^b)",
      "O(b^s)",
      "O(m^b)"
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
      "Garante a optimalidade apenas se os custos das arestas forem todos iguais (ou se o objetivo for focado no número de passos).",
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
      "Fila de prioridades",
      "Lista circular",
      "Árvore binária de busca"
    ],
    correct: 2,
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
      "Os custos das arestas devem ser positivos, o valor de ε > 0, e a solução ter um custo finito.",
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
      "O(b^s)",
      "O(1)",
      "O(b^m)",
      "O(s^m)"
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
  }
];

export default questoes;
