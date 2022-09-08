import React, { useState } from 'react';
import "./profile.css";
import "./profileResponsive.css";
import { Radio, Select, DatePicker } from 'antd';

export default function SoYeuLyLich() {

    const {Option} = Select;
    const [valueRadio, setValueRadio] = useState("Nam");

    const renderDay = ()=>{
        let htmlRendered = [];
        htmlRendered.push(<Option value="" Selected>Ngày</Option>)
        for(let i = 1; i<=31; i++){
            htmlRendered.push(<Option value={i}>{i}</Option>) 
        }
        return htmlRendered
    }

    const renderMonth = ()=>{
        let htmlRendered = [];
        htmlRendered.push(<Option value="">Tháng</Option>)
        for(let i = 1; i<=12; i++){
            htmlRendered.push(<Option value={i}>{i}</Option>) 
        }
        return htmlRendered
    }

    const renderYear = ()=>{
        let htmlRendered = [];
        htmlRendered.push(<Option value="">Năm</Option>)
        for(let i = 1940; i<=2000; i++){
            htmlRendered.push(<Option value={i}>{i}</Option>) 
        }
        return htmlRendered
    }

    const renderChucVu = ()=>{
        let htmlRendered = [];
        let chucVuArr = ["Nhân viên khoán","Giám đốc Nhà in","Nhân viên",
         "Bí thư Liên Chi đoàn","Tỉnh táo viên","Phóng viên","Ủy viên Ban biên tập",
        "Phó tổng biên tập","Nhân viên nội dung", "Thư ký tòa soạn", "Nhân viên kinh doanh",
        "Tổ trưởng Kế toán vật tư", "Phó Giám đốc TT DV-TT, Trưởng phòng Phát triển Sản phẩm",
        "Phó Giám đốc TT DV-TT, Trưởng phòng Truyền thông sự kiện"];
        htmlRendered.push(<Option value="">Chức vụ</Option>)
        for(let chucVu of chucVuArr){
            htmlRendered.push(<Option value={chucVu}>{chucVu}</Option>) 
        }
        return htmlRendered
    }

    const handleChange = (e)=>{
        let {value} = e.target;
        setValueRadio(value)
    }

    const handleChangDatePicker = (date,dateString)=>{
        console.log("date picker");
    }

    return (
        <div className="SoYeuLyLich">
            <div className="SoYeuLyLich__left">
                <div className="SYLL__left__field">
                    <label htmlFor='HoTen'>Họ và tên khai sinh:</label>
                    <input id="HoTen" name="HoTen" type="text" />
                </div>
                <div className="SYLL__left__field">
                    <label htmlFor='TenThuongGoi'>Tên thường gọi:</label>
                    <input id="TenThuongGoi" name="TenThuongGoi" type="text" />
                </div>
                <div className="SYLL__left__field">
                    <label htmlFor='TenKhac'>Các tên gọi khác:</label>
                    <input id="TenKhac" name="TenKhac" type="text" />
                </div>
                <div className="SYLL__left__field birthday">
                    <label>Ngày tháng năm sinh:</label>
                    <Select defaultValue="Ngày">
                        {renderDay()}
                    </Select>
                    <Select defaultValue="Tháng">
                        {renderMonth()}
                    </Select>
                    <Select defaultValue="Năm">
                        {renderYear()}
                    </Select>
                </div>
                <div className="SYLL__left__field">
                    <label>Giới tính:</label>
                    <Radio.Group onChange={handleChange} value={valueRadio}>
                        <Radio value="Nam">Nam</Radio>
                        <Radio value="Nữ">Nữ</Radio>
                        <Radio value="Khác">Khác</Radio>
                    </Radio.Group>
                </div>
                <div className="SYLL__left__field noiSinh">
                    <label>Nơi sinh:</label>
                    <Select defaultValue="Ngày">
                        {renderDay()}
                    </Select>
                    <Select defaultValue="Tháng">
                        {renderMonth()}
                    </Select>
                    <Select defaultValue="Năm">
                        {renderYear()}
                    </Select>
                </div>
                <div className="SYLL__left__field queQuan">
                    <label>Quê quán:</label>
                    <Select defaultValue="Ngày">
                        {renderDay()}
                    </Select>
                    <Select defaultValue="Tháng">
                        {renderMonth()}
                    </Select>
                    <Select defaultValue="Năm">
                        {renderYear()}
                    </Select>
                </div>
                <div className="SYLL__left__field noiOHienTai">
                    <label htmlFor='NoiOHienTai'>Nơi ở hiện tại:</label>
                    <input id="NoiOHienTai" name="NoiOHienTai" type="text" />
                    <Select defaultValue="Ngày">
                        {renderDay()}
                    </Select>
                    <Select defaultValue="Tháng">
                        {renderMonth()}
                    </Select>
                    <Select defaultValue="Năm">
                        {renderYear()}
                    </Select>
                </div>
                <div className="SYLL__left__field two__content">
                    <div className="fisrt__content danToc">
                        <label htmlFor="danToc">Dân tộc:</label>
                        <input id="danToc" name="danToc" type="text" />
                    </div>
                    <div className="second__content tonGiao">
                        <label htmlFor="tonGiao">Tôn giáo:</label>
                        <input id="tonGiao" name="tonGiao" type="text" />
                    </div>
                </div>
                <div className="SYLL__left__field two__content">
                    <div className="fisrt__content thanhPhanXuatThan">
                        <label htmlFor="TPXT">Thành phần xuất thân:</label>
                        <input id="TPXT" name="TPXT" type="text" />
                    </div>
                    <div className="second__content maSo">
                        <input placeholder="Mã Số" id="maSo" name="maSo" type="text" />
                    </div>
                </div>
                <div className="SYLL__left__field">
                    <label htmlFor='ngheNghiep'>Nghề nghiệp khi được tuyển dụng:</label>
                    <input id="ngheNghiep" name="ngheNghiep" type="text" />
                </div>
                <div className="SYLL__left__field two__content">
                    <div className="fisrt__content hocVan">
                        <label htmlFor="hocVan">Trình độ học vấn:</label>
                        <input placeholder='Văn hóa phổ thông' id="hocVan" name="hocVan" type="text" />
                    </div>
                    <div className="second__content chuyenMon">
                        <input placeholder='Chuyên môn kỹ thuật' id="chuyenMon" name="chuyenMon" type="text" />
                    </div>
                </div>
            </div>
            <div className="SoYeuLyLich__right">
                <div className="SYLL__right__field">
                    <label htmlFor='lyLuanCT'>Lý luận chính trị:</label>
                    <input id="lyLuanCT" name="lyLuanCT" type="text" />
                </div>
                <div className="SYLL__right__field">
                    <label htmlFor='ngoaiNgu'>Ngoại ngữ:</label>
                    <input id="ngoaiNgu" name="ngoaiNgu" type="text" />
                </div>
                <div className="SYLL__right__field two__content">
                    <div className="fisrt__content ngayThamGiaCM">
                        <label >Ngày tham gia cách mạng:</label>
                        <DatePicker onChange={handleChangDatePicker}
                        placeholder=""
                        suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6"/>
                        </svg>}
                        format="DD-MM-YYYY"
                        />
                    </div>
                    <div className="second__content toChuc">
                        <label htmlFor="toChuc">Làm việc gì, tổ chức nào:</label>
                        <input id="toChuc" name="toChuc" type="text" />
                    </div>
                </div>
                <div className="SYLL__right__field three__content">
                    <div className="fisrt__content">
                        <label>Ngày nhập ngũ:</label>
                        <DatePicker onChange={handleChangDatePicker}
                        placeholder=""
                        suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6"/>
                        </svg>}
                        format="DD-MM-YYYY"
                        />
                    </div>
                    <div className="second__content">
                        <label>Ngày xuất ngũ:</label>
                        <DatePicker onChange={handleChangDatePicker}
                        placeholder=""
                        suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6"/>
                        </svg>}
                        format="DD-MM-YYYY"
                        />
                    </div>
                    <div className="third__content">
                        <label htmlFor='quanHam'>Quân hàm:</label>
                        <input id="quanHam" name="quanHam" type="text" />
                    </div>
                </div>
                <div className="SYLL__right__field two__content">
                    <div className="fisrt__content date__picker">
                        <label >Ngày được tuyển dụng:</label>
                        <DatePicker onChange={handleChangDatePicker}
                        placeholder=""
                        suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6"/>
                        </svg>}
                        format="DD-MM-YYYY"
                        />
                    </div>
                    <div className="second__content">
                        <label htmlFor="coQuanTD">Cơ quan tuyển dụng:</label>
                        <input id="coQuanTD" name="coQuanTD" type="text" />
                    </div>
                </div>
                <div className="SYLL__right__field two__content">
                    <div className="fisrt__content date__picker">
                        <label >Ngày vào ĐCSVN:</label>
                        <DatePicker onChange={handleChangDatePicker}
                        placeholder=""
                        suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6"/>
                        </svg>}
                        format="DD-MM-YYYY"
                        />
                    </div>
                    <div className="second__content date__picker">
                        <label>Ngày chính thức:</label>
                        <DatePicker onChange={handleChangDatePicker}
                        placeholder=""
                        suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6"/>
                        </svg>}
                        format="DD-MM-YYYY"
                        />
                    </div>
                </div>
                <div className="SYLL__right__field two__content">
                    <div className="fisrt__content chucVuHienTai">
                        <label htmlFor="chucVuHienTai">Chức vụ hiện tại:</label>
                        <Select defaultValue="Chức vụ">
                            {renderChucVu()}
                        </Select>
                    </div>
                    <div className="second__content maSo">
                        <input placeholder='Mã Số' type="text" />
                    </div>
                </div>
                <div className="SYLL__right__field two__content">
                    <div className="fisrt__content">
                        <label htmlFor="ngachVienChuc">Ngạch Viên Chức:</label>
                        <input id="ngachVienChuc" name="ngachVienChuc" type="text" />
                    </div>
                    <div className="second__content">
                        <label htmlFor="bacLuong">Bậc lương:</label>
                        <input id="bacLuong" name="bacLuong" type="text" />
                    </div>
                </div>
                <div className="SYLL__right__field two__content ngayVaoDang">
                    <div className="fisrt__content date__picker">
                        <label >Từ ngày tháng năm:</label>
                        <DatePicker onChange={handleChangDatePicker}
                        placeholder=""
                        suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6"/>
                        </svg>}
                        format="DD-MM-YYYY"
                        />
                    </div>
                    <div className="second__content maSo">
                        <input placeholder='Mã Số' type="text" />
                    </div>
                </div>
                <div className="SYLL__right__field">
                    <label htmlFor='danhHieuDuocPhong'>Danh hiệu được phong:</label>
                    <input id="danhHieuDuocPhong" name="danhHieuDuocPhong" type="text" />
                </div>
                <div className="SYLL__right__field">
                    <label htmlFor='tinhHinhSK'>Tình hình sức khỏe:</label>
                    <input id="tinhHinhSK" name="tinhHinhSK" type="text" />
                    <div className="two__content">
                        <input placeholder='Chiều cao (m)' name="chieuCao" type="text" />
                        <input placeholder='Cân nặng (kg)' name="canNang" type="text" />
                    </div>
                </div>
                <div className="SYLL__right__field">
                    <label htmlFor='soTruongCongTac'>Sở trường công tác:</label>
                    <input id="soTruongCongTac" name="soTruongCongTac" type="text" />
                </div>
                <div className="next">
                    <button className="SoYeuLyLich__btn">Tiếp theo</button>
                </div>
            </div>
        </div>
    )
}
