import {
  UIText,
  UIContent,
  UIBox,
  UIHeader,
  UITextList,
} from "../components/v1";

function Sub() {
  const data = [
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

        <UIBox style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <UIText.Basic size="sm" color="white">
              KB국민은행
            </UIText.Basic>
            <UIText.Basic size="xs" color="white">
              태블릿브랜치 금융투자 상품 판매 프로세스 구축
            </UIText.Basic>
          </div>
          <UITextList.Nested nestedItems={data} />
        </UIBox>
      </UIBox>
    </UIContent>
  );
}

export default Sub;
