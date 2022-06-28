import './App.css';
import logo from './assets/images/logo-le-monde-steak-v3.png'
import redline from './assets/images/bg-title.png';
import Dropdowncontainer from './components/dropdown-container/dropdown-container';
import Slideshow from './components/slideshow/slideshow';
import Bodyimages from './components/body-images/body-images';



function App() {
  return (
    <div className="App">


      <header className='header'>
        {/*Logo begin*/}
        <div className='logo-in make-left'>
          <a href='#'>
            <img src={logo} alt='Logo' style={{ height: "54px", width: "150px" }} />
          </a>
        </div>
        {/*Logo end*/}


        {/*menu begin*/}
        <div className="menu-top make-right">
          <Dropdowncontainer />
        </div>
        {/*menu end*/}



      </header >
      <body>
        <div>
          {<Slideshow />}
        </div>
        <br />
        <a className='body-content' href='#'>
          <div>

            <img className='body-content image' src={redline}></img>
            <div className='body-content text'>
              <b >  Chào mừng đến với Le Monde Steak </b>

            </div>

            <br />
          </div>
        </a>
        <br /><br />
        <span className='body-span'>Le Monde Steak là hệ thống Bít Tết theo phong cách thành thị Pháp đầu tiên tại Việt Nam, nơi thực khách tự do trải nghiệm những món ăn mang <br /><br /> hương vị Pháp đầy lôi cuốn và tận hưởng khoảnh khắc thư giãn trong không gian mở gần gũi với thiên nhiên, lãng mạn đặc trưng của Pháp. Tất cả tạo <br /><br /> nên một sự cộng hưởng mạnh mẽ, để lại trong lòng bạn ấn tượng khó quên.</span>
        <br />
        <div>
          <Bodyimages />
        </div>
      </body>


      <footer className='footer'>
        <h2 className='footer-phonenumber'>0345 678 989</h2>
      </footer>


    </div >
  );
}

export default App;
