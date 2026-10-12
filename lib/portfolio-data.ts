export const profile = {
  name: '조영서',
  role: 'IT Developer',
  headline: '복잡한 문제를 안정적인 시스템으로 구현하는 개발자',
  intro: ['복잡한 비즈니스 로직과 도메인을 이해하고, 이를 견고한 구조로 설계하는 것을 중요하게 생각합니다. 안정적인 서비스를 만들기 위해 문제의 본질을 파악하고, 지속적으로 개선해 나가는 개발자입니다.'],
  email: 'dudrhy12@gmail.com',
  github: 'https://github.com/dudrhy12',
  blog: 'https://y-seo.tistory.com',
  photo: '/images/profile.jpg',
}

export const highlights = [
  { label: '경력', value: '1년 9개월', detail: '백엔드 개발 인턴' },
  { label: '전공', value: '컴퓨터과학', detail: '숙명여자대학교' },
  { label: '학점', value: '4.28 / 4.5', detail: '졸업성적우등상' },
  { label: '자격', value: '정보처리기사', detail: 'SQLD · ADsP · TOEIC Speaking AL' },
]

export const experience = [
  {
    company: '주식회사 큐클릭',
    role: '백엔드 개발자 (인턴)',
    period: '2024.09 – 2026.05',
    duration: '1년 9개월',
    tasks: [
      'MySQL DB 테이블 구조 설계 및 Spring Boot 기반 Java API 개발',
      '자동화 스케줄러 구축 및 동시성 제어를 적용한 배치 처리',
      'AWS 인프라 환경 운영 및 리소스 최적화',
      '레거시 데이터 마이그레이션을 통해 신규 시스템 전환 기반 확보',
      '사내 어드민 시스템 개발로 운영 데이터 관리',
      '데이터 시각화 대시보드 개발로 데이터 기반 비즈니스 의사결정 지원',
      'Asana를 활용한 개발 업무 프로세스 자동화',
    ],
    stack: ['Java', 'Python', 'SpringBoot', 'Streamlit', 'MySQL', 'AWS'],
  },
]

export const education = {
  school: '숙명여자대학교 (서울)',
  major: '소프트웨어학부 컴퓨터과학전공',
  status: '졸업',
  period: '2021.03 – 2026.08',
  gpa: '4.28 / 4.5',
}

export const skills = [
  { category: 'Backend', items: ['Java', 'Spring Boot', 'Gradle'] },
  { category: 'Data', items: ['MySQL', 'SQL', 'Python', 'Streamlit'] },
  { category: 'Infra', items: ['AWS', 'Linux', 'Docker', 'Jenkins'] },
]

export type ProjectLink = { label: string; href: string }

