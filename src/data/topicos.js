const topicos = [
  {
    id: 1,
    titulo: "O que é Inteligência?",
    conteudo: `É a habilidade de adquirir e aplicar conhecimento para resolver problemas complexos. Existem nove tipos de inteligência:

— Lógico-matemática
— Linguística
— Espacial
— Físico-cinestésica
— Interpessoal
— Intrapessoal
— Musical
— Naturalista
— Existencial`,
  },
  {
    id: 2,
    titulo: "Resolução Lógica",
    conteudo: `Existem três tipos de raciocínio lógico:

Indutivo: Tira conclusões apenas analisando uma parte dos objetos ou eventos. As conclusões são prováveis, e logicamente não garantidas.
Nunca são absolutamente certas.
Exemplo: Se é observado vários patos brancos, logo, todos os patos são brancos.

Dedutivo:  Tira conclusões a partir de premissas conhecidas. A sentença criada é necessariamente verdadeira. Utiliza modusponens.Sempre está certa.
Exemplo: Robert é sociólogo → Para ser sociólogo é preciso ser bacharel → Logo, Robert é bacharel em sociologia.

Abdutivo:  A conclusões são tiradas a partir das informações disponíveis, mas que podem estar erradas. 
Exemplo: Se bancos pedem COBOL e Jailson trabalha em um banco, então é possível que Jailson programe em COBOL.`,
  },
  {
    id: 3,
    titulo: "O que é Inteligência Artificial?",
    conteudo: `É o campo da ciência da computação que cria máquinas que pensam e agem igual ou semelhante aos humanos.

<strong style="color: red;">Teste de Turing:</strong> Para uma máquina ser considerada inteligente é necessário que ela passe pelo teste de Turing. O teste consiste em colocar um humano para conversar com uma máquina, se o humano não conseguir identificar se está quem está conversando com ele é humano ou uma máquina, então a máquina passou no teste.

Quando uma máquina reproduz uma habilidade humana, avaliamos por três critérios:
— Comportamental: Se a máquina produz comportamento semelhante aos humanos, podemos dizer que a habilidade foi reproduzida
— Funcionalidade: Não importa como o sistema realiza a função, apenas se foi realizada de forma eficaz.
— Cognitiva:  Se a máquina não sente, não entende ou não tem consciência, entao nao ha reprodução genuína, apenas uma simulação superficial.`,
  },
  {
    id: 4,
    titulo: "Agentes Racionais e Inteligentes",
    conteudo: `Agente racional: É qualquer entidade que consegue perceber por meio de sensores o ambiente em que está inserido, e em seguida tomar ações utilizando atuadores.

Performance measure (Medida de performance): Critério para medir o sucesso do agente dada uma sequência de ações. Um agente inteligente age para maximizar o valor esperado das medidas de desempenho. As medidas são projetadas de acordo com os resultados esperados, não com o comportamento esperado.

<strong style="color: red;">Modelo PEAS:</strong> saber o que o agente precisa fazer, como ele age no ambiente e as ferramentas(sensores e atuadores)  que ele utiliza
— Performance: Define como o sucesso do agente será avaliado. Pode ter múltiplos critérios
— Environment (Ambiente): Define o ambiente em que o agente estará submetido
— Actuators (Atuadores): São os meios pelos quais o agente irá agir no ambiente.
— Sensors (Sensores): São os meios que o agente sente o ambiente.

<span style="color: red;">OBS: O ChatGPT não é um agente — é uma LLM. Para que tome uma ação, precisa receber input do usuário. Um agente age sem receber uma "ordem" implícita.</span>`,
  },
  {
    id: 5,
    titulo: "Tipos de Ambiente",
    conteudo: `O ambiente em que um agente opera pode ser caracterizado de várias formas:

<strong>Totalmente observável vs Parcialmente observável</strong>
— Totalmente: O agente tem acesso completo ao estado do ambiente a cada momento.
— Parcialmente: O agente não tem acesso ao ambiente completo, podendo assim ocorrer mudanças que não serão do conhecimento do agente.

<strong>Determinístico vs Estocástico</strong>
— Determinístico: O estado atual e a ação do agente determinam qual será o próximo estado do ambiente. Não há incertezas no resultado.
— Estocástico: O resultado não pode ser previsto com total certeza, pois no próximo estado existem incertezas ou aleatoriedades. Isso ocorre mesmo que a ação do agente e o estado atual sejam conhecidos.

<strong>Episódico vs Sequencial</strong>
— Episódico:  A experiência do agente é dividida em “episódios” que não dependem um do outro. Cada episódio consiste em o agente perceber o ambiente e agir.
— Sequencial: A ação seguinte que o agente tomará depende das ações anteriores.

<strong>Dinâmico vs Estático</strong>
— Dinâmico: O ambiente pode sofrer alterações enquanto o agente toma sua decisão. O agente precisa ser capaz de tomar decisões rápidas e conseguir se adaptar às mudanças do ambiente.
— Estático: O ambiente não sofre alterações.

<strong>Discreto vs Contínuo</strong>
— Discreto: É possível enumerar as ações e percepções no ambiente. Exemplo: jogo de tabuleiro
— Contínuo: : Não é possível enumerar as ações e percepções, ou seja, o agente recebe dados do sensor, e as possíveis ações não podem ser enumeradas. Exemplo: carro autônomo no trânsito, o trânsito irá mudar o tempo todo.

<strong>Single-agent vs Multi-agent</strong>
— Single: O ambiente possui apenas um agente.
— Multi: O ambiente pode ter múltiplos agentes. Nesse caso os agentes podem cooperar(Cooperativo) ou competir(Competitivo) entre eles.`,
  },
  {
    id: 6,
    titulo: "Tipos de Agentes",
    conteudo: `Agente reativo simples (por reflexo): Suas ações serão tomadas a partir da percepção do estado atual do ambiente. Esse tipo de agente não guarda um histórico de percepções, por isso é necessário que o ambiente seja totalmente observável.

<strong>Agente reativo baseado em modelo:</strong> Esse agente busca entender como o ambiente muda e evolui de acordo com suas ações, por isso é necessário que ele mantenha um histórico de percepções e ações tomadas no passado. Esse tipo de agente pode operar em ambientes parcialmente observáveis.

<strong>Agente baseado em objetivo:</strong> O foco principal desse agente será chegar ao objetivo, por isso ele tomará decisões que o aproxime do objetivo. Para tomar tais decisões esse tipo de agente utiliza técnicas de busca e planejamento. Sendo assim, é correto afirmar que “Esses agentes usam o estado atual e o objetivo para planejar uma sequência de ações por meio de busca”

<strong>Agente baseado em utilidade:</strong> Esse tipo de agente busca chegar ao objetivo visando maximizar a qualidade do resultado, ou seja, ele busca soluções mais rápidas, baratas etc. Para isso, utiliza funções de utilidade, que atribuem valores aos estados e orientam a tomada de decisão.`,
  },
  {
    id: 7,
    titulo: "Problemas de Busca",
    conteudo: `Utilizam agentes baseados em objetivo. O ambiente é totalmente observável, discreto e determinístico. Problemas de busca possuem 5 elementos fundamentais:

1. Espaço de estados: É o conjunto de todos os estados possíveis que podem ser alcançados a partir do estado inicial, por meio das ações disponíveis ao agente.
2. Estado inicial: Local onde o agente começa a busca.
3. Função sucessora: é o conjunto de ações que o agente pode tomar a partir do estado atual em que ele se encontra. Também informa as consequências que cada ação irá desencadear.
4. Teste de objetivo: Determina se o agente alcançou o objetivo. Pode ser um teste único ou um conjunto de testes para validar se o estado atual é o objetivo. Além disso, pode ser um único objetivo ou múltiplos objetivos.
5. Custo do caminho: É a soma dos custos das ações que o agente tomou ao longo do caminho.

Solução: O caminho percorrido do estado inicial até o objetivo e a sequência de ações para alcançá-lo. 
A solução pode ser definida também como a sequência de ações para alcançar o objetivo.

Os problemas de busca são modelos do mundo real, porém não são perfeitos: se forem muito detalhados, tornam-se inviáveis de resolver; por outro lado, se forem pouco detalhados, também não permitem uma solução adequada.

Abstração: Processo de remover detalhes da representação de um problema. Muito detalhe impossibilita a resolução; pouco detalhe também. O equilíbrio é essencial.`,
  },
  {
    id: 8,
    titulo: "Grafos e Árvores de Busca",
    conteudo: `<strong>Grafo de espaço de estado:</strong> Representação matemática de problemas complexos.
— Nós (nodes): Representam os estados.
— Arestas (edges): Representam as funções sucessoras (ação, custo → próximo estado).
— Teste de objetivo:  É o conjunto de nós especificados como objetivo, na maioria dos casos é um só nó.
— Cada estado ocorre apenas uma vez. Raramente construído totalmente na memória.

<strong>Árvore de busca:</strong> Representa o processo de busca.
— Nós mostram os estados e correspondem a caminhos únicos que levam a esses estados.
- Cada nó na árvore de busca é um caminho completo no grafo de espaço de estados.
— Existe muita estrutura repetida — o mesmo estado pode ser explorado por caminhos diferentes.
— A árvore pode ser infinita caso ocorra muita repetição de estados.
— Na maioria dos problemas, não é construída totalmente na memória.`,
  },
  {
    id: 9,
    titulo: "Algoritmos Não Informados",
    conteudo: `Também chamado de busca cega. Usa apenas a informação dada na descrição do problema, ou seja, não tem informação adicional.

<strong>Notações importantes:</strong>
— Fringe: Próximo nó que será expandido.
— Expansão: Pegar um nó e expandir seus filhos.
— Estratégias de exploração: Estratégia para escolher o próximo nó a expandir.

— Propriedades de algoritmos de busca para BIG O notation:</strong> 
— Completo: Quando uma solução existe, o algoritmo garante que ela será encontrada?
— Ótimo: A estratégia de busca encontra a solução ótima( o menor caminho entre todas as possíveis soluções)?
— Complexidade de tempo: Quanto tempo leva para encontrar a solução?
— Complexidade de espaço: Quanto de memória é necessário para realizar a busca?

<strong>Notações de complexidade:</strong>
— b → fator de ramificação (número médio de filhos de cada nó)
— m → profundidade máxima
— d → profundidade limite
— s → profundidade da primeira solução
— C* → custo da melhor solução possível
— ε → menor custo positivo de uma aresta

<strong>Limitações da busca não informada:</strong>
— Busca cega: Explora opções em todas as direções
— Não tem informações sobre localização do objetivo, apenas do goal state
— Em problemas de larga escala, a busca não informada é ineficiente

<strong>Resumo de uso:</strong>
— Menor caminho: BFS
— Menos memória: DFS
— Menor custo: UCS
— O custo NÃO é considerado em BFS e DFS.
— Processamento: Busca em profundidade, pois visita menos nós.
— O número de passos é considerado na hora de escolher o melhor algoritmo de busca para o problema.
— Sem poda, pode ocorrer busca infinita.`,
  },
  {
    id: 10,
    titulo: "DFS e BFS",
    conteudo: `<strong>Busca em Profundidade (DFS):</strong>

Explora o caminho todo até chegar ao final, depois volta explorando os vértices não visitados, até encontrar o objetivo.Utiliza estrutura de pilha (LIFO).
— Completo: Apenas se houver prevenção de ciclos, senão o valor de m será infinito.
— Ótimo:Não, ele encontra a solução mais a esquerda, independente da profundidade e do custo.
— Complexidade de Tempo: O(b<sup>m</sup>) 
— Complexidade de Espaço: O(bm)

<strong>Busca em Largura (BFS):</strong>

Explora todos os vértices adjacentes ao estado inicial  e, em seguida, expande os vértices do próximo nível, até encontrar o objetivo.Pode encontrar o caminho mais curto em termos de ações, mas sem considerar os pesos das arestas. Utiliza estrutura de fila(FIFO).
— Completo: Sim, se s for finito.
— Ótimo: Apenas se os custos forem iguais.
— Complexidade de Tempo: O(b<sup>s</sup>) 
— Complexidade de Espaço: O(b<sup>s</sup>)`,
    gif: "src/images/dfsBFS.gif",
    gifLabel: "Exemplo: Busca em Profundidade (DFS) e Busca em Largura (BFS)",
  },
  {
    id: 11,
    titulo: "UCS, DLS e IDS",
    conteudo: `<strong>Busca de Custo Uniforme (UCS):</strong>
É inspirada na busca em largura, contudo ela irá expandir o vértice de menor custo. Esse tipo de busca garante o caminho mais barato. Utiliza estrutura de fila de prioridades.
— Completo: Sim, mas deve-se assumir que os custos são positivos, e a solução tem um custo finito. E o valor de ε deve ser maior que zero..
— Ótimo: Sim.
— Complexidade de Tempo: O(b<sup>C*/ε</sup>)
— Complexidade de Espaço: O(b<sup>C*/ε</sup>)

<img src="src/images/ucs.gif" alt="Exemplo DFS" class="resumo__gif" />
<p class="resumo__gif-label">Busca de Custo Uniforme (UCS)</p>

<strong>Busca em Profundidade com Limite (DLS):</strong>

Nesse tipo de busca é imposto um limite máximo de profundidade. Para essa busca pode-se implementar um tipo especial de algoritmo de profundidade com limite, mas também é possível usar algoritmos de busca gerais com controle de profundidade.
— Completo: Não, se a solução estiver em profundidade > d.
— Ótimo: Não (igual à DFS).
— Complexidade de Tempo: O(b<sup>d</sup>) 
— Complexidade de Espaço: O(bd)
— Observações sobre a DLS: 
\t• Todos os nós mais profundos que d não são explorados
\t• Evita ciclos e reduz a complexidade, pois evita caminhos longos uma vez que d < m.

<img src="src/images/DLS.gif" alt="Exemplo DFS" class="resumo__gif" />
<p class="resumo__gif-label">Profundidade com Limite (DLS)</p>

<strong>Busca com Aprofundamento Iterativo (IDS):</strong>

Faz buscas em profundidade limitadas, as buscas são feitas aumentando o limite de profundidade a cada iteração. Ele combina vantagens da busca em largura(garantia que será encontrada uma solução ótima) e da busca em profundidade(uso eficiente da memória).
— Completo: Sim.
— Ótimo: Sim.
— Complexidade de Tempo: O(b<sup>d</sup>) 
— Complexidade de Espaço: O(bd)

<img src="src/images/IDS.gif" alt="Exemplo DFS" class="resumo__gif"/>
<p class="resumo__gif-label">Busca com Aprofundamento Iterativo (IDS)</p>`,
  },
  {
    id: 12,
    titulo: "Busca Informada",
    conteudo: `A busca informada (ou heurística) é um tipo de busca que usa informações adicionais sobre o problema para encontrar a solução de forma mais eficiente.
Diferente da busca não informada (cega), ela não explora tudo aleatoriamente — ela usa uma heurística (estimativa) para guiar o caminho.

<strong style="color: red;">Heurística:</strong> Funções ou estratégias que utilizam conhecimento específico do problema para guiar algoritmos de busca, com o objetivo de reduzir o custo computacional e acelerar a obtenção de soluções.  

— Buscas Heurísticas utilizam uma função heurística(n) para estimar o quão perto do objetivo o estado n está do objetivo.
— É possível formular várias heurísticas para um problema específico.
— A orientação fornecida por uma heurística é apenas para decisões locais. Ela refere-se a uma estimativa que é usada para escolher uma ação sucessora a partir do estado atual que o agente se encontra.`,
  },
  {
    id: 13,
    titulo: "Greedy Search",
    conteudo: `Greedy Search(Best First):

É uma estratégia de busca que expande os nos vizinhos(fringe) que o algoritmo estima ser o mais próximo do estado objetivo, baseia-se exclusivamente na função heurística.
Para muitos problemas, o custo para alcançar o objetivo a partir de um estado específico pode ser estimado, mas não pode ser determinado com precisão.

h(n): Estima o custo do caminho mais barato a partir do estado do nó n até o estado objetivo. Se o n for o objetivo então h(n) = 0.

Semelhante a busca em profundidade a Greedy Search segue um caminho    do início ao fim. Por isso, ela não é ótima e nem completa, pois pode seguir um caminho infinito e não testar outras possibilidades.
Com uma boa heurística, a complexidade de tempo e espaço podem ser reduzidas substancialmente. O valor da redução dependerá do problema e da qualidade da função h.

— Completo: Não, porque pode nunca encontrar uma solução. Se não lidar com estados repetidos, o sistema pode ficar preso.
— Ótimo: Não, pois nem sempre irá encontrar o melhor caminho.
— Complexidade de Tempo:  O(b<sup>m</sup>) 
— Complexidade de Espaço: O(b<sup>m</sup>)`,
    gif: "src/images/download.gif",
    gifLabel: "Exemplo: Greedy Search",
  },

{
    id: 14,
    titulo: "A* Search",
    conteudo: `A* Search:

É a combinação da UFS e da Greedy Search. Ela utiliza a heurística da Greedy e o custo acumulado da UFS.
O A* irá utilizar a seguinte fórmula para escolher qual nó será expandido:

f(n) = g(n) + h(n)	

g(n): Custo acumulado até o estado atual
h(n): Estimativa(heurística) até o objetivo
f(n): Valor usado para escolher o próximo nó.

O A* é o algoritmo que expande o menor número de caminhos se comparado a algoritmos de busca ótimos que partem do mesmo início e usam uma heurística admissível.
O A* adiciona contornos gradualmente aos nos. 

— Completo:  Sim
— Ótimo: Sim, mas a heurística tem que ser aceitável e consistente
— Complexidade de Tempo: Depende da heurística. No pior caso é O(b<sup>s</sup>)
— Complexidade de Espaço: O(b<sup>s</sup>)`,
    gif: "src/images/ASTAR.gif",
    gifLabel: "Exemplo: A* Search",
  },

  {
    id: 15,
    titulo: "Admissibilidade",
    conteudo: `Superestima o custo: Heurísticas inadmissíveis(pessimistas) superestimam o custo, isso acarreta em soluções não ótimas. Por exemplo: Considerando que o custo real para alcançar o objetivo é 15 e a heurística é 20, o algoritmo entenderá que não é um bom caminho, mesmo que ao seguir expandir esse nó a solução obtida seja ótima. 

Subestima o custo: Heurística admissível(otimista) não superestima o custo, levando o algoritmo a encontrar o melhor caminho. Exemplo: Considerando que o custo real é 10 e a heurística é 7, o algoritmo irá entender que este pode ser um caminho que o levará a uma solução ótima. 
OBS: Também pode levar a caminhos ruins.
Uma heurística pode ser considerada admissível se, para cada nó: 

0 ≤ h(n) ≤ h * (n)

onde h * (n) é o verdadeiro custo para o objetivo mais próximo. 
Problema relaxado: É um problema com menos restrições que o problema original. Exemplo: No jogo 8-puzzle, considerando-se que é possível realizar qualquer movimento para resolver o quebra-cabeça, ou seja não temos restrições de movimentos, chegamos a um problema relaxado.
Uma heurística admissível é uma solução para um problema relaxado. Para criá-la é necessário resolver o problema relaxado sem utilizar busca.
O custo obtido é uma solução ótima, isso é a heurística admissível para o problema original.
É preferível heurísticas que forneçam diferentes valores para diferentes estados.
Quando existir múltiplas heurísticas admissíveis para um problema, deve-se escolher a que possua o maior valor e que seja menor ou igual que  h * (n).

Heurística Admissível: heurística estimada custo atual.

Heurística Consistente(monotonicidade): A heurística estimada é menor ou igual ao custo real de alcançar o próximo estado + a estimativa desse sucessor(heurística estimada do vizinho). Esse tipo de heurística faz com que o valor f(n) nunca diminua,

OBS:Toda heurística consistente é admissível, mas nem toda heurística admissível é consistente. `,
  },
  {
    id: 16,
    titulo: "Game Theory e Adversarial Search",
    conteudo: `Para representar jogos é necessário definir claramente as regras, ter um conjunto finito de ações, ter decisões racionais e resultados bem definidos.
Em um jogo competitivo cada jogador realiza a sua jogada sem saber o que o outro fará. 
Os jogos possuem definições determinísticas: 

— Espaço de estados: Todos os espaços possíveis que o jogo pode assumir
— Espaço Inicial: O estado em que o jogo começa, e a identificação de qual jogador irá começar o jogo.
— Função sucessora: O estado atual é o fim do jogo?
— Função de utilidade: O valor numérico do estado terminal. Não minimize o custo mais. Agora o agente busca maximizar a sua pontuação/utilidade.

Zero-Sum Games:

Os agentes têm funções de utilidade opostas. Por exemplo: Enquanto um agente busca maximizar um valor, o outro irá tentar minimizar.
Adversarial, competição pura.

General Games: 

Os agentes possuem funções de utilidades independentes. Eles podem cooperar entre si para alcançar o estado terminal, eles também podem competir e pode ocorrer indiferença entre eles.

Adversarial Search: 

Ambientes competitivos onde o objetivo de múltiplos agentes são conflitantes deram origem a busca adversarial, ou como é conhecida a busca competitiva ou só jogos.
Curiosidade: A Deep Blue foi a primeira máquina a ganhar um jogo de xadrez contra um campeão mundial. Ela utilizava Adversarial Search.
`,
  },
  {
    id: 17,
    titulo: "Algoritmo MINIMAX",
    conteudo: `Assume dois ótimos jogadores: MIN e MAX. A estratégia é maximizar a função de utilidade de um player(MAX), enquanto minimiza a utilidade do oponente(MIN).
Por exemplo: O bot de um jogo de xadrez busca as melhores ações para obter o rei do adversário e evitar que suas peças sejam comidas.
Em relação ao funcionamento do algoritmo, o algoritmo Minimax utiliza uma árvore de jogo, onde os nós representam os possíveis estados do jogo e as arestas representam as jogadas possíveis. As folhas são valores utilidade dos estados finais, esses valores podem ser obtidos por meio dos resultados dos jogos ou por funções heurísticas quando o estado não é terminal. 
O algoritmo utiliza uma abordagem de recursividade, contudo ele também utiliza um método bottom-up(de baixo para cima) que consiste em buscar as nossas folhas e retornar seus valores até a raiz. 
Na árvore, os níveis se alternam entre MIN e MAX, o primeiro nível(raiz) sempre será MAX, os nos subsequentes irão se alternarem. Nos níveis representados por MIN o algoritmo irá escolher o menor valor entre os filhos, por sua vez em níveis MAX será escolhido o maior valor, de modo  a determinar a melhor decisão para MAX.
É possível descrever o valor MINIMAX como o menor valor que o jogador consegue ceder ao adversário sem saber sua próxima. 
O jogador MAX irá deduzir que o MIN escolherá o pior cenário para ele. 
Se acontecer do MIN cometer um erro, ou seja, não ser ótimo, então o MAX receberá uma “pontuação” maior. Contudo, o MINIMAX não comete erros, pois ele assume o adversário perfeito.

Se for implementado um agente MINIMAX para jogar contra um humano, faz sentido retornar, além do valor MINIMAX, o caminho encontrado?

Resposta 1: Sim, se o humano jogar de forma ótimo(ou seja, previsível). O caminho mostra a sequência de movimentos que leva ao melhor resultado.

Resposta 2: Não, se o humano jogar de forma subótima, o resultado será imprevisível. O caminho previsto pode não ocorrer.
O valor permanece válido como a melhor utilidade garantida, mas os movimentos reais podem ser diferentes.`,
  gif: "src/images/minimax.gif",
  gifLabel: "Exemplo: Algoritmo MINIMAX",
  },
];

export default topicos;
