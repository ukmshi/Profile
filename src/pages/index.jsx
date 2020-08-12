import React from "react"
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout"
import Form from "../components/form"

export default function Home({ data }) {
  return (
    <Layout>
      <div className="fullPageScroll">
        <section id="section1" className="section section1">
          <div className="content">
            <h1>
              <svg id="logo" className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1005 293">
                <g id="グループ_45" data-name="グループ 45" transform="translate(-575.5 -615.186)">
                  <g id="グループ_42" data-name="グループ 42" transform="translate(913.889 686.274)">
                    <path id="パス_7" data-name="パス 7" d="M780.424,686.184H791.7l1.367,13.665h.512c8.029-8.882,17.936-16.057,28.7-16.057,14.349,0,21.866,7,25.453,17.936,9.907-10.589,19.646-17.936,30.749-17.936,18.792,0,28.016,12.471,28.016,36.044v26.138c0,6.6-14.009,6.6-14.009,0v-24.43c0-17.765-5.637-25.624-17.936-25.624-7.518,0-15.375,4.954-24.258,15.032v48.688c0,6.6-13.836,6.6-13.836,0v-38.1c0-17.765-5.639-25.624-18.108-25.624-7.176,0-15.375,4.954-24.087,15.032v67.478H780.424Z" transform="translate(-772.309 -641.343)" fill="#6bab93" />
                    <circle id="楕円形_4" data-name="楕円形 4" cx="12.811" cy="12.811" r="12.811" transform="translate(0 31.801)" fill="#6bab93" />
                    <circle id="楕円形_5" data-name="楕円形 5" cx="12.811" cy="12.811" r="12.811" transform="translate(2.562 124.896)" fill="#6bab93" />
                    <circle id="楕円形_6" data-name="楕円形 6" cx="12.811" cy="12.811" r="12.811" transform="translate(439.556 114.547)" fill="#f2a61c" />
                    <path id="パス_8" data-name="パス 8" d="M868.823,754.685c0-20.158,17.594-30.065,57.227-34.507.171-12.47-3.758-24.768-19.646-24.768a43.608,43.608,0,0,0-26.307,8.541c-3.842,2.5-10.674-6.04-5.637-9.738a60.949,60.949,0,0,1,34.165-10.42c22.38,0,31.263,15.2,31.263,37.41v53.811c-.43,4.889-10.679,4.889-11.446,0l-1.2-7.859h-.513c-8.882,7.518-19.473,13.5-31.09,13.5C880.438,780.651,868.823,771.425,868.823,754.685Zm57.227,1.879V729.575c-32.628,3.758-43.731,11.614-43.731,24.256,0,11.1,7.687,15.546,17.082,15.546S916.655,764.936,926.05,756.564Z" transform="translate(-709.708 -641.343)" fill="#6bab93" />
                    <path id="パス_9" data-name="パス 9" d="M924.677,769.719c-4.694-3.481.43-13.73,7-9.395,8.03,6.491,12.811,9.393,24.429,9.393,12.813,0,19.133-6.833,19.133-15.373,0-9.907-11.1-14.349-21.525-18.108-13.153-4.781-27.332-10.932-27.332-26.648,0-14.35,11.446-25.795,31.432-25.795,11.1,0,17.6,2.9,24.6,8.541,4.185,3.869-.94,12.41-6.833,9.055-6.32-4.614-9.395-6.493-17.767-6.493-12.3,0-17.936,6.493-17.936,14.009,0,9.224,9.566,12.811,20.156,16.569,13.5,5.3,28.528,10.591,28.528,28.187,0,14.692-11.615,26.991-32.969,26.991C942.443,780.651,933.388,776.895,924.677,769.719Z" transform="translate(-671.443 -641.343)" fill="#6bab93" />
                    <path id="パス_10" data-name="パス 10" d="M974.522,663.469c0-6.037,13.838-6.037,13.838,0V697.8l-.514,19.3c8.882-8.543,18.279-15.717,30.921-15.717,19.3,0,28.186,12.471,28.186,36.044v55.177c0,6.6-14.007,6.6-14.007,0V739.144c0-17.765-5.468-25.624-18.281-25.624-9.736,0-16.74,5.125-26.306,15.032v64.061c0,6.6-13.838,6.6-13.838,0Z" transform="translate(-634.856 -658.942)" fill="#6bab93" />
                    <path id="パス_11" data-name="パス 11" d="M1039.042,757.025c.091,4.207,9.568,4.207,9.568,0l1.879-73.967.34-16.742c0-5.866-14.007-5.866-14.007,0l.342,16.742Z" transform="translate(-590.738 -656.835)" fill="#6bab93" />
                    <path id="パス_12" data-name="パス 12" d="M1066.121,663.469c0-6.037,13.665-6.037,13.665,0v90.709h.513l40.658-50.394c5.041-5.355,10.156,1.107,10.165,6.6l-25.2,30.467,30.323,48.109c3.416,6.833-6.833,11.957-10.678,7.068l-27.845-45.611-17.938,21.012v21.183c0,8.305-13.665,8.305-13.665,0Z" transform="translate(-569.989 -658.942)" fill="#6bab93" />
                    <path id="パス_13" data-name="パス 13" d="M1116.221,732.308c0-30.75,19.815-48.515,42.363-48.515s42.537,17.765,42.537,48.515c0,30.576-19.986,48.343-42.537,48.343S1116.221,762.885,1116.221,732.308Zm70.549,0c0-21.866-11.614-36.729-28.186-36.729s-28.014,14.863-28.014,36.729c0,22.035,11.445,36.726,28.014,36.726S1186.77,754.344,1186.77,732.308Z" transform="translate(-534.509 -641.343)" fill="#6bab93" />
                  </g>
                  <g id="グループ_44" data-name="グループ 44" transform="translate(580.5 620.186)">
                    <path id="パス_20" data-name="パス 20" d="M141.5,0A141.5,141.5,0,1,1,0,141.5,141.5,141.5,0,0,1,141.5,0Z" transform="translate(0 0)" fill="none" stroke="#6bab93" strokeWidth={10} />
                    <g id="グループ_43" data-name="グループ 43" transform="translate(12.811 13.234)">
                      <path id="パス_14" data-name="パス 14" d="M751.3,753.152c-1.831,6.4-4.465,8.23-15.742,9.246H685.594l-12.76-22.1h74.112C751,745.023,752.378,749.39,751.3,753.152Zm-16.328,27.618c.955-3.514-.506-7.246-4.443-11.535H689.542l11.383,19.717h19.442C728.956,788.951,733.443,786.411,734.975,780.769ZM788.725,720.5l-107.707.014-19.6,0,6.981,12.092h96.891a10.1,10.1,0,0,1,7.562-4.129c3.867,0,5.924,3.268,4.61,7.241-1.291,3.912-5.374,7.041-9.137,7.041a4.678,4.678,0,0,1-4.778-3.333l-10.479.212-.079.282c3.478,4.363,5.7,9.648,4.026,15.264-2.178,7.3-11.028,13.881-21.5,12.8,4.025,4.8,6.383,9.432,4.913,14.6-2.415,8.5-9.518,12.558-20.761,12.558H704.5l8.257,14.3a129.128,129.128,0,0,0,15.365-7.55A127.735,127.735,0,0,0,788.725,720.5Z" transform="translate(-536.01 -562.494)" fill="#6bab93" />
                      <path id="パス_15" data-name="パス 15" d="M685.419,804.46c-6.46,1.616-9.359.249-15.877-9.011l-24.984-43.273,12.76-22.1,37.055,64.184C692.312,800.137,689.215,803.511,685.419,804.46Zm-32.081-.331c3.521-.929,6.021-4.062,7.767-9.615l-20.494-35.5-11.383,19.717,9.719,16.836C643.241,803.007,647.686,805.624,653.338,804.129Zm79.069,16.414-53.865-93.271-9.8-16.976-6.981,12.092L710.2,806.3a10.1,10.1,0,0,1,7.356,4.486c1.934,3.348.133,6.763-3.963,7.613-4.035.837-8.787-1.134-10.667-4.392a4.681,4.681,0,0,1,.5-5.806L698,799.23l-.282.072c-2.041,5.2-5.5,9.766-11.205,11.12-7.408,1.763-17.536-2.608-21.832-12.22-2.147,5.886-4.978,10.244-10.191,11.558-8.568,2.156-15.635-1.964-21.258-11.7l-7.581-13.131-8.257,14.3a128.124,128.124,0,0,0,115.014,21.313Z" transform="translate(-567.185 -569.72)" fill="#6bab93" />
                      <path id="パス_16" data-name="パス 16" d="M618.626,754.593c-4.629-4.786-4.894-7.98-.135-18.255l24.984-43.273h25.518l-37.055,64.183C625.815,758.4,621.345,757.4,618.626,754.593Zm-15.754-27.949c2.567,2.584,6.529,3.184,12.213,1.92l20.495-35.5H612.811L603.092,709.9C598.8,717.34,598.753,722.5,602.871,726.644Zm25.322,76.683,53.841-93.283,9.8-16.979H677.872l-48.445,83.909a10.1,10.1,0,0,1-.207,8.614c-1.934,3.348-5.791,3.5-8.577.374-2.742-3.076-3.409-8.177-1.529-11.434a4.677,4.677,0,0,1,5.276-2.472l5.054-9.181-.2-.21c-5.519.832-11.207.116-15.233-4.144-5.229-5.534-6.506-16.491-.331-25.016-6.172,1.083-11.361.811-15.1-3.047-6.153-6.342-6.117-14.523-.5-24.261l7.581-13.131H589.143A129.254,129.254,0,0,0,588,710.147,127.734,127.734,0,0,0,628.193,803.327Z" transform="translate(-588 -581.923)" fill="#6bab93" />
                      <path id="パス_17" data-name="パス 17" d="M627.436,689.9c1.831-6.4,4.465-8.23,15.742-9.246h49.967l12.76,22.1H631.793C627.735,698.029,626.361,693.661,627.436,689.9Zm16.328-27.617c-.955,3.514.505,7.246,4.443,11.535H689.2L677.815,654.1H658.372C649.784,654.1,645.3,656.64,643.764,662.282Zm-53.749,60.269,107.707-.014,19.6,0-6.981-12.092H613.453a10.1,10.1,0,0,1-7.562,4.129c-3.867,0-5.924-3.268-4.61-7.241,1.291-3.912,5.374-7.041,9.137-7.041a4.678,4.678,0,0,1,4.778,3.333l10.48-.212.08-.282c-3.48-4.363-5.705-9.648-4.028-15.264,2.178-7.3,11.028-13.881,21.5-12.8-4.024-4.8-6.383-9.433-4.913-14.6,2.415-8.5,9.518-12.558,20.761-12.558h15.163l-8.257-14.3a129.136,129.136,0,0,0-15.365,7.55A127.741,127.741,0,0,0,590.015,722.551Z" transform="translate(-586.573 -624.033)" fill="#6bab93" />
                      <path id="パス_18" data-name="パス 18" d="M688.628,649.486c6.46-1.616,9.359-.249,15.877,9.011l24.984,43.273-12.76,22.1-37.055-64.184C681.736,653.809,684.833,650.435,688.628,649.486Zm32.081.331c-3.521.929-6.021,4.062-7.767,9.615l20.495,35.5,11.383-19.717L735.1,658.378C730.806,650.939,726.362,648.322,720.709,649.817ZM641.64,633.4l53.865,93.269,9.8,16.977,6.981-12.092-48.445-83.91a10.1,10.1,0,0,1-7.355-4.486c-1.934-3.348-.133-6.762,3.963-7.613,4.035-.837,8.787,1.134,10.668,4.392a4.681,4.681,0,0,1-.5,5.806l5.424,8.97.282-.072c2.041-5.2,5.5-9.766,11.206-11.12,7.408-1.763,17.536,2.608,21.832,12.22,2.147-5.886,4.978-10.244,10.191-11.557,8.568-2.156,15.635,1.964,21.258,11.7L748.4,669.02l8.257-14.3A128.123,128.123,0,0,0,641.64,633.4Z" transform="translate(-550.014 -628)" fill="#6bab93" />
                      <path id="パス_19" data-name="パス 19" d="M750.42,697.184c4.631,4.786,4.9,7.98.137,18.255l-24.984,43.273H700.055L737.11,694.53C743.232,693.376,747.7,694.372,750.42,697.184Zm15.756,27.949c-2.567-2.585-6.529-3.184-12.213-1.92l-20.495,35.5h22.768l9.719-16.836C770.25,734.437,770.294,729.28,766.176,725.133ZM740.854,648.45l-53.841,93.283-9.8,16.979h13.963L739.621,674.8a10.1,10.1,0,0,1,.207-8.614c1.934-3.348,5.791-3.5,8.577-.374,2.742,3.076,3.409,8.177,1.529,11.434a4.677,4.677,0,0,1-5.276,2.472L739.6,688.9l.2.21c5.519-.832,11.207-.116,15.233,4.144,5.229,5.535,6.506,16.491.331,25.016,6.172-1.083,11.361-.811,15.1,3.047,6.153,6.342,6.117,14.523.5,24.261l-7.581,13.131H779.9a129.254,129.254,0,0,0,1.143-17.082A127.734,127.734,0,0,0,740.854,648.45Z" transform="translate(-524.822 -613.518)" fill="#6bab93" />
                    </g>
                  </g>
                </g>
              </svg>
            </h1>
          </div>
        </section>
        <section id="section2" className="section section2">
          <div className="content">
            <div className="profile">
              <div className="profile--img">
                <figure>
                  <Img fluid={data.file.childImageSharp.fluid} />
                </figure>
              </div>
              <div className="profile--detail">
                <h2>プロフィール</h2>
                <p>益子右匡。好きな言葉は「思い立ったが吉日」。「腹が減っては軍は出来ぬ」なので、ハングリー精神でやりたいことが多すぎて、かえってやる気が起きません。<br />割とこの業界の仕事は楽しいので、苦じゃないです。沢山お仕事ください。</p>
              </div>
            </div>
            <div className="career">
              <h2>経歴</h2>
              <div className="career-box">
                <div className="career-detail">
                  <div className="career-date">17<br /><span>4月</span></div>
                  <div className="career-name">栃木県立那須拓陽高等学校</div>
                  <div className="career-div">普通科</div>
                  <div className="carrer-status">卒業</div>
                </div>
                <div className="career-detail">
                  <div className="career-date">18<br /><span>4月</span></div>
                  <div className="career-name">日本教育財団HAL東京</div>
                  <div className="career-div">昼間部高度情報処理学科</div>
                  <div className="carrer-status">入学</div>
                </div>
                <div className="career-detail">
                  <div className="career-date">19<br /><span>2月</span></div>
                  <div className="career-name">全研本社株式会社<br />アルバイト</div>
                  <div className="career-div">イノベーション事業</div>
                  <div className="carrer-status">コーダーとして従事</div>
                </div>
                <div className="career-detail">
                  <div className="career-date">20<br /><span>1月</span></div>
                  <div className="career-name" />
                  <div className="career-div">コミュニケーション<br />プロダクツ事業部</div>
                  <div className="carrer-status">プログラマーとして<br />新規事業に従事</div>
                </div>
                <div className="career-detail">
                  <div className="career-date">20<br /><span>7月</span></div>
                  <div className="career-name" />
                  <div className="career-div" />
                  <div className="carrer-status">契約解除</div>
                </div>
                <div className="career-detail now">
                  <div className="career-date">20<br /><span>現在</span></div>
                  <div className="career-name">日本教育財団HAL東京</div>
                  <div className="career-div">昼間部高度情報処理学科</div>
                  <div className="carrer-status">３年次在籍</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="section4" className="section section4">
          <div className="content">
            <h2>ワークス</h2>
            <ul>
              <li>サイト制作</li>
              <li>WordPressのテーマ制作</li>
              <li>Gatsby.jsを用いた静的サイト制作</li>
              <li>水量管理システムのフロント</li>
              <li>クローラー開発</li>
              <li>テキストマイニング</li>
              <li>共起ネットワーク</li>
              <li>テキスト分類</li>
              <li>コレスポンデンス分析</li>
              <li>ネイティブアプリ制作</li>
              <li>ネイティブアプリ自動化ツール</li>
            </ul>
            <p>などなど</p>
          </div>
        </section>

        <Form />

      </div>
    </Layout>
  )
}

export const query = graphql`
query {
  file(relativePath: {eq: "profile.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 300){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`;