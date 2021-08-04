# Blackflix

Projeto de releitura da página inicial da Netflix, apenas com conteúdos estrelados por atores negros. O site pode ser acessado [aqui](https://lufesipe.github.io/blackflix/).



Abaixo, algumas explicações e decisões feitas:

- HTML

  Contido todo no arquivo index.html, aqui se encontra a criação básica da página. 

  No cabeçalho adicionou-se uma nav bar, no qual o logo Blackflix e "Home" te levam para a própria página atual e "My list" te encaminha para a seção da lista de filmes dentro da página. Os textos de "Series", "Movies" e os logos de pesquisa, notificação e usuário não possuem funções. Nos textos, ao passar o mouse em cima, há uma troca de cor feita com CSS utilizando a pseudo classe :hover.

  No filme principal, o botões "Play" e "More info" possuem uma animação de troca de cor feita com a pseudo classe :hover e funções JavaScript. Além disso, o primeiro botão te leva para um trailer do filme e o segundo abre uma janela modal, assim como ocorre na Netflix.

  Após isto, há o carrosel de filmes feito utilizando o jQuery "Owl Carousel 2". Ao clicar em qualquer um dos filmes, este te leva para o trailer oficial do mesmo.

  

- CSS

  Foi dividido entre o estilo principal no arquivo style.css e a parte de responsividade no arquivo responsive.css. Optei por estilizar para o menor padrão de tela e tornar o visual responsivo ao aumentá-la.

  Pela primeira vez decidi por utilizar variáveis CSS para as cores básicas da página.

  No filme principal, ao invés de inserir a imagem por HTML, usei a propriedade background para estilizar o fundo, assim como ensinado na aula.

  Optei por explorar bastante o conceito de flexbox, visando treinar mais.

  Escolhi fazer uma janela modal, com a ajuda de um tutorial, apenas utilizando CSS neste momento, visto que ainda estou aprendendo JavaScript.

  

- JS

  Em primeiro lugar temos as funções que fazem a transição dos logos dos botões "Play" e "More info", que decidi adicionar.

  Após, temos as configurações do plugin Owl Carousel.

  E, finalmente, as funções que fazem com que a janela modal abra e feche.

  

- Aprendizados e dificuldades

  Neste projeto busquei explorar bastante o uso de conteiners a fim de utilizar flexbox, o que me permitiu entender melhor o funcionamento das propriedades justify-content e align-items.

  Pela primeira vez fiz uso de váriaveis CSS, que parecem ser grandes facilitadoras para grandes alterações.

  Pude novamente praticar a importação de fontes externas.

  Este projeto me permitiu também ter contato com o uso de janela modal, algo que ainda desconhecia.

  As maiores dificuldades se apresentaram no momento de estilizar a janela modal, pois nunca havia feito antes e na parte de JS das animações dos botões "Play" e "More info".

  

- Possíveis melhorias

  - Explorar melhor o visual da janela modal;
  - Melhorar o visual do carrosel, adicionando, se possível, botões laterais de rolagem;
  - Adicionar a cor de fundo na nav bar apenas quando a barra de rolagem for utilizada;
  - Adicionar outros carrosséis.
