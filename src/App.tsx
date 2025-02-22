import React from 'react';
import "./styles/style.scss";
import { UIText, UIContent, UIHeader, UIBox } from './components/v1';


function App() {
  return (
<>
  <UIContent bgColor='gray' bgPattern='check'>
    <UIBox>
      <UIHeader size='md'>
        <p style={{fontFamily: "Bagel fat one", fontSize: "30px"}}>S.H.LEE</p>
      </UIHeader>
    </UIBox>
    <UIBox align='center' style={{paddingTop: "200px"}}>
      <div style={{paddingTop: "102px"}}>
        <UIText variant="mainTitle" as="h1" size='xl'>
          UI &middot; UX
          <br/>
          WEB PUBLISHER
        </UIText>     

        <UIText variant="mainTitle" as="h1" size='xl'>
          PORTFOLIO
        </UIText>

        {/* h2 텍스트 */}
        {/* <UIText variant="h2" as="h2" size='lg'>
          Subheading Text
        </UIText> */}

        {/* 본문 텍스트 */}
        {/* <UIText variant="p" as="p" size='sm'>
          This is a body text.
        </UIText> */}

        {/* 캡션 텍스트 */}
        {/* <UIText variant="caption">Caption Text</UIText> */}
      </div>
    </UIBox>
  </UIContent>

  <UIContent bgColor='black'>
    <UIText color='#fff'>hee</UIText>
  </UIContent>
  </>

    
  );
}

export default App;
