import {
  UIText,
  UIContent,
  UIBox,
  UIHeader,
  UITextList,
  UIBadge,
  UIDivider,
  UIParagraph,
} from "../components/v1";

function Sub() {
  const data01 = [
    {
      id: 1,
      name: "주요업무",
      children: [
        { id: 2, name: "HTML, CSS, Javascript(JQuery) 추가 및 수정 작업" },
      ],
    },
    {
      id: 3,
      name: "기술",
      children: [
        { id: 4, name: "HTML, CSS, Javascript(JQuery), svn, alopex grid" },
      ],
    },
    {
      id: 5,
      name: "상세내용",
      children: [
        { id: 6, name: "html 마크업 및 css 작업, 레거시 업데이트" },
        { id: 7, name: "svn을 사용한 형상관리" },
        {
          id: 8,
          name: "갤럭시탭 8 해상도 기준으로 최소 1024px의 태블릿 버전 width값을 기준으로 작업",
        },
        { id: 9, name: "IE10버전까지 고려하여 작업(크로스 브라우징)" },
        { id: 10, name: "IE10, 11, Edge , Chrome 크로스 브라우징" },
      ],
    },
    {
      id: 11,
      name: "성과",
      children: [
        {
          id: 12,
          name: "HTML5와 CSS3를 활용한 현대적이고 효율적인 마크업 구조 구현",
        },
        {
          id: 13,
          name: "레거시 코드 업데이트를 통한 시스템 성능 향상 및 유지보수성 제고",
        },
        {
          id: 14,
          name: "크로스 브라우징 호환성 확보IE10, IE11, Edge, Chrome 등 다양한 브라우저에서의 일관성 된 렌더링 구현",
        },
        {
          id: 15,
          name: "레거시 브라우저(IE10) 지원을 통한 폭 넓은 사용자 접근성 확보",
        },
        {
          id: 16,
          name: "SVN을 활용한 효율적인 소스 코드 버전 관리 시스템 운영",
        },
      ],
    },
  ];

  const data02 = [
    {
      id: 1,
      name: "주요업무",
      children: [
        { id: 2, name: "HTML, SCSS, Javascript(JQuery)를 사용하여 UI 구현" },
      ],
    },
    {
      id: 3,
      name: "기술",
      children: [{ id: 4, name: "HTML, SCSS, Javascript(JQuery), Node, gulp" }],
    },
    {
      id: 5,
      name: "상세내용",
      children: [
        { id: 6, name: "html 마크업 및 scss를 사용한 스타일 작업" },
        { id: 7, name: "gulp taskrunner 사용하여 작업" },
        { id: 8, name: "모바일 기준 width 320px부터 대응" },
        { id: 9, name: "IE10버전까지 고려하여 작업(크로스 브라우징)" },
        {
          id: 10,
          name: "주요 구축범위 : 그룹 멤버십 회원관리 및 로그인 관리 / 그룹 멤버십 메인 화면 / 그룹 멤버십 각종 서비스(리워드, 등급 상형프로그램, 전략 패키지 등)",
        },
        { id: 11, name: "웹접근성 심사를 통한 웹접근성에 준수한 마크업 작업" },
      ],
    },
    {
      id: 12,
      name: "성과",
      children: [
        {
          id: 13,
          name: "컴포넌트화를 통한 요소의 재사용 가능서을 높임",
        },
        {
          id: 14,
          name: "scss mixin (공통적으로 사용하는 css의 속성들을 묶어서 재사용이 가능하게 하는 기능) function include 및 중첩, 변수 선언 등을 활용하여 코드 자성 시간 단축 및 가독성 향상",
        },
        {
          id: 15,
          name: "css comb 플러그인을 사용하여 코드 포맷을 자동으로 정렬, 프로퍼티의 선언 순서를 통일화하여 한사람이 작업한 것 같은 효과 지향",
        },
        {
          id: 16,
          name: "금융권 웹접근성 경험으로 보다 올바른 마크업 / 시맨틱 구조에 맞는 마크업 작성",
        },
        {
          id: 17,
          name: "코드 작성 시 캡슐화 지향(유지보수를 넘어 재사용 할때 코드의 확장성 고려)",
        },
      ],
    },
  ];

  return (
    <UIContent bgColor="navy">
      <UIBox>
        <UIHeader size="md">S.H.LEE</UIHeader>
      </UIBox>
      <UIBox variant="content">
        <UIText.Header size="lg" color="white">
          EXPERIENCE DETAIL
        </UIText.Header>

        <UIBox display="flex" jContent="space-between">
          <UIParagraph
            title="현대카드"
            period="2025.01 ~"
            subTitle="현대카드 앱/웹 운영"
            desc="CMS를 통한 현대카드 웹사이트 PC/MO 버전 운영 관리"
          />
          <UITextList.Nested nestedItems={data01} />
        </UIBox>

        <UIDivider variant="type1" />

        <UIBox
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}>
          <div style={{ marginRight: "64px" }}>
            <UIText.Basic size="fs24" color="white" className="mr-2">
              우리은행
            </UIText.Basic>
            <UIText.Basic size="fs12" color="white" opacity="50">
              2024.04 ~ 2024.12 (약 8개월)
            </UIText.Basic>
            <UIText.Basic
              size="fs20"
              color="white"
              display="block"
              className="mb-2 mt-2"
              weight="bold">
              우리 won 뱅킹 재구축 사업
            </UIText.Basic>
            {/* <UIText.Basic
              size="fs20"
              color="white"
              display="block"
              className="mb-5"
              opacity="80">
              KB 멤버십 플랫폼 구축
            </UIText.Basic> */}
            <UIBadge variant="solid" bgColor="navy" size="sm">
              React
            </UIBadge>
            <UIBadge variant="solid" bgColor="navy" size="sm">
              크로스브라우징
            </UIBadge>
          </div>

          <UITextList.Nested nestedItems={data01} />
        </UIBox>

        <UIDivider variant="type1" />

        <UIBox
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}>
          <div style={{ marginRight: "64px" }}>
            <UIText.Basic size="fs24" color="white" className="mr-2">
              농협은행
            </UIText.Basic>
            <UIText.Basic size="fs12" color="white" opacity="50">
              2023.08 ~ 2024.03 (약 7개월)
            </UIText.Basic>
            <UIText.Basic
              size="fs20"
              color="white"
              display="block"
              className="mb-2 mt-2"
              weight="bold">
              올원뱅크 리뉴얼 구축
            </UIText.Basic>
            {/* <UIText.Basic
              size="fs20"
              color="white"
              display="block"
              className="mb-5"
              opacity="80">
              KB 멤버십 플랫폼 구축
            </UIText.Basic> */}
            <UIBadge variant="solid" bgColor="navy" size="sm">
              퍼블리싱
            </UIBadge>
            <UIBadge variant="solid" bgColor="navy" size="sm">
              크로스브라우징
            </UIBadge>
          </div>

          <UITextList.Nested nestedItems={data01} />
        </UIBox>

        <UIDivider variant="type1" />

        <UIBox
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}>
          <div style={{ marginRight: "64px" }}>
            <UIText.Basic size="fs24" color="white" className="mr-2">
              KB국민은행
            </UIText.Basic>
            <UIText.Basic size="fs12" color="white" opacity="50">
              2022.11 ~ 2023.07 (약 8개월)
            </UIText.Basic>
            <UIText.Basic
              size="fs20"
              color="white"
              display="block"
              className="mb-2 mt-2"
              weight="bold">
              KB 국민은행 그룹 멤버십플랫폼 개발의뢰
            </UIText.Basic>
            <UIText.Basic
              size="fs20"
              color="white"
              display="block"
              className="mb-5"
              opacity="80">
              KB 멤버십 플랫폼 구축
            </UIText.Basic>
            <UIBadge variant="solid" bgColor="navy" size="sm">
              퍼블리싱
            </UIBadge>
            <UIBadge variant="solid" bgColor="navy" size="sm">
              web view
            </UIBadge>
            <UIBadge variant="solid" bgColor="navy" size="sm">
              gulp
            </UIBadge>
          </div>

          <UITextList.Nested nestedItems={data02} />
        </UIBox>

        <UIDivider variant="type1" />

        <UIBox
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}>
          <div style={{ marginRight: "64px" }}>
            <UIText.Basic size="fs24" color="white" className="mr-2">
              KB국민은행
            </UIText.Basic>
            <UIText.Basic size="fs12" color="white" opacity="50">
              2022.07 ~ 2022.11 (약 4개월)
            </UIText.Basic>
            <UIText.Basic
              size="fs20"
              color="white"
              display="block"
              className="mb-2 mt-2"
              weight="bold">
              태블릿브랜치 금융투자 상품 판매 프로세스 구축
            </UIText.Basic>
            <UIText.Basic
              size="fs20"
              color="white"
              display="block"
              className="mb-5"
              opacity="80">
              은행 직원이 태블릿을 사용하여 금융 업무를 처리할 수 있도록 하는
              프로세스 구축
            </UIText.Basic>
            <UIBadge variant="solid" bgColor="navy" size="sm">
              퍼블리싱
            </UIBadge>
            <UIBadge variant="solid" bgColor="navy" size="sm">
              크로스브라우징
            </UIBadge>
          </div>

          <UITextList.Nested nestedItems={data01} />
        </UIBox>
      </UIBox>
    </UIContent>
  );
}

export default Sub;
