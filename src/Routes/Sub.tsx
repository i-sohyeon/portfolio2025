import {
  UIText,
  UIContent,
  UIBox,
  UIHeader,
  UITextList,
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

  return (
    <UIContent bgColor="navy">
      <UIBox>
        <UIHeader size="md">S.H.LEE</UIHeader>
      </UIBox>
      <UIBox variant="content">
        <UIText.Header size="lg" color="white">
          EXPERIENCE DETAIL
        </UIText.Header>

        <UIBox
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}>
          <div style={{ marginRight: "64px" }}>
            <UIText.Basic size="fs24" color="white" className="mr-2">
              KB국민은행
            </UIText.Basic>
            <UIText.Basic size="fs12" color="white">
              2022.07 ~ 2022.11 (약 4개월)
            </UIText.Basic>
            <UIText.Basic
              size="fs20"
              color="white"
              display="block"
              className="mb-4">
              태블릿브랜치 금융투자 상품 판매 프로세스 구축
            </UIText.Basic>
            <UIText.Basic size="fs20" color="white" display="block">
              은행 직원이 태블릿을 사용하여 금융 업무를 처리할 수 있도록 하는
              프로세스 구축
            </UIText.Basic>
          </div>

          <UITextList.Nested nestedItems={data01} />
        </UIBox>
      </UIBox>
    </UIContent>
  );
}

export default Sub;
