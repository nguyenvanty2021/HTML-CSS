import "./App.css";
import { DownOutlined } from "@ant-design/icons";
import WOW from "wowjs";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
    Aos.init({
      // 1 là duration 2000 thôi
      //duration:2000
      // 2 là dùng cả 4 thuộc tính này
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
      // disable: 'mobile'
      //  disable: window.innerWidth < 1024
      //  disable: function () {
      // var maxWidth = 1024;
      // return window.innerWidth < maxWidth;
      // startEvent: 'someCoolEvent'
  //}
    })
  }, []);
  return (
    <div className="parent">
      {/* cho ra giữa cách 1 */}
      <div className="position">
        <div className="box"></div>
      </div>
      {/* cho ra giữa cách 2 */}
      <div className="position-v">
        <div className="box-v">
          Lorem ipsum adsdskdajs dasjd aslkdasdsakdlasdasdas djkasldasd
          dasdasdasdasklj dasdasdasdasjdk dada sdsdasdkldasdasdas dasdas
          dasdasdslk Lorem ipsum adsdskdajs dasjd aslkdasdsakdlasdasdas
          djkasldasd dasdasdasdasklj dasdasdasdasjdk dada sdsdasdkldasdasdas
          dasdas dasdasdslk
        </div>
      </div>
      {/* text */}
      <div className="text">
        {" "}
        Lorem ipsum adsdskdajs dasjd aslkdasdsakdlasdasdas djkasldasd
        dasdasdasdasklj dasdasdasdasjdk dada sdsdasdkldasdasdas dasdas
        dasdasdslk Lorem ipsum adsdskdajs dasjd aslkdasdsakdlasdasdas djkasldasd
        dasdasdasdasklj dasdasdasdasjdk dada sdsdasdkldasdasdas dasdas
        dasdasdslk Lorem ipsum adsdskdajs dasjd aslkdasdsakdlasdasdas djkasldasd
        dasdasdasdasklj dasdasdasdasjdk dada sdsdasdkldasdasdas dasdas
        dasdasdslk Lorem ipsum adsdskdajs dasjd aslkdasdsakdlasdasdas djkasldasd
        dasdasdasdasklj dasdasdasdasjdk dada sdsdasdkldasdasdas dasdas
        dasdasdslk
      </div>
      {/* 1 từ quá dài  */}
      <div className="word">
        dssasdsadhsajdashdajsdhadhajkdhakdhajdhaskdjhakjdhasjdhadjhasdjasdhsdjkahdajshdjkasdhajksdhasjdhajkdahdjahdjkashdjaksdhajequweyqwueyqwuieqiywudyasuaysuidasyduiasdyasuidsaydssasdsadhsajdashdajsdhadhajkdhakdhajdhaskdjhakjdhasjdhadjhasdjasdhsdjkahdajshdjkasdhajksdhasjdhajkdahdjahdjkashdjaksdhajequweyqwueyqwuieqiywudyasuaysuidasyduiasdyasuidsay
      </div>
      <div>
        {" "}
        {/* thẻ inline và thẻ block */}
        <span>span</span>
        <span>span</span>
        <span>span</span>
        <span>span</span>
        <span>span</span>
        <b>b</b>
        <a target="_blank" rel="noopener noreferrer" href="123">
          a
        </a>
        {/* thẻ inline sẽ có độ rộng = nội dung mà nó chứa, nếu có nhiều thẻ inline
      nằm với nhau thì nó sẽ nằm trên 1 hàng, bị hạn chế về thuộc tính css */}
        <p style={{ backgroundColor: "red" }}>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <h1>1</h1>
        {/* có độ rộng full phần tử chứa nó , nếu nhiều thẻ block nằm với nhau thì nó
      sẽ rớt xuống hàng, thường dùng cho văn bản (các dòng text dài) */}
        {/* ngoài ra còn lại chỉ dùng thẻ div để bọc thẻ span or thẻ p chứ không nên lồng div bên trong div */}
        {/* các tiêu đề nên dùng thẻo h1, h2, h3, h4, h5 */}
      </div>
      {/* 1 số thẻ của html5 */}
      <header></header>
      <footer></footer>
      <nav>thẻ này dành cho menu</nav>
      <main></main>
      <section></section>
      <iframe
        width="814"
        height="509"
        src="https://www.youtube.com/embed/g4GBGAo_riE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      {/* custom select */}
      <div className="dropdown">
        <div className="dropdown-select">
          <span>Selected item</span>
          <DownOutlined />
        </div>
        <div className="dropdown-list">
          <p className="dropdown-item">A</p>
          <p className="dropdown-item">A</p>
          <p className="dropdown-item">A</p>
        </div>
      </div>
      {/* custom select 2*/}
      <div className="dropdown-v">
        <div className="dropdown-select-v">
          <span>Selected item</span>
          <DownOutlined />
        </div>
        <div className="dropdown-list-v">
          <p className="dropdown-item-v">A</p>
          <p className="dropdown-item-v">A</p>
          <p className="dropdown-item-v">A</p>
        </div>
      </div>
      {/* selector */}
      <div className="selector">
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
      </div>
      {/* custom dấu chấm */}
      <div className="dot">Nguyễn Văn Tỷ</div>
      {/* custom line */}
      <div className="line">
        <span className="or">or</span>
      </div>
      {/* custom before, after finish */}
      <div className="effect">Effect</div>
      <div className="effect-v2">Effect</div>
      {/* transform (hiệu ứng nghiêng, quay, zoom to, nhỏ), transition (làm chậm lại những quá trình thực thi css: nghiêng, quay, zoom to, nhỏ, ẩn, hiện) cần làm chậm quá trình nào thì bỏ tên quá trình đó vào VD: transform -> ngoài ra transition còn hỗ trợ 4 thuộc tính: ease (default), ease-in, ease-out, ease-in-out, linear -> thích nào thì dùng cái đó, thường dùng ease-in-out */}
      <img
        className="img"
        alt="Image"
        src="https://sieupet.com/sites/default/files/pictures/images/1-1473150685951-5.jpg"
      />
      <img
        className="img-2"
        alt="Image"
        src="https://sieupet.com/sites/default/files/pictures/images/1-1473150685951-5.jpg"
      />
      <img
        className="img-3"
        alt="Image"
        src="https://sieupet.com/sites/default/files/pictures/images/1-1473150685951-5.jpg"
      />
      {/* animation or use library animate.style, wowjs (scroll to will action)
      Steps install wowjs
      Step 1: npm install wowjs
      Step 2: import WOW from 'wowjs';
      Step 3: componentDidMount() {
                  new WOW.WOW({
                    live: false
                }).init();
              }
      */}
      <div className="key__frames">123</div>
      <div className="key__frames-2">123</div>
      {/* Wowjs gồm có 1 số thuộc tính: bounceInDown, bounceInUp, bounceInRight, bounceInLeft, fadeInDown, fadeInUp, fadeInRight, fadeInLeft */}
      <h1
        data-wow-delay="0.5s"
        className="animate__animated animate__flash wow fadeInDown"
      >
        An animated element
      </h1>
      {/* aos */}
      <div data-aos="fade-up" style={{backgroundColor:"red",width:"500px",height:"500px",marginBottom:"5rem"}} >123</div>
      <div data-aos="fade-right" style={{backgroundColor:"green",width:"500px",height:"500px",marginBottom:"5rem"}} >123</div>
      <div  data-aos="fade-up-right" style={{backgroundColor:"blue",width:"500px",height:"500px",marginBottom:"5rem"}} >123</div>
      <div data-aos="fade-down-right" style={{backgroundColor:"orange",width:"500px",height:"500px",marginBottom:"5rem"}} >123</div>
      <div data-aos="flip-right" style={{backgroundColor:"pink",width:"500px",height:"500px",marginBottom:"5rem"}} >123</div>

      <div data-aos="flip-down" style={{backgroundColor:"red",width:"500px",height:"500px",marginBottom:"5rem"}} >123</div>
      <div data-aos="zoom-in" style={{backgroundColor:"green",width:"500px",height:"500px",marginBottom:"5rem"}} >123</div>
      <div  data-aos="zoom-in-up" style={{backgroundColor:"blue",width:"500px",height:"500px",marginBottom:"5rem"}} >123</div>
      <div data-aos="zoom-in-left" style={{backgroundColor:"orange",width:"500px",height:"500px",marginBottom:"5rem"}} >123</div>
      <div data-aos="zoom-out" style={{backgroundColor:"pink",width:"500px",height:"500px",marginBottom:"5rem"}} >123</div>



      <div data-aos="fade-up"
     data-aos-anchor-placement="top-center" style={{backgroundColor:"red",width:"500px",height:"500px",marginBottom:"5rem"}} >123</div>
      <div data-aos="fade-up"
     data-aos-anchor-placement="center-center" style={{backgroundColor:"green",width:"500px",height:"500px",marginBottom:"5rem"}} >123</div>
      <div  data-aos="fade-up"
     data-aos-anchor-placement="bottom-center" style={{backgroundColor:"blue",width:"500px",height:"500px",marginBottom:"5rem"}} >123</div>



      <div data-aos="zoom-out-down" style={{backgroundColor:"red",width:"500px",height:"500px",marginBottom:"5rem"}} >123</div>
      <div data-aos="zoom-out-right" style={{backgroundColor:"green",width:"500px",height:"500px",marginBottom:"5rem"}} >123</div>
      <div  data-aos="fade-up"
     data-aos-duration="3000" style={{backgroundColor:"blue",width:"500px",height:"500px",marginBottom:"5rem"}} >123</div>
      <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" style={{backgroundColor:"orange",width:"500px",height:"500px",marginBottom:"5rem"}} >123</div>
      <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" style={{backgroundColor:"pink",width:"500px",height:"500px",marginBottom:"5rem"}} >123</div>


<div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" style={{backgroundColor:"red",width:"500px",height:"500px",marginBottom:"5rem"}} >123</div>
      <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0" style={{backgroundColor:"green",width:"500px",height:"500px",marginBottom:"5rem"}} >123</div>
      <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" style={{backgroundColor:"blue",width:"500px",height:"500px",marginBottom:"5rem"}} >123</div>
      <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" style={{backgroundColor:"orange",width:"500px",height:"500px",marginBottom:"5rem"}} >123</div>
      <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" style={{backgroundColor:"pink",width:"500px",height:"500px",marginBottom:"5rem"}} >123</div>
      {/* custom scrollbar */}
      <div className="scroll">
        <div className="force-overflow"></div>
      </div>
      {/* animation */}
      <div className="blue-parent">
        <div className="blue"></div>
      </div>
      <div className="yellow"></div>
      <div className="loading"></div>
      {/* before, after */}
      <ul className="before">
        <li>Home</li>
        <li>Profile</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      {/* bỏ loading-skeleton sẽ thành UI thường, thêm loading-skeleton sẽ thành loading skeleton */}
      <div className="card loading-skeleton">
        <div className="user-info">
          <div className="logo">
            <img src="https://picsum.photos/50/50" alt="" />
          </div>
          <div className="name">HOLETEX</div>
        </div>
        <div className="content">
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem lorem lorem lorem
        </div>
      </div>
      {/* bỏ loading-skeleton sẽ thành UI thường, thêm loading-skeleton sẽ thành loading skeleton */}
      <div className="card">
        <div className="user-info">
          <div className="logo">
            <img src="https://picsum.photos/50/50" alt="" />
          </div>
          <div className="name">HOLETEX</div>
        </div>
        <div className="content">
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem lorem lorem lorem
        </div>
      </div>
    </div>
  );
}

export default App;
