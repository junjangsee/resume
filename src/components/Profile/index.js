import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin: 0 0 100px 0;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 300px;
  width: 300px;
  height: 480px;
  margin: 0 50px 0 0;
  padding: 30px 25px;
  background-image: linear-gradient(
    -225deg,
    #2cd8d5 0%,
    #a9a4e8 56%,
    #ffbac3 100%
  );
  color: #ffffff;
  font-weight: 300;
  border-radius: 5px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;

const Name = styled.span`
  display: block;
  margin: 0 0 10px 0;
  font-size: 22px;
  font-weight: 300;
`;

const AddressContent = styled.div`
  margin: 0 0 7px 0;
  font-size: 14px;
  font-weight: 200;

  &:last-child {
    margin: 0;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
`;

const Bow = styled.h1`
  display: block;
  margin: 0 0 40px 0;
  font-size: 65px;
  font-weight: 600;
  line-height: 1.2;
`;

const Description = styled.div`
  font-size: 22px;
  word-break: keep-all;
  color: #a7a7a7;
  line-height: 1.4;
`;

const Profile = () => {
  return (
    <Container>
      <Left className='card'>
        <div className='name'>
          <div>
            <Name>김준형, Kim JunHyeoung</Name>
          </div>
          <div>Web Front-End</div>
        </div>
        <div className='address'>
          <AddressContent>
            Git |{' '}
            <a
              style={{ color: '#ffffff' }}
              href='https://github.com/junjangsee'
              target='_blank'>
              https://github.com/junjangsee
            </a>
          </AddressContent>
          <AddressContent>
            Blog |{' '}
            <a
              style={{ color: '#ffffff' }}
              href='https://junjangsee.tistory.com'
              target='_blank'>
              https://junjangsee.tistory.com/
            </a>
          </AddressContent>
          <AddressContent>Email | junjang.see@gmail.com</AddressContent>
        </div>
      </Left>
      <Right className='description'>
        <Bow>
          안녕하세요, <br /> 저는 김준형입니다.
        </Bow>
        <Description>
          빠르게 바뀌어 가는 웹 생태계와 다양한 언어 및 라이브러리, 프레임워크에
          관심이 많습니다. <br />
          발전을 위해 다른 언어나 라이브러리, 프레임워크를 학습하는 것에
          두려움이 없으며, 부족한 부분에 대해 꾸준히 채워나가고 있습니다. <br />
          혼자가 아닌 협업을 통해 더욱 높은 곳으로 올라갈 수 있다고 믿습니다.
          <br />
          개인 블로그를 통해 정보를 공유하고 학습하고 있습니다.
        </Description>
      </Right>
    </Container>
  );
};

export default Profile;
