# 🌐 Portfolio 2025

## 🛜 개인 포트폴리오 웹사이트  
React + TypeScript 기반으로 제작하여 웹 표준, 접근성, 성능 최적화를 모두 고려했습니다.  
[👉 배포 URL](https://i-sohyeon.github.io/portfolio2025/)



---
## 🛠️ 기술 스택
- **Framework**: [Create React App](https://create-react-app.dev/) (TypeScript + JSX/TSX)
- **Language**: TypeScript, SCSS
- **Styling**: CSS Modules, SCSS
- **Build & Deploy**: GitHub Actions
- **Accessibility**: 시맨틱 마크업, aria-속성 적용, 명도 대비 준수
- **Performance**: 코드 스플리팅, 이미지 최적화(Lazy Loading, WebP 변환)
---


## 📱 주요 기능 및 특징

### 🎨 반응형 UI
- Desktop / Tablet / Mobile 반응형 레이아웃
- Flexbox & Grid 활용
- 미디어쿼리 분기

```
대형 PC: 1280px 이상
@media (min-width: 1280px)

데스크탑: 1024px ~ 1279px
@media (min-width: 1024px) and (max-width: 1279px)

태블릿: 768px ~ 1023px
@media (min-width: 768px) and (max-width: 1023px)

모바일 가로: 480px ~ 767px
@media (min-width: 480px) and (max-width: 767px)

모바일 세로: ~479px
@media (max-width: 479px)
```

### ♿ 접근성 (Accessibility)
- 시맨틱 태그(`header`, `main`, `section`, `article`, `nav`, `footer` ) 사용
- 스크린리더 친화적 `aria-label` 및 role 속성
- 명도 대비 WCAG 가이드라인 준수

### ⚡ 성능 최적화
- 이미지 압축(webp) 및 Lazy Loading
<!-- - React `Suspense` & `React.lazy`를 활용한 코드 스플리팅 -->
<!-- - 불필요한 리렌더링 방지를 위한 React.memo 사용 -->

### 🖌️ 구현 애니메이션
- 헤더 영역 : 일정 높이갚으로 스크롤이 되면 헤더 영역을 보이지 않게 숨겼다가 페이지가 다시 일정영역 위로 올라오면, 헤더가 보이게 설정
- (구현 예정) 메인 화면 : 카드 이미지가 뒤집히는게 무한으로 반복되는 애니메이션
- 띠 배너 : 텍스트들이 자연스럽게 흘러가는 애니메이션
- (구현 예정) Career 콘텐츠 영역 : 아래로 스크롤 할때 텍스트가 주르륵 나타는 애니메이션, 다시 아래로 스크롤을 올리면 텍스트가 주르륵 사라짐
---


## 📁 폴더 구조

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
    │       ├── icons
    │       └── swiper
    └── (기타 등등...)
    ├── components
    │   ├── UIAccordion
    │   ├── UIBadge
    │   ├── UIBanner
    │   ├── UIBox
    │   ├── UIButton
    │   ├── UIContent
    │   ├── UIDivider
    │   ├── UIHeader
    │   ├── UIcon
    │   ├── UISwiper
    │   ├── UITable
    │   ├── UIText
    │   └── UITextList
    ├── Routes
    │   ├── Home.tsx
    │   └── Sub.tsx
    ├── styles
    │   └── utils
    │       ├── _font.scss
    │       ├── _function.scss
    │       ├── _mixins.scss
    │       ├── _variables.scss
    │   ├── _common.scss
    │   ├── _reset.scss
    └── └── style.scss
```

## About Components (작성중)

### 컴포넌트와 같이 비슷한 기능을 하는 컴포넌트들을 하위컴포넌트(서브컴포넌트)로 분리하여 재사용성을 높임

- UIBanner  
   `UIBanner.List`
- UIBox
- UIContent
- UIHeader
- UISwiper
  `UISwiper.Box`
- UIText  
   `size`

- ### UITextList
  `UITextList.Check` `UITextList.Circle` `UITextList.Step`

====







### 텍스트 사이즈
UITextSize

- xxs 12 | 11
- xs 16 | 14
- sm 20 | 16
- md 24 | 20
- lg 28 | 24
- xl 32 | 28
- xxl 36 | 32

UITextHeaderSize

- sm 40 |
- md 48 |
- lg 60 |
- xl 72 |
- xxl 80 | 60





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
