
## 본 프로젝트는 React를 사용하여 만든 개인 포트폴리오입니다.

### 폴더 구조

```
.  
├── README.md  
├── node_modules  
├── package-lock.json  
├── package.json  
├── public  
│   ├── index.html  
│   └── (기타 등등...)  
└── src  
    ├── App.tsx  
    ├── assets  
    │   ├──fonts
    │   └──images  
    │       ├── background-pattern 
    │       └── icons  
    └── (기타 등등...)  
    ├── components  
    │   ├── UIBanner  
    │   ├── UIBox  
    │   ├── UIContent  
    │   ├── UIHeader  
    │   ├── UISwiper  
    │   ├── UITable  
    │   ├── UIText  
    │   └── UITextList  
    ├── index.tsx  
    ├── pages  
    ├── styles  
    │   ├── mixins  
    │   ├── _common.scss 
    │   ├── _reset.scss 
    │   ├── _variable.scss  
    └── └── style.scss
```


## 각 컴포넌트에 대한 설명
* UIBanner  
* UIBox
* UIContent
* UIHeader
* UISwiper
* UIText  
    `size`

* ### UITextList  
    `UITextList.Check` `UITextList.Circle` `UITextList.Step`  
        * 컴포넌트와 같이 비슷한 기능을 하는 컴포넌트들을 하위컴포넌트(서브컴포넌트)로 분리하여 재사용성을 높임


====

## 구현 애니메이션
* (구현 예정) 헤더 영역 : 일정 높이갚으로 스크롤이 되면 헤더 영역을 보이지 않게 숨겼다가 페이지가 다시 일정영역 위로 올라오면, 헤더가 보이게 설정 
* (구현 예정) 메인 화면 : 카드 이미지가 뒤집히는게 무한으로 반복되는 애니메이션 
* (구현 예정) 띠 배너 : 텍스트들이 자연스럽게 흘러가는 애니메이션





<!-- | 첫번째(기본왼쪽정렬) | 두번째(가운데정렬) | 세번째(오른쪽정렬) |
|---|:---:|---:|
| `왼쪽` | 정렬확인1 | abc |
| `정렬` | 정렬확인2 | abcdefgh |
| `123` | 정렬확인,정렬확인,정렬확인 | abcdef |
| `456` | 정렬확인1234 | abc |


*이탤릭체*
_이탤릭체_
**굵은글씨**
__굵은글씨__
***굵은글씨+이탤릭체***
___굵은글씨+이탤릭체___
~~취소선~~
**~~굵은글씨+취소선~~**
<u>밑줄</u>

[Google](https://www.google.com "구글")
* 참조링크 방법
Link: [Google][googleLink]
[googleLink]: https://www.google.com "Go google"

<https://www.google.com>

<img src="이미지 주소" width="450px" height="300px" title="px(픽셀) 고정크기 설정" alt="exampleImage"></img>
<img src="이미지 주소" width="40%" height="30%" title="px(픽셀) %크기 설정" alt="exampleImage2"></img> -->