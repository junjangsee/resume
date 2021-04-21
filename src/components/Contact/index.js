import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
`;

const Point = styled.div`
  margin: 0 10px 0 0;
  padding: 6px 6px;
  font-size: 14px;
  border-radius: 3px;
  cursor: pointer;
  background-color: ${(props) => props.color};
  &:last-child {
    margin: 0;
  }
`;

const Link = styled.a`
  color: #ffffff;
`;

const Contact = () => {
  return (
    <>
      <Section>
        <Point color='black'>
          <Link target='_blank' href='https://github.com/fronttigger'>
            Github
          </Link>
        </Point>
        <Point color='#54a0ff'>
          <Link target='_blank' href='https://tigger.dev'>
            Blog
          </Link>
        </Point>
        <Point color='#feca57'>
          <Link href='mailto:fronttigger@gmail.com'>Email</Link>
        </Point>
      </Section>
    </>
  );
};

export default Contact;