export const projects: {
  name: string
  summary: string
  detail: string
  image: string
  links: ProjectLink[]
}[] = [
  {
    name: 'CheckMate',
    summary: '다양한 교내 행사 출석 및 통계 처리의 전산화를 위한 행사 관리 시스템',
    detail: `다양한 교내 행사 출석 및 통계 처리의 전산화를 위한 행사 관리 시스템

check (출석체크) + mate (함께)
"checkmate"는 '출석체크를 함께한다'는 의미로, 출석을 간편하게 체크하고 관리할 수 있도록 사용자와 함께하는 출석 관리 시스템을 상징합니다.

팀 소개
배경 : 숙명여자대학교 졸업프로젝트 팀
구성 : Front-end developer 2인, Back-end Develper 1인
기간 : 2024.03 - 2024. 10

서비스 성과
교내 사업단과 협업하여 사용자 인터뷰 및 테스트 진행
졸업작품 전시회 우수상 수상
이후 온라인 행사 출석을 더욱 간편하게 확인할 수 있는 EZZ00M 시스템 및 상용화

서비스 소개
기존에 수기로 관리 되던 교내 행사 관리 체계를 CheckMate 서비스를 통해 디지털화하여, 학생 출석 확인부터 이후 참석자 분석까지 한 번에 처리할 수 있는 통합 서비스를 기획하였습니다.

주요 기능 및 데모 영상 바로보기

역할
Product Manager
실제 서비스 기획부터 사용자 인터뷰, 테스트까지 마치어 상용화를 위한 졸업작품 발표회에서 발표를 맡으며 서비스를 소개하였습니다.

Back-end Developer
SpringBoot(java)를 이용해 백엔드 개발을 했고, RESTful API 설계 및 구현을 맡았습니다.
이후 AWS(EC2, RDS)를 이용해 서비스 배포 및 운영을 하였습니다.

구현 기능

행사 등록
행사 주최자(유저)가 온라인/오프라인, 교내/교외, 다회차/1회차 등 다양한 타입의 행사를 등록, 수정, 조회, 삭제할 수 있는 기능

참석자 명단 등록 기술
엑셀 파일 형태의 참석자 명단을 Apache POI 라이브러리를 사용하여 안정적으로 데이터를 읽고 이를 DB에 저장하도록 구현

행사 출석
행사 참석자가 자신의 학번/전화번호 입력 및 전자서명을 통해 출석체크를 할 수 있는 기능

행사 참석명단 생성
행사 주최자(유저)가 행사 참석명단을 파일로 다운받을 수 있는 기능

참석명단 생성 로직
iText 라이브러리를 사용하여 각 회차별 참석자의 출석 정보와 서명 이미지를 PDF로 생성
Apache POI 라이브러리를 이용하여 총 참석자 이수 여부를 Excel로 생성
생성한 PDF 데이터를 ByteArrayOutputStream을 통해 메모리에 저장
ByteArrayResource를 사용해 PDF 데이터를 MultipartFile 형태로 변환
해당 로직은 단일 책임 원칙(Single Responsibility Principle)에 따라 구현되었습니다.
ByteArrayOutputStream은 PDF 데이터를 생성하고 메모리에 저장하는 역할입니다.
ByteArrayResource는 이미 생성된 데이터를 다른 형태로 변환하는 역할을 하며, ByteArrayOutputStream의 데이터를 직접 참조하여 메모리 효율성을 유지합니다.

행사 통계
세부 통계 : 각 행사에 참여한 학생의 이수 비율, 학번 비율을 확인할 수 있는 기능
전체 통계 : 행사 주최자(유저)가 진행한 모든 행사에 대해 가장 참석률이 높은 학생 및 행사를 확인할 수 있는 기능

행사 안내 메일
행사 시작 24시간 전 리마인드 메일, 행사 종료 1시간 후 만족도 조사 메일이 자동으로 발송되는 기능

메일 생성 기술
JavaMailSender가 Gmail SMTP 서버를 통해 이메일을 전송할 수 있도록 구현
행사 이미지 전송을 위해 ByteArrayResource 클래스 사용으로 이메일에 첨부파일 추가

비대면 행사 출석
Zoom으로 진행된 행사의 참석자 Zoom Log 기록 첨부 시, 참석 명단을 파일로 다운받을 수 있는 기능

Zoom Log 데이터 리딩 기술
Java I/O BufferedReader, InputStreamReader로 CSV 파일의 데이터를 읽도록 구현

개발 과정`,
    image: '/images/checkmate-cover.png',
    links: [
      {
        label: '프로젝트 소개',
        href: 'https://jewel-eucalyptus-c6e.notion.site/CheckMate-eadfa5aefa63837a91d5016240c65821',
      },
      { label: 'GitHub', href: 'https://github.com/CheckMate-sookmyung' },
      {
        label: 'Introduce',
        href: 'https://www.canva.com/design/DAGRi1cQmlE/lJZUfgTs6M1U34RI3qUTRw/edit',
      },
    ],
  },
  {
    name: 'Issue Tree',
    summary: '사내 이슈 관리 시스템 · AWS Winter Camp 1등 수상',
    detail: `사내 개발 이슈와 해결 과정을 효율적으로 문서화하고 검색할 수 있는 ‘ISSUE TREE’ 서비스

[프로젝트 배경]
숙명여자대학교 SW중심대학사업단 AWS Winter Camp에서 2025.02에 개발했습니다. AWS Winter Camp 1st Award를 수상했습니다.

[서비스 플로우]
Slack 이슈 채널에서 스택·버전·이슈를 등록하고 스레드에서 논의합니다. 해결되면 워크플로우의 해결 버튼을 클릭하고, 해결된 이슈와 댓글 정보를 Elasticsearch에 저장합니다. Streamlit 페이지에서 오류 메시지를 검색하고, 내용·날짜·버전 우선순위로 문서화된 이슈를 확인합니다.

[대시보드 및 자동 알림]
Streamlit에 Elasticsearch 대시보드를 탑재하여 최다 이슈 스택·버전, 일별 이슈 요청 추이, 문서화된 이슈 수치를 확인할 수 있습니다. 해결하지 못한 오류 메시지를 파싱해 GitHub 마지막 수정자와 Slack 담당자를 찾고, Slack 봇이 담당자 DM과 팀 채널에 이슈를 전송합니다.

[담당 역할]
Spring Boot(Java)와 Slack API로 이슈 등록부터 해결까지의 데이터를 수집·처리했습니다. AWS와 GitHub Actions를 활용해 CI/CD를 구축했습니다.

[구현 기능]
• Slack Workflow를 통한 이슈 등록
• 해결 버튼 클릭 후 메시지 게시 이벤트를 감지하는 이슈 해결 처리
• Payload에서 메시지 ID를 추출하고 ConversationReplies API로 워크플로우 내용 수집
• 스택·버전·이슈 내용·질문자·논의 과정 파싱
• UserInfo API로 질문자와 답변자의 Slack 이름 조회
• ChatGPT API로 해결책과 논의 과정 요약
• 최종 데이터를 Elasticsearch에 저장`,
    image: '/images/issuetree.png',
    links: [
      {
        label: '프로젝트 소개',
        href: 'https://jewel-eucalyptus-c6e.notion.site/Issue-Tree-3e2fa5aefa638086a546d4a19d1139b7',
      },
      { label: 'GitHub', href: 'https://github.com/White-Long-tailed-Tit/IssueTree-Spring' },
      {
        label: 'Review',
        href: 'https://y-seo.tistory.com/entry/%EC%BA%A0%ED%94%84%EB%8C%80%ED%9A%8C-AWS-winter-camp-%EA%B5%90%EC%9C%A1-%EC%B0%B8%EC%97%AC-%EB%B0%8F-%EC%88%98%EC%83%81-%ED%9B%84%EA%B8%B0',
      },
    ],
  },
  {
    name: 'Beyond Vision',
    summary: '시각장애인을 위한 맞춤 운동 제공 서비스 · Google Solution Challenge Top 100',
    detail: `시각장애인의 독립적인 운동을 지원하는 AI 기반 운동 관리 서비스

[프로젝트 배경]
GDSC NalBao 팀으로 2024.01부터 2024.05까지 개발했습니다. Google Solution Challenge에서 Global Top 100을 수상했습니다.

[서비스 소개]
카메라를 통해 운동 자세를 실시간으로 분석하고 음성 피드백을 제공하여 시각장애인이 올���������른 운동을 독립적으로 수행할 수 있도록 돕는 서비스입니다.

[담당 역할]
Back-end Developer로서 Spring Boot 기반 백엔드, Flask 기반 AI 모델 API, Google Cloud 기반 인프라를 구축했습니다.

[구현 기능]
• 백엔드 개발: Spring Boot(Java) 기반 회원·운동 정보·운동 기록 CRUD 및 비즈니스 로직 구현
• AI 서버 개발: 서버에서 AI 모델을 불러와 Flask API로 모델을 실행하고 결과 반환
• GCP 인프라 운영`,
    image: '/images/beyondvision.png',
    links: [
      {
        label: '프로젝트 소개',
        href: 'https://jewel-eucalyptus-c6e.notion.site/Beyond-Vision-3e2fa5aefa63809c935af9345848f42a',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/BeyondVision-NalBao/2024-BeyondVision-SolutionChallenge-Top100',
      },
      { label: 'Introduce', href: 'https://youtu.be/fHF8ATWjeQQ' },
    ],
  },
  {
    name: 'Pochak',
    summary: '남이 꾸며주는 나의 SNS, 포착',
    detail: `타인이 포착한 자연스러운 일상 기록을 위한 소셜 미디어 플랫폼

[프로젝트 배경]
숙명여자대학교 창업지원센터 팀으로 2025.03부터 2025.08까지 개발했습니다. 교내 창업 프로젝트에 선정되었고, 서비스 핵심 기능과 아키텍처를 정리한 「건강한 소통을 위한 소셜 미디어 플랫폼의 설계 및 구현: 포착」 논문을 작성했습니다.

[서비스 소개]
포착은 다른 사람의 시선에서 바라본 ‘나’의 일상을 기록하는 서비스입니다. 친구들이 촬영한 사용자의 사진을 공유해 과시적으로 연출된 모습이 아닌 자연스러운 순간을 기록합니다. 댓글과 좋아요로 서로의 순간에 참여하고, ‘포착된’ 프로필에서는 다른 사람들이 기록한 나의 사진을, ‘포착한’ 프로필에서는 내가 기록한 다른 사용자의 사진을 확인할 수 있습니다.

[담당 역할]
Back-end Developer로서 Spring Boot(Java) 기반 백엔드 개발과 AWS 인프라 구축을 담당했습니다.

[구현 기능]
• 프로필 관련 API 수정: 프로필 조회·수정 API 개선 및 기존 백엔드 리팩토링
• 알람 관련 스케줄러 구축: 오래된 알람 데이터를 자동 정리하고 DB 구조를 재설계하여 데이터 관리 효율 향상
• 배포 환경 및 CI/CD: Docker 기반 배포 환경과 Jenkins CI/CD 파이프라인 구축
• 코드 품질 관리: SonarQube Cloud와 JaCoCo를 연동해 정적 분석과 테스트 커버리지 관리`,
    image: '/images/pochak.png',
    links: [
      {
        label: '프로젝트 소개',
        href: 'https://jewel-eucalyptus-c6e.notion.site/Pochak-3e2fa5aefa6380dd95f5d83a4f6e8fd4',
      },
      { label: 'GitHub', href: 'https://github.com/SMWU-POCHAK/POCHAK-Server' },
      { label: 'Introduce', href: 'https://pochak.notion.site/POCHAK-97940110266b478780838db6f8fcced8' },
    ],
  },
]

