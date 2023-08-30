import Footer from "../Footer/Footer";
import Navbar from "../components/Navbar";
import a1 from '../assets/images/a1.jpg'
import a2 from '../assets/images/a2.jpg'
import a3 from '../assets/images/a3.jpg'
import a4 from '../assets/images/a4.jpg'
import a5 from '../assets/images/a5.jpg'
import a6 from '../assets/images/a6.jpg'
import a7 from '../assets/images/a7.jpg'
import a8 from '../assets/images/a8.jpg'
import a9 from '../assets/images/a9.jpg'
import a10 from '../assets/images/a10.jpg'
import a11 from '../assets/images/a11.jpg'
import a12 from '../assets/images/a12.jpg'
import a13 from '../assets/images/a13.jpg'
import a14 from '../assets/images/a14.jpg'
import a15 from '../assets/images/a15.jpg'
import a16 from '../assets/images/a16.jpg'
import a17 from '../assets/images/a17.jpg'
import a18 from '../assets/images/a18.jpg'
import a19 from '../assets/images/a19.jpg'
import a20 from '../assets/images/a20.jpg'
import a21 from '../assets/images/a21.jpg'
import m1 from '../assets/images/m1.jpg'
import m2 from '../assets/images/m2.jpg'
import m3 from '../assets/images/m3.jpg'
import m4 from '../assets/images/m4.jpg'
import m5 from '../assets/images/m5.jpg'
import m6 from '../assets/images/m6.jpg'
import m7 from '../assets/images/m7.jpg'
import m8 from '../assets/images/m8.jpg'
import m9 from '../assets/images/m9.jpg'
import m10 from '../assets/images/m10.jpg'
import m11 from '../assets/images/m11.jpg'
import m12 from '../assets/images/m12.jpg'
function Petdogs() {
  return (
    <>
    <Navbar />
      <div class="club-products">
      <h2>Tất cả các thú cưng</h2>
      <ul class="list-products">
          <div class="item">
              <img src={a1} alt=""/>
              <div class="name">Chó Poodle</div>
              <div class="price">15.000.000</div>
              <button onclick="addToCart('Chó Poodle', 15000000)" class="btn-buy">Mua ngay</button>
          </div> 

          <div class="item">
              <img src={a2} alt=""/>
              <div class="name">Chó Poodle</div>
              <div class="price">15.000.000</div>
              <button onclick="addToCart('Chó Poodle', 15000000)" class="btn-buy">Mua ngay</button>
          </div> 

          <div class="item">
              <img src={a3} alt=""/>
              <div class="name">Chó Poodle</div>
              <div class="price">15.000.000</div>
              <button onclick="addToCart('Chó Poodle', 15000000)" class="btn-buy">Mua ngay</button>
          </div> 

          <div class="item">
              <img src={a4} alt=""/>
              <div class="name">Chó Poodle</div>
              <div class="price">15.000.000</div>
              <button onclick="addToCart('Chó Poodle', 15000000)" class="btn-buy">Mua ngay</button>
          </div> 

          <div class="item">
              <img src={a10} alt=""/>
              <div class="name">Chó Husky</div>
              <div class="price">15.000.000</div>
              <button onclick="addToCart('Chó Husky', 15000000)" class="btn-buy">Mua ngay</button>
          </div> 

          <div class="item">
              <img src={a11} alt=""/>
              <div class="name">Chó Husky</div>
              <div class="price">15.000.000</div>
              <button onclick="addToCart('Atletico Madrid Sân Nhà', 150000)" class="btn-buy">Mua ngay</button>
          </div> 

          <div class="item">
              <img src={a9} alt=""/>
              <div class="name">Chó Husky</div>
              <div class="price">15.000.000</div>
              <button onclick="addToCart('Asernal Sân Khách', 150000)" class="btn-buy">Mua ngay</button>
          </div> 

          <div class="item">
              <img src={a12} alt=""/>
              <div class="name">Chó Husky</div>
              <div class="price">15.000.000</div>
              <button onclick="addToCart('Asernal Sân Nhà', 150000)" class="btn-buy">Mua ngay</button>
          </div> 

          <div class="item">
              <img src={a13} alt=""/>
              <div class="name">Chó Chihuahua</div>
              <div class="price">15.000.000</div>
              <button onclick="addToCart('Bayern Munich Sân Khách', 150000)" class="btn-buy">Mua ngay</button>
          </div> 

          <div class="item">
              <img src={a14} alt=""/>
              <div class="name">Chó Chihuahua</div>
              <div class="price">15.000.000</div>
              <button onclick="addToCart('Bayern Munich Sân Nhà', 150000)" class="btn-buy">Mua ngay</button>
          </div> 

          <div class="item">
              <img src={a15} alt=""/>
              <div class="name">Chó Chihuahua</div>
              <div class="price">15.000.000</div>
              <button onclick="addToCart('Inter Miami Sân Khách', 150000)" class="btn-buy">Mua ngay</button>
          </div> 

          <div class="item">
              <img src={a16} alt=""/>
              <div class="name">Chó Chihuahua</div>
              <div class="price">15.000.000</div>
              <button onclick="addToCart('Inter Miami Sân Nhà', 150000)" class="btn-buy">Mua ngay</button>
          </div> 
      </ul>
  </div>
      <Footer />
    </>
  );
}

export default Petdogs;
