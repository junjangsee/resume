const experiences = [
  {
    id: 1,
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
          '오프라인 매장 관리 기능 개발',
          '인테리어 관리 기능 개발',
          '이벤트 관리 기능 개발',
          '리모델링 신청 폼 개발',
          '고객센터 기능 개발',
          'Kakao API 연동하여 지도 개발',
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
          'Gitlab',
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
          '매장 관리 기능 개발',
          '제품 관리 기능 개발',
          '포인트 적립 및 관리 기능 개발',
          '회원 알림 기능 개발',
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
          'Gitlab',
        ],
      },
    ],
  },
];

export default experiences;
