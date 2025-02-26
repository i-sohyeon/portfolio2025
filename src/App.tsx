import React from 'react';
import "./styles/style.scss";
import { UIText, UIContent, UIHeader, UIBox, UIBanner, UITextList } from './components/v1';




function App() {
  const textList = [
    '현대카드 커머셜 web/app 운영',
    '우리은행 won 뱅킹 재구축 사업',
    '농협은행 올원뱅크 리뉴얼 구축',
    'KB국민은행 멤버십 플랫폼 구축',
    'KB국민은행 태블릿 브랜치 금융투자상품 판매프로세스 구축',
    '문구야놀자 pc/mobile(적응형) 구축 및 운영',
    '웅진 딸기콩 랜딩페이지 pc/web(반응형) 구축 및 운영',
    '웅진 딸기콩 관리자 페이지',
    '굿뜨래페이 pc/mobile(반응형)',
    '인조이웍스 홈페이지 pc/web(반응형)',
    '포토이 인생사진 mobile',
    '태양광 햇빛마루 pc/mobile(적응형)',
  ]

  const data = [
    { id: 0, number: 2020, text: 'zzz' },
    { id: 1, number: 2021, text: '110000' },
    { id: 2, number: 2022, text: '130000' },
  ];


  return (
<>
  <UIContent bgColor='gray' bgPattern='check'>
    <UIBox>
      <UIHeader size='md'>
        <p style={{fontFamily: "Bagel fat one", fontSize: "30px"}}>S.H.LEE</p>
      </UIHeader>
    </UIBox>
    <UIBox align='center' style={{padding: "200px 0"}}>
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
      <UIText font='tenada' size='md' color='white'>현대카드</UIText>
      <UIText font='tenada' size='md' color='white'>우리은행 우리WON뱅킹</UIText>
      <UIText font='tenada' size='md' color='white'>농협은행 올원뱅크</UIText>
      <UIText font='tenada' size='md' color='white'>KB국민은행 멤버십 플랫폼</UIText>
      <UIText font='tenada' size='md' color='white'>문구야 놀자</UIText>
      <UIText font='tenada' size='md' color='white'>웅진 딸기콩</UIText>
      <UIText font='tenada' size='md' color='white'>굿뜨래페이</UIText>
      <UIText font='tenada' size='md' color='white'>인조이웍스</UIText>
      <UIText font='tenada' size='md' color='white'>포토이</UIText>
      <UIText font='tenada' size='md' color='white'>태양광</UIText>
    </div>
  </UIContent>

  <UIContent bgColor='blue' bgPattern='halfcheck'>
    
    <UIBox variant='flex'>
        <div>

          <UIText variant='contentTitle' font='tenada' size='md'>경력 CAREER</UIText>
            <UIBanner.List
              variant='list'
              bgColor='type1'
              title='ui/ux 스마트웹&앱디자인 (웹 퍼블리싱&프론트엔드) 실무과정'
              des='(20202.04~2020.10)'
            >
          </UIBanner.List>
          <UIBanner.List
              variant='list'
              bgColor='type2'
              title='인조이웍스(enjoy works)'
              des='(2021.01 ~ 2022.04)'
            >
          </UIBanner.List>
          <UIBanner.List
              variant='list'
              bgColor='type3'
              title='[프론트엔드] 리액트 (React.js 자바스크립트)_주말'
              des='(2022.01 ~2022.04)'
            >
          </UIBanner.List>
          <UIBanner.List
              variant='list'
              bgColor='type4'
              title='인픽스(INPIX)'
              des='(2022.06 ~ )'
            >
          </UIBanner.List>
          <UIBanner.List
              variant='list'
              bgColor='type5'
              title='한국방송통신대학교 컴퓨터과학과 편입 (재학중)'
              des='(2023.09 ~ )'
            >
          </UIBanner.List>
          <UIBanner.List
              variant='list'
              bgColor='type6'
              title='??????'
              des='(????.?? ~ )'
            >
          </UIBanner.List>

          <UITextList.Circle data={data} />

        </div>

        <div style={{height:'fit-content', backgroundColor: '#FFF302', borderRadius:'24px', display: 'block', width: '100%', maxWidth: '520px', padding:'60px 40px', boxSizing: 'border-box',}}>
          <div style={{marginBottom: '32px'}}>
            <UIText as="p" font='tenada' size='lg' >프로젝트 경험</UIText>
            <UIText as="p" font='tenada' size='lg' color='blue'>Project Experience</UIText>
          </div>
          <UITextList.Check variant="check" checkItems={textList} />
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
