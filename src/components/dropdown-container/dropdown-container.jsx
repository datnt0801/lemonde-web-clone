import React from "react";
import './dropdown-container.css'
import Dropdownmenu from "../dropdown-menu/dropdown-menu";


const NAVBAR_DATA = [{
    label: 'TRANG CHỦ',
    value: 'dashboard',
    link: '#',
    children: []
}, {
    label: 'THÔNG TIN',
    value: 'dashboard',
    link: '#',
    children: [{
        label: 'Câu chuyện về chúng tôi',
        value: 'dashboard',
        link: '#01'
    }, {
        label: 'Hệ Thống Nhà Hàng',
        value: 'dashboard',
        link: '#02'
    }, {
        label: 'Khách hàng của chúng tôi',
        value: 'dashboard',
        link: '#03'
    }]
}, {
    label: 'THỰC ĐƠN',
    value: 'dashboard',
    link: '#',
    children: [{
        label: 'Bếp Trưởng Gợi Ý',
        value: 'dashboard',
        link: '#01'
    }, {
        label: 'Đồ ăn',
        value: 'dashboard',
        link: '#02'
    }, {
        label: 'Đồ uống',
        value: 'dashboard',
        link: '#03'
    }, {
        label: 'Set Combo',
        value: 'dashboard',
        link: '#04'
    }, {
        label: 'Thực Đơn Mới',
        value: 'dashboard',
        link: '#05'
    }]
}, {
    label: 'KHUYẾN MẠI',
    value: 'dashboard',
    link: '#',
    children: []
}, {
    label: 'BLOG',
    value: 'dashboard',
    link: '#',
    children: [{
        label: 'Nguyên Liệu Nhà Làm',
        value: 'dashboard',
        link: '#05'
    }, {
        label: 'Phong Cách Ẩm Thực',
        value: 'dashboard',
        link: '#05'
    }, {
        label: 'Trải Nghiệm Nhà Hàng',
        value: 'dashboard',
        link: '#05'
    }]
}]

function Dropdowncontainer() {
    return (
        <div className="menu-item">
            {
                NAVBAR_DATA.map((e) => 
                <div> <Dropdownmenu navitem={e}  /> </div>)
            }
        </div>
    )
}

export default Dropdowncontainer;
