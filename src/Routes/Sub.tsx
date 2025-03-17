import { UIText, UIContent, UIBox, UIHeader } from "../components/v1";

function Sub() {
  return (
    <UIContent bgColor="navy">
      <UIBox>
        <UIHeader size="md">S.H.LEE</UIHeader>
      </UIBox>
      <UIBox variant="content">
        <UIText.Basic
          variant="contentTitle"
          color="white"
          font="tenada"
          size="md">
          EXPERIENCE DETAIL
        </UIText.Basic>
      </UIBox>
    </UIContent>
  );
}

export default Sub;
