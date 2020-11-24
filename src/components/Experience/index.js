import React from 'react';
import styled from 'styled-components';

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Section = styled.section``;

const Row = styled.div`
  display: flex;
  margin: 0 0 64px 0;
  padding: 48px 0 48px 0;
  border-bottom: 1px solid #eee;
`;

const Project = styled.div`
  padding: 24px 0 24px 0;

  &:first-child {
    padding: 0 0 24px 0;
  }
`;

const Left = styled.div`
  ${Column}
  width: 300px;
  min-width: 300px;
  margin: 0 50px 0 0;
`;

const Title = styled.h3`
  display: block;
  margin: 0 0 16px 0;
  font-size: 28px;
  font-weight: 600;
`;

const SubTitle = styled.h4`
  display: block;
  margin: 0 0 8px 0;
  font-size: 20px;
  font-weight: 500;
`;

const Right = styled.div`
  ${Column}
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

const Stack = styled.span`
  &::after {
    content: ' • ';
  }

  &:last-child::after {
    content: '';
  }
`;

const Experience = ({ experiences }) => {
  return (
    <>
      <Section>
        {experiences.map((experience, index) => (
          <Row key={index}>
            <Left>
              <div className='company'>
                <Title>{experience.company}</Title>
                <Column>
                  <Text>{experience.job}</Text>
                  <Text>{experience.dueDate}</Text>
                </Column>
              </div>
            </Left>
            <Right>
              {experience.projects.map((project, index) => (
                <Project key={index}>
                  <Title>{project.title}</Title>
                  <Text margin='0 0 24px 0'>{project.dueDate}</Text>
                  <SubTitle>Description</SubTitle>
                  <Text margin='0 0 16px 0'>{project.description}</Text>
                  <SubTitle>What did I do</SubTitle>
                  <ListContainer>
                    {project.todos.map((todo, index) => (
                      <List key={index}>{todo}</List>
                    ))}
                  </ListContainer>
                  <SubTitle>Tech Stack</SubTitle>
                  <Text>
                    {project.stacks.map((stack, index) => (
                      <Stack key={index}>{stack}</Stack>
                    ))}
                  </Text>
                </Project>
              ))}
            </Right>
          </Row>
        ))}
      </Section>
    </>
  );
};

export default Experience;
