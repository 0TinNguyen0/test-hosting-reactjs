import './Introduce.css'
import shipper from '../assets/images/shipper.png'
import camket from '../assets/images/camket.png'
import box from '../assets/images/box.png'
import baohanh from '../assets/images/baohanh.png'
function Introduce(props){
    return (
        <div class="introduce">
		<div class="block-many-introduce">
			<div class="many-introduce box1">
				<img className='shipper tr' src={shipper}/>
				<h1>MIỄN PHÍ VẬN CHUYỂN</h1>
				<h2>GIAO HÀNG TOÀN QUỐC: MÁY BAY, TÀU HỎA, TAXI....</h2>
			</div>
			<div class="many-introduce box">
                <img className='shi tr' src={box}/>
				<h1>QUÀ TẶNG HẤP DẪN</h1>
				<h2>TẶNG KÈM PHỤ KIỆN CẦN THIẾT CHO THÚ CƯNG</h2>
			</div>
			<div class="many-introduce box">
				<img className='shi tr' src={camket}/>
				<h1>CAM KẾT THUẦN CHỦNG 100%</h1>
				<h2>CAM KẾT THÚ CƯNG THUẦN CHỦNG KHÔNG LAI TẠP</h2>
			</div>
			<div class="many-introduce box box2">
                <img className='shi tr' src={baohanh}/>
                <h1>BẢO HÀNH SỨC KHỎE TOÀN DIỆN</h1>
				<h2>BÀN GIAO TỚI KHÁCH HÀNG THÚ CƯNG KHỎE MẠNH</h2>
		</div>
		<div class="hotline">
			<a>HOTLINE: 0972.564.551 </a>
		</div>
	</div>
    </div>	
    )}

export default Introduce;