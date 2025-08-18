import React from "react";
// import ReactDOM from "react-dom";
// import "./styles/style.scss";
import {
  UIText,
  UIContent,
  UIHeader,
  UIBox,
  UIBanner,
  UISwiper,
  UITextList,
  SlideItem,
  UITable,
  UIBadge,
} from "../components/v1";
import { SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// import { Pagination } from 'swiper/modules';

function Home() {
  const textList = [
    "현대카드 커머셜 web/app 운영",
    "우리은행 won 뱅킹 재구축 사업",
    "농협은행 올원뱅크 리뉴얼 구축",
    "KB국민은행 멤버십 플랫폼 구축",
    "KB국민은행 태블릿 브랜치 금융투자상품 판매프로세스 구축",
    "문구야놀자 pc/mobile(적응형) 구축 및 운영",
    "웅진 딸기콩 랜딩페이지 pc/web(반응형) 구축 및 운영",
    "웅진 딸기콩 관리자 페이지",
    "굿뜨래페이 pc/mobile(반응형)",
    "인조이웍스 홈페이지 pc/web(반응형)",
    "포토이 인생사진 mobile",
    "태양광 햇빛마루 pc/mobile(적응형)",
  ];

  const columns = [
    { key: "name", header: "이름" },
    { key: "age", header: "나이" },
  ];
  
  const rows = [
    { name: "홍길동", age: 28 },
    { name: "김영희", age: 32 },
  ];

  return (
    <>
      <UIContent bgColor="gray" bgPattern="check">
        <UIHeader size="md">S.H.LEE</UIHeader>
        <UIBox align="center" style={{ padding: "240px 0 220px 0" }}>
          <div>
            <UIText.Header size="xl" align="center" variant="mainTitle" as="h1">
              UI &middot; UX
              <br />
              WEB PUBLISHER
              <br />
              <span>PORTFOLIO</span>
            </UIText.Header>
          </div>
        </UIBox>
      </UIContent>

      <UIContent
        bgColor="black"
        className="txt-banner-wrap"
        style={{ overflowX: "hidden", padding: "36px 0" }}>
        <div className="txt-banner">
          <div className="txt-banner-list">
            <UIText.Basic font="tenada" size="lg" color="white">
              현대카드
            </UIText.Basic>
            <UIText.Basic font="tenada" size="lg" color="white">
              우리은행 우리WON뱅킹
            </UIText.Basic>
            <UIText.Basic font="tenada" size="lg" color="white">
              농협은행 올원뱅크
            </UIText.Basic>
            <UIText.Basic font="tenada" size="lg" color="white">
              KB국민은행 멤버십 플랫폼
            </UIText.Basic>
            <UIText.Basic font="tenada" size="lg" color="white">
              문구야 놀자
            </UIText.Basic>
            <UIText.Basic font="tenada" size="lg" color="white">
              웅진 딸기콩
            </UIText.Basic>
            <UIText.Basic font="tenada" size="lg" color="white">
              굿뜨래페이
            </UIText.Basic>
            <UIText.Basic font="tenada" size="lg" color="white">
              인조이웍스
            </UIText.Basic>
            <UIText.Basic font="tenada" size="lg" color="white">
              포토이
            </UIText.Basic>
            <UIText.Basic font="tenada" size="lg" color="white">
              태양광
            </UIText.Basic>
          </div>
          <div className="txt-banner-list">
            <UIText.Basic font="tenada" size="lg" color="white">
              현대카드
            </UIText.Basic>
            <UIText.Basic font="tenada" size="lg" color="white">
              우리은행 우리WON뱅킹
            </UIText.Basic>
            <UIText.Basic font="tenada" size="lg" color="white">
              농협은행 올원뱅크
            </UIText.Basic>
            <UIText.Basic font="tenada" size="lg" color="white">
              KB국민은행 멤버십 플랫폼
            </UIText.Basic>
            <UIText.Basic font="tenada" size="lg" color="white">
              문구야 놀자
            </UIText.Basic>
            <UIText.Basic font="tenada" size="lg" color="white">
              웅진 딸기콩
            </UIText.Basic>
            <UIText.Basic font="tenada" size="lg" color="white">
              굿뜨래페이
            </UIText.Basic>
            <UIText.Basic font="tenada" size="lg" color="white">
              인조이웍스
            </UIText.Basic>
            <UIText.Basic font="tenada" size="lg" color="white">
              포토이
            </UIText.Basic>
            <UIText.Basic font="tenada" size="lg" color="white">
              태양광
            </UIText.Basic>
          </div>
        </div>
      </UIContent>

      <UIContent bgColor="blue" bgPattern="waveyellow">
        <UIBox variant="flex" jContent="space-between" aItems="middle">
          <div>
            <UIText.Header size="lg">경력 CAREER</UIText.Header>
            <UIBanner.List
              icon="study"
              number="2020"
              variant="list"
              bgColor="type1"
              title="ui/ux 스마트웹&앱디자인 (웹 퍼블리싱&프론트엔드) 실무과정"
              des="(20202.04~2020.10)"
            />
            <UIBanner.List
              icon="company"
              number="2021"
              variant="list"
              bgColor="type2"
              title="인조이웍스(enjoy works)"
              des="(2021.01 ~ 2022.04)"></UIBanner.List>
            <UIBanner.List
              icon="study"
              number="2022"
              variant="list"
              bgColor="type3"
              title="[프론트엔드] 리액트 (React.js 자바스크립트)_주말"
              des="(2022.01 ~2022.04)"></UIBanner.List>
            <UIBanner.List
              icon="company"
              number="2023"
              variant="list"
              bgColor="type4"
              title="인픽스(INPIX)"
              des="(2022.06 ~ )"
            />
            <UIBanner.List
              icon="study"
              number="2024"
              variant="list"
              bgColor="type5"
              title="한국방송통신대학교 컴퓨터과학과 편입 (재학중)"
              des="(2023.09 ~ )"
            />
            <UIBanner.List
              icon="company"
              number="2025"
              variant="list"
              bgColor="type6"
              title="??????"
              des="(????.?? ~ )"
            />
          </div>

          <div
            style={{
              height: "fit-content",
              backgroundColor: "#FFF302",
              borderRadius: "24px",
              display: "block",
              width: "100%",
              maxWidth: "520px",
              padding: "60px 40px",
              boxSizing: "border-box",
            }}>
            <div style={{ marginBottom: "32px" }}>
              <UIText.Header as="p" font="tenada" size="md">
                프로젝트 경험
              </UIText.Header>
              <UIText.Header as="p" font="tenada" size="md" color="blue">
                Project Experience
              </UIText.Header>
            </div>
            <UITextList.Check variant="check" size="md" checkItems={textList} />
          </div>
        </UIBox>
      </UIContent>

      <UIContent
        bgColor="gray"
        bgPattern="check"
        style={{ overflowX: "hidden" }}>
        <UIBox variant="content">
          <UIText.Header variant="h3" size="lg">
            PROJECT DETAILS
            <Link to="/Sub">경력기술서로 확인하기</Link>
          </UIText.Header>

          <UISwiper.Box
            variant="type1"
            pagination={true}
            navigation={false}
            className="swiper-custom">
            <SwiperSlide>
              <SlideItem 
                title="현대카드 web/app 운영"
                titleColor="black"
                content="Adaptive Page Publishing"
                imgSrc="../../assets/images/swiper/hyundaicard.png"
                bgColor="gray">
                 <UITable.Default className="mt-5" variant="type1" size="md" align="left">
                  <table>
                    <tbody>
                      <tr>
                        <th>프로젝트 기간</th>
                        <td>2024. 12. ~</td>
                      </tr>
                      <tr>
                        <th>작업 참여인원</th>
                        <td>퍼블리싱 8명 </td>
                      </tr>
                      <tr>
                        <th>사용 툴</th>
                        <td>CMS, VSCODE, Figma</td>
                      </tr>
                      <tr>
                        <th>웹주소</th>
                        <td>https://www.hyundaicard.com/index.jsp</td>
                      </tr>
                    </tbody>
                  </table>
                </UITable.Default>
                <div className="mt-8">
                  <UIBadge size="md" variant="line">#CMS</UIBadge>
                  <UIBadge size="md" variant="line">#적응형홈페이지</UIBadge>
                  <UIBadge size="md" variant="line">#Webview</UIBadge>
                  <UIBadge size="md" variant="line">#CMS</UIBadge>
                  <UIBadge size="md" variant="line">#MoWeb</UIBadge>
                </div>
              </SlideItem>
            </SwiperSlide>

            <SwiperSlide>
            <SlideItem 
                title="우리은행 won 뱅킹 재구축 사업"
                titleColor="blue"
                content="Adaptive Page Publishing"
                imgSrc="../../assets/images/swiper/wooribank.png"
                bgColor="light-blue">
              <UITable.Default className="mt-5" variant="type1" size="md" align="left">
                  <table>
                    <tbody>
                      <tr>
                        <th>프로젝트 기간</th>
                        <td>2024. 04. ~ 2024. 12</td>
                      </tr>
                      <tr>
                        <th>작업 참여인원</th>
                        <td>퍼블리싱 12명 </td>
                      </tr>
                      <tr>
                        <th>사용 툴</th>
                        <td>VSCODE, Figma, React, css(scss), Typescript(Javascript), Git</td>
                      </tr>
                      <tr>
                        <th>웹주소</th>
                        <td>https://www.hyundaicard.com/index.jsp</td>
                      </tr>
                    </tbody>
                  </table>
                </UITable.Default>
                <div className="mt-8">
                  <UIBadge size="md" variant="line">#CMS</UIBadge>
                  <UIBadge size="md" variant="line">#적응형홈페이지</UIBadge>
                  <UIBadge size="md" variant="line">#Webview</UIBadge>
                  <UIBadge size="md" variant="line">#CMS</UIBadge>
                  <UIBadge size="md" variant="line">#MoWeb</UIBadge>
                </div>
              </SlideItem>
            </SwiperSlide>

            <SwiperSlide>
              <SlideItem 
                title="농협 올원뱅크 리뉴얼 구축"
                titleColor="yellow"
                content="Adaptive Page Publishing"
                imgSrc="../../assets/images/swiper/nhbank.png"
                bgColor="green">
                <table>
                  <tbody>
                    <tr>
                      <th>작업기간</th>
                      <td>YYYY.MM.DD</td>
                    </tr>
                    <tr>
                      <th>작업기간</th>
                      <td>YYYY.MM.DD</td>
                    </tr>
                    <tr>
                      <th>작업기간</th>
                      <td>YYYY.MM.DD</td>
                    </tr>
                    <tr>
                      <th>작업기간</th>
                      <td>YYYY.MM.DD</td>
                    </tr>
                  </tbody>
                </table>
              <span># 어쩌구</span>
              </SlideItem>
            </SwiperSlide>

            <SwiperSlide>
              <SlideItem 
                title="KB국민은행 멤버십 플랫폼 구축"
                titleColor="yellow"
                content="Adaptive Page Publishing"
                imgSrc="../../assets/images/swiper/kbbank.png"
                bgColor="brown">
                <table>
                  <tbody>
                    <tr>
                      <th>작업기간</th>
                      <td>YYYY.MM.DD</td>
                    </tr>
                    <tr>
                      <th>작업기간</th>
                      <td>YYYY.MM.DD</td>
                    </tr>
                    <tr>
                      <th>작업기간</th>
                      <td>YYYY.MM.DD</td>
                    </tr>
                    <tr>
                      <th>작업기간</th>
                      <td>YYYY.MM.DD</td>
                    </tr>
                  </tbody>
                </table>
                <span># 어쩌구</span>
              </SlideItem>
            </SwiperSlide>

            <SwiperSlide>
              <SlideItem 
                title="문구야놀자(PC/Mobile)"
                titleColor="purple"
                content="Adaptive Page Publishing"
                imgSrc="../../assets/images/swiper/playmoongu.png"
                bgColor="yellow"
                >
                  {/* <UITable.Default columns={columns} rows={rows} /> */}
                <span># 어쩌구</span>
              </SlideItem>
            </SwiperSlide>

            <SwiperSlide>
              <SlideItem 
                title="딸기콩(PC/Mobile)"
                titleColor="green"
                content="Adaptive Page Publishing"
                imgSrc="../../assets/images/swiper/ddalgicong.png"
                bgColor="red">
                <table>
                  <tbody>
                    <tr>
                      <th>작업기간</th>
                      <td>YYYY.MM.DD</td>
                    </tr>
                    <tr>
                      <th>작업기간</th>
                      <td>YYYY.MM.DD</td>
                    </tr>
                    <tr>
                      <th>작업기간</th>
                      <td>YYYY.MM.DD</td>
                    </tr>
                    <tr>
                      <th>작업기간</th>
                      <td>YYYY.MM.DD</td>
                    </tr>
                  </tbody>
                </table>
                <span># 어쩌구</span>
              </SlideItem>
            </SwiperSlide>
       
            <SwiperSlide>
              <SlideItem 
                title="인조이웍스 홈페이지"
                titleColor="yellow"
                content="Adaptive Page Publishing"
                imgSrc="../../assets/images/swiper/enjoyworks.png"
                bgColor="brown">
                <table>
                  <tbody>
                    <tr>
                      <th>작업기간</th>
                      <td>YYYY.MM.DD</td>
                    </tr>
                    <tr>
                      <th>작업기간</th>
                      <td>YYYY.MM.DD</td>
                    </tr>
                    <tr>
                      <th>작업기간</th>
                      <td>YYYY.MM.DD</td>
                    </tr>
                    <tr>
                      <th>작업기간</th>
                      <td>YYYY.MM.DD</td>
                    </tr>
                  </tbody>
                </table>
                <span># 어쩌구</span>
              </SlideItem>
            </SwiperSlide>
            <SwiperSlide>
              <SlideItem 
                title="굿뜨래페이"
                titleColor="yellow"
                content="Adaptive Page Publishing"
                imgSrc="../../assets/images/swiper/goodtraepay.png"
                bgColor="brown">
                <table>
                  <tbody>
                    <tr>
                      <th>작업기간</th>
                      <td>YYYY.MM.DD</td>
                    </tr>
                    <tr>
                      <th>작업기간</th>
                      <td>YYYY.MM.DD</td>
                    </tr>
                    <tr>
                      <th>작업기간</th>
                      <td>YYYY.MM.DD</td>
                    </tr>
                    <tr>
                      <th>작업기간</th>
                      <td>YYYY.MM.DD</td>
                    </tr>
                  </tbody>
                </table>
                <span># 어쩌구</span>
              </SlideItem>
            </SwiperSlide>

            <SwiperSlide>
              <SlideItem 
                title="딸기콩(PC/Mobile)"
                titleColor="green"
                content="Adaptive Page Publishing"
                imgSrc="../../assets/images/swiper/ddalgicong_admin.png"
                bgColor="red">
                <table>
                  <tbody>
                    <tr>
                      <th>작업기간</th>
                      <td>YYYY.MM.DD</td>
                    </tr>
                    <tr>
                      <th>작업기간</th>
                      <td>YYYY.MM.DD</td>
                    </tr>
                    <tr>
                      <th>작업기간</th>
                      <td>YYYY.MM.DD</td>
                    </tr>
                    <tr>
                      <th>작업기간</th>
                      <td>YYYY.MM.DD</td>
                    </tr>
                  </tbody>
                </table>
                <span># 어쩌구</span>
              </SlideItem>
            </SwiperSlide>
          </UISwiper.Box>
        </UIBox>
      </UIContent>

      <UIContent bgColor="pink" bgPattern="wave">
        <UIBox variant="content">
          <UIText.Header size="lg">ABOUT PORTFOLIO</UIText.Header>
        </UIBox>
      </UIContent>
    </>
  );
}

export default Home;
