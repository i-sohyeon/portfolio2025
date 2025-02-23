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
        <UIText variant="mainTitle" as="h1">
          UI &middot; UX
          <br/>
          WEB PUBLISHER
        </UIText>     

        <UIText variant="mainTitle" as="h1">
          PORTFOLIO
        </UIText>
      </div>
    </UIBox>
  </UIContent>

  <UIContent bgColor='black' className='txt-banner-wrqp' style={{overflowX:'hidden',  padding: "36px 0"}}>
    <div className='txt-banner'>
      <UIText font='tenada' size='md' color='#fff'>현대카드</UIText>
      <UIText font='tenada' size='md' color='#fff'>우리은행 우리WON뱅킹</UIText>
      <UIText font='tenada' size='md' color='#fff'>농협은행 올원뱅크</UIText>
      <UIText font='tenada' size='md' color='#fff'>KB국민은행 멤버십 플랫폼</UIText>
      <UIText font='tenada' size='md' color='#fff'>문구야 놀자</UIText>
      <UIText font='tenada' size='md' color='#fff'>웅진 딸기콩</UIText>
      <UIText font='tenada' size='md' color='#fff'>굿뜨래페이</UIText>
      <UIText font='tenada' size='md' color='#fff'>인조이웍스</UIText>
      <UIText font='tenada' size='md' color='#fff'>포토이</UIText>
      <UIText font='tenada' size='md' color='#fff'>태양광</UIText>
    </div>
  </UIContent>

  <UIContent bgColor='blue' bgPattern='halfcheck'>
    
    <UIBox variant='flex'>
        <div>
        <UIText variant='contentTitle' font='tenada' size='md'>경력 CAREER</UIText>

        </div>
        <div>
asdsfsdgdfhfgghjh
        </div>
   
    </UIBox>
  </UIContent>
  <UIContent bgColor='gray' bgPattern='check'>
    <UIBox variant='content'>
      <UIText variant='contentTitle' font='tenada' size='md'>PROJECT DETAILs</UIText>

    </UIBox>

  </UIContent>
  <UIContent bgColor='pink' bgPattern='wave'>
    <UIBox variant='content'>
      <UIText variant='contentTitle' font='tenada' size='md'>EXPERIENCE DETAIL</UIText>

    </UIBox>

  </UIContent>
  </>

    
  );
}

export default App;
