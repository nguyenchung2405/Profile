import React from 'react'
import {DatePicker } from 'antd';

export default function Step3Component() {

    const handleChangDatePicker = (date,dateString)=>{
        console.log("date picker");
    }

  return (
    <div className="alignCenter">
        <div className="step3">
            <div className="step3__field">
                <label>Ngày kết nạp Đảng Cộng Sản Việt Nam:</label>
                <DatePicker onChange={handleChangDatePicker}
                placeholder=""
                placement='bottomRight'
                suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6"/>
                </svg>}
                format="DD-MM-YYYY"
                />
            </div>
            <div className="step3__field">
                <label htmlFor='taiChiBo'>Tại chi bộ:</label>
                <input id="taiChiBo" name="taiChiBo" type="text" />
            </div>
            <div className="step3__field">
                <label htmlFor='thuocDangBo'>Thuộc Đảng bộ:</label>
                <input id="thuocDangBo" name="thuocDangBo" type="text" />
            </div>
            <div className="step3__field">
                <label htmlFor='hoTen_NGTTN'>Họ tên <span>(người giới thiệu thứ nhất)</span>:</label>
                <input id="hoTen_NGTTN" name="hoTen_NGTTN" type="text" />
            </div>
            <div className="step3__field two__content">
                <div className="content__left">
                    <label htmlFor='chucVu_NGTTN'>Chức vụ <span>(người giới thiệu thứ nhất)</span>:</label>
                    <input id="chucVu_NGTTN" name="chucVu_NGTTN" type="text" /></div>
                <div className="content__right">
                    <label htmlFor='donVi_NGTTN'>Đơn vị <span>(người giới thiệu thứ nhất)</span>:</label>
                    <input id="donVi_NGTTN" name="donVi_NGTTN" type="text" />
                </div>
            </div>
            <div className="step3__field">
                <label htmlFor='hienNayLGODau'>Hiện nay làm gì, ở đâu:</label>
                <input id="hienNayLGODau" name="hienNayLGODau" type="text" />
            </div>
            <div className="step3__field">
                <label htmlFor='hoTen_NGTTH'>Họ tên <span>(người giới thiệu thứ hai)</span>:</label>
                <input id="hoTen_NGTTH" name="hoTen_NGTTH" type="text" />
            </div>
            <div className="step3__field two__content">
                <div className="content__left">
                    <label htmlFor='chucVu_NGTTH'>Chức vụ <span>(người giới thiệu thứ hai)</span>:</label>
                    <input id="chucVu_NGTTH" name="chucVu_NGTTH" type="text" /></div>
                <div className="content__right">
                    <label htmlFor='donVi_NGTTH'>Đơn vị <span>(người giới thiệu thứ hai)</span>:</label>
                    <input id="donVi_NGTTH" name="donVi_NGTTH" type="text" />
                </div>
            </div>
            <div className="step3__field">
                <label htmlFor='hienNayLGODau2'>Hiện nay làm gì, ở đâu:</label>
                <input id="hienNayLGODau2" name="hienNayLGODau2" type="text" />
            </div>
            <div className="step3__field">
                <label htmlFor='ngayTuyenBoCT'>Ngày tuyên bố chính thức:</label>
                <input id="ngayTuyenBoCT" name="ngayTuyenBoCT" type="text" />
            </div>
            <div className="step3__field two__content">
                <div className="content__left">
                    <label htmlFor='taiChiBo2'>Tại chi bộ:</label>
                    <input id="taiChiBo2" name="taiChiBo2" type="text" /></div>
                <div className="content__right">
                    <label htmlFor='thuocDangBo2'>Thuộc Đảng bộ:</label>
                    <input id="thuocDangBo2" name="thuocDangBo2" type="text" />
                </div>
            </div>
            <div className="step3__field three__content">
                <div className="content__first">
                    <label htmlFor="soDangVien">Số Đảng viên:</label>
                    <input id="soDangVien" name="soDangVien" type="text" />
                </div>
                <div className="content__second">
                    <label htmlFor="ngayCapThe">Ngày cấp thẻ:</label>
                    <DatePicker onChange={handleChangDatePicker}
                    placeholder=""
                    suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6"/>
                    </svg>}
                    format="DD-MM-YYYY"
                    />
                </div>
                <div className="content__third">
                    <label htmlFor="taiDangBo">Tại Đảng bộ:</label>
                    <input id="taiDangBo" name="taiDangBo" type="text" />
                </div>
            </div>
        </div>
    </div>
  )
}
