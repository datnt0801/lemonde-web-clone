import React from 'react'
import './slideshow.css'
import img1 from '../../storage/app/public/feature/thumb_in/740_475/delivery_tiec_phap_tai_gia_chi_tu_129k_1599468751.png';
// import img2 from '../../storage/app/public/feature/thumb_in/740_475/hoan_tien_len_toi_100k_doi_voi_thanh_vien_le_monde_steak_1615450823.png';
import img3 from '../../storage/app/public/feature/thumb_in/740_475/soft_opening_khai_truong_le_monde_steak_cao_thang_1645524031.png';



export default function Slideshow() {

    // let slideIndex = 0;
    // showSlides();

    // function showSlides() {
    //     let i;
    //     let slides = document.getElementsByClassName("mySlides");
    //     for (i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none";
    //     }
    //     slideIndex++;
    //     if (slideIndex > slides.length) { slideIndex = 1 }
    //     slides[slideIndex - 1].style.display = "block";
    //     setTimeout(showSlides, 2000); // Change image every 2 seconds
    // }

    return (
        <div>
            <a href='#'>
                <img src={img1} className='slide-show-image'></img>
                {/* <img src={img2} className='image'></img> */}
                {/* <img src={img3} className='image'></img> */}

            </a>
        </div>
    )
}