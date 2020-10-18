import {
  Aside,
  Container,
  Content,
  Experiences,
  Main,
  Title,
} from '@/styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <div>
        <Aside>
          <div>
            <h4>Contato</h4>
            <span>(22) 99888-6046</span>
            <span>raul.gsouza@gmail.com</span>
          </div>
          <div>
            <h4>Endereço</h4>
            <span>R. Antonio Oliveira Gama, 202 </span>
            <span>Cabo Frio/RJ</span>
          </div>
        </Aside>
        <Content>
          <Title>
            <h1>Raul Pinto Coelho Garcia de Souza</h1>
            <span>Desenvolvedor | Node.JS, ReactJS, React Native</span>
          </Title>

          <Main>
            <div>
              <h2>Sobre mim</h2>
              <p>
                Estudante de desenvolvimento focado na stack javascript Node.js,
                ReactJS e React Native. Buscando primeiras experiências
                profissionais em desenvolvimento e trabalho remoto.
              </p>
              <p>
                Tive meu primeiro contato com a programação na faculdade de
                Sistemas de Informação em 2013 estudando C++, Java e bancos de
                dados SQL. Em 2019 voltei a focar meus estudos na programação
                entrando no Bootcamp GoStack da Rocketseat. Nesse bootcamp
                aprendi a criar uma aplicação do zero, desenvolvendo seu backend
                e frontend web e mobile, conexão com bancos de dados relacionais
                e não relacionais, testes e deploy.
              </p>
            </div>
            <div>
              <h2>Habilidades</h2>
              <ul>
                <li>
                  <img src="/berry.svg" alt="" />
                  Typescript
                </li>
                <li>
                  <img src="/berry.svg" alt="" />
                  Node.js
                </li>
                <li>
                  <img src="/berry.svg" alt="" />
                  ReactJS
                </li>
                <li>
                  <img src="/berry.svg" alt="" />
                  Next.js
                </li>
                <li>
                  <img src="/berry.svg" alt="" />
                  React Native
                </li>
                <li>
                  <img src="/berry.svg" alt="" />
                  Docker
                </li>
                <li>
                  <img src="/berry.svg" alt="" />
                  Git
                </li>
                <li>
                  <img src="/berry.svg" alt="" />
                  Inglês
                </li>
              </ul>
            </div>
            <div>
              <h2>Formação</h2>

              <ul className="formation">
                <li>
                  <strong>Rocketseat</strong>
                  <span>Bootcamp Node.js, ReactJS, React Native</span>
                </li>
                <li>
                  <strong>Universidade estácio de sá</strong>
                  <span>
                    Sistemas de informação - Previsão de conclusão 2021
                  </span>
                </li>
              </ul>
            </div>
          </Main>
          <Experiences>
            <h2>Projetos</h2>
            <ul>
              <li>
                <strong>
                  <a href="https://github.com/rgarcia-s/Rocketseat-GoBarber">
                    GoBarber
                  </a>
                </strong>

                <p>
                  Sistema de agendamento de serviços para barbearias construído
                  com Node.js, ReactJS e React Native
                </p>
              </li>
              <li>
                <strong>
                  <a href="https://github.com/rgarcia-s/rocketseat-gympoint">
                    Gympoint
                  </a>
                </strong>

                <p>
                  Sistema de agendamento de gerenciamento de alunos para
                  academias construído com Node.js, ReactJS e React Native
                </p>
              </li>
              <li>
                <strong>
                  <a href="https://github.com/rgarcia-s/Movie-Manager">
                    Movie Manager
                  </a>

                  <span> - </span>

                  <a href="https://movie-manager.vercel.app/">Live Preview</a>
                </strong>

                <p>
                  Website para visualização de dados de filmes e séries
                  construído com Next.js e conexão com api externa. (Em
                  construção)
                </p>
              </li>
            </ul>
          </Experiences>
        </Content>
      </div>
    </Container>
  );
};

export default Home;
