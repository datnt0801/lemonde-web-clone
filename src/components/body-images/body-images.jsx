import React from 'react'
import './body-images.css'
import img1 from '../../storage/app/public/categorynew/thumb_in/740_475/nguyen_lieu_tu_san_xuat_1556185950.png';
import img2 from '../../storage/app/public/categorynew/thumb_in/740_475/french_style_foods_1554448472.jpg';
import img3 from '../../storage/app/public/categorynew/thumb_in/740_475/khong_gian_trai_nghiem_1556029740.png';

function Bodyimages() {
  return (
    <div className='body-images'>
        <a className='body-image' href='#'><img alt='nguyen lieu tu san xuat' src={img1} /></a>
        <a className='body-image' href='#'><img alt='phong cach am thuc' src={img2} /></a>
        <a className='body-image' href='#'><img alt='khong gian nha hang' src={img3} /></a>
    </div>
  )
}

export default Bodyimages;