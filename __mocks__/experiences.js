const experiences = [
  {
    id: 1,
    company: '보닥(아이지넷)',
    job: 'Frontend Engineer',
    dueDate: '2020. 12 - 현재',
    projects: [
      {
        id: 1,
        title: 'Finder(고객 검색 & 고객 상담 요청 관리)',
        dueDate: '2020. 12 - 현재',
        description: `사내에서 사용되는 고객 검색과 요청된 상담 목록을 관리하는 서비스를 구축 중입니다.`,
        todos: [
          '로그인 & 로그아웃 기능',
          '개인정보 수정 기능',
          'GoogleOTP를 연동한 2차 인증 기능',
          '고객 검색 기능',
          '고객 정보 조회 기능',
          '상담 요청 관리 기능',
        ],
        stacks: [
          'Typescript',
          'React',
          'GraphQL Apollo',
          'Styled-components',
          'GitLab',
        ],
      },
      {
        id: 2,
        title: 'Planner(고객 상담 요청 관리)',
        dueDate: '2020. 12 - 현재',
        description: `사내에서 사용되는 상담사들이 고객을 관리하는 서비스를 구축 중입니다.`,
        todos: [
          '회원가입 기능',
          '로그인 & 로그아웃 기능',
          '개인정보 수정 기능',
          'GoogleOTP를 연동한 2차 인증 기능',
          '핸드폰 문자 인증 기능',
          '상담 요청 관리 기능',
        ],
        stacks: [
          'Typescript',
          'React',
          'GraphQL Apollo',
          'Styled-components',
          'GitLab',
        ],
      },
    ],
  },
  ,
  {
    id: 2,
    company: '그로브소프트',
    job: 'Web Developer',
    dueDate: '2019. 06 - 2020. 04',
    projects: [
      {
        id: 1,
        title: 'HomeCC 웹 구축',
        dueDate: '2019. 11 - 2020. 4',
        description: `KCC의 자회사 HomeCC의 웹 애플리케이션을 개발하였습니다. 백엔드 및 프론트 개발을 모두 경험하였습니다.`,
        todos: [
          '오프라인 매장 관리 기능',
          '인테리어 관리 기능',
          '이벤트 관리 기능',
          '리모델링 신청 폼',
          '고객센터 기능',
          'Kakao API 지도 기능',
          '기타 유지보수',
        ],
        stacks: [
          'Java 8',
          'Springboot',
          'JPA',
          'HTML5',
          'CSS3',
          'Thymeleaf',
          'jQuery',
          'Postgresql',
          'GitLab',
        ],
      },
      {
        id: 2,
        title: 'Amorepacific 설화수 캐나다 웹 구축',
        dueDate: '2019. 09 - 2019. 11',
        description: `Amorepacific의 브랜드인 설화수를 중국에 진출하기 위해 서비스를
                개발했습니다. 프로젝트 기간동안 백오피스 개발을 하였으며 비즈니스
                요구에 맞는 기능들을 구현하였습니다.`,
        todos: [
          '매장 관리 기능',
          '제품 관리 기능',
          '포인트 적립 및 관리 기능',
          '회원 알림 기능',
        ],
        stacks: [
          'Java 8',
          'Springboot',
          'JPA',
          'HTML5',
          'CSS3',
          'Thymeleaf',
          'jQuery',
          'Mysql',
          'GitLab',
        ],
      },
    ],
  },
];

export default experiences;
