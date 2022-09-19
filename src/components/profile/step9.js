import { Button, Select, Steps } from 'antd'
import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai';

export default function Step9() {

    const {Option} = Select;
    const {Step} = Steps;

    const dacDiemLichSu = [
        {
            title: '05/04/2003 - 10/05/2005',
            description: "Nhân viên A"
        },
        {
            title: '10/05/2005 - 10/05/2008',
            description: "Quản lý B"
        },
    ]

    const getValueSelect_Day = (value)=>{
        
    }

    const getValueSelect_Month = (value)=>{
        
    }

    const getValueSelect_Year = (value)=>{
        
    }

    const getValueSelect_NoiO_Huyen = (value)=>{
        
    }

    const getValueSelect_NoiO_Quan_TP = (value)=>{
        
    }

    const getValueSelect_NoiO_Tinh_TP = (value)=>{
        
    }

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
        for(let i = 1940; i<=2002; i++){
            htmlRendered.push(<Option value={i}>{i}</Option>) 
        }
        return htmlRendered
    }

    const renderQuanHe = ()=>{
        let htmlRendered = [];
        let quanHeArr = ["Cha","Mẹ","Anh trai","Em trai"];
        // htmlRendered.push(<Option value="">Phòng ban</Option>)
        for(let quanHe of quanHeArr){
            htmlRendered.push(<Option value={quanHe}>{quanHe}</Option>) 
        }
        return htmlRendered
    }

    // Step 9 có nội dung giống Step 8 nên copy qua gồm cả tên class để đỡ CSS lại

  return (
    <div className="alignCenter Step9">
        <div className="Step8">
            <p>Anh:</p>
            <div className="field">
                <label htmlFor="hoTen">Họ tên:</label>
                <input id="hoTen" />
            </div>
            <div className="field birthday">
                <label>Ngày tháng năm sinh:</label>
                <Select defaultValue="Ngày"
                // onBlur={()=>{
                //     if(valueForm.ngaySinh === ""){
                //         setValidateForm({...validateForm,ngaySinh: true})
                //     } else {
                //         setValidateForm({...validateForm,ngaySinh: false})
                //     }
                // }}
                onChange={getValueSelect_Day}>
                    {renderDay()}
                </Select>
                <Select defaultValue="Tháng" 
                // onBlur={()=>{
                //     if(valueForm.thangSinh === ""){
                //         setValidateForm({...validateForm,thangSinh: true})
                //     } else {
                //         setValidateForm({...validateForm,thangSinh: false})
                //     }
                // }}
                onChange={getValueSelect_Month}>
                    {renderMonth()}
                </Select>
                <Select defaultValue="Năm" 
                // onBlur={()=>{
                //     if(valueForm.namSinh === ""){
                //         setValidateForm({...validateForm,namSinh: true})
                //     } else {
                //         setValidateForm({...validateForm,namSinh: false})
                //     }
                // }}
                onChange={getValueSelect_Year}>
                    {renderYear()}
                </Select>
            </div>
            <div className="field">
                <label htmlFor="ngheNghiep">Nghề nghiệp:</label>
                <input id="ngheNghiep" />
            </div>
            <div className="field">
                <label htmlFor="congTac">Công tác:</label>
                <input id="congTac" />
            </div>
            <div className="Step8__quaTrinh">
                    <div className="Step8__content">
                            <p>Đặc điểm lịch sử
                            <span> (chức danh, chức vụ, tên, địa chỉ cơ quan, xí nghiệp, công ty ở trong hoặc ngoài nước)</span>
                            </p>
                            <Steps progressDot current={dacDiemLichSu.length - 1} direction="vertical">
                                {
                                    dacDiemLichSu.map( (item, index) => {
                                            return <Step title={item.title} description={item.description} key={index} />
                                    })
                                }
                            </Steps>
                    </div>
                    <div className="Step8__footer">
                        <Button type="default"
                        icon={<AiOutlinePlusCircle />}>Thêm lịch sử</Button>
                    </div>
            </div>
            <div className="field">
                <label htmlFor="congViecHienTai">Công việc hiện tại:</label>
                <input id="congViecHienTai" />
            </div>
            <div className="field noiCuTru">
                    <label htmlFor='noiCuTru'>Nơi ở hiện tại:
                    </label>
                    <input id="NoiOHienTai" name="noiCuTru" type="text" 
                    />
                    <Select defaultValue="Tỉnh (Thành phố)" 
                    onChange={getValueSelect_NoiO_Tinh_TP}>
                        {renderYear()}
                    </Select>
                    <Select defaultValue="Quận (Thành phố)" 
                    onChange={getValueSelect_NoiO_Quan_TP}>
                        {renderMonth()}
                    </Select>
                    <Select defaultValue="Huyện" 
                    onChange={getValueSelect_NoiO_Huyen}>
                        {renderDay()}
                    </Select>
            </div>
            <div className="quanHeGiaDinh">
                <Select
                defaultValue="Quan hệ gia đình"
                dropdownStyle={{minWidth: "277px"}}
                popupClassName="quanHeList"
                >
                    {renderQuanHe()}
                </Select>
            </div>
        </div>
    </div>
  )
}
