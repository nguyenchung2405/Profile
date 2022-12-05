import React from 'react'
import moment from 'moment';
import { DatePicker } from 'antd';
import { handleDateTime } from '../../ultils/helper';

export default function ThongTinCaNhan(props) {

    let {setValueIntoForm, handleChangeGetValueInput, valueForm, setValueForm,
        validateField, validateForm, showRequiredAlert} = props;

  return (
    <>
        <div className="SYLL__right__field">
        <label htmlFor='canCuocCD'>Số căn cước công dân:<span className="required__field"> *</span></label>
        <input id="canCuocCD" name="canCuocCD" type="text" 
        value={setValueIntoForm("canCuocCD")}
        onChange={(e)=>{
            handleChangeGetValueInput(e)
        }} />
        {validateForm.canCuocCD ? showRequiredAlert() : ""}
        </div>
        <div className="SYLL__right__field two__content">
            <div className="fisrt__content ngayThamGiaCM">
                <label >Ngày cấp:<span className="required__field"> *</span></label>
                <DatePicker 
                value={
                    valueForm.ngayCapCCCD !== "" && valueForm.ngayCapCCCD !== undefined && valueForm.ngayCapCCCD !== null
                    ? handleDateTime(valueForm.ngayCapCCCD)
                    : ""}
                onChange={(date,dateString)=>{
                    setValueForm({
                        ...valueForm,
                        ngayCapCCCD: moment(dateString, "DD-MM-YYYY").toISOString()
                    })
                }}
                placeholder=""
                suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6"/>
                </svg>}
                format="DD-MM-YYYY"
                />
                {validateForm.ngayCapCCCD ? showRequiredAlert() : ""}
            </div>
            <div className="second__content toChuc">
                <label htmlFor="noiCapCCCD">Nơi cấp:
                </label>
                <input id="noiCapCCCD" name="noiCapCCCD" type="text" 
                value={setValueIntoForm("noiCapCCCD")}
                onChange={(e)=>{
                    handleChangeGetValueInput(e)
                }}/>
            </div>
        </div>
        <div className="SYLL__right__field two__content">
                <div className="fisrt__content danToc">
                    <label htmlFor="danToc">Dân tộc:
                        <span className="required__field"> *</span> 
                    </label>
                    <input id="danToc" name="danToc" type="text" 
                    value={setValueIntoForm("danToc")}
                    onBlur={validateField}
                    onChange={(e)=>{
                        handleChangeGetValueInput(e)
                    }} />
                    {validateForm.danToc ? showRequiredAlert() : ""}
                </div>
                <div className="second__content tonGiao">
                    <label htmlFor="tonGiao">Tôn giáo:
                    </label>
                    <input id="tonGiao" name="tonGiao" type="text" 
                    value={setValueIntoForm("tonGiao")}
                    onChange={(e)=>{
                        handleChangeGetValueInput(e)
                    }} />
                </div>
        </div>
        <div className="SYLL__right__field">
            <label htmlFor='thanhPhanXuatThan'>Thành phần xuất thân:
                <span className="required__field"> *</span>
            </label>
            <input id="thanhPhanXuatThan" name="thanhPhanXuatThan" type="text"
            value={setValueIntoForm("thanhPhanXuatThan")} 
            onBlur={validateField}
            onChange={(e)=>{
                handleChangeGetValueInput(e);
            }} />
            {validateForm.thanhPhanXuatThan ? showRequiredAlert() : ""}
        </div>
        <div className="SYLL__right__field">
            <label htmlFor='ngheNghiep'>Nghề nghiệp khi được tuyển dụng:</label>
            <input id="ngheNghiep" name="ngheNghiep" type="text" 
            value={setValueIntoForm("ngheNghiep")}
            onChange={(e)=>{
                handleChangeGetValueInput(e)
            }} />
        </div>
    </>
  )
}