import React from 'react'
import Slideshow from './slideshow'

const slideshow_data = [{
    link:'../../storage/app/public/feature/thumb_in/740_475/delivery_tiec_phap_tai_gia_chi_tu_129k_1599468751.png',
    text:''
},{
    link:'../../storage/app/public/feature/thumb_in/740_475/hoan_tien_len_toi_100k_doi_voi_thanh_vien_le_monde_steak_1615450823.png',
    text:''
},{
    link:'../../storage/app/public/feature/thumb_in/740_475/soft_opening_khai_truong_le_monde_steak_cao_thang_1645524031.png',
    text:''
}]

function slideshowcontainer() {
  return (
    <div>
        <Slideshow props={slideshow_data}/>
    </div>
  )
}

export default slideshowcontainer