export const activities = [
  {
    title: '개발 동아리 APPS 회장',
    org: '숙명여자대학교 모바일 앱 프로그래밍 개발 학회',
    period: '2021.09 – 2024.03',
    description: `회장으로서 동아리를 운영하며 함께 성장하고 몰입하는 환경을 위해 체계를 전면 개편하였습니다.

1. Spring Boot 스터디 리드
2. SpringBoot 프로젝트 개발 리드
3. 회장으로서 운영 체계 전면 개편
4. 소통 활성화를 위한 디스코드 채널 구축
5. 졸업생 커넥션을 위한 선배 연락처 DB 조성
6. 신입부원을 위한 기초 개발 강의 진행
7. 교내 오프라인 전시회 개최로 프로젝트 발표 활성화
8. 지식 공유 세션 'Dev Talk' 신설 및 발표. 동아리 탈퇴 후에도 연사로 참여하며 지식 공유 지속`,
  },
  {
    title: 'GDSC Sookmyung',
    org: 'Google Developer Student Clubs, 숙명여자대학교',
    period: '2023.06 – 2024.06',
    description: `백엔드 스터디와 기술 블로그 작성에 참여하고, Google Solution Challenge에 출품하여 Global Top 100에 선정되었습니다.

1. Spring Boot 스터디 참여 및 기술 블로그 작성
2. Google Solution Challenge 출품
   2-1. 시각장애인 맞춤 운동 서비스 'Beyond Vision' 개발
   2-2. Google Solution Challenge Top 100 선정`,
  },
  {
    title: '잇(IT)다 서포터즈 4·6기',
    org: '교내 캠퍼스타운 사업단 입주 스타트업 협업 프로그램',
    period: '2023.05 – 08 (4기), 2024.09 – 11 (6기)',
    description: `교내 캠퍼스타운 사업단 내에 입주한 스타트업에서 서포터즈 활동을 진행했습니다.

4기: (주)한국사회융합연구소에서 서비스 기획 및 백엔드 개발
6기: 주식회사 큐클릭에서 백엔드 개발`,
  },
  {
    title: 'KT 랜선야학 멘토링 5·6기 팀장',
    org: '숙명여자대학교 대표 팀장',
    period: '2022.12 – 2023.10',
    description: `교과 및 AI 멘토링을 진행하고, 교내 대표 팀장으로 활동하였습니다.

1. 고등학생 대상 국·영·수 교과 수업 및 진로 멘토링
2. AI 코딩 교육 지도 및 프로젝트 출품 리드
3. 교내 멘토 팀장으로서 멘토 간 스터디 리드
4. KT 랜선야학 전체 회의 참석을 통한 운영 시스템 개선 제언
5. 위 활동 성과를 인정받아 우수 멘토로 선정`,
  },
]

