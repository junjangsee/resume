import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 0 64px 0;
  border-bottom: 1px solid #eee;
`;

const Container = styled.div`
  padding: 0 0 48px 0;
`;

const Title = styled.h3`
  display: block;
  margin: 0 0 16px 0;
  font-size: 28px;
  font-weight: 600;
`;

const Link = styled.a`
  color: #80a3d2;
  font-size: 28px;
  font-weight: 600;
  transition: color 200ms ease-in;

  &:hover {
    color: #3a7bd5;
  }
`;

const SubTitle = styled.h4`
  display: block;
  margin: 0 0 8px 0;
  font-size: 20px;
  font-weight: 500;
`;

const Text = styled.span`
  margin: ${(props) => props.margin};
  display: block;
  font-size: 17px;
  font-weight: 300;
  line-height: 1.3;
  word-break: keep-all;
`;

const ListContainer = styled.ul`
  position: relative;
  margin: 0 0 16px 0;
`;

const List = styled.li`
  padding: 4px 0 4px 14px;
  font-size: 17px;
  font-weight: 300;

  &::before {
    position: absolute;
    left: 0;
    content: '•';
    color: #3a7bd5;
  }
`;

const Portfolio = ({ portfolios }) => {
  return (
    <>
      <Section>
        {portfolios.map((portfolio, index) => (
          <Container key={index}>
            <Title>
              <Link target='_blank' href={portfolio.url}>
                {portfolio.title}
              </Link>
            </Title>
            <Text margin='0 0 24px 0'>{portfolio.dueDate}</Text>
            <Text
              margin='0 0 20px 0'
              dangerouslySetInnerHTML={{
                __html: portfolio.description,
              }}></Text>
            <SubTitle>what did I learn</SubTitle>
            <ListContainer>
              {portfolio.learns.map((learn, index) => (
                <List key={index}>{learn}</List>
              ))}
            </ListContainer>
          </Container>
        ))}
      </Section>
    </>
  );
};

export default Portfolio;
