import HackathonPorject from "../img/home-ods.png";
import ImcCalcHome from "../img/home-imc.jpeg";
import ImcCalcResult from "../img/result-imc.jpeg";
import PortfolioCPDI from "../img/gif.gif";
import SaudeProject from "../img/+saude.png";
import PicPayHome from "../img/picpay-home.jpeg";
import PicPayWallet from "../img/picpay-wallet.jpeg";
import DevQuiz from "../img/dev-quiz.png";
import MoviesLib from "../img/movies-lib.png";
import GitHubFinder from "../img/github-finder.png";

export const projectsData = [
  {
    title: "Espaço ODS",
    img: HackathonPorject,
    description:
      '"Site vencedor do hackathon CPDI, focado nos ODS 2 (Fome Zero) e 6 (Água Potável e Saneamento). Apresenta um quiz interativo que desafia os usuários a testarem seus conhecimentos de forma dinâmica e educativa. Desenvolvido como uma SPA, utiliza Context API para gerenciar estados e garantir fluidez na navegação. O design é responsivo e intuitivo, promovendo acessibilidade e engajamento com os temas abordados."',
    link: "https://welington1209.github.io/Hackaton-CPDI-ODS/",
  },
  {
    title: "Portfolio Ibrahim Memon",
    img: PortfolioCPDI,
    description:
      "Portfólio desenvolvido durante o curso CPDI, baseado em um modelo Figma criado por Ibrahim Memon. Construído com JavaScript puro e integrado a uma biblioteca de animação de scroll, o projeto apresenta um design moderno e chamativo, destacando transições suaves e interatividade. Ideal para exibir projetos de forma profissional e atraente.",
    link: "https://welington1209.github.io/portfolio-2024/",
  },
  {
    title: "+Saúde",
    img: SaudeProject,
    description:
      "O projeto +Saúde foi criado como parte da formatura do curso CPDI, com a ideia de ser um site para serviços médicos. Ele permite que os usuários acessem seus exames, acompanhem consultas e encontrem profissionais de confiança de forma fácil e prática. O site tem um visual simples e moderno, pensado para facilitar a navegação e tornar a experiência do usuário mais agradável.",
    link: "https://welington1209.github.io/projeto_CPDI/",
  },
  {
    title: "Movies Lib",
    img: MoviesLib,
    description:
      "Desenvolvido durante o curso Formação Front-end, esta biblioteca de filmes utiliza a API do TMDB para oferecer uma experiência interativa. Funcionalidades principais: Categorias: Filmes mais populares, melhores avaliados e futuros lançamentos. Busca Avançada: Pesquise qualquer filme e acesse detalhes como sinopse, data de lançamento, duração, custo de produção e elenco. Detalhamento Completo: Cada filme possui uma página dedicada com informações detalhadas, organizadas de forma intuitiva.",
    link: "https://movies-lib-rho.vercel.app/",
  },
  {
    title: "Dev Quiz",
    img: DevQuiz,
    description:
      "Este projeto foi desenvolvido durante o curso Formação Front-end e aprimorado com funcionalidades extras. Trata-se de um quiz temático sobre programação, onde o usuário pode escolher a categoria das perguntas antes de iniciar o jogo, personalizando a experiência; receber dicas relacionadas à pergunta como forma de ajuda; e utilizar a opção de excluir uma alternativa errada.",
    link: "https://welington1209.github.io/dev_quiz/",
  },
  {
    title: "GitHub Finder",
    img: GitHubFinder,
    description:
      "É uma ferramenta que permite buscar e explorar perfis de usuários no GitHub. Ao inserir um nome de usuário, o sistema exibe informações detalhadas, como o perfil do usuário, seus principais repositórios, seguidores, e estatísticas de atividade. A aplicação oferece uma interface simples e rápida, facilitando a navegação e o acesso ao conteúdo de outros desenvolvedores.",
    link: "https://welington1209.github.io/GitHub_Finder/",
  },
  {
    title: "PicPay Clone",
    img: [PicPayHome, PicPayWallet],
    description:
      "Desenvolvido como um aplicativo para simular funcionalidades de uma carteira digital. Nele, o usuário começa com um saldo inicial fictício de R$ 100,00 e pode realizar transações simuladas, como pagamentos via Pix. O app permite cadastrar e compartilhar chaves Pix, além de gerar comprovantes fictícios ao final de cada transação.",
    link: null,
    download: "picpay",
  },
  {
    title: "Imc Calculator",
    img: [ImcCalcHome, ImcCalcResult],
    description:
      "Aplicativo desenvolvido com Expo para calcular o Índice de Massa Corporal (IMC) de forma prática. O app exibe o resultado, oferece dicas de saúde personalizadas e permite compartilhar os dados diretamente com amigos ou redes sociais.",
    link: null,
    download: "imc",
  },
];
