import './Footer.css'
import { BsFacebook } from 'react-icons/bs'
function Footer(props){
    return (
        <div class="footer">
        <div class="footer-box">
            <h3 class="information-name">Shop Pet Tin - <span>Có tất cả các bé cưng đang chờ bạn.</span></h3>
            <p class="information-text">Hotline: 096.969.696</p>
            <p class="information-text"><b>Cơ sở 1: </b> 121 Hùng Vương, Thành Phố Huế</p>
            <p class="information-text"><b>Cơ sở 2:</b> 56 Ngự Bình, Thành Phố Huế.</p>
        </div>
        <div class="footer-box">
            <h3>Giới thiệu về cửa hàng.</h3>
            <ul class="quick-menu">
                <div class="item">
                    <p>Pet House là trại nhân giống cung cấp thú cảnh lớn tại Việt Nam. Shop Pet Tin hiện tại có 2 cửa hàng chính tại 
                        <span><strong>121 Hùng Vương, Thành Phố Huế </strong></span> và <span><strong>56 Ngự Bình, Thành Phố Huế.</strong></span> </p>
                </div>              
            </ul>
        </div>
        <div class="footer-box box1">
            <h3>LIÊN HỆ</h3>
            <div class="information-icons">
                <a href="#"><span class="icon1"><i class="fa-brands fa-facebook"></i></span></a>
                <a href="#"><span class="icon3"><i class="fa-brands fa-instagram"></i></span></a>
                <a href="#"><span class="icon2"><i class="fa-brands fa-twitter"></i></span></a>
            </div>
        </div>
    </div>
)}

export default Footer;