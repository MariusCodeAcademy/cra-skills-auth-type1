import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3rem;
  font-weight: normal;
`;

function HomePage() {
  return (
    <main>
      <Title>Home</Title>

      <section>
        <h2>My skills</h2>
      </section>
    </main>
  );
}

export default HomePage;
