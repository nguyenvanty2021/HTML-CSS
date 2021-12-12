import "./App.css";
import { DownOutlined } from "@ant-design/icons";
function App() {
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
        <p>p</p>
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
    </div>
  );
}

export default App;
