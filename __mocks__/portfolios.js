const portfolios = [
  {
    id: 1,
    url: 'https://github.com/junjangsee/react-airbnb-clone',
    title: 'Airbnb Clone',
    dueDate: '2020. 11 - 현재',
    description: `Airbnb의 모바일 버전을 React를 활용하여 구현 하였습니다. <br />
                    Class Component로 구현 했을 때와의 차이점을 학습하고, Function Component와 React Hooks를 학습하였습니다. <br />
                    Server와 Admin을 함께 구현하여 서비스의 전체 흐름을 알기 위해 개발하고 있습니다.`,
    learns: [
      'Express를 활용한 API 구현',
      'React Hooks의 활용',
      'axios 라이브러리를 통한 API 비동기 통신',
    ],
  },
  {
    id: 2,
    url: 'https://github.com/junjangsee/react-instagram-clone',
    title: 'React Instagram Clone',
    dueDate: '2020. 10 - 현재',
    description: `Instagram을 React를 활용하여 구현 하였습니다. <br />
                기존 Vanila Javascript로 구현 했을 때와 차이점을 비교하고 체감하며 React의 Class Component의 특성을 학습하였습니다. <br />
                webpack(웹팩)을 이해하기 위해 웹팩으로 프로젝트 세팅을 하였으며 사용법을 익혔습니다.`,
    learns: [
      '프리젠테이셔널 & 컨테이너 컴포넌트를 구분하여 관심사 분리',
      '컴포넌트 라이프사이클에 맞는 메소드를 활용',
      'React-Router를 통한 페이지 라우팅',
      '레이아웃 단위의 재사용 컴포넌트 구현',
      'webpack을 활용한 번들링',
      'CSS Module을 통한 Scope 분리',
    ],
  },
  {
    id: 3,
    url: 'https://github.com/junjangsee/vue-todolist',
    title: 'Vue 할 일 목록',
    dueDate: '2020. 10',
    description: `할 일 목록을 Vue 프레임워크를 활용하여 구현 하였습니다. <br />
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