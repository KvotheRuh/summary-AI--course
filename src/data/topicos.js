import dfsBFS from "../images/dfsBFS.gif";
import ucs from "../images/ucs.gif";
import ASTAR from "../images/ASTAR.gif"
import DLS from "../images/DLS.gif"
import download from "../images/download.gif"
import IDS from "../images/IDS.gif"
import image from "../images/image.png"
import image1 from "../images/image1.png"
import minimax from "../images/minimax.gif"
import passo1 from "../images/1.png"
import passo2 from "../images/2.png"
import passo3 from "../images/3.png"
import passo4 from "../images/4.png"
import passo5 from "../images/5.png"
import passo6 from "../images/6.png"
import passo7 from "../images/7.png"
import passo8 from "../images/8.png"
import passo9 from "../images/9.png"
import passo10 from "../images/10.png"
import passo11 from "../images/11.png"
import ticTac from "../images/tic-tac.png"
import Cordilheira from "../images/Cordilheira.png"
import ShouldersPlato from "../images/Shoulders e Plato.png"
import BackwardSelection from "../images/backward.png"
import definicoesAG from "../images/definicoesAG.png"
import crossover1 from "../images/crossover1.png"
import crossover2 from "../images/crossover2.png"
import crossover3 from "../images/crossover3.png"
import mutacao from "../images/mutacao.png"
import fitness from "../images/fitness.png"
import ForwardSelection from "../images/forward.png"