export const internationalExperience = {
  institution: 'Aschaffenburg University of Applied Sciences',
  program: 'Software Design International · 방문학생',
  period: '2025.09 – 2026.02',
  description: '',
}

export const publication = {
  title: '건강한 소통을 위한 소셜 미디어 플랫폼의 설계 및 구현: 포착',
  venue: '한국인터넷방송통신학회논문지, Vol.24, No.5, Page.009',
  publisher: '한국인터넷방송통신학회',
  date: '2024.10.31',
  type: '국내 등재학술지 · 게재',
  role: '공동저자 · 저자순위 4/5',
  issn: '2289-0238(Print), 2289-0246(Online)',
  description: `[연구 개요] 기존 SNS의 과도한 과시 및 연출 문제를 해소하고, 타인이 인앱 후면 카메라로 직접 촬영한 사진만 보정 없이 업��드하도록 제한하여 "건강한 소통"을 유도하는 새로운 소셜 미디어 플랫폼 'POCHAK'을 제안 및 구현

[시스템 구조 및 주요 기능] 전체 시스템 구성: GCP(Google Cloud Platform) Compute Engine 기반의 애플리케이션 서버 운용 및 AWS S3를 활용한 이미지 데이터 스토리지 분리 아키텍처 구축
애플리케이션 서버: Spring Boot 기반 RESTful API 설계 및 비즈니스 서비스 로직 구현
데이터 저장소 & 입출력: GCP Cloud SQL(MySQL)을 활용한 관계형 데이터 관리, JPA 및 JDBC API 기반의 효율적인 데이터 입출력(Data Access) 레이어 구현
핵심 기능 및 도메인 로직: 타인 촬영 기반 사진 전송 및 게시물 수락/거절 프로세스, 연출/후보정 차단을 위한 무보정·무저장 direct 게시물 업로드 Pipeline, 사용자 간 상호작용 기능(좋아요, 댓글 등) 데이터 처리`,
}

export const awards = [
  { title: '졸업성적우등상', org: '숙명여자대학교', date: '2026.08' },
  { title: 'Google Solution Challenge 2024 Top 100', org: 'GDSC', date: '2024.04' },
  { title: 'AWS Winter Camp 1st Award', org: '숙명여자대학교 SW중심대학사업단', date: '2024.02' },
  { title: 'KT 랜선야학 우수 멘토', org: 'KT그룹 희망나눔재단', date: '2023.11' },
]

export const certifications = [
  { title: '정보처리기사', date: '2025.06' },
  { title: 'TOEIC Speaking AL', date: '2026.08' },
  { title: 'ADsP', date: '2025.03' },
  { title: 'SQLD', date: '2024.09' },
]
