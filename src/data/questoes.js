import PruningQuestion1 from "../images/PruningQuestion1.png"
import PruningQuestionrResult from "../images/PruningQuestionrResult.png"
import PruningQuestion2 from "../images/PruningQuestion2.png"
import PruningQuestionrResult2 from "../images/PruningQuestionrResult2.png"


// topicoId links each question to a topic in topicos.js
const questoes = [
  // ----------------------------------------------------
  // TÓPICO 1: O que é Inteligência?
  // ----------------------------------------------------
  {
    id: 1,
    topicoId: 1,
    provaId: 1,
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
    id: 2,
    topicoId: 2,
    provaId: 1,
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
    id: 3,
    topicoId: 2,
    provaId: 1,
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
    id: 4,
    topicoId: 2,
    provaId: 1,
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
    id: 5,
    topicoId: 2,
    provaId: 1,
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
    id: 6,
    topicoId: 2,
    provaId: 1,
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
    id: 7,
    topicoId: 3,
    provaId: 1,
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
    id: 8,
    topicoId: 3,
    provaId: 1,
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
    id: 9,
    topicoId: 3,
    provaId: 1,
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
    id: 10,
    topicoId: 3,
    provaId: 1,
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
    id: 11,
    topicoId: 3,
    provaId: 1,
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
    id: 12,
    topicoId: 4,
    provaId: 1,
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
    id: 13,
    topicoId: 4,
    provaId: 1,
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
    id: 14,
    topicoId: 4,
    provaId: 1,
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
    id: 15,
    topicoId: 4,
    provaId: 1,
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
  id: 16,
  topicoId: 4,
    provaId: 1,
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
    id: 17,
    topicoId: 5,
    provaId: 1,
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
    id: 18,
    topicoId: 5,
    provaId: 1,
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
    id: 19,
    topicoId: 5,
    provaId: 1,
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
    id: 20,
    topicoId: 5,
    provaId: 1,
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
    id: 21,
    topicoId: 5,
    provaId: 1,
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
    id: 22,
    topicoId: 6,
    provaId: 1,
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
    id: 23,
    topicoId: 6,
    provaId: 1,
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
    id: 24,
    topicoId: 6,
    provaId: 1,
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
    id: 25,
    topicoId: 6,
    provaId: 1,
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
    id: 26,
    topicoId: 6,
    provaId: 1,
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
    id: 27,
    topicoId: 7,
    provaId: 1,
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
    id: 28,
    topicoId: 7,
    provaId: 1,
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
    id: 29,
    topicoId: 7,
    provaId: 1,
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
    id: 30,
    topicoId: 7,
    provaId: 1,
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
    id: 31,
    topicoId: 7,
    provaId: 1,
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
    id: 32,
    topicoId: 8,
    provaId: 1,
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
    id: 33,
    topicoId: 8,
    provaId: 1,
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
    id: 34,
    topicoId: 8,
    provaId: 1,
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
    id: 35,
    topicoId: 8,
    provaId: 1,
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
    id: 36,
    topicoId: 8,
    provaId: 1,
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
    id: 37,
    topicoId: 9,
    provaId: 1,
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
    id: 38,
    topicoId: 9,
    provaId: 1,
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
    id: 39,
    topicoId: 9,
    provaId: 1,
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
    id: 40,
    topicoId: 9,
    provaId: 1,
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
  id: 41,
  topicoId: 10,
    provaId: 1,
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
    id: 42,
    topicoId: 10,
    provaId: 1,
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
    id: 43,
    topicoId: 10,
    provaId: 1,
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
    id: 44,
    topicoId: 10,
    provaId: 1,
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
    id: 45,
    topicoId: 10,
    provaId: 1,
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
    id: 46,
    topicoId: 11,
    provaId: 1,
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
    id: 47,
    topicoId: 11,
    provaId: 1,
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
    id: 48,
    topicoId: 11,
    provaId: 1,
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
    id: 49,
    topicoId: 11,
    provaId: 1,
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
    id: 50,
    topicoId: 11,
    provaId: 1,
    question: "Qual a complexidade de espaço exigida pela Busca em Profundidade com Limite (DLS)?",
    options: [
      "O(b<sup>d</sup>)",
      "O(bd)",
      "O(b<sup>m</sup>)",
      "O(b<sup>(C*/ε)</sup>)",
      "O(1)"
    ],
    correct: 1,
    explanation: "Assim como a DFS original que gasta O(bm), a DLS consome apenas O(bd) de memória, onde 'b' é a ramificação e 'd' é a profundidade limite."
  },

  // ----------------------------------------------------
  // TÓPICO 12: Busca Informada
  // ----------------------------------------------------
  {
    id: 51,
    topicoId: 12,
    provaId: 1,
    question: "Qual é a principal diferença entre uma busca informada e uma busca cega (não informada)?",
    options: [
      "A busca informada explora apenas grafos contínuos.",
      "A busca informada não se importa com a performance do agente.",
      "A busca informada visita todos os nós da árvore antes de parar.",
      "A busca informada nunca é capaz de encontrar o menor caminho.",
      "A busca informada utiliza estratégias e heurísticas para estimar a proximidade do objetivo."
    ],
    correct: 4,
    explanation: "Ela usa conhecimento adicional (a heurística) para 'mirar' em direção ao objetivo em vez de atirar no escuro."
  },
  {
    id: 52,
    topicoId: 12,
    provaId: 1,
    question: "A função heurística h(n) em um algoritmo tem como finalidade principal:",
    options: [
      "Estimar o custo do estado atual 'n' até o estado objetivo.",
      "Superestimar os custos para evitar caminhos subótimos.",
      "Contar o número de nós que já foram visitados pelo agente.",
      "Impedir que o agente entre em loops durante a DFS.",
      "Ignorar o objetivo principal e focar na utilidade secundária."
    ],
    correct: 0,
    explanation: "A função h(n) tenta adivinhar o quão perto ou quão barato é ir de onde você está agora (n) até a meta final."
  },
  {
    id: 53,
    topicoId: 12,
    provaId: 1,
    question: "Sobre as funções heurísticas, assinale a alternativa verdadeira:",
    options: [
      "Para um problema específico, só é possível criar uma única heurística válida.",
      "Elas tomam decisões absolutas e perfeitas para o caminho inteiro do começo ao fim.",
      "A orientação fornecida por elas serve apenas para decisões locais.",
      "Elas obrigatoriamente aumentam a complexidade de tempo de qualquer busca.",
      "Não podem ser aplicadas em ambientes parcialmente observáveis."
    ],
    correct: 2,
    explanation: "A heurística é apenas uma dica que te ajuda a decidir qual é o melhor passo a ser dado a partir do local atual (decisão local), não prevendo o futuro completo com perfeição."
  },
  {
    id: 54,
    topicoId: 12,
    provaId: 1,
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
    id: 55,
    topicoId: 12,
    provaId: 1,
    question: "Um dos usos primários da informação heurística em problemas de IA é guiar o algoritmo nas decisões de qual nós:",
    options: [
      "Adicionar ao teste de Turing.",
      "Descartar completamente da memória local.",
      "Converter em estado determinístico.",
      "Dividir entre a busca episódica e sequencial.",
      "Determinar quais nós fringe devem ser expandidos."
    ],
    correct: 4,
    explanation: "A heurística ajuda a ranquear a fronteira (fringe) para decidir qual nó é o mais promissor para ser aberto e explorado no próximo turno."
  },

  // ----------------------------------------------------
  // TÓPICO 13: Greedy Search
  // ----------------------------------------------------
  {
    id: 56,
    topicoId: 13,
    provaId: 1,
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
    id: 57,
    topicoId: 13,
    provaId: 1,
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
    id: 58,
    topicoId: 13,
    provaId: 1,
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
    id: 59,
    topicoId: 13,
    provaId: 1,
    question: "Qual algoritmo clássico não-informado possui comportamento estrutural semelhante à Greedy Search de 'seguir um caminho reto do início ao fim'?",
    options: [
      "Busca de Custo Uniforme (UCS)",
      "Busca em Largura (BFS)",
      "Aprofundamento Iterativo (IDS)",
      "Busca em Profundidade (DFS)",
      "Algoritmo A*"
    ],
    correct: 3,
    explanation: "Assim como a DFS, a Gulosa prefere ir se afundando rapidamente num único caminho que parece promissor até o final, em vez de tatear cuidadosamente os níveis (como o BFS faz)."
  },
  {
    id: 60,
    topicoId: 13,
    provaId: 1,
    question: "Com uma heurística de péssima qualidade, qual é a complexidade de tempo do pior caso na Greedy Search?",
    options: [
      "O(bd)",
      "O(b<sup>s</sup>)",
      "O(1)",
      "O(s<sup>m</sup>)",
      "O(b<sup>m</sup>)"
    ],
    correct: 4,
    explanation: "Se a heurística for ruim, a busca gulosa se comporta de maneira ineficiente parecida com a de um DFS travado no limite máximo do grafo, custando O(b^m)."
  },

  // ----------------------------------------------------
  // TÓPICO 14: A* Search
  // ----------------------------------------------------
  {
    id: 61,
    topicoId: 14,
    provaId: 1,
    question: "O algoritmo A* é fundamentalmente criado pela combinação de quais dois algoritmos de busca?",
    options: [
      "BFS e DFS",
      "DLS e IDS",
      "UCS e Greedy Search",
      "Greedy Search e BFS",
      "Busca Informada e Minimax"
    ],
    correct: 2,
    explanation: "O A* pega o controle de custo passado acumulado da UCS e mescla com a visão otimista de futuro da Greedy Search."
  },
  {
    id: 62,
    topicoId: 14,
    provaId: 1,
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
    id: 63,
    topicoId: 14,
    provaId: 1,
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
    id: 64,
    topicoId: 14,
    provaId: 1,
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
    id: 65,
    topicoId: 14,
    provaId: 1,
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
    id: 66,
    topicoId: 15,
    provaId: 1,
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
    id: 67,
    topicoId: 15,
    provaId: 1,
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
    id: 68,
    topicoId: 15,
    provaId: 1,
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
    id: 69,
    topicoId: 15,
    provaId: 1,
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
    id: 70,
    topicoId: 15,
    provaId: 1,
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
    id: 71,
    topicoId: 16,
    provaId: 1,
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
    id: 72,
    topicoId: 16,
    provaId: 1,
    question: "No ambiente de jogos determinísticos, o que o agente tenta fazer em relação aos números da Função de Utilidade?",
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
    id: 73,
    topicoId: 16,
    provaId: 1,
    question: "O que caracteriza os cenários classificados como 'Zero-Sum Games' (Jogos de Soma Zero)?",
    options: [
      "As funções de utilidade entre os jogadores são opostas e conflitantes.",
      "A soma total do placar final deve ser diferente de 0.",
      "Os agentes cooperam independentes para chegar ao fim juntos.",
      "É um modelo onde a máquina Deep Blue não consegue jogar.",
      "Não ocorre competição, apenas indiferença estratégica."
    ],
    correct: 0,
    explanation: "É uma competição pura. O +1 para você significa fatalmente o -1 para o oponente, anulando as somas e tornando as estratégias perfeitamente reversas."
  },
  {
    id: 74,
    topicoId: 16,
    provaId: 1,
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
    id: 75,
    topicoId: 16,
    provaId: 1,
    question: "No contexto da inteligência artificial aplicada em jogos, o que foi o projeto 'Deep Blue'?",
    options: [
      "O primeiro robô aspirador de pó com sensores avançados.",
      "O modelo LLM predecessor do ChatGPT desenvolvido para responder charadas.",
      "A primeira máquina a ganhar um jogo de xadrez contra campeão mundial.",
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
    id: 76,
    topicoId: 17,
    provaId: 1,
    question: "No algoritmo MINIMAX, o foco central das decisões do jogador MAX é:",
    options: [
      "Maximizar a velocidade de processamento.",
      "Minimizar sua utilidade para ceder o jogo ao oponente de forma ética.",
      "Atingir o nível mais baixo da árvore rapidamente.",
      "Buscar cooperar com o jogador MIN sempre que possível.",
      "Maximizar a sua função de utilidade."
    ],
    correct: 4,
    explanation: "O MAX fará de tudo para puxar a balança para cima (sucesso dele), sabendo que o MIN tentará o exato oposto no turno seguinte."
  },
  {
    id: 77,
    topicoId: 17,
    provaId: 1,
    question: "A metodologia 'bottom-up' do MINIMAX aplicada em árvores de jogo significa que ele:",
    options: [
      "Calcula as utilidades nas folhas do jogo e vai repassando esses valores de baixo para cima até a raiz.",
      "Apaga as folhas da árvore gradualmente para poupar a memória do sistema.",
      "Ignora os níveis MAX durante as ramificações inferiores.",
      "Usa BFS apenas quando a busca atinge o limite episódico.",
      "Adiciona nós raízes artificiais na extremidade debaixo."
    ],
    correct: 0,
    explanation: "Ele olha para todos os fins de jogo lá embaixo (quem ganha, empata ou perde) e propaga essa 'certeza' de volta pelo caminho para a primeira jogada na raiz."
  },
  {
    id: 78,
    topicoId: 17,
    provaId: 1,
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
    id: 79,
    topicoId: 17,
    provaId: 1,
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
    id: 80,
    topicoId: 17,
    provaId: 1,
    question: "O que ocorre quando um humano joga de forma 'subótima' (comete um erro desatento) contra o MINIMAX?",
    options: [
      "O MINIMAX empata a partida instantaneamente, pois só sabe jogar contra perfeição.",
      "O algoritmo é forçado a resetar o jogo de soma-zero.",
      "A utilidade garantida é perdida e o MAX sofrerá uma redução na pontuação terminal.",
      "A árvore de jogo entra em redundância episódica e crasha.",
      "O MAX ganhará uma 'pontuação/utilidade' ainda maior que o garantido."
    ],
    correct: 4,
    explanation: "O caminho que o MINIMAX planejou contava com o humano fechando todas as portas. Se o humano erra e abre uma porta, o MAX abandona o plano modesto, pega a porta aberta e massacra os lucros."
  },

  // ----------------------------------------------------
  // TÓPICO 3: O que é Inteligência Artificial? (Adicionais)
  // ----------------------------------------------------
  {
    id: 81,
    topicoId: 3,
    provaId: 1,
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
    id: 82,
    topicoId: 3,
    provaId: 1,
    question: "Analise as afirmações sobre os critérios de avaliação de IA:\nI. O critério comportamental foca na eficácia do resultado final.\nII. A funcionalidade prioriza o 'como' o sistema realiza a função.\nIII. O critério cognitivo nega a reprodução genuína sem consciência.\nIV. O critério funcional avalia apenas o resultado, independentemente do processo.\nV. O critério cognitivo busca reproduzir os processos mentais humanos.\nEstá(ão) correta(s):",
    options: ["Apenas I", "Apenas III", "I e II", "II e III", "III, IV e V"],
    correct: 4,
    explanation: "I está incorreta (comportamental observa comportamento, não só resultado). II está incorreta (funcional ignora o 'como'). III, IV e V estão corretas."
  },
  {
    id: 83,
    topicoId: 3,
    provaId: 1,
    question: "Verdadeiro ou Falso: O critério de Funcionalidade afirma que a eficácia da tarefa é o único fator determinante para validar uma habilidade reproduzida.",
    options: ["Verdadeiro", "Falso"],
    correct: 0,
    explanation: "Na funcionalidade, importa apenas se a função foi realizada de forma eficaz."
  },
  {
    id: 84,
    topicoId: 3,
    provaId: 1,
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
    id: 85,
    topicoId: 3,
    provaId: 1,
    question: "Analise as premissas:\nI. Conversar com uma máquina sem identificá-la é o cerne do Teste de Turing.\nII. A simulação superficial é aceita pelo critério de funcionalidade.\nIII. O Teste de Turing avalia o comportamento observável da máquina.\nIV. O critério cognitivo exige que a máquina pense exatamente como um humano.\nV. O critério funcional desconsidera os processos internos do sistema.\nAssinale a correta:",
    options: [
      "I, II e III são verdadeiras.",
      "I, II, III e V são verdadeiras.",
      "Apenas IV e V são verdadeiras.",
      "I é verdadeira e II é falsa.",
      "Todas são verdadeiras."
    ],
    correct: 1,
    explanation: "I, II e III estão corretas. V também está correta, pois o critério funcional foca no resultado. IV está incorreta, pois o critério cognitivo busca semelhança com processos humanos, mas não exige ser exatamente igual."
  },
  {
    id: 86,
    topicoId: 3,
    provaId: 1,
    question: "Qual opção apresenta a relação correta entre o critério -> exigência?",
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
    id: 87,
    topicoId: 3,
    provaId: 1,
    question: "Verdadeiro ou Falso: Para o critério Cognitivo, uma máquina que resolve problemas complexos sem entender o que faz é considerada inteligente no nível máximo.",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "O critério cognitivo exige consciência e entendimento genuíno."
  },

  // ----------------------------------------------------
  // TÓPICO 4: Agentes Racionais e Inteligentes (Adicionais)
  // ----------------------------------------------------
  {
    id: 88,
    topicoId: 4,
    provaId: 1,
    question: "Sobre os Agentes Racionais, é INCORRETO afirmar que:",
    options: [
      "Eles percebem o ambiente através de sensores.",
      "Eles utilizam atuadores para realizar ações.",
      "Buscam maximizar o valor esperado das medidas de desempenho.",
      "Sua meta é sempre agir conforme o comportamento esperado, independente do resultado.",
      "São entidades que agem em prol de um objetivo pré-definido."
    ],
    correct: 3,
    explanation: "As medidas de desempenho focam no resultado esperado, não no comportamento esperado."
  },
  {
    id: 89,
    topicoId: 4,
    provaId: 1,
    question: "Analise as afirmações sobre o modelo PEAS:\nI. O 'Environment' define onde o agente atua.\nII. 'Performance' avalia o sucesso do agente.\nIII. 'Sensors' são as ferramentas de ação.\n\nEstá(ão) correta(s):",
    options: ["Apenas I", "I e II", "Apenas III", "II e III", "I, II e III"],
    correct: 1,
    explanation: "Sensores são para sentir, não para agir (Atuadores agem)."
  },
  {
    id: 90,
    topicoId: 4,
    provaId: 1,
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
    id: 91,
    topicoId: 4,
    provaId: 1,
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
    id: 92,
    topicoId: 4,
    provaId: 1,
    question: "Analise as premissas:\nI. Um agente racional toma ações para atingir um objetivo.\nII. O sucesso do agente é medido pela 'Performance measure'.\n\nAssinale a opção correta:",
    options: [
      "Ambas são falsas.",
      "I e II são verdadeiras.",
      "I é verdadeira e II é falsa.",
      "II justifica a invalidez de I.",
      "I é exclusiva para humanos."
    ],
    correct: 1,
    explanation: "Ambas definem corretamente os pilares de um agente inteligente."
  },
  {
    id: 93,
    topicoId: 4,
    provaId: 1,
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
    id: 94,
    topicoId: 5,
    provaId: 1,
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
    id: 95,
    topicoId: 5,
    provaId: 1,
    question: "Analise as características:\nI. Experiência dividida em partes independentes.\nII. Ação atual não afeta o futuro distante.\n\nEssas características definem um ambiente:",
    options: ["Sequencial", "Contínuo", "Estocástico", "Episódico", "Dinâmico"],
    correct: 3,
    explanation: "No episódico, as ações não dependem umas das outras."
  },
  {
    id: 96,
    topicoId: 5,
    provaId: 1,
    question: "Verdadeiro ou Falso: Um carro autônomo opera em um ambiente contínuo, pois os dados dos sensores e as ações no trânsito não podem ser totalmente enumerados.",
    options: ["Verdadeiro", "Falso"],
    correct: 0,
    explanation: "Ambientes contínuos são aqueles onde não é possível enumerar as ações e percepções, como no caso de um carro autônomo no trânsito em constante mudança."
  },
  {
    id: 97,
    topicoId: 5,
    provaId: 1,
    question: "Se o ambiente sofre alterações externas enquanto o agente processa a informação, ele é:",
    options: ["Estático", "Dinâmico", "Determinístico", "Episódico", "Single-agent"],
    correct: 1,
    explanation: "Ambientes dinâmicos mudam durante a decisão do agente."
  },
  {
    id: 98,
    topicoId: 5,
    provaId: 1,
    question: "Qual a relação correta entre o jogo de tabuleiro e seu ambiente?",
    options: [
      "Xadrez -> Contínuo.",
      "Xadrez -> Estocástico.",
      "Xadrez -> Parcialmente observável.",
      "Xadrez -> Discreto.",
      "Xadrez -> Dinâmico."
    ],
    correct: 3,
    explanation: "No xadrez, ações e percepções são enumeráveis (discreto)."
  },
  {
    id: 99,
    topicoId: 5,
    provaId: 1,
    question: "Analise as afirmações:\nI. No ambiente determinístico, o estado atual + ação define o próximo estado.\nII. No ambiente sequencial, a ação atual depende das anteriores.\n\nEstá(ão) correta(s):",
    options: ["Apenas I", "Apenas II", "Ambas as afirmações", "Nenhuma das afirmações", "I anula II"],
    correct: 2,
    explanation: "Ambas as definições estão corretas segundo o texto."
  },
  {
    id: 100,
    topicoId: 5,
    provaId: 1,
    question: "Verdadeiro ou Falso: Em um ambiente parcialmente observável, o agente possui acesso completo ao estado do mundo via sensores.",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "Parcialmente observável significa que o agente NÃO tem acesso completo."
  },

  // ----------------------------------------------------
  // TÓPICO 6: Tipos de Agentes (Adicionais)
  // ----------------------------------------------------
  {
    id: 101,
    topicoId: 6,
    provaId: 1,
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
    id: 102,
    topicoId: 6,
    provaId: 1,
    question: "Analise as afirmações sobre os tipos de agentes:\nI. Reativo Simples: Atua apenas se o ambiente for parcialmente observável.\nII. Baseado em Modelo: Mantém um histórico para entender a evolução do ambiente.\nIII. Baseado em Objetivo: Toma decisões sem considerar o estado atual do mundo.\nIV. Baseado em Utilidade: Atribui valores aos estados para maximizar a qualidade do resultado.\nV. Reativo Simples: Toma decisões baseando-se exclusivamente na percepção do estado atual.",
    options: ["I, II e IV", "II, III e V", "II, IV e V", "I, III e IV", "Todas estão corretas"],
    correct: 2,
    explanation: "II, IV e V estão corretas. A I está incorreta porque o agente reativo simples exige um ambiente totalmente observável. A III está incorreta porque o agente baseado em objetivo usa sim o estado atual junto com a meta para planejar suas ações."
  },
  {
    id: 103,
    topicoId: 6,
    provaId: 1,
    question: "Verdadeiro ou Falso: O agente reativo simples pode operar com sucesso em ambientes onde o estado não é totalmente visível.",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "Ele exige que o ambiente seja totalmente observável por não ter histórico."
  },
  {
    id: 104,
    topicoId: 6,
    provaId: 1,
    question: "Qual agente utiliza técnicas de busca e planejamento focadas exclusivamente em atingir um estado final específico?",
    options: [
      "Agente baseado em objetivo",
      "Agente reativo simples",
      "Agente baseado em utilidade",
      "Agente de ambiente dinâmico",
      "Agente de reflexo estocástico"
    ],
    correct: 0,
    explanation: "O foco do agente baseado em objetivo é usar busca para atingir a meta."
  },
  {
    id: 105,
    topicoId: 6,
    provaId: 1,
    question: "A função de utilidade é uma ferramenta essencial para:",
    options: [
      "Agentes de reflexo simples.",
      "Agentes baseados em objetivo básico.",
      "Agentes puramente sequenciais.",
      "Agentes de ambiente estático.",
      "Agentes baseados em utilidade."
    ],
    correct: 4,
    explanation: "Agentes baseados em utilidade usam essas funções para avaliar estados."
  },
  {
    id: 106,
    topicoId: 6,
    provaId: 1,
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
    id: 107,
    topicoId: 6,
    provaId: 1,
    question: "Verdadeiro ou Falso: 'Agentes reativos baseados em modelo' operam tentando prever como o ambiente mudará de acordo com suas ações.",
    options: ["Verdadeiro", "Falso"],
    correct: 0,
    explanation: "Correto. Eles buscam entender a evolução do ambiente."
  },

  // ----------------------------------------------------
  // TÓPICO 7: Problemas de Busca (Adicionais)
  // ----------------------------------------------------
  {
    id: 108,
    topicoId: 7,
    provaId: 1,
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
    id: 109,
    topicoId: 7,
    provaId: 1,
    question: "Analise as definições:\nI. A solução é a sequência de ações para chegar ao objetivo.\nII. Abstração demais pode impossibilitar a resolução.\nIII. Custo do caminho avalia a performance medida pelo sensor.\n\nEstá(ão) correta(s):",
    options: ["Apenas I", "I e II", "II e III", "Apenas III", "I, II e III"],
    correct: 1,
    explanation: "Custo do caminho é a soma dos custos das ações, não uma medição de sensor direta."
  },
  {
    id: 110,
    topicoId: 7,
    provaId: 1,
    question: "Verdadeiro ou Falso: Um problema de busca detalhado demais é sempre preferível, pois garante uma solução perfeita e rápida.",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "Muito detalhe torna a resolução inviável computacionalmente."
  },
  {
    id: 111,
    topicoId: 7,
    provaId: 1,
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
    id: 112,
    topicoId: 7,
    provaId: 1,
    question: "Qual elemento é responsável por validar se o estado atual é o estado meta?",
    options: [
      "Função Sucessora",
      "Espaço de Estados",
      "Custo do Caminho",
      "Estado Inicial",
      "Teste de Objetivo",
    ],
    correct: 4,
    explanation: "O Teste de Objetivo faz essa validação."
  },
  {
    id: 113,
    topicoId: 7,
    provaId: 1,
    question: "Analise:\nI. O espaço de estados inclui apenas o ponto de partida e o de chegada.\nII. O custo do caminho é o somatório dos pesos das arestas percorridas.\n\nEstá(ão) correta(s):",
    options: [
      "Apenas I",
      "Ambas",
      "Nenhuma",
      "Apenas II",
      "I justifica II"
    ],
    correct: 3,
    explanation: "Espaço de estados inclui TODOS os estados alcançáveis, não apenas início e fim."
  },
  {
    id: 114,
    topicoId: 7,
    provaId: 1,
    question: "Verdadeiro ou Falso: Problemas de busca tradicionalmente assumem que o ambiente é estocástico para testar a robustez do agente.",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "Eles assumem ambientes determinísticos, onde as ações têm resultados certos."
  },

  // ----------------------------------------------------
  // TÓPICO 8: Grafos e Árvores de Busca (Adicionais)
  // ----------------------------------------------------
  {
    id: 115,
    topicoId: 8,
    provaId: 1,
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
    id: 116,
    topicoId: 8,
    provaId: 1,
    question: "Analise as afirmações sobre Grafos e Árvores de Busca:\nI. No grafo de espaço de estados, cada estado ocorre apenas uma vez.\nII. Na árvore de busca, um estado específico pode aparecer em múltiplos nós.\nIII. A árvore de busca é sempre finita, mesmo que haja repetição de estados.\nIV. Cada nó na árvore de busca representa um caminho único no grafo de estados.\nV. Grafos de estados são comumente construídos de forma integral na memória RAM.",
    options: ["I, II e III", "II, IV e V", "I, II e IV", "I, III e V", "Todas estão corretas"],
    correct: 2,
    explanation: "I, II e IV estão corretas. A III está incorreta pois a árvore pode ser infinita em caso de ciclos. A V está incorreta pois o grafo raramente é construído totalmente na memória devido ao seu tamanho."
  },
  {
    id: 117,
    topicoId: 8,
    provaId: 1,
    question: "Verdadeiro ou Falso: Um nó na árvore de busca corresponde a um único estado do grafo, ignorando o trajeto feito para chegar até ele.",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "Cada nó na árvore corresponde a um caminho completo no grafo."
  },
  {
    id: 118,
    topicoId: 8,
    provaId: 1,
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
    id: 119,
    topicoId: 8,
    provaId: 1,
    question: "A repetição de estados é um fenômeno que afeta principalmente:",
    options: [
      "A definição do estado inicial.",
      "A validade do Teste de Objetivo.",
      "A estrutura da Árvore de Busca.",
      "A construção matemática do Grafo estático.",
      "A função de utilidade do agente."
    ],
    correct: 2,
    explanation: "Na árvore, a repetição gera estrutura redundante e pode torná-la infinita."
  },
  {
    id: 120,
    topicoId: 8,
    provaId: 1,
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
    id: 121,
    topicoId: 8,
    provaId: 1,
    question: "Verdadeiro ou Falso: O teste de objetivo em um grafo é geralmente um conjunto de múltiplos nós distribuídos aleatoriamente.",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "Na maioria dos casos, é um só nó específico."
  },

  // ----------------------------------------------------
  // TÓPICO 9: Algoritmos Não Informados (Adicionais)
  // ----------------------------------------------------
  {
    id: 122,
    topicoId: 9,
    provaId: 1,
    question: "Sobre algoritmos não informados, assinale a opção INCORRETA:",
    options: [
      "Busca cega não possui informações sobre a localização do objetivo.",
      "O 'Fringe' representa o próximo nó a ser expandido.",
      "A complexidade de tempo é medida pelo uso de memória RAM.",
      "A busca em largura é útil para encontrar o menor caminho em número de passos.",
      "Sem poda, os algoritmos podem entrar em busca infinita."
    ],
    correct: 2,
    explanation: "Complexidade de tempo mede o tempo que o algoritmo leva para encontrar uma solução; memória é medida pela complexidade de espaço."
  },
  {
    id: 123,
    topicoId: 9,
    provaId: 1,
    question: "Verdadeiro ou Falso: A busca em profundidade (DFS) é preferível quando o recurso mais escasso no sistema é a memória RAM.",
    options: ["Verdadeiro", "Falso"],
    correct: 0,
    explanation: "Correto. DFS visita menos nós e gasta menos memória (O(bm))."
  },
  {
    id: 124,
    topicoId: 9,
    provaId: 1,
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
    id: 125,
    topicoId: 9,
    provaId: 1,
    question: "Para garantir o menor custo em uma busca cega, deve-se utilizar:",
    options: ["BFS", "DFS", "UCS", "IDS", "Greedy Search"],
    correct: 2,
    explanation: "UCS (Busca de Custo Uniforme) é focada no menor custo."
  },
  {
    id: 126,
    topicoId: 9,
    provaId: 1,
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
    id: 127,
    topicoId: 9,
    provaId: 1,
    question: "Verdadeiro ou Falso: A propriedade 'Ótimo' em busca garante que a solução encontrada é a que exige menos tempo de processamento.",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "Ótimo garante o MENOR CUSTO de caminho, não o tempo de processamento."
  },

  // ----------------------------------------------------
  // TÓPICO 10: DFS e BFS (Adicionais)
  // ----------------------------------------------------
  {
    id: 128,
    topicoId: 10,
    provaId: 1,
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
    id: 129,
    topicoId: 10,
    provaId: 1,
    question: "Analise as afirmações sobre os algoritmos DFS e BFS:\nI. A Busca em Profundidade (DFS) sempre garante encontrar a solução ótima em termos de custo.\nII. A Busca em Largura (BFS) expande todos os nós de um nível antes de passar para o próximo.\nIII. A DFS possui complexidade de tempo O(b<sup>m</sup>), onde 'm' é a profundidade máxima.\nIV. A BFS utiliza uma estrutura de Pilha (LIFO) para gerenciar a fronteira de busca.\nV. A DFS encontra a solução mais à esquerda da árvore, independente do custo ou profundidade.",
    options: ["I, II e III", "II, III e V", "II, IV e V", "I, III e IV", "Todas estão corretas"],
    correct: 1,
    explanation: "II, III e V estão corretas. A afirmação I está incorreta porque a DFS não é ótima. A IV está incorreta porque a BFS utiliza uma Fila (FIFO), enquanto a Pilha é usada pela DFS."
  },
  {
    id: 130,
    topicoId: 10,
    provaId: 1,
    question: "Verdadeiro ou Falso: A Busca em Largura (BFS) é completa mesmo se a profundidade da solução 's' for infinita.",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "BFS é completa se 's' for FINITO."
  },
  {
    id: 131,
    topicoId: 10,
    provaId: 1,
    question: "Qual algoritmo possui complexidade de espaço (O(bm)) em relação à profundidade?",
    options: ["BFS", "UCS", "DFS", "IDS", "A*"],
    correct: 2,
    explanation: "A Busca em Profundidade (DFS) é a que economiza memória desta forma."
  },
  {
    id: 132,
    topicoId: 10,
    provaId: 1,
    question: "A principal falha da Busca em Profundidade (DFS) em termos de optimalidade é:",
    options: [
      "Aceitar a primeira solução que encontra.",
      "Gastar memória demais.",
      "Não encontrar nenhuma solução.",
      "Explorar todos os níveis antes de descer.",
      "Depender de heurísticas inconsistentes."
    ],
    correct: 0,
    explanation: "DFS para na primeira solução que acha, sem verificar se há outras melhores."
  },
  {
    id: 133,
    topicoId: 10,
    provaId: 1,
    question: "Verdadeiro ou Falso: A Busca em Largura (BFS) pode encontrar o caminho mais curto em número de passos, mas ignora o peso financeiro das ações.",
    options: ["Verdadeiro", "Falso"],
    correct: 0,
    explanation: "Correto. Ela foca no nível (passos), não nos custos individuais."
  },

  // ----------------------------------------------------
  // TÓPICO 11: UCS, DLS e IDS (Adicionais)
  // ----------------------------------------------------
  {
    id: 134,
    topicoId: 11,
    provaId: 1,
    question: "Sobre UCS, DLS e IDS, qual afirmação é INCORRETA?",
    options: [
      "UCS expande o vértice de menor custo acumulado.",
      "IDS combina as vantagens de BFS e DFS.",
      "DLS evita ciclos reduzindo a complexidade.",
      "UCS utiliza fila de prioridades.",
      "DLS é completa se a solução estiver além do limite 'd'."
    ],
    correct: 4,
    explanation: "DLS NÃO é completa se a solução estiver além do limite."
  },
  {
    id: 135,
    topicoId: 11,
    provaId: 1,
    question: "Analise as propriedades dos algoritmos UCS, DLS e IDS:\nI. O algoritmo IDS é considerado Ótimo e Completo.\nII. O UCS é Ótimo e Completo, assumindo que os custos sejam positivos (ε > 0).\nIII. A complexidade de espaço (memória) da busca DLS é definida como O(b<sup>d</sup>).\nIV. O IDS combina a economia de memória da DFS com a garantia de solução da BFS.\nV. A DLS é sempre completa, mesmo que a solução esteja além do limite d definido.",
    options: ["I, II e IV", "I, III e V", "II, IV e V", "I, II e III", "Todas estão corretas"],
    correct: 0,
    explanation: "I, II e IV estão corretas. A afirmação III está incorreta pois a memória da DLS é O(bd), não exponencial. A V está incorreta pois a DLS falha se a solução estiver em profundidade maior que d."
  },
  {
    id: 136,
    topicoId: 11,
    provaId: 1,
    question: "Verdadeiro ou Falso: O algoritmo IDS é menos eficiente em memória que o BFS.",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "IDS é MAIS eficiente em memória (O(bd)) que o BFS (O(b<sup>s</sup>))."
  },
  {
    id: 137,
    topicoId: 11,
    provaId: 1,
    question: "Qual algoritmo exige que o custo das arestas (ε) seja maior que zero para garantir completude?",
    options: ["BFS", "DFS", "UCS", "DLS", "Minimax"],
    correct: 2,
    explanation: "UCS exige custos positivos (ε > 0) para não travar."
  },
  {
    id: 138,
    topicoId: 11,
    provaId: 1,
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
    id: 139,
    topicoId: 11,
    provaId: 1,
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
    id: 140,
    topicoId: 11,
    provaId: 1,
    question: "Verdadeiro ou Falso: A Busca de Custo Uniforme (UCS) é inspirada na lógica da busca em profundidade, mas com foco em custos.",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "Ela é inspirada na busca em LARGURA (BFS)."
  },

  // ----------------------------------------------------
  // TÓPICO 12: Busca Informada (Adicionais)
  // ----------------------------------------------------
  {
    id: 141,
    topicoId: 12,
    provaId: 1,
    question: "Em relação à Busca Informada, assinale a opção INCORRETA:",
    options: [
      "Usa informações adicionais para guiar o caminho.",
      "Heurísticas ajudam a reduzir o custo computacional.",
      "h(n) estima a distância até o objetivo.",
      "A heurística fornece um planejamento global perfeito desde o início.",
      "Diferentes heurísticas podem ser aplicadas ao mesmo problema."
    ],
    correct: 3,
    explanation: "A heurística fornece orientações apenas para decisões LOCAIS."
  },
  {
    id: 142,
    topicoId: 12,
    provaId: 1,
    question: "Analise as afirmações sobre Busca Heurística e Informada:\nI. A busca cega explora opções em todas as direções por não ter informações de localização do objetivo.\nII. Heurísticas são estratégias que utilizam conhecimento específico do problema para guiar o algoritmo e reduzir o custo computacional.\nIII. O valor da função heurística h(n) será igual a zero se o nó 'n' for o estado objetivo.\nIV. Uma heurística fornece uma visão global e perfeita de todo o caminho do início ao fim do grafo.\nV. O principal objetivo da informação heurística é decidir qual nó da fronteira (fringe) deve ser expandido em seguida.",
    options: ["I, II e IV", "II, III e V", "I, II, III e V", "I, III e IV", "Todas estão corretas"],
    correct: 2,
    explanation: "I, II, III e V estão corretas. A afirmação IV está incorreta pois a orientação de uma heurística serve apenas para decisões locais (escolha do próximo sucessor), sendo uma estimativa e não uma previsão perfeita do caminho completo."
  },
  {
    id: 143,
    topicoId: 12,
    provaId: 1,
    question: "Verdadeiro ou Falso: A orientação de uma heurística é usada exclusivamente para escolher a próxima ação sucessora a partir do estado atual.",
    options: ["Verdadeiro", "Falso"],
    correct: 0,
    explanation: "Correto. Refere-se a decisões locais."
  },
  {
    id: 144,
    topicoId: 12,
    provaId: 1,
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
    id: 145,
    topicoId: 12,
    provaId: 1,
    question: "Sobre a formulação de heurísticas, é correto dizer:",
    options: [
      "Só existe uma heurística correta para cada problema.",
      "Pode-se formular várias heurísticas para um único problema.",
      "Elas são baseadas em busca não informada.",
      "Elas garantem completude em ambientes dinâmicos.",
      "Não utilizam conhecimento específico do domínio."
    ],
    correct: 1,
    explanation: "Pode-se criar várias estimativas (heurísticas) para o mesmo problema."
  },
  {
    id: 146,
    topicoId: 12,
    provaId: 1,
    question: "Verdadeiro ou Falso: Buscas heurísticas são classificadas como um subconjunto das buscas cegas.",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "São categorias opostas (Informada vs Não Informada/Cega)."
  },

  // ----------------------------------------------------
  // TÓPICO 13: Greedy Search (Adicionais)
  // ----------------------------------------------------
  {
    id: 147,
    topicoId: 13,
    provaId: 1,
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
    id: 148,
    topicoId: 13,
    provaId: 1,
    question: "Verdadeiro ou Falso: A Greedy Search assemelha-se estruturalmente à busca em largura (BFS).",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "Ela assemelha-se à busca em PROFUNDIDADE (DFS) por seguir um caminho reto."
  },
  {
    id: 149,
    topicoId: 13,
    provaId: 1,
    question: "No pior cenário (heurística ruim), a complexidade de tempo da Greedy Search é:",
    options: ["O(bd)", "O(bm)", "O(b<sup>m</sup>)", "O(1)", "O(s)"],
    correct: 2,
    explanation: "Pior caso é O(b<sup>m</sup>), similar a uma DFS cega."
  },
  {
    id: 150,
    topicoId: 13,
    provaId: 1,
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
    id: 151,
    topicoId: 13,
    provaId: 1,
    question: "Verdadeiro ou Falso: Greedy Search garante encontrar a solução ótima se o espaço de estados for finito.",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "Ela NÃO é ótima nem completa garantidamente."
  },

  // ----------------------------------------------------
  // TÓPICO 14: A* Search (Adicionais)
  // ----------------------------------------------------
  {
    id: 152,
    topicoId: 14,
    provaId: 1,
    question: "Sobre o algoritmo A*, assinale a opção INCORRETA:",
    options: [
      "Utiliza a fórmula f(n) = g(n) + h(n).",
      "Combina a lógica de UCS e Greedy Search.",
      "Adiciona contornos gradualmente aos nós.",
      "É ótimo se a heurística for admissível e consistente.",
      "Expande o maior número de caminhos para garantir a solução."
    ],
    correct: 4,
    explanation: "A* expande o MENOR número de caminhos comparado a outros algoritmos ótimos."
  },
  {
    id: 153,
    topicoId: 14,
    provaId: 1,
    question: "Verdadeiro ou Falso: No pior caso, a complexidade de tempo do A* é O(b<sup>s</sup>).",
    options: ["Verdadeiro", "Falso"],
    correct: 0,
    explanation: "Correto. Depende da qualidade da heurística, mas o pior caso é exponencial na profundidade da solução."
  },
  {
    id: 154,
    topicoId: 14,
    provaId: 1,
    question: "O que o g(n) garante no algoritmo A*?",
    options: [
      "A completude em ambientes dinâmicos.",
      "Que o custo acumulado não seja ignorado na escolha do caminho.",
      "Que a heurística seja sempre zero.",
      "A eliminação de sensores de atuadores.",
      "A alternância entre MIN e MAX."
    ],
    correct: 1,
    explanation: "g(n) traz a componente de custo real (UCS) para a decisão."
  },
  {
    id: 155,
    topicoId: 14,
    provaId: 1,
    question: "Analise:\nI. A* utiliza o custo acumulado da UCS.\nII. A* utiliza a heurística da Greedy Search.\n\nAssinale a correta:",
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

  // ----------------------------------------------------
  // TÓPICO 15: Admissibilidade (Adicionais)
  // ----------------------------------------------------
  {
    id: 156,
    topicoId: 15,
    provaId: 1,
    question: "Sobre Admissibilidade e Consistência, assinale a opção INCORRETA:",
    options: [
      "Heurísticas admissíveis nunca superestimam o custo real.",
      "Toda heurística admissível é obrigatoriamente consistente.",
      "Uma heurística consistente faz com que o valor f(n) nunca diminua.",
      "A admissibilidade exige que 0 ≤ h(n) ≤ h*(n).",
      "Heurísticas inadmissíveis podem ignorar caminhos ótimos."
    ],
    correct: 1,
    explanation: "Toda heurística consistente é admissível, mas nem toda heurística admissível é consistente."
  },
  {
    id: 157,
    topicoId: 15,
    provaId: 1,
    question: "A consistência (monotonicidade) de uma heurística garante que:",
    options: [
      "O valor f(n) nunca diminui ao longo do caminho.",
      "A solução será encontrada em O(1).",
      "O custo do caminho seja sempre zero.",
      "O ambiente mude de determinístico para estocástico.",
      "A função sucessora seja removida."
    ],
    correct: 0,
    explanation: "Definição de heurística consistente."
  },
  {
    id: 158,
    topicoId: 15,
    provaId: 1,
    question: "Verdadeiro ou Falso: No jogo 8-puzzle, permitir qualquer movimento sem restrições é um exemplo de problema relaxado.",
    options: ["Verdadeiro", "Falso"],
    correct: 0,
    explanation: "Correto. Menos restrições definem o problema relaxado."
  },

  // ----------------------------------------------------
  // TÓPICO 16: Game Theory e Adversarial Search (Adicionais)
  // ----------------------------------------------------
  {
    id: 159,
    topicoId: 16,
    provaId: 1,
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
    id: 160,
    topicoId: 16,
    provaId: 1,
    question: "Verdadeiro ou Falso: Ao utilizar uma função de utilidade em jogos, o agente deixa de focar na minimização de custos e passa a buscar a maximização de sua própria pontuação.",
    options: ["Verdadeiro", "Falso"],
    correct: 0,
    explanation: "Nos jogos, o objetivo do agente é maximizar o valor numérico (utilidade) do estado terminal para garantir a vitória, em vez de apenas reduzir o custo das ações."
  },
  {
    id: 161,
    topicoId: 16,
    provaId: 1,
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
    id: 162,
    topicoId: 16,
    provaId: 1,
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

  // ----------------------------------------------------
  // TÓPICO 17: Algoritmo MINIMAX (Adicionais)
  // ----------------------------------------------------
  {
    id: 163,
    topicoId: 17,
    provaId: 1,
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
    id: 164,
    topicoId: 17,
    provaId: 1,
    question: "Analise as premissas:\nI. No nível MIN, escolhe-se o menor valor entre os filhos.\nII. No nível MAX, escolhe-se o maior valor entre os filhos.\nIII. A raiz da árvore sempre representa o jogador MIN.\n\nEstá(ão) correta(s):",
    options: ["I e II", "II e III", "Apenas I", "Apenas II", "I, II e III"],
    correct: 0,
    explanation: "O primeiro nível (raiz) sempre será MAX."
  },
  {
    id: 165,
    topicoId: 17,
    provaId: 1,
    question: "Verdadeiro ou Falso: Se o oponente humano jogar de forma subótima (cometer erros), o MINIMAX obterá uma utilidade menor que a prevista.",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "Se o oponente erra, o MAX recebe uma 'pontuação' MAIOR."
  },
  {
    id: 166,
    topicoId: 17,
    provaId: 1,
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
    id: 167,
    topicoId: 17,
    provaId: 1,
    question: "O uso de funções heurísticas no MINIMAX ocorre quando:",
    options: [
      "O estado do jogo é terminal.",
      "O jogador MIN decide cooperar.",
      "Um estado não é terminal.",
      "O ambiente é episódico e single-agent.",
      "A árvore de jogo é nula."
    ],
    correct: 2,
    explanation: "Heurísticas substituem valores terminais quando a busca é limitada."
  },
  {
    id: 168,
    topicoId: 17,
    provaId: 1,
    question: "Verdadeiro ou Falso: No algoritmo MINIMAX, as arestas da árvore representam as jogadas possíveis de ambos os jogadores.",
    options: ["Verdadeiro", "Falso"],
    correct: 0,
    explanation: "Correto. Nós são estados, arestas são jogadas."
  },
  {
    id: 169,
    topicoId: 18,
    provaId: 1,
    question: "Sobre os valores de controle da Poda Alfa-Beta, assinale a alternativa correta:",
    options: [
      "O valor Alfa representa o melhor valor encontrado pelo jogador MIN.",
      "O valor Beta é inicializado com -∞ e o Alfa com +∞.",
      "Ambos os valores Alfa e Beta são reiniciados em zero a cada novo nível da árvore.",
      "O valor Alfa (α) nunca diminui e o valor Beta (β) nunca aumenta durante a busca.",
      "O valor Beta representa o maior valor encontrado pelo jogador MAX."
    ],
    correct: 3,
    explanation: "Conforme a definição, Alfa (melhor para MAX) nunca diminui e Beta (melhor para MIN) nunca aumenta."
  },
  {
    id: 170,
    topicoId: 18,
    provaId: 1,
    question: "Analise as condições para a ocorrência das podas:\nI. A Poda Alfa ocorre especificamente em um nó do tipo MIN.\nII. A Poda Beta ocorre em um nó MAX quando α(n) ≥ β(i) para um ancestral i.\nIII. Ocorre Poda Alfa em um nó MIN quando β(n) ≤ α(i) para um ancestral i.\nIV. Ao ocorrer uma poda em um nó MAX, ela é tecnicamente chamada de Poda Alfa.\nV. A poda altera o resultado final que seria obtido pelo Minimax convencional.\nEstá(ão) correta(s):",
    options: ["I, II e III", "II, IV e V", "I, II e IV", "III e V", "Todas estão corretas"],
    correct: 0,
    explanation: "As afirmações I, II e III seguem as definições técnicas. A IV está incorreta (em MAX chama-se Poda Beta) e a V está incorreta (a poda não afeta o resultado final)."
  },
  {
    id: 171,
    topicoId: 18,
    provaId: 1,
    question: "Qual o impacto de uma 'boa ordenação' dos nós na eficiência da Poda Alfa-Beta?",
    options: [
      "Permite que o algoritmo ignore o valor Alfa na raiz.",
      "Pode dobrar a profundidade da pesquisa dentro de um mesmo limite de tempo.",
      "Inviabiliza a utilização de funções heurísticas dinâmicas.",
      "Faz com que a complexidade de tempo suba para O(b^m).",
      "Garante que o jogador MIN sempre vença a partida."
    ],
    correct: 1,
    explanation: "Uma boa ordem de busca permite podar mais ramos precocemente, possibilitando explorar o dobro da profundidade."
  },
  {
    id: 172,
    topicoId: 18,
    provaId: 1,
    question: "Sobre a complexidade de tempo e viabilidade do algoritmo, analise:\nI. Com a poda perfeita, a complexidade cai para O(b<sup>m/2</sup>).\nII. É necessário armazenar a utilidade de todos os estados possíveis em disco.\nIII. A utilidade é normalmente calculada dinamicamente durante a execução.\nIV. A poda Alfa-Beta é uma forma de evitar a expansão de nós irrelevantes.\nV. A quantidade de podas é independente da ordem de visita aos nós.\nEstá(ão) correta(s):",
    options: ["I, II e III", "I, III e IV", "II, IV e V", "Apenas I e IV", "I, II, III, IV e V"],
    correct: 1,
    explanation: "I, III e IV estão corretas. II é falsa (inviável armazenar tudo) e V é falsa (depende da ordem de visita)."
  },
  {
    id: 173,
    topicoId: 18,
    provaId: 1,
    question: "Observe a árvore abaixo e execute o algoritmo Minimax com Poda Alfa-Beta. Ao final da execução, determine quantas podas ocorrerão e classifique cada uma delas como Poda Alfa ou Poda Beta.",
    
    image: PruningQuestion1,
    explanationImage: PruningQuestionrResult ,

    options: [
      "Ocorrerão 2 podas: 1 Poda Alfa e 1 Poda Beta.",
      "Ocorrerão 2 podas: ambas serão Podas Alfa.",
      "Ocorrerá apenas 1 poda, do tipo Poda Beta.",
      "Ocorrerão 4 podas: 2 Podas Beta e 2 Poda Alfa.",
      "Não ocorrerá nenhuma poda."
    ],

    correct: 3,

    explanation: "Durante a execução do algoritmo ocorrem quatro podas. Duas delas acontece em um nó MAX (Poda Beta) e a outra em um nó MIN (Poda Alfa). As demais alternativas apresentam quantidade ou classificação incorreta das podas."
  },
  {
    id: 174,
    topicoId: 18,
    provaId: 1,
    question: "O cálculo dinâmico da utilidade durante a expansão da árvore é preferido porque:",
    options: [
      "A quantidade de combinações de estados cresce rapidamente.",
      "Reduz a complexidade de tempo para O(1).",
      "É impossível calcular utilidade em estados terminais.",
      "A poda Alfa-Beta não funciona com valores pré-calculados.",
      "O jogador MAX exige que os valores sejam recalculados a cada turno."
    ],
    correct: 0,
    explanation: "Não é viável armazenar a utilidade de todos os estados possíveis devido ao crescimento exponencial das combinações."
  },
  {
    id: 175,
    topicoId: 18,
    provaId: 1,
    question: "Analise a lógica de atualização dos valores de controle:\nI. No nível MAX, busca-se atualizar o valor de Alfa.\nII. No nível MIN, busca-se atualizar o valor de Beta.\nIII. Alfa é o melhor valor (maior) encontrado pelo MAX até o momento.\nIV. Beta é o melhor valor (menor) encontrado pelo MIN até o momento.\nV. Ambos os valores iniciam em zero e crescem conforme a profundidade.\nEstá(ão) correta(s):",
    options: ["I, II e III", "II, III e IV", "I, II, III e IV", "III e V", "Todas estão corretas"],
    correct: 2,
    explanation: "I, II, III e IV descrevem corretamente o funcionamento. V está incorreta pois iniciam em -∞ e +∞."
  },
  {
    id: 176,
    topicoId: 18,
    provaId: 1,
    question: "Ao executar o algoritmo MINIMAXA com poda Alfa-Beta na árvore abaixo, qual dessas alternativas está correta: \nPara facilitar o entedimento os nós folhas são: 8,3,6,9,4,7,5,2,14,11,1,0,13,10,2,4,9,12,7,5, respectivamente.",
    image: PruningQuestion2,
    explanationImage: PruningQuestionrResult2,
    options: [
        "A poda ocorrerá no nó 14 e será uma Poda Beta.",
        "A poda ocorrerá no nó 1 e será uma Poda Alfa.",
        "A poda ocorrerá no nó 12 e será uma Poda Beta.",
        "A poda ocorrerá no nó 5 e será uma Poda Alfa.",
        "Não ocorrerá nenhuma poda."
    ],
    correct: 2,
    explanation: "Durante a execução do algoritmo, a poda ocorre no nó 1, que pertence a um nível MIN. Como a condição de poda é satisfeita nesse nível, ela é caracterizada como uma Poda Alfa. Dessa forma, os próximos ramos desse nó não precisam ser expandidos."
  },

  {
    id: 177,
    topicoId: 20,
    provaId: 1,
    question: "Qual é a principal motivação para a utilização de 'Decisões Imperfeitas' em jogos reais?",
    options: [
      "Aumentar a garantia de jogo ótimo em 100% das partidas.",
      "A impossibilidade do MINIMAX de lidar com adversários humanos.",
      "A limitação de tempo para tomar decisões em interações de tempo real.",
      "A necessidade de expandir a árvore sempre até os nós terminais.",
      "Reduzir a complexidade de espaço de O(b) para O(1)."
    ],
    correct: 2,
    explanation: "Jogos reais exigem respostas rápidas, tornando impraticável esperar que o MINIMAX explore até o estado terminal."
  },
  {
    id: 178,
    topicoId: 20,
    provaId: 1,
    question: "Analise as premissas sobre a implementação de Decisões Imperfeitas:\nI. A função de utilidade é substituída por uma função de avaliação (heurística).\nII. A pesquisa é realizada apenas até uma profundidade limitada 'd'.\nIII. A garantia de jogo ótimo é mantida mesmo com a profundidade limitada.\nIV. O mecanismo de parada pode ser baseado no tempo disponível (IDS limitada).\nEstá(ão) correta(s):",
    options: ["I, II e IV", "I, III e IV", "II e III", "Apenas I e II", "Todas estão corretas"],
    correct: 0,
    explanation: "A premissa III está incorreta: ao limitar a busca e usar heurísticas, a garantia de jogo ótimo desaparece."
  },
  {
    id: 179,
    topicoId: 20,
    provaId: 1,
    question: "Verdadeiro ou Falso: Ao utilizar decisões imperfeitas, o algoritmo 'olha para frente' apenas um número fixo de movimentos em vez de buscar o fim do jogo.",
    options: ["Verdadeiro", "Falso"],
    correct: 0,
    explanation: "Correto. Essa profundidade limitada permite tomar decisões dentro do limite de tempo disponível."
  },
  {
    id: 180,
    topicoId: 20,
    provaId: 1,
    question: "Sobre o mecanismo de parada em buscas limitadas, é correto afirmar que:",
    options: [
      "Pode-se usar uma Iterative Deepening Search interrompida pelo tempo.",
      "Deve-se sempre esperar o estado terminal para encerrar a busca.",
      "A profundidade máxima é o único critério aceito pela literatura.",
      "O teste de objetivo deve ser substituído pela função de avaliação.",
      "A poda alfa-beta torna-se inútil em buscas de profundidade limitada."
    ],
    correct: 0,
    explanation: "O uso de IDS limitada pelo tempo permite que o algoritmo use o máximo de profundidade possível no tempo que lhe foi dado."
  },
  {
    id: 181,
    topicoId: 20,
    provaId: 1,
    question: "Uma consequência direta de não pesquisar até os nós terminais é:",
    options: [
      "A árvore de busca torna-se infinita.",
      "O desaparecimento da garantia de jogo ótimo.",
      "A obrigatoriedade de usar a poda alfa-beta para funcionar.",
      "O aumento do tempo de processamento por jogada.",
      "A vitória garantida do jogador MAX."
    ],
    correct: 1,
    explanation: "Como a função de avaliação é apenas uma estimativa, o algoritmo pode tomar decisões subótimas."
  },

  {
    id: 182,
    topicoId: 20,
    provaId: 1,
    question: "Sobre o Trade-off (equilíbrio) na escolha de uma função de avaliação, analise:\nI. Funções precisas são computacionalmente baratas.\nII. Funções imprecisas permitem uma busca mais profunda no mesmo tempo.\nIII. Funções complexas deixam menos tempo para realizar a busca na árvore.\nIV. Funções rápidas/imprecisas sempre garantem resultados melhores que funções lentas/precisas.\nEstá(ão) correta(s):",
    options: ["I e II", "II e III", "III e IV", "Apenas II", "I, II e III"],
    correct: 1,
    explanation: "Funções precisas costumam ser caras (lentas). O equilíbrio é entre precisão da heurística vs. profundidade da árvore."
  },
  {
    id: 183,
    topicoId: 20,
    provaId: 1,
    question: "Verdadeiro ou Falso: O teste de objetivo (verificar se o jogo acabou) deve ser baseado exclusivamente nos valores retornados pela função de avaliação.",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "Falso. O teste de objetivo deve ser baseado nas regras do jogo (ex: 3 em linha), não na heurística."
  },
  {
    id: 184,
    topicoId: 20,
    provaId: 1,
    question: "Qual característica define um Estado Intermediário em uma busca limitada?",
    options: [
      "Possui apenas os valores fixos de 1, 0 ou -1.",
      "Não pode ser avaliado por funções heurísticas.",
      "Pode assumir qualquer valor de pontuação que preserve a lógica de vantagem.",
      "Sempre encerra a execução do algoritmo imediatamente.",
      "Representa obrigatoriamente uma situação de empate."
    ],
    correct: 2,
    explanation: "Estados intermediários usam a função de avaliação para estimar vantagem através de pontuações variadas (ex: 5, 10, 100)."
  },
  {
    id: 185,
    topicoId: 20,
    provaId: 1,
    question: "Analise as afirmações sobre a Função de Avaliação:\nI. Elas estimam a pontuação para nós não terminais.\nII. São sempre imperfeitas.\nIII. Designar boas funções é a chave para o sucesso do algoritmo.\nIV. Devem obrigatoriamente expandir a árvore até o final para calcular a utilidade.\nV. Devem atribuir valores maiores para estados que favorecem o jogador MIN.\n\nEstá(ão) correta(s):",
    options: ["I, II e III", "II, III e IV", "I e III", "III, IV e V", "Todas estão corretas"],
    correct: 0,
    explanation: "IV é falsa (heurísticas evitam ir até o fim) e V é falsa (valores maiores favorecem o MAX)."
  },

  // ----------------------------------------------------
  // TÓPICO 21: Busca Local
  // ----------------------------------------------------
  {
    id: 186,
    topicoId: 21,
    provaId: 2,
    question: "Qual é a principal vantagem da busca local em relação ao consumo de recursos computacionais?",
    options: [
      "Ela armazena toda a árvore de busca em disco para consultas rápidas.",
      "Ela consome pouca memória por não utilizar uma árvore de busca e trabalhar apenas com o estado atual.",
      "Ela calcula a utilidade de todos os estados terminais antes de iniciar.",
      "Ela transforma espaços de busca contínuos em árvores discretas finitas.",
      "Ela garante a descoberta da solução ótima em qualquer topologia."
    ],
    correct: 1,
    explanation: "A busca local trabalha apenas com o estado atual e busca melhorá-lo de forma iterativa, dispensando o armazenamento de uma árvore completa de estados."
  },
  {
    id: 187,
    topicoId: 21,
    provaId: 2,
    question: "O que representam as 'configurações' no contexto do espaço de estados de uma busca local?",
    options: [
      "O conjunto de comandos físicos que os atuadores executam.",
      "O conjunto completo de todas as soluções possíveis para o problema.",
      "Os caminhos históricos já visitados e salvos na memória RAM.",
      "As variáveis ambientais estocásticas fora do controle do agente.",
      "As funções heurísticas utilizadas para avaliar a descida do gradiente."
    ],
    correct: 1,
    explanation: "No modelo de busca local, o espaço de estados corresponde ao conjunto completo das soluções possíveis, que são chamadas de configurações."
  },
  {
    id: 188,
    topicoId: 21,
    provaId: 2,
    question: "O que caracteriza o fenômeno do 'Máximo Local' na topologia de um espaço de busca?",
    options: [
      "O pico absoluto e ideal de toda a paisagem de busca.",
      "Um estado com valor menor que seus vizinhos, mas aceitável para o MIN.",
      "Um estado que possui valor maior que seus vizinhos.",
      "Uma sequência de estados idênticos que formam um ombro (shoulder).",
      "O ponto zero inicial configurado de forma aleatória pelo sistema."
    ],
    correct: 2,
    explanation: "O máximo local possui valor maior que os estados vizinhos, induzindo o algoritmo a considerar que achou uma solução adequada mesmo sem atingir o pico global."
  },
  {
    id: 189,
    topicoId: 21,
    provaId: 2,
    question: "No problema das 8 rainhas resolvido por busca local, como é definida uma configuração?",
    options: [
      "O posicionamento de uma rainha por vez até atingir a oitava linha.",
      "O mapeamento das jogadas do adversário em um cenário de soma-zero.",
      "A representação de todas as 8 rainhas em posições do tabuleiro.",
      "Apenas o estado final perfeito onde nenhuma rainha ataca outra.",
      "A remoção de restrições de movimento do tabuleiro relaxado."
    ],
    correct: 2,
    explanation: "Na busca local, cada configuração representa todas as rainhas posicionadas no tabuleiro simultaneamente, mesmo que existam conflitos entre elas."
  },
  {
    id: 190,
    topicoId: 21,
    provaId: 2,
    question: "Qual das seguintes desvantagens é explicitamente associada à busca local?",
    options: [
      "A complexidade de espaço exponencial de memória O(b^m).",
      "A necessidade de calibrar múltiplos agentes competidores em tempo real.",
      "A incapacidade total de resolver problemas do tipo convexos.",
      "A dependência obrigatória de sensores de alta precisão ambiental.",
      "O risco de nunca explorar o estado em que a solução correta realmente se encontra.",
    ],
    correct: 4,
    explanation: "A busca local possui a desvantagem de poder nunca explorar o estado em que a solução correta se encontra e, normalmente, não armazena os estados já visitados."
  },
  {
    id: 191,
    topicoId: 21,
    provaId: 2,
    question: "O que define conceitualmente o 'Máximo Global' na paisagem topológica de um problema?",
    options: [
      "Qualquer estado que supere a primeira heurística calculada.",
      "O menor valor encontrado para a função objetivo na paisagem.",
      "O maior valor encontrado para a função objetivo, representando o pico mais alto.",
      "Uma área plana e extensa onde os vizinhos têm valores equivalentes.",
      "O estado intermediário que ativa a poda do tipo alfa."
    ],
    correct: 2,
    explanation: "O máximo global representa o pico mais alto absoluto da paisagem, ou seja, o maior valor possível para a função objetivo."
  },
  {
    id: 192,
    topicoId: 21,
    provaId: 2,
    question: "A técnica de 'Descida de Gradiente' (Gradient Descent) é corretamente definida como:",
    options: [
      "Um método para saltar aleatoriamente entre cordilheiras de máximos.",
      "Um algoritmo que segue na direção de maior diminuição da função objetivo buscando o mínimo global.",
      "Uma abordagem exclusiva de crossover para algoritmos genéticos binários.",
      "A expansão circular de nós com base no custo acumulado g(n).",
      "Um critério de parada usado quando a diversidade populacional cai a zero."
    ],
    correct: 1,
    explanation: "A descida de gradiente caminha na direção de maior decréscimo da função objetivo para achar o mínimo global, podendo ficar presa em mínimos locais."
  },
  {
    id: 193,
    topicoId: 21,
    provaId: 2,
    question: "Analise as premissas sobre a Busca Local:\nI. Não armazena todos os estados nem utiliza uma árvore de busca.\nII. É altamente recomendada para problemas onde é obrigatório garantir a solução ótima.\nIII. A função objetivo mede a qualidade de uma possível solução na paisagem.\n\nEstá(ão) correta(s):",
    options: ["I e II", "II e III", "I e III", "Apenas I", "I, II e III"],
    correct: 2,
    explanation: "As premissas I e III estão corretas. A II é falsa porque a busca local NÃO é recomendada quando se faz estritamente necessária a garantia da solução ótima."
  },

  // ----------------------------------------------------
  // TÓPICO 22: Hill Climbing
  // ----------------------------------------------------
  {
    id: 194,
    topicoId: 22,
    provaId: 2,
    question: "Como o algoritmo Hill Climbing determina o momento de encerrar a sua execução?",
    options: [
      "Quando atinge um limite fixo de 100 iterações laterais.",
      "No momento em que nenhum vizinho apresenta um valor superior ao do estado atual.",
      "Quando o valor da função objetivo zera.",
      "Ao cruzar dois cromossomos com fitness score idênticos.",
      "Assim que localiza uma região de ombro (shoulder)."
    ],
    correct: 1,
    explanation: "O Hill Climbing analisa os vizinhos e escolhe o mais alto. O processo cessa imediatamente quando nenhum vizinho possui valor superior ao estado atual."
  },
  {
    id: 195,
    topicoId: 22,
    provaId: 2,
    question: "Por que o Hill Climbing também é denominado como uma 'busca local gulosa'?",
    options: [
      "Porque tenta expandir todas as ramificações paralelas ao mesmo tempo.",
      "Porque exige o armazenamento completo das utilidades em tabelas hash.",
      "Porque consome recursos de memória RAM de forma exponencial.",
      "Porque considera apenas a melhor escolha imediata, sem analisar caminhos futuros.",
      "Porque inverte o sinal da função objetivo dinamicamente."
    ],
    correct: 3,
    explanation: "Ele ganha esse rótulo por focar estritamente na melhoria imediata ao seu redor (vizinhos diretos), ignorando o impacto dessa escolha a longo prazo."
  },
  {
    id: 196,
    topicoId: 22,
    provaId: 2,
    question: "O que são 'Cordilheiras' no espaço de busca do Hill Climbing e qual o seu impacto?",
    options: [
      "Áreas planas que fazem o algoritmo entrar em loops infinitos de custo zero.",
      "Pontos de mínimo global localizados em problemas estritamente convexos.",
      "Pontos de partida aleatórios que reiniciam o feixe estocástico.",
      "Extensas sequências de máximos locais que podem fazer o algoritmo parar precocemente.",
      "Mutações genéticas que alteram o vetor binário da solução."
    ],
    correct: 3,
    explanation: "Cordilheiras são sequências de máximos locais que enganam o algoritmo, fazendo-o parar antes de alcançar o verdadeiro máximo global."
  },
  {
    id: 197,
    topicoId: 22,
    provaId: 2,
    question: "Analise a diferença entre as estruturas de anomalias conhecidas como Platôs e Shoulders:\nI. Platôs são regiões em que os estados vizinhos possuem o mesmo valor da função objetivo.\nII. Shoulders são semelhantes aos platôs, porém possuem uma saída para estados melhores.\nIII. O Hill Climbing possui facilidade natural para encontrar a direção correta em Shoulders.\n\nEstá(ão) correta(s):",
    options: ["I e II", "II e III", "I e III", "Apenas I", "I, II e III"],
    correct: 0,
    explanation: "As premissas I e II definem corretamente as estruturas. A III está incorreta porque o algoritmo tem dificuldade em achar a direção correta nos shoulders."
  },
  {
    id: 198,
    topicoId: 22,
    provaId: 2,
    question: "A respeito das propriedades de Completeza e Otimalidade do Hill Climbing tradicional, é correto afirmar:",
    options: [
      "Ele é completo e ótimo em qualquer tipo de espaço de estados.",
      "Ele é ótimo apenas se for associado a uma seleção por roleta sem reposição.",
      "Não é completo nem ótimo, mas garante otimalidade em problemas convexos.",
      "Ele é completo, mas falha em encontrar soluções ótimas devido a mutações.",
      "Ele consome complexidade O(b^m/2) no espaço de estados."
    ],
    correct: 2,
    explanation: "O Hill Climbing não é completo nem ótimo (pode travar em picos locais e platôs), mas em problemas convexos (um só pico, sem máximos locais) ele acha a solução ótima."
  },
  {
    id: 199,
    topicoId: 22,
    provaId: 2,
    question: "Como opera a variante denominada 'Random-Restart Hill Climbing'?",
    options: [
      "Executa o algoritmo modificando a temperatura de resfriamento da encosta.",
      "Gera k vizinhos idênticos e aplica cruzamento uniforme em um ponto de corte.",
      "Inicia no máximo global e desce iterativamente até os platôs.",
      "Armazena todos os estados visitados para impedir que o sistema repita nós.",
      "Executa o algoritmo múltiplas vezes a partir de estados iniciais aleatórios.",
    ],
    correct: 4,
    explanation: "Essa estratégia roda o Hill Climbing várias vezes mudando o ponto de partida aleatoriamente, escolhendo a melhor solução salva ao final."
  },
  {
    id: 200,
    topicoId: 22,
    provaId: 2,
    question: "Apesar de robusto, de qual estrutura espacial o algoritmo 'Random-Restart Hill Climbing' ainda possui dificuldades para progredir?",
    options: [
      "Máximos locais.",
      "Regiões de platô.",
      "Regiões de ombro (shoulders).",
      "Espaços convexos puros.",
      "Problemas invertidos de minimização."
    ],
    correct: 1,
    explanation: "O Random-Restart consegue escapar de picos locais e shoulders reiniciando em outras áreas, mas em regiões extensas de platô ele ainda exibe pouco ou nenhum progresso."
  },
  {
    id: 201,
    topicoId: 22,
    provaId: 2,
    question: "Verdadeiro ou Falso: No Hill Climbing, os máximos e mínimos locais são anomalias que devem ser sempre descartadas, nunca servindo como soluções aceitáveis.",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "Falso. O material destaca que, dependendo do problema estrutural abordado, esses máximos e mínimos locais podem sim ser considerados soluções aceitáveis."
  },

  // ----------------------------------------------------
  // TÓPICO 23: Simulated Annealing (Têmpera Simulada)
  // ----------------------------------------------------
  {
    id: 202,
    topicoId: 23,
    provaId: 2,
    question: "O algoritmo Simulated Annealing opera combinando a lógica da subida de encosta com qual mecanismo?",
    options: [
      "Um processo estatístico baseado em filtros de Pearson.",
      "Um mecanismo de busca em feixe paralelo com k fixo.",
      "Um processo aleatório controlado de aceitação.",
      "A eliminação reversa de atributos menos relevantes (backward).",
      "Uma técnica embedded ligada a árvores de decisão."
    ],
    correct: 2,
    explanation: "Ele une a subida de encosta a um processo probabilístico/aleatório governado por uma variável térmica."
  },
  {
    id: 203,
    topicoId: 23,
    provaId: 2,
    question: "No Simulated Annealing, qual a finalidade da variável conhecida como 'temperatura'?",
    options: [
      "Medir o tempo de CPU restante para desligar o feixe local.",
      "Mensurar a probabilidade de o algoritmo aceitar um estado pior que o atual.",
      "Contar quantas gerações de indivíduos já foram processadas.",
      "Determinar o ponto de corte binário (one-point) na população.",
      "Indicar a taxa de mutação exata aplicada aos cromossomos."
    ],
    correct: 1,
    explanation: "A temperatura baliza a chance de aceitar intencionalmente movimentos piores ('ruins') para chacoalhar o sistema e tirá-lo de máximos locais."
  },
  {
    id: 204,
    topicoId: 23,
    provaId: 2,
    question: "Como o algoritmo se comporta dinamicamente quando a temperatura encontra-se ALTA?",
    options: [
      "Mais movimentos ruins são permitidos, aumentando a flexibilidade de escolha.",
      "Nenhum movimento ruim é permitido, travando o sistema por elitismo.",
      "Menos movimentos ruins são tolerados, focando apenas no gradiente direto.",
      "A função objetivo é zerada e a busca é finalizada.",
      "O feixe de estados reduz o fator k para a unidade."
    ],
    correct: 0,
    explanation: "Temperatura alta garante flexibilidade, permitindo a livre aceitação de piores estados para mapear novas regiões da topologia."
  },
  {
    id: 205,
    topicoId: 23,
    provaId: 2,
    question: "O que ocorre com a flexibilidade de escolha do Simulated Annealing à medida que a temperatura diminui (resfria)?",
    options: [
      "Aumenta exponencialmente, aceitando mais erros.",
      "Permanece estática, ignorando o decréscimo da variável.",
      "O algoritmo passa a usar cruzamento uniforme (uniform crossover).",
      "Menos movimentos ruins são permitidos, reduzindo a flexibilidade.",
      "Força a substituição imediata da seleção com reposição."
    ],
    correct: 3,
    explanation: "Com a temperatura baixa, o rigor aumenta: menos movimentos piores são aceitos, restringindo o algoritmo a movimentos de melhoria estrita."
  },
  {
    id: 206,
    topicoId: 23,
    provaId: 2,
    question: "Como problemas cuja meta primária seja a minimização global são tratados no Simulated Annealing?",
    options: [
      "Eles são inviáveis de resolver por esta técnica.",
      "Eles exigem a ativação automática de algoritmos de formiga em GPS.",
      "Eles podem ser resolvidos simplesmente invertendo o sinal da função objetivo.",
      "Eles demandam a codificação obrigatória em matrizes decimais contínuas.",
      "Eles exigem que a temperatura inicie em valores negativos."
    ],
    correct: 2,
    explanation: "Embora focado em maximização, o algoritmo resolve minimizações bastando inverter o sinal matemático da função objetivo."
  },
  {
    id: 207,
    topicoId: 23,
    provaId: 2,
    question: "Sob qual condição estritamente teórica o Simulated Annealing pode ser considerado um algoritmo Ótimo?",
    options: [
      "Quando a taxa de mutação atinge o patamar de 100%.",
      "Se a temperatura diminuir de forma extremamente lenta e houver tempo ilimitado.",
      "Se o fator k de estados aleatórios for igual ao número de genes.",
      "Quando o teste de objetivo baseia-se em seleção por roleta com reposição.",
      "Se operar apenas sobre métodos de wrapper como Forward Selection."
    ],
    correct: 1,
    explanation: "Teoricamente, se o resfriamento for infinitamente lento e o tempo infinito, o algoritmo garante convergência para o ótimo global."
  },
  {
    id: 208,
    topicoId: 23,
    provaId: 2,
    question: "Por que, na prática do desenvolvimento, o Simulated Annealing costuma ser classificado como NÃO ótimo?",
    options: [
      "Porque alcançar o ótimo exigiria um custo computacional e tempo de execução excessivamente grandes.",
      "Porque ele deforma a topologia da paisagem durante a execução.",
      "Porque ele é incapaz de operar com funções objetivo baseadas em fitness.",
      "Porque ele gera loops infinitos em problemas puramente convexos.",
      "Porque aceita apenas genes codificados em formato decimal."
    ],
    correct: 0,
    explanation: "Na prática, a lentidão extrema exigida para cravar o ótimo demandaria tempo e processamento proibitivos, tornando-o heuristicamente não ótimo."
  },
  {
    id: 209,
    topicoId: 23,
    provaId: 2,
    question: "Analise a completeza do Simulated Annealing na prática:",
    options: [
      "Ele é completo porque sempre acha a saída no primeiro resfriamento.",
      "Não é completo, pois pode demorar muito ou parar a execução antes de achar a solução.",
      "Ele é completo apenas se a função objetivo for calculada por métodos de filtro.",
      "Não é completo porque depende de rastros de feromônios estáveis.",
      "Ele torna-se completo ao remover o parâmetro de volatilidade térmica."
    ],
    correct: 1,
    explanation: "O algoritmo não é completo na prática devido ao risco de estourar limites temporais ou encerrar antes de localizar uma resposta."
  },

  // ----------------------------------------------------
  // TÓPICO 24: Local Beam Search (Busca em feixe local)
  // ----------------------------------------------------
  {
    id: 210,
    topicoId: 24,
    provaId: 2,
    question: "Qual é a principal diferença estrutural de memória do Local Beam Search em relação ao Hill Climbing?",
    options: [
      "Ele necessita salvar todo o histórico de nós expandidos em pilhas LIFO.",
      "Em vez de armazenar apenas o estado atual, mantém simultaneamente um conjunto de k estados.",
      "Ele opera sem usar nenhuma função objetivo ou teste de objetivo.",
      "Ele descarta os vizinhos mais promissores a cada nova iteração técnica.",
      "Ele é o único que exige codificação baseada em cromossomos binários."
    ],
    correct: 1,
    explanation: "O feixe local gerencia paralelamente um conjunto composto por k estados, expandindo o horizonte de busca em relação às técnicas de estado único."
  },
  {
    id: 211,
    topicoId: 24,
    provaId: 2,
    question: "Se configurarmos um algoritmo de Local Beam Search com k = 9, como o processo será iniciado?",
    options: [
      "Com 1 estado inicial que gerará exatamente 4 mutações contínuas.",
      "Com a execução de 9 pontos de corte em um One-point crossover.",
      "Com a geração de exatamente 9 estados iniciais totalmente aleatórios.",
      "Com o treinamento de 9 modelos estatísticos pelo método Wrapper.",
      "Avaliando 4 atributos independentes via correlação de Pearson."
    ],
    correct: 2,
    explanation: "O valor de k dita o tamanho do feixe; se k = 4, o algoritmo dá a largada instanciando 4 estados aleatórios."
  },
  {
    id: 212,
    topicoId: 24,
    provaId: 2,
    question: "Como funciona o fluxo de seleção de novos estados a cada iteração do Local Beam Search?",
    options: [
      "Ele seleciona aleatoriamente qualquer vizinho que apresente valor negativo.",
      "Ele mantém apenas os pais originais, descartando os sucessores gerados.",
      "Ele aplica mutações de 5% sobre os estados que falharam no teste de objetivo.",
      "Ele gera todos os vizinhos dos k estados e seleciona os k melhores vizinhos absolutos.",
      "Ele remove o melhor estado para forçar a diversificação regional."
    ],
    correct: 3,
    explanation: "A mecânica do feixe gera a vizinhança completa de todos os k estados atuais reunidos e filtra os k melhores globais para a próxima rodada."
  },
  {
    id: 213,
    topicoId: 24,
    provaId: 2,
    question: "Sob qual condição o algoritmo Local Beam Search encerra a sua rotina de execução?",
    options: [
      "No momento em que encontra o estado objetivo entre os estados gerados.",
      "Quando a taxa de feromônio de um caminho evapora totalmente.",
      "Quando a temperatura da busca atinge o valor de zero absoluto.",
      "Quando o método de Forward Selection adiciona o último atributo.",
      "Ao identificar que a roleta realizou uma seleção com reposição."
    ],
    correct: 0,
    explanation: "O algoritmo encerra as atividades de forma bem-sucedida assim que o estado meta (objetivo) aparece no conjunto de vizinhos gerados."
  },
  {
    id: 214,
    topicoId: 24,
    provaId: 2,
    question: "A respeito das propriedades de Completeza e Otimalidade do Local Beam Search, assinale a alternativa correta:",
    options: [
      "Ele é ótimo e completo porque varre o espaço de estados em largura FIFO.",
      "Ele garante otimalidade apenas se os cromossomos forem decimais contínuos.",
      "É completo, mas falha em ser ótimo por depender de métodos de filtro de atributos.",
      "Sua complexidade cai de O(b^m) para O(1) devido ao paralelismo.",
      "Não é ótimo nem completo, pois pode convergir para máximos locais e eliminar caminhos importantes.",
    ],
    correct: 4,
    explanation: "Ele carece de otimalidade e completeza porque restringir-se a k estados pode fazê-lo descartar rotas vitais e convergir o feixe a picos locais."
  },
  {
    id: 215,
    topicoId: 24,
    provaId: 2,
    question: "Qual é a falha crônica de diversidade associada à versão tradicional do Local Beam Search?",
    options: [
      "Os estados mudam de valor de forma estocástica e desordenada.",
      "Os k estados podem acabar concentrados em uma pequena região do espaço.",
      "O algoritmo exige o cálculo de matrizes de correlação caras.",
      "Os critérios de parada dependem de sucessivas populações mutantes.",
      "Ele consome muita memória ao criar árvores infinitas."
    ],
    correct: 1,
    explanation: "O defeito do feixe puro é a perda de diversidade (focalização excessiva): os k estados tendem a se aglomerar rapidamente em um mesmo setor da paisagem."
  },
  {
    id: 216,
    topicoId: 24,
    provaId: 2,
    question: "Na Busca em Feixe Local Estocástica, qual a vantagem de permitir a escolha de estados menos promissores?",
    options: [
      "Reduzir o custo computacional da função objetivo para zero.",
      "Garantir completeza estrita em ambientes de teste não-observáveis.",
      "Forçar o cruzamento uniforme de cromossomos binários parecidos.",
      "Aumentar a diversidade da busca e reduzir as chances de ficar preso em uma única região.",
      "Permitir o mapeamento de sistemas baseados em GPS automotivo."
    ],
    correct: 3,
    explanation: "Dar chance a nós menos promissores evita que o feixe paralize aglutinado em uma só depressão ou pico local da topologia."
  },

  // ----------------------------------------------------
  // TÓPICO 25 e 26: Algoritmos Genéticos e Representação
  // ----------------------------------------------------
  {
    id: 217,
    topicoId: 25,
    provaId: 2,
    question: "Em qual pilar da biologia evolucionária os Algoritmos Genéticos são fundamentados?",
    options: [
      "No processo de seleção natural e mecanismos de evolução biológica.",
      "Na evaporação e rastro químico de colônias de formigas.",
      "No comportamento de refriamento estruturado de metais.",
      "Na filtragem estatística independente de atributos de dados.",
      "No comportamento determinístico de redes neurais profundas."
    ],
    correct: 0,
    explanation: "Os AGs simulam o processo de seleção natural, onde indivíduos mais aptos transmitem características adiante, evoluindo a população."
  },
  {
    id: 218,
    topicoId: 25,
    provaId: 2,
    question: "O que é uma 'Geração' dentro do ciclo de execução de um Algoritmo Genético?",
    options: [
      "O vetor de tamanho finito composto por genes binários.",
      "A probabilidade exata de ocorrer uma alteração aleatória em um gene.",
      "O critério de parada que encerra o processamento por estouro de tempo.",
      "O conjunto de indivíduos existente em um determinado momento.",
      "A fatia da roleta ocupada pela melhor solução disponível."
    ],
    correct: 3,
    explanation: "Uma geração é o conjunto de soluções (população de cromossomos) ativa em uma determinada iteração do algoritmo."
  },
  {
    id: 219,
    topicoId: 26,
    provaId: 2,
    question: "Na representação estrutural de um AG, qual o nome dado a cada componente individual de um cromossomo?",
    options: [
      "Fitness Score.",
      "Platô.",
      "Gene.",
      "Feixe.",
      "Feromônio."
    ],
    correct: 2,
    explanation: "Um cromossomo é um vetor composto por posições finitas chamadas genes, onde cada gene codifica uma característica da solução."
  },
  {
    id: 220,
    topicoId: 26,
    provaId: 2,
    question: "Por que a representação binária (0 e 1) é a mais adotada para modelar cromossomos?",
    options: [
      "Porque garante que a complexidade espacial caia para O(1).",
      "Porque elimina a necessidade de calcular a função de fitness.",
      "Porque simula fielmente o rastro de feromônios em sistemas de GPS.",
      "Porque impede a convergência prematura para máximos locais.",
      "Porque é simples de implementar e facilita operadores como crossover e mutação.",
    ],
    correct: 4,
    explanation: "Os bits 0 e 1 facilitam os cortes e inversões lógicas dos operadores de Crossover e Mutação, além de mapearem com simplicidade a presença/ausência de traços."
  },
  {
    id: 221,
    topicoId: 26,
    provaId: 2,
    question: "Como opera o método de seleção por aptidão denominado 'Roulette Wheel Selection'?",
    options: [
      "Seleciona indivíduos com base na ordem inversa de sua entrada no sistema.",
      "A probabilidade de um indivíduo ser escolhido é proporcional ao seu fitness.",
      "Sorteia genes decimais contínuos usando uma distribuição de Pearson.",
      "Divide a população em k feixes paralelos de forma determinística.",
      "Escolhe apenas os indivíduos que sofreram mutações na geração atual."
    ],
    correct: 1,
    explanation: "Na roleta, os cromossomos mais aptos (maior fitness) ganham áreas proporcionalmente maiores, elevando suas chances matemáticas de sorteio."
  },
  {
    id: 222,
    topicoId: 26,
    provaId: 2,
    question: "Qual problema de diversidade pode ocorrer na roleta se for permitida a seleção com reposição simples?",
    options: [
      "O algoritmo deixa de calcular o fitness dos descendentes.",
      "Os critérios de parada baseados em tempo de execução são desativados.",
      "Os genes são forçados a migrar de formato binário para decimal.",
      "Um mesmo cromossomo pode reproduzir consigo mesmo, gerando clones e reduzindo a diversidade.",
      "Ocorre a perda imediata do melhor indivíduo por falta de elitismo."
    ],
    correct: 3,
    explanation: "Se houver reposição pura, um indivíduo altamente apto pode ser sorteado como pai e mãe ao mesmo tempo, cruzando consigo mesmo e gerando clones que arruinam a diversidade genética."
  },
  {
    id: 223,
    topicoId: 26,
    provaId: 2,
    question: "O operador genético 'One-point crossover' atua realizando qual procedimento?",
    options: [
      "Inverte o valor lógico de um único gene sorteado com probabilidade de 5%.",
      "Sorteia individualmente cada gene do filho entre o pai e a mãe.",
      "Utiliza um único ponto de corte no cromossomo e troca as partes finais dos pais.",
      "Transfere o melhor indivíduo intacto diretamente para a próxima geração.",
      "Calcula a média aritmética dos valores decimais contínuos dos pais."
    ],
    correct: 2,
    explanation: "O cruzamento de um ponto escolhe um índice de corte; a partir desse ponto, as caudas dos cromossomos dos pais são intercambiadas para gerar os filhos."
  },
  {
    id: 224,
    topicoId: 26,
    provaId: 2,
    question: "Qual o papel desempenhado pela 'Mutação' e como sua frequência é estabelecida?",
    options: [
      "Introduzir alterações aleatórias nos genes e sua frequência é definida pela taxa de mutação.",
      "Combinar dados de dois pais; sua frequência é linear.",
      "Preservar os melhores indivíduos intactos; sua frequência depende do tempo de CPU.",
      "Selecionar características proporcionais ao fitness; sua frequência usa métodos Wrapper.",
      "Substituir genes binários por decimais; sua frequência é fixa em 50%."
    ],
    correct: 0,
    explanation: "A mutação insere pequenas alterações aleatórias nos genes de acordo com a probabilidade ditada pela 'taxa de mutação', essencial para injetar novidade genética e escapar de picos locais."
  },
  // ----------------------------------------------------
  // TÓPICO 27: Aplicações do Algoritmo Genético
  // ----------------------------------------------------
  {
    id: 225,
    topicoId: 27,
    provaId: 2,
    question: "Como os Algoritmos Genéticos são aplicados na área de Processamento de Imagens?",
    options: [
      "Eles realizam a compressão física de hardware das câmeras digitais.",
      "Eles invertem o sinal dos pixels para transformar imagens estáticas em contínuas.",
      "Eles auxiliam em tarefas como segmentação de imagens, ajudando a identificar e separar regiões importantes.",
      "Eles removem completamente a necessidade de usar filtros ou pooling.",
      "Eles armazenam o histórico de todas as imagens visitadas em uma pilha LIFO."
    ],
    correct: 2,
    explanation: "No processamento de imagens, os AGs são excelentes para problemas de otimização combinatória, atuando fortemente na segmentação e separação de regiões de interesse."
  },
  {
    id: 226,
    topicoId: 27,
    provaId: 2,
    question: "Qual é a contribuição prática dos Algoritmos Genéticos na Ciência Médica citada no texto?",
    options: [
      "Substituir o uso de exames de raio-X por simulações estocásticas.",
      "Ajustar a dosagem de medicamentos por meio de forward selection.",
      "Criar prontuários médicos baseados em algoritmos de formiga.",
      "Mapear a temperatura de resfriamento de tecidos celulares humanos.",
      "Auxiliar na determinação da estrutura do DNA utilizando informações espectrométricas.",
    ],
    correct: 4,
    explanation: "Na ciência médica, uma das aplicações nobres dos AGs é a determinação estrutural de moléculas de DNA combinando dados espectrométricos."
  },
  {
    id: 227,
    topicoId: 27,
    provaId: 2,
    question: "No Mercado Financeiro, os Algoritmos Genéticos são frequentemente utilizados para:",
    options: [
      "Encontrar a melhor alocação de ativos em uma carteira de investimentos, equilibrando risco e retorno.",
      "Zerar os riscos de qualquer operação de crédito de forma determinística.",
      "Substituir as moedas físicas por sistemas baseados em roleta sem reposição.",
      "Calcular a correlação de Pearson de todas as moedas globais em tempo real.",
      "Prever com 100% de certeza o valor de fechamento de ações em ambientes estocásticos."
    ],
    correct: 0,
    explanation: "Os AGs tratam a alocação de ativos como um problema de otimização de múltiplos critérios, buscando o arranjo que maximize o retorno e minimize o risco."
  },
  {
    id: 228,
    topicoId: 27,
    provaId: 2,
    question: "O que significa aplicar Algoritmos Genéticos para o 'Ajuste de hiperparâmetros' em Machine Learning?",
    options: [
      "Treinar o modelo uma única vez utilizando dados puramente binários.",
      "Remover todos os atributos que apresentam baixa diversidade estatística.",
      "Aumentar o número de amostras do banco de dados por meio de mutações.",
      "Buscar de forma otimizada as melhores configurações externas para o modelo de aprendizado.",
      "Forçar o modelo a rodar sem limite de tempo ou critérios de parada."
    ],
    correct: 3,
    explanation: "O ajuste de hiperparâmetros consiste em encontrar a combinação ideal de parâmetros de configuração do modelo para melhorar sua performance."
  },
  {
    id: 229,
    topicoId: 27,
    provaId: 2,
    question: "Como os AGs podem atuar no design de arquiteturas para Redes Neurais?",
    options: [
      "Eles eliminam a fase de treinamento, gerando os pesos finais por elitismo.",
      "Eles transformam as funções de ativação em problemas de crossover de um ponto.",
      "Eles limitam a rede a processar apenas variáveis independentes do tipo Filter.",
      "Eles impedem que a rede neural sofra com o crescimento exponencial de estados.",
      "Eles definem a melhor estrutura da rede, como a quantidade de neurônios, camadas ocultas, filtros e pooling.",
    ],
    correct: 4,
    explanation: "Os AGs podem automatizar a busca arquitetural, testando e evoluindo arranjos de camadas, neurônios e filtros para achar a melhor rede neural."
  },
  {
    id: 230,
    topicoId: 27,
    provaId: 2,
    question: "A engenharia de 'Seleção de Atributos' (feature selection) via Algoritmos Genéticos visa primordialmente:",
    options: [
      "Escolher as características mais relevantes de um conjunto de dados.",
      "Injetar dados ruidosos para testar a robustez do modelo de aprendizado.",
      "Substituir a codificação dos dados decimais por vetores infinitos.",
      "Garantir completeza estrita à busca cega não informada.",
      "Gerar novos atributos combinando o rastro de feromônios das variáveis."
    ],
    correct: 0,
    explanation: "A seleção de atributos busca reduzir a dimensionalidade dos dados, filtrando apenas o que é informativo para tornar o modelo mais rápido e preciso."
  },
  {
    id: 231,
    topicoId: 27,
    provaId: 2,
    question: "Analise as frentes de atuação de AGs dentro do ecossistema de Machine Learning:\nI. Ajuste de hiperparâmetros (tuning).\nII. Definição da melhor arquitetura para redes neurais.\nIII. Seleção de atributos (feature selection).\n\nEstá(ão) correta(s):",
    options: ["Apenas I", "I e II", "II e III", "Apenas III", "I, II e III"],
    correct: 4,
    explanation: "Os Algoritmos Genéticos possuem um papel versátil em Machine Learning, atuando com sucesso nas três frentes de otimização citadas."
  },
  {
    id: 232,
    topicoId: 27,
    provaId: 2,
    question: "Verdadeiro ou Falso: Os Algoritmos Genéticos são ferramentas exclusivas para o mercado financeiro e desenvolvimento de hardware, sendo inviável sua aplicação em Machine Learning.",
    options: ["Verdadeiro", "Falso"],
    correct: 1,
    explanation: "Falso. Os AGs possuem vasta aplicação em Machine Learning, operando no tuning de parâmetros, seleção de features e design de redes neurais."
  },

  // ----------------------------------------------------
  // TÓPICO 28: Seleção de atributos (feature selection)
  // ----------------------------------------------------
  {
    id: 233,
    topicoId: 28,
    provaId: 2,
    question: "Qual característica define o método de seleção de atributos conhecido como 'Filter'?",
    options: [
      "Ele realiza o treinamento do modelo várias vezes mudando as features.",
      "Ele seleciona características exclusivamente durante o split de árvores de decisão.",
      "Ele avalia estatisticamente cada atributo de forma independente do modelo de aprendizado.",
      "Ele depende do cálculo de taxas de mutação binária dos atributos.",
      "Ele inicia com um modelo vazio e adiciona variáveis progressivamente."
    ],
    correct: 2,
    explanation: "O método Filter opera de forma isolada do modelo, aplicando métricas estatísticas diretamente sobre os dados para selecionar os melhores atributos."
  },
  {
    id: 234,
    topicoId: 28,
    provaId: 2,
    question: "Quais métricas são comumente aplicadas pelos métodos do tipo 'Filter' para classificar a relevância das features?",
    options: [
      "Fator de ramificação (b) e profundidade da solução (s).",
      "Temperatura de resfriamento e fator de chacoalhamento térmico.",
      "Correlação de Pearson e informação mútua.",
      "Aptidão da roleta e contornos radiais do A*.",
      "Taxa de crossover uniforme e pontos de corte lineares."
    ],
    correct: 2,
    explanation: "Os métodos Filter utilizam ferramentas matemáticas e estatísticas como a correlação de Pearson e a informação mútua para triar as variáveis."
  },
  {
    id: 235,
    topicoId: 28,
    provaId: 2,
    question: "Como funciona a dinâmica de seleção de atributos classificada como 'Embedded'?",
    options: [
      "A seleção ocorre de forma totalmente externa e antes de qualquer treinamento.",
      "Ela exige testar todas as combinações matemáticas possíveis em uma roleta.",
      "A seleção de atributos ocorre durante o treinamento do próprio algoritmo de aprendizado.",
      "Ela remove todos os atributos no primeiro passo para iniciar com um modelo nulo.",
      "Ela baseia-se unicamente em dados coletados de sensores de GPS."
    ],
    correct: 2,
    explanation: "Nos métodos Embedded, a seleção é embutida; o próprio algoritmo de Machine Learning determina quais variáveis são importantes enquanto aprende."
  },
  {
    id: 236,
    topicoId: 28,
    provaId: 2,
    question: "Qual modelo de aprendizado é citado como um exemplo clássico capaz de realizar a seleção 'Embedded' nativamente?",
    options: [
      "Busca de Custo Uniforme (UCS).",
      "Têmpera Simulada (Simulated Annealing).",
      "Árvores de Decisão.",
      "Algoritmo da Formiga.",
      "Busca em Profundidade com Limite (DLS)."
    ],
    correct: 2,
    explanation: "As Árvores de Decisão realizam seleção embedded porque, ao criarem suas quebras (splits), identificam e priorizam os atributos mais importantes estruturalmente."
  },
  {
    id: 237,
    topicoId: 28,
    provaId: 2,
    question: "O método de seleção de atributos conhecido como 'Wrapper' atua de que maneira?",
    options: [
      "Aplica testes estatísticos isolados sem nunca rodar o classificador.",
      "Garante que apenas variáveis binárias codificadas em bits entrem no modelo.",
      "Evita o excesso de processamento eliminando o uso de critérios de parada.",
      "Usa feromônios para marcar os atributos que causaram erros no passado.",
      "Realiza o treinamento do modelo várias vezes utilizando diferentes combinações de atributos e compara o desempenho.",
    ],
    correct: 4,
    explanation: "O Wrapper usa o próprio modelo como avaliador, testando exaustivamente ou heuristicamente subconjuntos de features e medindo o score final de cada arranjo."
  },
  {
    id: 238,
    topicoId: 28,
    provaId: 2,
    question: "Qual é o ponto de partida e a mecânica de evolução do algoritmo 'Forward Selection'?",
    options: [
      "Começa com todas as características e remove a pior a cada rodada.",
      "Sorteia subconjuntos de features de forma 100% aleatória via roleta.",
      "Mapeia as variáveis em uma paisagem topológica buscando mínimos locais.",
      "Inicia aplicando um filtro de correlação de Pearson sobre todo o conjunto.",
      "Inicia com um modelo sem atributos e, a cada etapa, adiciona a característica que proporciona a maior melhoria.",
    ],
    correct: 4,
    explanation: "O Forward Selection é um método Wrapper progressivo: parte do zero e vai acoplando iterativamente o atributo que gera o maior ganho de performance."
  },
  {
    id: 239,
    topicoId: 28,
    provaId: 2,
    question: "Como opera o algoritmo denominado 'Backward Selection' no contexto de métodos Wrapper?",
    options: [
      "O modelo começa utilizando todos os atributos disponíveis e, em cada etapa, remove a característica menos relevante.",
      "Inicia sem nenhum atributo e remove os nós fringe que gerarem custos.",
      "Sorteia individualmente quais atributos serão deletados usando crossover uniforme.",
      "Treina o modelo uma única vez utilizando exclusivamente critérios de parada temporais.",
      "Substitui todas as variáveis contínuas por representações binárias de tamanho finito."
    ],
    correct: 0,
    explanation: "O Backward Selection faz o caminho inverso do Forward: joga todo mundo para dentro do modelo e vai eliminando, elo por elo, a variável que menos faz falta."
  },
  {
    id: 240,
    topicoId: 28,
    provaId: 2,
    question: "Por que é estritamente necessário configurar 'Critérios de Parada' em abordagens de Forward Selection e Backward Selection?",
    options: [
      "Para forçar o modelo a converter variáveis decimais em binárias.",
      "Para garantir que o modelo encontre o máximo global na primeira iteração.",
      "Para evitar excesso de processamento e complexidade desnecessária.",
      "Para permitir que características irrelevantes entrem no modelo simultaneamente.",
      "Para reverter o sinal da função objetivo em problemas convexos."
    ],
    correct: 2,
    explanation: "Sem critérios de parada, esses métodos continuariam adicionando ou removendo variáveis indefinidamente, gerando um desperdício massivo de processamento computacional."
  }
];

export default questoes;