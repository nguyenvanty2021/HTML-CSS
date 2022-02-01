import "./App.css";
import { DownOutlined } from "@ant-design/icons";
import WOW from "wowjs";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
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
