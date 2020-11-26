import Head from 'next/head';
import styled from 'styled-components';
import ResetStyles from '../public/reset-styles';
import Profile from '../src/components/Profile';
import Experience from '../src/components/Experience';
import Portfolio from '../src/components/Portfolio';
import Contact from '../src/components/Contact';
import experiences from '../__mocks__/experiences';
import portfolios from '../__mocks__/portfolios';

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 80px 0 80px 0;
`;

const Subject = styled.h2`
  display: block;
  margin: ${(props) => props.margin};
  font-size: 40px;
  font-weight: 500;
`;

export default function Home() {
  return (
    <>
      <ResetStyles />
      <Head>
        <title>Resume, JunHyeoung Kim.</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Container>
        <Profile />
        <Subject margin='0 0 40px 0'>Portfolio</Subject>
        <Portfolio portfolios={portfolios} />
        <Subject>Experience</Subject>
        <Experience experiences={experiences} />
        <Subject margin='0 0 40px 0'>Contact</Subject>
        <Contact />
      </Container>
    </>
  );
}
