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
        {
          id: 3,
          name: "기술",
          children: [
            { id: 4, name: "HTML, CSS, Javascript(JQuery), svn, alopex grid" },
            { id: 5, name: "Lemon" },
          ],
        },
      ],
    },
    {
      id: 7,
      name: "Vegetables",
      children: [
        { id: 8, name: "Carrot" },
        { id: 9, name: "Broccoli" },
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
        {/* <UIText.Basic
          variant="contentTitle"
          color="white"
          font="tenada"
          size="md">
          EXPERIENCE DETAIL
        </UIText.Basic> */}
        <UIBox style={{ display: "flex" }}>
          <div>
            <UIText.Basic size="sm" color="white">
              KB국민은행
            </UIText.Basic>
            <UIText.Basic size="xs" color="white">
              태블릿브랜치 금융투자 상품 판매 프로세스 구축
            </UIText.Basic>
          </div>
          <div>{/* <UITextList.Check>dd</UITextList.Check> */}</div>
          <UITextList.Nested checkItems={data} />
        </UIBox>
      </UIBox>
    </UIContent>
  );
}

export default Sub;
