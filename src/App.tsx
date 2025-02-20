import React from 'react';
import "./styles/style.scss";
import { UIText, UIContent } from './components/v1';


function App() {
  return (
   <UIContent bgColor='eee'>
     <div className="">
        <p className='test'>테스트입니다.</p>


<UIText variant="h1" as="h1" size='xl'>
        Heading Text
      </UIText>

      {/* h2 텍스트 */}
      <UIText variant="h2" as="h2" size='lg'>
        Subheading Text
      </UIText>

      {/* 본문 텍스트 */}
      <UIText variant="body" as="p" size='sm'>
        This is a body text.
      </UIText>

      {/* 캡션 텍스트 */}
      <UIText variant="caption">Caption Text</UIText>
      {/* <UITextHeader.Basic>test</UITextHeader.Basic> */}
    
    </div>
   </UIContent>

    
  );
}

export default App;