const topicos = [
  {
    id: 1,
    provaId: 1,
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
    provaId: 1,
    titulo: "Resolução Lógica",
    conteudo: `Existem três tipos de raciocínio lógico:

<Strong>Indutivo:</strong> Tira conclusões apenas analisando uma parte dos objetos ou eventos. As conclusões são prováveis, e logicamente não garantidas.
Nunca são absolutamente certas.
Exemplo: Se é observado vários patos brancos, logo, todos os patos são brancos.

<Strong>Dedutivo:</strong>  Tira conclusões a partir de premissas conhecidas. A sentença criada é necessariamente verdadeira. Utiliza modusponens. Sempre está certa.
Exemplo: Robert é sociólogo → Para ser sociólogo é preciso ser bacharel → Logo, Robert é bacharel em sociologia.

<Strong>Abdutivo:</strong>  A conclusões são tiradas a partir das informações disponíveis, mas que podem estar erradas. 
Exemplo: Se bancos pedem COBOL e Jailson trabalha em um banco, então é possível que Jailson programe em COBOL.`,
  },
  {
    id: 3,
    provaId: 1,
    titulo: "O que é Inteligência Artificial?",
    conteudo: `É o campo da ciência da computação que cria máquinas que pensam e agem igual ou semelhante aos humanos.

<strong style="color: red;">Teste de Turing:</strong> Para uma máquina ser considerada inteligente é necessário que ela passe pelo teste de Turing. O teste consiste em colocar um humano para conversar com uma máquina, se o humano não conseguir identificar se está quem está conversando com ele é humano ou uma máquina, então a máquina passou no teste.

Quando uma máquina reproduz uma habilidade humana, avaliamos por três critérios:
— Comportamental: Se a máquina produz comportamento semelhante aos humanos, podemos dizer que a habilidade foi reproduzida
— Funcionalidade: Não importa como o sistema realiza a função, apenas se foi realizada de forma eficaz.
— Cognitiva:  Se a máquina não sente, não entende ou não tem consciência, entao não há reprodução genuína, apenas uma simulação superficial.`,
  },
  {
    id: 4,
    provaId: 1,
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
    provaId: 1,
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
    provaId: 1,
    titulo: "Tipos de Agentes",
    conteudo: `<strong>Agente reativo simples (por reflexo):</strong> Suas ações serão tomadas a partir da percepção do estado atual do ambiente. Esse tipo de agente não guarda um histórico de percepções, por isso é necessário que o ambiente seja totalmente observável.

<strong>Agente reativo baseado em modelo:</strong> Esse agente busca entender como o ambiente muda e evolui de acordo com suas ações, por isso é necessário que ele mantenha um histórico de percepções e ações tomadas no passado. Esse tipo de agente pode operar em ambientes parcialmente observáveis.

<strong>Agente baseado em objetivo:</strong> O foco principal desse agente será chegar ao objetivo, por isso ele tomará decisões que o aproxime do objetivo. Para tomar tais decisões esse tipo de agente utiliza técnicas de busca e planejamento. Sendo assim, é correto afirmar que “Esses agentes usam o estado atual e o objetivo para planejar uma sequência de ações por meio de busca”

<strong>Agente baseado em utilidade:</strong> Esse tipo de agente busca chegar ao objetivo visando maximizar a qualidade do resultado, ou seja, ele busca soluções mais rápidas, baratas etc. Para isso, utiliza funções de utilidade, que atribuem valores aos estados e orientam a tomada de decisão.`,
  },
  {
    id: 7,
    provaId: 1,
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
    provaId: 1,
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
    provaId: 1,
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
    provaId: 1,
    titulo: "DFS e BFS",
    conteudo: `<strong>Busca em Profundidade (DFS):</strong>

Explora o caminho todo até chegar ao final, depois volta explorando os vértices não visitados, até encontrar o objetivo.Utiliza estrutura de pilha (LIFO).
— Completo: Apenas se houver prevenção de ciclos, senão o valor de m será infinito.
— Ótimo:Não, ele encontra a solução mais a esquerda, independente da profundidade e do custo.
— Complexidade de Tempo: O(b<sup>m</sup>) 
— Complexidade de Espaço: O(bm)

<strong>Busca em Largura (BFS):</strong>

Explora todos os vértices adjacentes ao estado inicial  e, em seguida, expande os vértices do próximo nível, até encontrar o objetivo. Pode encontrar o caminho mais curto em termos de ações, mas sem considerar os pesos das arestas. Utiliza estrutura de fila (FIFO).
— Completo: Sim, se s for finito.
— Ótimo: Apenas se os custos forem iguais.
— Complexidade de Tempo: O(b<sup>s</sup>) 
— Complexidade de Espaço: O(b<sup>s</sup>)`,
    gif: dfsBFS,
    gifLabel: "Exemplo: Busca em Profundidade (DFS) e Busca em Largura (BFS)",
  },
  {
    id: 11,
    provaId: 1,
    titulo: "UCS, DLS e IDS",
    conteudo: `<strong>Busca de Custo Uniforme (UCS):</strong>
É inspirada na busca em largura, contudo ela irá expandir o vértice de menor custo. Esse tipo de busca garante o caminho mais barato. Utiliza estrutura de fila de prioridades.
— Completo: Sim, mas deve-se assumir que os custos são positivos, e a solução tem um custo finito. E o valor de ε deve ser maior que zero..
— Ótimo: Sim.
— Complexidade de Tempo: O(b<sup>C*/ε</sup>)
— Complexidade de Espaço: O(b<sup>C*/ε</sup>)

<img src="${ucs}" alt="Exemplo DFS" class="resumo__gif" />
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

<img src="${DLS}" alt="Exemplo DFS" class="resumo__gif" />
<p class="resumo__gif-label">Profundidade com Limite (DLS)</p>

<strong>Busca com Aprofundamento Iterativo (IDS):</strong>

Faz buscas em profundidade limitadas, as buscas são feitas aumentando o limite de profundidade a cada iteração. Ele combina vantagens da busca em largura(garantia que será encontrada uma solução ótima) e da busca em profundidade(uso eficiente da memória).
— Completo: Sim.
— Ótimo: Sim.
— Complexidade de Tempo: O(b<sup>d</sup>) 
— Complexidade de Espaço: O(bd)

<img src="${IDS}" alt="Exemplo DFS" class="resumo__gif"/>
<p class="resumo__gif-label">Busca com Aprofundamento Iterativo (IDS)</p>`,
  },
  {
    id: 12,
    provaId: 1,
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
    provaId: 1,
    titulo: "Greedy Search",
    conteudo: `Greedy Search(Best First):

É uma estratégia de busca que expande os nos vizinhos(fringe) que o algoritmo estima ser o mais próximo do estado objetivo, baseia-se exclusivamente na função heurística.
Para muitos problemas, o custo para alcançar o objetivo a partir de um estado específico pode ser estimado, mas não pode ser determinado com precisão.

h(n): Estima o custo do caminho mais barato a partir do estado do nó n até o estado objetivo. Se o n for o objetivo então h(n) = 0.

Semelhante a busca em profundidade a Greedy Search segue um caminho do início ao fim. Por isso, ela não é ótima e nem completa, pois pode seguir um caminho infinito e não testar outras possibilidades.
Com uma boa heurística, a complexidade de tempo e espaço podem ser reduzidas substancialmente. O valor da redução dependerá do problema e da qualidade da função h.

— Completo: Não, porque pode nunca encontrar uma solução. Se não lidar com estados repetidos, o sistema pode ficar preso.
— Ótimo: Não, pois nem sempre irá encontrar o melhor caminho.
— Complexidade de Tempo:  O(b<sup>m</sup>) 
— Complexidade de Espaço: O(b<sup>m</sup>)`,
    gif: download,
    gifLabel: "Exemplo: Greedy Search",
  },

  {
    id: 14,
    provaId: 1,
    titulo: "A* Search",
    conteudo: `A* Search:

É a combinação da UCS e da Greedy Search. Ela utiliza a heurística da Greedy e o custo acumulado da UCS.
O A* irá utilizar a seguinte fórmula para escolher qual nó será expandido:

f(n) = g(n) + h(n)	

g(n): Custo acumulado até o estado atual
h(n): Estimativa(heurística) até o objetivo
f(n): Valor usado para escolher o próximo nó.

O A* é o algoritmo que expande o menor número de caminhos se comparado a algoritmos de busca ótimos que partem do mesmo início e usam uma heurística admissível.
O A* adiciona contornos gradualmente aos nos. 
<img src="${image1}" alt="Exemplo dos cotornos que o A* adiciona durante a realização da busca" class="resumo__gif"/>
<p class="resumo__gif-label">Exemplo dos cotornos que o A* adiciona durante a realização da busca</p>

— Completo:  Sim
— Ótimo: Sim, mas a heurística tem que ser aceitável e consistente
— Complexidade de Tempo: Depende da heurística. No pior caso é O(b<sup>s</sup>)
— Complexidade de Espaço: O(b<sup>s</sup>)`,
    gif: ASTAR,
    gifLabel: "Exemplo: A* Search",
  },

  {
    id: 15,
    provaId: 1,
    titulo: "Admissibilidade",
    conteudo: `Superestima o custo: Heurísticas inadmissíveis(pessimistas) superestimam o custo, isso acarreta em soluções não ótimas. Por exemplo: Considerando que o custo real para alcançar o objetivo é 15 e a heurística é 20, o algoritmo entenderá que não é um bom caminho, mesmo que ao seguir expandir esse nó a solução obtida seja ótima. 

Subestima o custo: Heurística admissível(otimista) não superestima o custo, levando o algoritmo a encontrar o melhor caminho. Exemplo: Considerando que o custo real é 10 e a heurística é 7, o algoritmo irá entender que este pode ser um caminho que o levará a uma solução ótima. 
OBS: Também pode levar a caminhos ruins.
Uma heurística pode ser considerada admissível se, para cada nó: 

0 ≤ h(n) ≤ h * (n)

onde h * (n) é o verdadeiro custo para o objetivo mais próximo. 
Problema relaxado: É um problema com menos restrições que o problema original. Exemplo: No jogo 8-puzzle, considerando-se que é possível realizar qualquer movimento para resolver o quebra-cabeça, ou seja não temos restrições de movimentos, chegamos a um problema relaxado.
<p class="resumo__gif-label">Exemplo de possibilidades que pode mover uma peça no 8-puzzle quando assume-se um problema relaxado</p>
<img src="${image}" alt="Exemplo de possibilidades que pode mover uma peça no 8-puzzle quando assume-se um problema relaxado" class="resumo__gif"/>

Uma heurística admissível é uma solução para um problema relaxado. Para criá-la é necessário resolver o problema relaxado sem utilizar busca.
O custo obtido é uma solução ótima, isso é a heurística admissível para o problema original.
É preferível heurísticas que forneçam diferentes valores para diferentes estados.
Quando existir múltiplas heurísticas admissíveis para um problema, deve-se escolher a que possua o maior valor e que seja menor ou igual que  h * (n).

Heurística Admissível: heurística estimada custo atual.

Heurística Consistente(monotonicidade): A heurística estimada é menor ou igual ao custo real de alcançar o próximo estado + a estimativa desse sucessor(heurística estimada do vizinho). Esse tipo de heurística faz com que o valor f(n) nunca diminua,

OBS: Toda heurística consistente é admissível, mas nem toda heurística admissível é consistente. `,
  },
  {
    id: 16,
    provaId: 1,
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
    provaId: 1,
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
  gif: minimax,
  gifLabel: "Exemplo: Algoritmo MINIMAX",
  },

  {
    id: 18,
    provaId: 1,
    titulo: "Poda Alfa-beta",
    conteudo: `Devido ao grande número de estados, a árvore construída pelo algoritmo MINIMAX pode ser muito extensa.  Para evitar que todos os nós da árvore sejam expandidos, é feito uma poda em nós que não afetarão a decisão final do algoritmo. Um tipo de poda é a Alfa-Beta, ela consiste em utilizar dois tipos de valores para decidir quais nos serão podados, o alfa e o beta.

<strong>- Valor Alfa(𝛼)</strong>: É o melhor valor encontrado pelo MAX (maior valor) até o momento em que a busca se encontra. Esse nunca irá diminuir. Inicialmente o alfa possui o valor de -<span style='font-size: 1.3em; font-weight: bold; vertical-align: middle;'>∞</span>. 
<strong>- Valor Beta(𝛽)</strong>: É o melhor valor encontrado pelo MIN (menor valor) até o momento em que a busca se encontra. Esse valor nunca irá aumentar. Inicialmente o beta possui o valor de +<span style='font-size: 1.3em; font-weight: bold; vertical-align: middle;'>∞</span>.

Existem dois tipos de poda alfa-beta:

<strong>- Poda Alfa(𝛼): Dado um nó MIN n, efetue a poda se 𝛽(n) ⩽ 𝛼(i) para algum nó ancestral i do nó n.</strong>
<strong>- Poda Beta(𝛽): Dado um nó MAX n, efetue a poda se 𝛼(n) ⩾  𝛽(i) para algum nó ancestral i do nó n.</strong>

<span style="color: red;">Importante: Ao ocorrer uma poda, observe em qual tipo de nó ela aconteceu.
- Se a poda ocorrer em um nó <strong>MIN</strong>, ela é chamada de <strong>Poda Alfa</strong>.
- Se ocorrer em um nó <strong>MAX</strong>, ela é chamada de <strong>Poda Beta</strong>.
</span>

Propriedades: 
- A poda não afeta o resultado final da busca
- A quantidade de podas depende da ordem dos nodes terminais
- Uma boa ordem de busca pode dobrar a profundidade da pesquisa, ou seja, permite uma busca mais profunda dentro de um limite de tempo.
    - A complexidade de tempo cai de O(bm) para O(b<sup>m/2</sup>).
    - Uma possível estratégia é ordenar a ordem de visita aos nodes.

Não é viável armazenar a utilidade de todos os estados possíveis, pois a quantidade de combinações cresce rapidamente. Por isso, a utilidade normalmente é calculada dinamicamente durante a execução do algoritmo, a cada interação ou expansão da árvore.

<span style="color:red;">Existe um passo-a-passo da execução da Poda Alfa-beta no tópico 19.</span>
<span style="color:red;">No módulo questões(está no tópico 18 das questões) tem exercicios práticos, em que vocês terão que executar a poda alfa-beta em uma árvore MiniMax. Todavia, se quiserem criar a sua própria árvore e executarem a poda alfa-beta nela, podem utilizar esse site https://raphsilva.github.io/utilities/minimax_simulator/#</span>`,
  },

  {
    id: 19,
    provaId: 1,
    titulo: "Passo-a-Passo Poda Alfa-beta",
    slides: [
      {legenda:"Inicializar a raiz com valores de [-INF, +INF], alfa e beta, respectivamente",
        img: passo1},

      {legenda:"Ir para os nós folhas. Coloque Alfa e Beta do nó que está sendo visitadas.",
        img: passo2},

      {legenda:"Como o nivel é MAX só será atualizado o Alfa com o maior valor que ele encontrou até agora. Nesse caso é o 8",
        img: passo3},

      {legenda:"Devido a recursão, volte um nível. Ele será atualizado com o valor conhecido até agora. Mas lembre-se de sempre verificar se o nível é MIN ou MAX. Nesse caso, é MIN então é o Beta que será atualizado. OBS: Ainda NÃO volta o valor conhecido até a RAIZ.",
        img: passo4},

      {legenda:"Agora vá novamente para as folhas. Como voltamos ao nível MAX o Alfa que será atualizado. Contudo, como o beta já possui um valor ele continuará armazenado",
        img: passo5},

      {legenda:"O lgoritmo irá verificar o 10 e atualizar o Alfa com esse valor. Antes de expandir o 5, será verificado a seguinte condição: Alfa ⩾ Beta, nesse caso é verdadeiro, logo os nós 5, 110 e 300 serão podados. A poda será caracterizada como Poda Beta, por estar em um nível Max e cumprir com os requisitos da Poda Beta.",
        img: passo6},

      {legenda:"Voltando um nível o Beta e nem o Alfa serão atualizados, pois o valor do nó não é o menor conhecido e o nível é MIN. Em seguida, o algoritmo irá para a raiz e atualizará o Alfa na propria raiz, com o maior valor que ele conhece, nesse caso o 8.",
        img: passo7},

      {legenda:"Como agora o algoritmo já conhece o Alfa ele levará ele para o próximo nível, mas não até as folhas.",
        img: passo8},

      {legenda:"Repete-se a comparação, agora como estamos no MAX o alfa que será atualizado com o maior valor, nesse caso é o 3.",
        img: passo9},

      {legenda:"Voltando um nível o valor de Beta será atualizado, pois estamos no MIN. Antes de seguir até as folhas, o algoritmo irá verificar os valores do alfa e do beta. Nesse caso, ele concluirá que beta =< alfa e haverá uma poda. Essa poda ocorre pois cumpre com o requisito da Poda Alfa. Dessa forma, os outros nós e suas folhas não serão expandidos, mesmo que tenha um valor maior nas folhas.",
        img: passo10}
        ,
      {legenda:"Por fim, o algoritmo irá fazer uma ultima verificação para ver qual é o maior valor que ele conhece, nesse caso é o 8. Vale ressaltar que se não houvesse nenhuma poda o resultado ainda seria o 8.",
        img: passo11}
        ,
    ],
  },
  {
    id: 20,
    provaId: 1,
    titulo: "Decisões Imperfeitas e Função de Avaliação",
    conteudo: `<strong>Decisões imperfeitas</strong>
Limitações do MINIMAX:
- O algoritmo requer que a árvore seja expandida até os estados terminais(nós folhas com utilidades).
- Consome muito tempo para jogos que demandam de muitos “passos” para chegar aos estados terminais (mesmo com poda).
    - No geral, nós temos uma limitação de tempo para tomar as decisões. 
    - Impraticável em jogos reais que requerem interações em tempo real.

A solução para essas limitações é: Decisões Imperfeitas
- Em vez de pesquisar até os nós terminais, pesquisamos apenas até uma profundidade limitada(ou seja, olhamos para frente apenas d movimentos)
- Para isso, é necessário trocar a função de utilidade por uma função de evolução (heurística), que estima a utilidade esperada do nó não terminal
- A garantia de jogo ótimo desaparece.
- Mecanismo de parada: Podemos usar IDS limitada pelo tempo disponível para uma movimentação ou considerar uma profundidade máxima

<strong>Função de Avaliação</strong>
Mesmo princípio das heurísticas usadas pelos algoritmos de busca informada
Estima a pontuação para nós não terminais 
São sempre imperfeitas, e designar boas funções é a chave.

Trade-off:
- Funções precisas podem ser computacionalmente caras. Menos tempo para realizar a busca
- Funções imprecisas podem ser computacionalmente rápidas - mais tempo para realizar a busca.

A função de avaliação é uma fórmula usada para estimar quão vantajoso um estado do jogo é para um jogador, sem precisar explorar toda a árvore de possibilidades até o final da partida.
Mas como isso funciona na prática?
No jogo da velha, por exemplo, uma heurística simples pode contar quantas possibilidades de vitória ainda existem para cada jogador. Assim, a função de avaliação pode ser definida como:

Eval(s) = possibilidades do jogador X ganhar - possibilidades do jogador O ganhar

Olhe o exemplo: 

<img src="${ticTac}" alt="Exemplo da aplicação da função de avaliação no jogo Tic-Tac Toe" class="resumo__gif"/>

O jogador X só conseguirá vencer pelas seguintes linhas: 1ª linha, 3ª linha, 1ª coluna e 3ª coluna. Por sua vez, o jogador O poderá vencer pela 1ª linha, 3ª linha, 2ª coluna, 3ª coluna, diagonal principal e diagonal secundária.
O resultado da função pode ser interpretado da seguinte maneira: se o valor for negativo, significa que o jogador O possui mais possibilidades de vitória do que X. Contudo, se o valor for positivo, significa que X possui mais chances de vencer. Já se o valor for 0, significa que ambos possuem a mesma quantidade de possibilidades de vitória.

Propriedades:
- Estados Terminais: Possui apenas valores representando vitória/empate/derrota.
- Estados Intermediários: 
    - Podem ter qualquer valor (2,5,100)
    - A escala precisa preservar a lógica
    - valores maiores -> melhores para o MAX
    - valores menores -> melhores para o MIN
- Teste de objetivo: 
    - Deve sempre ser baseado nas regras do jogo, não
    na função de avaliação.
    - Exemplo (jogo da velha): "3 em linha" encerra o jogo 
    independentemente da pontuação heurística`,
  },

  // ── PROVA 2 ────────────────────────────────────────────────
  {
    id: 21,
    provaId: 2,
    titulo: "Busca Local",
    conteudo: `A busca local é uma técnica utilizada para encontrar soluções em espaços de estados muito grandes ou até infinitos utilizando pouca memória. Diferente de outros métodos de busca, ela não armazena todos os estados nem utiliza uma árvore de busca, trabalhando apenas com o estado atual e buscando melhorá-lo de forma iterativa. Nesse tipo de abordagem, o espaço de estados corresponde ao conjunto completo das soluções possíveis, chamadas de configurações.
Na busca local, o algoritmo utiliza apenas decisões locais para tentar melhorar o estado atual. A partir de um estado específico, ele busca estados vizinhos que maximizem ou minimizem a função objetivo, dependendo do problema. Entretanto, pode acontecer de o algoritmo encontrar um máximo local e considerá-lo uma solução adequada, mesmo que ele não seja o máximo global. Além disso, a busca local não é recomendada para todos os problemas, principalmente quando é necessário garantir a solução ótima.
No problema das 8 rainhas, por exemplo, cada configuração representa todas as rainhas posicionadas no tabuleiro, mesmo que existam conflitos entre elas. Apesar de ser eficiente em termos de memória, a busca local possui a desvantagem de poder nunca explorar o estado em que a solução correta realmente se encontra. Além disso, os estados já visitados normalmente não são armazenados. A busca local é utilizada preferencialmente em problemas em que há limitação de memória ou espaços de busca muito grandes.

<strong>Espaço de estado paisagem(topologia)</strong>
O espaço de estados em busca local pode ser representado como uma paisagem(topologia), em que cada estado possui um valor definido pela função objetivo. Essa função mede a qualidade de uma possível solução, permitindo que o algoritmo explore os vizinhos do estado atual em busca de estados melhores. 
Na maioria dos casos, o objetivo é encontrar o melhor valor possível para a função objetivo. Contudo, durante a busca, o algoritmo pode encontrar soluções locais e não alcançar a solução ideal. 

<strong>Conceitos:</strong>
— Máximo global: maior valor encontrado para a função objetivo, representando o pico mais alto da paisagem. 
— Mínimo global: menor valor encontrado para a função objetivo, representando o ponto mais baixo da paisagem. 
— Máximo local: estado que possui valor maior que os estados vizinhos, mas que não é necessariamente o maior valor de toda a paisagem. 
— Mínimo local: estado que possui valor menor que os estados vizinhos, mas que não é necessariamente o menor valor de toda a paisagem. 
— Subida de encosta (Hill Climbing): método utilizado para encontrar o máximo global. O algoritmo vai “subindo” para estados cada vez melhores, porém pode parar em um máximo local sem alcançar o melhor valor possível. 
— Descida de gradiente (Gradient Descent): método utilizado para encontrar o mínimo global. O algoritmo segue na direção de maior diminuição da função objetivo, mas pode ficar preso em um mínimo local sem atingir o mínimo global.`,
  },


  {
    id: 22,
    provaId: 2,
    titulo: "Hill Climbing",
    conteudo: `O Hill Climbing é um algoritmo de busca local utilizado para encontrar soluções melhores de forma iterativa. Em cada etapa, o algoritmo analisa apenas os vizinhos do estado atual e escolhe aquele que possui o valor mais alto da função objetivo, ou seja, o vizinho que representa a encosta mais alta.
O processo continua enquanto existirem vizinhos com valores superiores ao estado atual. Quando nenhum vizinho apresenta um valor mais alto, o algoritmo encerra a execução. Por considerar apenas a melhor escolha imediata, sem analisar os possíveis caminhos futuros, o Hill Climbing também é conhecido como busca local gulosa.
Apesar de ser simples e eficiente, o algoritmo pode ficar preso em máximos ou mínimos locais. Isso ocorre porque o algoritmo interrompe a execução no momento em que não encontra mais vizinhos com valores melhores que o estado atual, mesmo que ainda exista uma solução superior em outra região do espaço de estados. Entretanto, em alguns problemas, esses máximos e mínimos locais podem ser considerados soluções aceitáveis.

<strong>Conceitos:</strong>
— Cordilheiras: são extensas sequências de máximos locais. A existência de cordilheiras pode fazer com que o algoritmo pare precocemente em um máximo local, encontrando apenas uma solução ótima local em vez do máximo global. 

<img src="${Cordilheira}" alt="Exemplo de uma cordilheira em um espaço de busca" class="resumo__gif"/>
<p class="resumo__gif-label">Exemplo de uma cordilheira em um espaço de busca</p>

— Platôs: são regiões em que os estados vizinhos possuem o mesmo valor da função objetivo. Isso pode fazer com que o algoritmo gaste muito tempo explorando lateralmente ou até pare prematuramente, sem conseguir avançar para estados melhores.
— Shoulders: são regiões semelhantes aos platôs, porém existe uma saída para estados melhores. O problema é que o algoritmo pode ter dificuldade em encontrar a direção correta para continuar a busca. 

<img src="${ShouldersPlato}" alt="Exemplo de um espaço de busca que contém um Shoulder e um Platô" class="resumo__gif"  style="max-width: 100%; max-height: 400px;"/>
<p class="resumo__gif-label">Exemplo de um espaço de busca que contém um Shoulder e um Platô</p>

<strong>Propriedades:</strong>
— Completo: Não. O algoritmo pode ficar preso em máximos locais, parar em platôs ou entrar em loops, não garantindo que encontrará uma solução mesmo que ela exista. 
— Ótimo: O algoritmo do Hill Climbing não consegue garantir que uma solução ótima seja encontrada. Contudo, alguns pontos devem ser considerados:
    — Em problemas convexos (onde existe apenas um pico principal e não há máximos locais), o algoritmo pode encontrar a solução ótima. 
    — Mesmo variantes como o Random-Restart Hill Climbing não conseguem garantir uma solução ótima em problemas normais (não convexos). 
    — Em alguns casos, uma solução subótima já é suficiente. 
    — Encontrar a solução ótima pode possuir um alto custo computacional. 

<strong>Random-restart Hill Climbing:</strong>
O Random-Restart Hill Climbing consiste em executar o algoritmo Hill Climbing múltiplas vezes a partir de estados iniciais aleatórios, escolhendo ao final a melhor solução encontrada.
Essa abordagem ajuda a evitar que o algoritmo fique preso em máximos locais. Contudo, não há garantia de que o máximo global será encontrado, embora as chances de alcançá-lo sejam aumentadas.
Além disso, o Random-Restart Hill Climbing consegue escapar de regiões conhecidas como shoulders. Porém, em regiões de platô, o algoritmo ainda pode apresentar pouco ou nenhum progresso significativo.`,
  },

  {
    id: 23,
    provaId: 2,
    titulo: "Simulated Annealing (Têmpera Simulada)",
    conteudo:`O Simulated Annealing combina a subida de encosta com um processo aleatório.
O algoritmo utiliza uma variável chamada temperatura, que é decrementada ao longo da execução. Essa temperatura é utilizada para medir a probabilidade de o algoritmo aceitar um estado pior que o atual.
À medida que a temperatura diminui, a probabilidade de aceitar estados piores também diminui. Por outro lado, quanto maior a temperatura, maior será a possibilidade de o algoritmo selecionar um estado considerado “ruim”.
Esse mecanismo é utilizado para “chacoalhar” a busca, permitindo que o algoritmo explore outras regiões do espaço de estados e evitando que ele fique preso em máximos locais.

— Temperatura alta: mais movimentos ruins são permitidos, aumentando a flexibilidade de escolha do algoritmo.
— Temperatura baixa: menos movimentos ruins são permitidos, reduzindo a flexibilidade de escolha.

O algoritmo de têmpera simulada pode ser utilizado tanto para encontrar o mínimo global quanto o máximo global. Em muitos casos, os problemas são tratados como maximização; porém, problemas de minimização podem ser resolvidos invertendo o sinal da função objetivo.

<strong>Propriedades:</strong>
— Completo: Não. Pode demorar muito para encontrar uma solução ou até mesmo parar a execução antes de encontrar a solução.
— Ótimo: Teoricamente, o algoritmo de Têmpera Simulada pode ser considerado ótimo. Isso ocorre porque, em situações onde a temperatura diminui de forma extremamente lenta e o algoritmo pode executar sem limite de tempo, ele consegue convergir para a solução ótima global. Contudo, na prática, o algoritmo normalmente é considerado não ótimo, pois alcançar essa solução exigiria um custo computacional muito elevado e um tempo de execução excessivamente grande.`,
  },

  {
    id: 24,
    provaId: 2,
    titulo: "Local Beam Search (Busca em feixe local)",
    conteudo: ` Diferente do Hill Climbing e do Simulated Annealing, que armazenam apenas o estado atual, o Local Beam Search mantém simultaneamente um conjunto de (k) estados.
O algoritmo inicia com estados aleatórios, cuja quantidade é definida pelo valor de (k). Por exemplo, se (k = 4), a busca começará com 4 estados aleatórios.
Em seguida, são gerados todos os vizinhos desses estados. Após a geração, os (k) melhores vizinhos são selecionados, e o processo se repete continuamente.
O algoritmo encerra sua execução quando encontra o estado objetivo entre os estados gerados.

<strong>Propriedades:</strong> 
Ótimo: Não. O Local Beam Search não garante encontrar a solução ótima global, pois pode convergir para máximos locais e descartar estados que poderiam levar à melhor solução. 
Completo: Não. O algoritmo não garante encontrar uma solução mesmo que ela exista, pois mantém apenas (k) estados simultaneamente e pode eliminar caminhos importantes durante a busca. 

<strong>Busca em feixe local estocástica</strong>
A busca em feixe local pode sofrer com a falta de diversidade, ou seja, os estados podem acabar concentrados em uma pequena região do espaço de estados.
Uma solução para esse problema é combinar a função objetivo com probabilidade para selecionar os sucessores.
Nessa abordagem, os estados mais promissores possuem maior chance de serem escolhidos, mas estados menos promissores ainda podem ser selecionados em menores proporções.
Isso aumenta a diversidade da busca e reduz as chances de o algoritmo ficar preso em uma única região do espaço de estados.`,
  },

  {
    id: 25,
    provaId: 2,
    titulo: "Algoritmos Genéticos",
    conteudo: `Os Algoritmos Genéticos são métodos de resolução de problemas de otimização inspirados no processo de seleção natural. Nesse método, existe uma população de indivíduos, também chamados de estados ou cromossomos, em que cada indivíduo representa uma possível solução para o problema.
Durante a execução, os indivíduos mais aptos, ou seja, aqueles que possuem melhores valores para a função objetivo, possuem maior chance de gerar descendentes. Esses novos indivíduos formam a próxima geração, permitindo que o algoritmo evolua gradualmente em busca da melhor solução possível.
O funcionamento do algoritmo simula mecanismos da evolução biológica para encontrar o cromossomo mais adaptável, correspondente à solução mais adequada do problema.

<strong>Propriedades:</strong> 
— Completo: Não são completos porque não garantem encontrar uma solução, mesmo que ela exista. O algoritmo pode convergir prematuramente para mínimos ou máximos locais ou encerrar a execução antes de explorar regiões importantes do espaço de busca.
— Ótimo: Não são ótimos porque não garantem encontrar o máximo ou mínimo global. Apesar de frequentemente produzirem boas soluções, o resultado encontrado pode ser apenas uma solução ótima local.

<strong>Geração:</strong> 
Uma geração corresponde ao conjunto de indivíduos(população) existente em um determinado momento da execução do algoritmo.
A cada geração, os indivíduos passam pelas etapas de seleção, crossover e mutação, gerando novos descendentes que formarão a próxima geração. Com isso, o algoritmo busca produzir populações cada vez mais adaptadas ao problema.

<strong>Algoritmo da formiga:</strong> 
É um método de otimização inspirado no comportamento das formigas na busca por alimento. As formigas deixam rastros de feromônio no caminho percorrido, e caminhos com maior quantidade de feromônio possuem maior probabilidade de serem escolhidos pelas outras formigas.
Com o tempo, os caminhos mais curtos e eficientes acumulam mais feromônios, permitindo que o algoritmo encontre boas soluções para problemas de otimização e busca de caminhos.
O algoritmo da formiga é utilizado em sistemas de GPS para encontrar rotas mais eficientes entre diferentes pontos.`,
  },

  {
    id: 26,
    provaId: 2,
    titulo: "Representação de um problema com Algoritmos Genéticos",
    conteudo: `Nos Algoritmos Genéticos, o problema é representado por um espaço de busca formado por uma população de indivíduos. Cada indivíduo corresponde a uma possível solução para o problema e é representado por um cromossomo.
O cromossomo é composto por um vetor de tamanho finito, cujos componentes podem assumir diferentes valores. Cada posição desse vetor é chamada de gene, e cada gene representa uma característica específica da solução individual.
A forma mais comum de representar cromossomos é utilizando representação binária, com valores 0 e 1. Isso ocorre porque a representação binária é simples de implementar e facilita operações importantes do algoritmo, como crossover e mutação. Além disso, os valores binários permitem indicar facilmente a presença ou ausência de determinadas características em uma solução.
Outra forma de representação é utilizar valores decimais, principalmente em problemas que envolvem valores contínuos.

<img src="${definicoesAG}" alt="Representação das principais definições de um algoritmo genético" class="resumo__gif" style="max-width: 100%; max-height: 100px;"/>
<p class="resumo__gif-label">Representação das principais definições de um algoritmo genético</p>


<strong>Fitness Score</strong>
A aptidão(Fitness) representa a capacidade de um indivíduo “competir” dentro da população dos Algoritmos Genéticos. Para isso, é calculado um fitness score para cada indivíduo, indicando a qualidade da solução que ele representa.
Os indivíduos que possuem melhores valores de fitness possuem maior probabilidade de serem selecionados para a reprodução e, consequentemente, gerar melhores descendentes durante a fase de crossover.
A função de fitness corresponde à função objetivo do problema, sendo responsável por avaliar o quão boa é cada solução encontrada pelo algoritmo.

<img src="${fitness}" alt="Exemplo de como funciona o algoritmo." class="resumo__gif"  style="max-width: 100%; max-height: 400px;"/>
<p class="resumo__gif-label">Exemplo de como funciona o algoritmo realiza a busca</p>

<strong>Roulette Wheel Selection</strong>
É um método de seleção utilizado nos Algoritmos Genéticos em que a probabilidade de um indivíduo ser escolhido é proporcional ao seu fitness. Dessa forma, quanto maior for o fitness de um cromossomo, maior será sua chance de ser selecionado para reprodução.
O funcionamento pode ser comparado a uma roleta com várias posições. Considerando uma roleta com 100 posições, cada cromossomo ocupa uma quantidade de espaços proporcional ao seu valor de fitness. Durante a seleção, são gerados números aleatórios entre 1 e 100, e o indivíduo correspondente à posição sorteada é escolhido.
Em implementações simples, um mesmo cromossomo pode ser selecionado várias vezes. Quando isso acontece e o indivíduo reproduz com ele mesmo, os descendentes tendem a ser idênticos ao pai, reduzindo a diversidade genética da população.
Para evitar esse problema, utiliza-se a seleção sem reposição. Nesse método, após um cromossomo ser selecionado como pai, ele não pode ser escolhido novamente na mesma etapa de seleção, aumentando a diversidade genética dos descendentes.

<strong>Crossover</strong>
O Crossover é a principal etapa dos Algoritmos Genéticos. Nessa fase, dois indivíduos selecionados anteriormente são utilizados para gerar um novo descendente. O filho é criado combinando características dos dois pais, formando uma nova possível solução para o problema.
A escolha das características herdadas de cada pai ocorre de forma aleatória, permitindo que diferentes combinações sejam geradas ao longo das gerações.
Existem diferentes operadores de crossover utilizados nos Algoritmos Genéticos para combinar características dos pais e gerar novos descendentes.
Principais tipos:
— One-point crossover: utiliza um único ponto de corte no cromossomo. Após esse ponto, as partes finais dos pais são trocadas para gerar os filhos.
— Two-point crossover: utiliza dois pontos de corte. A região entre esses pontos é trocada entre os pais, permitindo combinações mais variadas.
— Uniform crossover: cada gene do descendente é escolhido aleatoriamente entre os genes dos dois pais, aumentando a diversidade genética.

<img src="${crossover2}" alt="Representação de um One-point crossover" class="resumo__gif"/>
<p class="resumo__gif-label">Representação de um One-point crossover</p>
<img src="${crossover3}" alt="Representação de um Two-point crossover" class="resumo__gif"/>
<p class="resumo__gif-label">Representação de um Two-point crossover</p>
<img src="${crossover1}" alt="Representação de um Uniform crossover" class="resumo__gif"/>
<p class="resumo__gif-label">Representação de um Uniform crossover</p>

<strong>Mutação</strong>
A mutação é uma etapa utilizada nos Algoritmos Genéticos para aumentar a diversidade genética da população. Quando os pais possuem cromossomos muito parecidos, ou até mesmo iguais, os descendentes gerados também tendem a ser semelhantes. Isso reduz a diversidade da população e pode fazer o algoritmo ficar preso em mínimos ou máximos locais.
Para evitar esse problema, são realizadas alterações aleatórias nos genes dos cromossomos, permitindo o surgimento de novas características e aumentando a variedade de soluções possíveis.
A frequência com que essas alterações ocorrem é definida pela taxa de mutação.
A taxa de mutação é o valor que define a frequência com que alterações aleatórias irão ocorrer nos genes dos cromossomos durante a etapa de mutação dos Algoritmos Genéticos.
Ela funciona como uma probabilidade. Por exemplo, uma taxa de mutação de 5% indica que cada gene possui 5% de chance de sofrer uma alteração aleatória.
O objetivo da taxa de mutação é aumentar a diversidade genética da população, evitando que todos os indivíduos fiquem muito parecidos e que o algoritmo fique preso em mínimos ou máximos locais.


<img src="${mutacao}" alt="Representação da realização de uma possível mutação no filho" class="resumo__gif"/>
<p class="resumo__gif-label">Representação da realização de uma possível mutação no filho</p>

<strong>Critério de parada</strong>
Os critérios de parada definem quando a execução de um Algoritmo Genético deve ser encerrada. 
O cenário ideal é encontrar o máximo global, ou seja, a melhor solução possível para o problema. Contudo, nem sempre isso é possível, principalmente em espaços de busca muito grandes.
Por isso, outros critérios de parada podem ser utilizados durante a execução do algoritmo.
Principais critérios de parada:
— Encontrar o máximo global: situação ideal em que o algoritmo encontra a melhor solução possível
— Limite de tempo de execução: o algoritmo é encerrado após determinado tempo
— Limite do número de iterações(gerações): a execução para após atingir uma quantidade máxima de gerações
— Sucessivas populações com baixa diversidade: indica que os indivíduos estão muito parecidos e que o algoritmo pode ter convergido para uma solução local.

<strong>Elitismo</strong>
O elitismo é uma estratégia utilizada nos Algoritmos Genéticos para preservar os melhores indivíduos da população ao longo das gerações.
Após a geração de novos descendentes, é necessário decidir se os pais permanecerão ou serão removidos da população. Remover os pais pode causar a perda de características importantes de indivíduos bem adaptados. Por outro lado, manter muitos indivíduos antigos pode reduzir a diversidade genética da população.
O elitismo busca equilibrar esse processo, garantindo que os indivíduos mais aptos sejam preservados para a próxima geração.`,
  },

  {
    id: 27,
    provaId: 2,
    titulo: "Aplicações do Algoritmo Genético",
    conteudo:`Os Algoritmos Genéticos possuem aplicações em diversas áreas, principalmente em problemas de otimização e busca por melhores soluções.
Principais aplicações:
—  Processamento de Imagens: utilizados em tarefas como segmentação de imagens, auxiliando na identificação e separação de regiões importantes.
— Ciência Médica: ajudam na determinação da estrutura do DNA utilizando informações espectrométricas.
— Mercado Financeiro: utilizados para encontrar a melhor alocação de ativos em uma carteira de investimentos, buscando equilibrar risco e retorno.
— Machine Learning:
    • Ajuste de hiperparâmetros(tuning)
    • Definição da melhor arquitetura para redes neurais, como quantidade de neurônios, camadas ocultas, filtros e pooling
    • Seleção de atributos(feature selection)`,
  },

  {
    id: 28,
    provaId: 2,
    titulo: "Seleção de atributos(feature selection)",
    conteudo:` A seleção de atributos é utilizada para escolher as características mais relevantes de um conjunto de dados, reduzindo informações desnecessárias e melhorando o desempenho dos modelos de aprendizado de máquina.
Principais métodos:
— Filter: avalia estatisticamente cada atributo de forma independente do modelo de aprendizado. Utiliza métricas como correlação de Pearson e informação mútua para identificar os atributos mais relevantes.
— Embedded: a seleção de atributos ocorre durante o treinamento do próprio algoritmo de aprendizado. Alguns modelos, como Árvores de Decisão, conseguem identificar automaticamente quais atributos são mais importantes.
— Wrapper: realiza o treinamento do modelo várias vezes utilizando diferentes combinações de atributos e compara o desempenho obtido em cada caso para encontrar a melhor seleção.

<strong>Métodos de wrapper populares</strong>
O Forward Selection inicia com um modelo sem atributos. A cada etapa, o algoritmo adiciona a característica que proporciona a maior melhoria no desempenho do modelo. O processo continua até que não existam melhorias significativas ou até atingir um critério de parada.

<img src="${ForwardSelection}" alt="Exemplo da execução do  Forward Selection" class="resumo__gif"/>
<p class="resumo__gif-label">Exemplo da execução do  Forward Selection</p>

Já o Backward Elimination funciona de forma oposta. Nesse método, o modelo começa utilizando todos os atributos disponíveis e, em cada etapa, remove a característica menos relevante. Após cada remoção, o modelo é treinado novamente para verificar se o desempenho continua adequado.
Em ambos os métodos, é necessário definir critérios de parada para evitar excesso de processamento e complexidade desnecessária.

<img src="${BackwardSelection}" alt="Exemplo da execução do algoritmo Backward Elimination" class="resumo__gif"/>
<p class="resumo__gif-label">Exemplo da execução do algoritmo Backward Elimination</p>`,
  }
];

export const provas = [
  {
    id: 1,
    titulo: "Prova 1",
    descricao: "Fundamentos de IA, agentes, algoritmos de busca e teoria dos jogos.",
    emoji: "📘",
  },
  {
    id: 2,
    titulo: "Prova 2",
    descricao: "Exemplo com conteúdo sobre futebol.",
    emoji: "📗",
  },
];

export default topicos;