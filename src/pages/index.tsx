import { Aside, Container, Content, Title } from '@/styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
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
      </Content>
    </Container>
  );
};

export default Home;
