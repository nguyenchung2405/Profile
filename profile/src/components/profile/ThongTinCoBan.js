import React, { useEffect, useState } from 'react'
import { DatePicker, Radio } from 'antd';
import moment from 'moment';
import { handleDateTime } from '../../ultils/helper';
import { regexEmail, regexPhone } from '../../title/title';

export default function ThongTinCoBan(props) {

    let {setValueIntoForm, validateField, handleChangeGetValueInput, 
        validateForm, showRequiredAlert, valueForm, setValidateForm,
        setValueForm, handleChangeValueRadio, disabledInput} = props;
    const [checkEmailPhone, setCheckEmailPhone] = useState({});
    const showRequiredAlertEmail = () => {
        return <p className="required__field">* Email không hợp lệ</p>
    };

    const showRequiredAlertPhone = () => {
        return <p className="required__field">* Số điện thoại không hợp lệ. (Bắt đầu bằng 0 hoặc 84 + 9 số)</p>
    }

  return (
    <div>
        <div className="SYLL__left__field">
        <label htmlFor='hoTen'>Họ và tên khai sinh:
            <span className="required__field"> *</span>
        </label>
        <input id="hoTen" name="hoTen" type="text"
        disabled={disabledInput()}
        value={setValueIntoForm("hoTen")} 
        onBlur={validateField}
        onChange={(e)=>{
            handleChangeGetValueInput(e);
        }} />
        {validateForm.hoTen ? showRequiredAlert() : ""}
        </div>
        <div className="SYLL__left__field">
            <label htmlFor='tenThuongGoi'>Tên thường gọi:</label>
            <input id="tenThuongGoi" name="tenThuongGoi" type="text" 
            disabled={disabledInput()}
            value={setValueIntoForm("tenThuongGoi")}
            onChange={(e)=>{
                handleChangeGetValueInput(e);
            }} />
        </div>
        <div className="SYLL__left__field">
            <label htmlFor='email'>Email:
                <span className="required__field"> *</span>
            </label>
            <input id="email" name="email" type="text"
            disabled={disabledInput()}
            value={setValueIntoForm("email")} 
            onBlur={(e)=>{
                let {name, value} = e.target;
                let testEmail = regexEmail.test(value);
                let newCheckEmail = {};
                if(testEmail === true){
                    newCheckEmail = {email:false};
                    setValidateForm({ ...validateForm, [name]: false });
                } else {
                    if(value === ""){
                        newCheckEmail = {email:false};
                        setValidateForm({ ...validateForm, [name]: true });
                    } else {
                        newCheckEmail = {email:true};
                        setValidateForm({ ...validateForm, [name]: true });
                    }
                }
                setCheckEmailPhone({ ...checkEmailPhone ,...newCheckEmail})
            }}
            onChange={(e)=>{
                handleChangeGetValueInput(e);
            }} />
            {validateForm.email && !checkEmailPhone?.email ? showRequiredAlert() : ""}
            {validateForm.email && checkEmailPhone?.email ? showRequiredAlertEmail() : ""}
        </div>
        <div className="SYLL__left__field">
            <label htmlFor='email'>Email khác :
            </label>
            <input id="emailPerson" name="emailPerson" type="text"
            disabled={disabledInput()}
            value={setValueIntoForm("emailPerson")}
            onChange={(e)=>{
                handleChangeGetValueInput(e);
            }} />
        </div>
        <div className="SYLL__left__field">
            <label htmlFor='soDienThoai'>Số điện thoại:
                <span className="required__field"> *</span>
            </label>
            <input id="soDienThoai" name="soDienThoai" type="text"
            disabled={disabledInput()}
            value={setValueIntoForm("soDienThoai")} 
            onBlur={(e)=>{
                let {value, name} = e.target;
                let newCheckPhone = {};
                if(regexPhone.test(value)){
                    newCheckPhone = {phone: false}
                    setValidateForm({ ...validateForm, [name]: false });
                } else {
                    if(value === ""){
                        newCheckPhone = {phone: false}
                        setValidateForm({ ...validateForm, [name]: true });
                    } else {
                        newCheckPhone = {phone: true}
                        setValidateForm({ ...validateForm, [name]: true });
                    }
                }
                setCheckEmailPhone({ ...checkEmailPhone ,...newCheckPhone})
            }}
            onChange={(e)=>{
                handleChangeGetValueInput(e);
            }} />
            {validateForm.soDienThoai && !checkEmailPhone?.phone ? showRequiredAlert() : ""}
            {validateForm.soDienThoai && checkEmailPhone?.phone ? showRequiredAlertPhone() : ""}
        </div>
        <div className="SYLL__left__field">
            <label htmlFor='soDienThoaiNoiBo'>Số điện thoại nội bộ:</label>
            <input id="soDienThoaiNoiBo" name="soDienThoaiNoiBo" type="text"
            disabled={disabledInput()}
            value={setValueIntoForm("soDienThoaiNoiBo")} 
            onBlur={validateField}
            onChange={(e)=>{
                handleChangeGetValueInput(e);
            }} />
        </div>
        <div className="SYLL__left__field birthday">
            <label>Ngày tháng năm sinh:<span className="required__field"> *</span></label>
            <DatePicker 
                disabled={disabledInput()}
                value={
                    valueForm.ngayThangNamSinh !== "" && valueForm.ngayThangNamSinh !== null
                    ? handleDateTime(valueForm.ngayThangNamSinh)
                    : ""}
                    onBlur={()=>{
                        if(valueForm.ngayThangNamSinh === ""){
                            setValidateForm({
                                ...validateForm,
                                ngayThangNamSinh: true
                            })
                        } else {
                            setValidateForm({
                                ...validateForm,
                                ngayThangNamSinh: false
                            })
                        }
                    }}
                onChange={(date,dateString)=>{
                    // console.log(date)
                    // console.log(dateString)
                    let namSinh = moment(dateString, "DD-MM-YYYY")["_d"].getFullYear();
                    let ngayThangNamHienTai = moment(new Date(Date.now()).toLocaleDateString()).format("DD-MM-YYYY")
                    let namHienTai = moment(ngayThangNamHienTai, "DD-MM-YYYY")["_d"].getFullYear();
                    // console.log(namHienTai)
                    if(namHienTai - namSinh >= 18){
                        setValueForm({ 
                            ...valueForm,
                            ngayThangNamSinh: moment(dateString, "DD-MM-YYYY").toISOString()
                        })
                    } else if(dateString === "") {
                        setValueForm({
                            ...valueForm,
                            ngayThangNamSinh: dateString
                        })
                    } else {
                        alert(`Ngày tháng năm sinh phải từ 31/12/${+namHienTai - 18} trở về trước`)
                    }
                   
                }}
                placeholder=""
                suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6"/>
                </svg>}
                format="DD-MM-YYYY"
                />
          {
              validateForm.ngayThangNamSinh
              ? showRequiredAlert() 
              : ""
          }
        </div>
        <div className="SYLL__left__field gender">
            <label>Giới tính:</label>
                <Radio.Group 
                disabled={disabledInput()} 
                onChange={handleChangeValueRadio} 
                value={setValueIntoForm("gioiTinh")}>
                    <Radio value={1}>Nam</Radio>
                    <Radio value={2}>Nữ</Radio>
                    <Radio value={3}>Khác</Radio>
                </Radio.Group>
        </div>
    </div>
  )
}
