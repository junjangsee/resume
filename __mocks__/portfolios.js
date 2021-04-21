const portfolios = [
  {
    id: 0,
    url: 'https://github.com/fronttigger/study-client',
    title: 'Matched',
    dueDate: '2021. 04 - 현재',
    description: `사이드 프로젝트 매칭 서비스를 제작하고 있습니다. <br />
                    프론트엔드 개발을 담당하고 있으며 서버사이드렌더링(SSR)과 타입스크립트(TS) 학습을 위해 Next.js를 활용하고 있습니다. <br />
                    또한 StoryBook을 활용한 컴포넌트 단위의 개발을 통해 디자이너와의 협업과 학습을 도모하고 있습니다. <br />
                    기획, 디자인, 백엔드와 함께 협업하며 실제 구현한 서비스를 운영해보는 경험을 위해 개발하고 있습니다.`,
    learns: [
      'Next.js를 활용한 서버사이드렌더링 구현',
      '타입스크립트를 통한 안정적인 개발과 디버깅',
      '기획자, 디자이너, 백엔드 개발자와의 협업 및 의사소통',
    ],
  },
  {
    id: 1,
    url: 'https://github.com/junjangsee/react-airbnb-clone',
    title: 'Airbnb Clone',
    dueDate: '2020. 11 - 2020. 11',
    description: `Airbnb의 모바일 버전을 React를 활용하여 구현하였습니다. <br />
                    Class Component로 구현 했을 때와의 차이점을 학습하고, Function Component와 React Hooks를 학습하였습니다. <br />
                    Server와 Admin을 함께 구현하여 서비스의 전체 흐름을 알기 위해 개발하고 있습니다.`,
    learns: [
      'Express.js를 활용하여 RESTful API를 구현',
      'React Hooks의 활용한 데이터 분배',
      'axios 라이브러리를 통한 API 비동기 통신',
    ],
  },
  {
    id: 2,
    url: 'https://github.com/junjangsee/react-instagram-clone',
    title: 'React Instagram Clone',
    dueDate: '2020. 10 - 2020. 11',
    description: `Instagram을 React를 활용하여 구현하였습니다. <br />
                기존 Vanila Javascript로 구현 했을 때와 차이점을 비교하고 체감하며 React의 Class Component의 특성을 학습하였습니다. <br />
                webpack(웹팩)을 이해하기 위해 웹팩으로 프로젝트 세팅을 하였으며 사용법을 익혔습니다.`,
    learns: [
      'Container와 Presentational 컴포넌트를 구분하여 데이터를 받는 부분과 처리하는 부분을 구분',
      '컴포넌트 라이프사이클을 이해하고 활용하여 상황에 맞게끔 활용',
      'React-Router를 통한 페이지 라우팅',
      '재사용 컴포넌트를 구현하고 활용',
      'webpack으로 React 프로젝트 세팅과 활용법',
      'CSS Module을 통한 Scope 분리',
    ],
  },
  {
    id: 3,
    url: 'https://github.com/junjangsee/vue-todolist',
    title: 'Vue 할 일 목록',
    dueDate: '2020. 10',
    description: `할 일 목록을 Vue 프레임워크를 활용하여 구현하였습니다. <br />
            Vue 프레임워크를 학습하기 위해 대표적인 할 일 목록을 개발해 보면서 기초적인 문법과 사용법을 익혔습니다.`,
    learns: [
      '컴포넌트 단위의 state 관리',
      'LocalStorage를 활용해 브라우저에서 데이터를 관리하는 방법',
      'computed를 활용한 Filter 기능',
      '컴포넌트간 props 및 bind 활용',
    ],
  },
  {
    id: 4,
    url: 'https://github.com/junjangsee/javascript-instagram-clone',
    title: 'Vanila Javascript Instagram Clone',
    dueDate: '2020. 09 - 2020. 10',
    description: `인스타그램 메인 페이지, 프로필 페이지, 상세 페이지를 바닐라
        스크립트로 클론하였습니다. <br />
        라이브러리나 프레임워크 없이 구현하려고 하였고, 필요한 라이브러리를
        직접 구현해 보는 등 자바스크립트를 이해하기 위해 노력했습니다.`,
    learns: [
      'Router(라우터)를 직접 구현하여 SPA(Single Page Application) 개발',
      '서버와 직접 통신하기 위한 API 통신 객체(XMLHttpRequest)를 통해 통신하는 방법',
      '통신 후 가져온 데이터에 대한 Re-Render 이슈',
      '컴포넌트를 분리하여 관리하는 방법',
    ],
  },
];

export default portfolios;
