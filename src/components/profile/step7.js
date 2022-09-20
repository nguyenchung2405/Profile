import { Button, Select, Steps } from 'antd';
import React, { useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { lichSuBanThan } from '../../title/title';
import ModalComponent from '../modal/modal';

export default function Step7() {

    const {Option} = Select;
    const {Step} = Steps;
    let [isShowModal, setIsShowModal] = useState(false)

    const dacDiemLichSu = [
        {
            title: '05/04/2003 - 10/05/2005',
            description: "Nhân viên A"
        },
        {
            title: '10/05/2005 - 10/05/2008',
            description: "Quản lý B"
        },
    ];

    const closeModal = ()=>{
        setIsShowModal(false)
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

    const renderHuyen = ()=>{
        let htmlRendered = [];
        htmlRendered.push(<Option value="" Selected>Ngày</Option>)
        for(let i = 1; i<=31; i++){
            htmlRendered.push(<Option value={i}>{i}</Option>) 
        }
        return htmlRendered
    }

    const renderQuan = ()=>{
        let htmlRendered = [];
        htmlRendered.push(<Option value="">Tháng</Option>)
        for(let i = 1; i<=12; i++){
            htmlRendered.push(<Option value={i}>{i}</Option>) 
        }
        return htmlRendered
    }

    const renderTinh = ()=>{
        let htmlRendered = [];
        htmlRendered.push(<Option value="">Năm</Option>)
        for(let i = 1940; i<=2002; i++){
            htmlRendered.push(<Option value={i}>{i}</Option>) 
        }
        return htmlRendered
    }

    const getValueSelect_Day = (value)=>{
        
    }

    const getValueSelect_Month = (value)=>{
        
    }

    const getValueSelect_Year = (value)=>{
        
    }

    const getValueSelect_Day_Con = (value)=>{
        
    }

    const getValueSelect_Month_Con = (value)=>{
        
    }

    const getValueSelect_Year_Con = (value)=>{
        
    }

    const getValueSelect_Huyen = (value)=>{
        
    }

    const getValueSelect_Quan = (value)=>{
        
    }

    const getValueSelect_Tinh = (value)=>{
        
    }

  return (
    <div className="Step7">
        <div className="Step7__left">
            <div className="banThan">
                <p>Bản thân:</p>
                <p>Tài sản:</p>
                <textarea name="taiSan" id="taiSan"></textarea>
            </div>
            <div className="vo">
                <p>Vợ (Chồng):</p>
                <div className="field">
                    <label htmlFor='hoTen'>Họ tên:</label>
                    <input id="hoTen" type="text" />
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
                <div className="field queQuan">
                    <label>Quê quán:</label>
                    <Select defaultValue="Tỉnh (Thành phố)"
                    // onBlur={()=>{
                    //     if(valueForm.ngaySinh === ""){
                    //         setValidateForm({...validateForm,ngaySinh: true})
                    //     } else {
                    //         setValidateForm({...validateForm,ngaySinh: false})
                    //     }
                    // }}
                    onChange={getValueSelect_Huyen}>
                        {renderHuyen()}
                    </Select>
                    <Select defaultValue="Quận (Thành phố)" 
                    // onBlur={()=>{
                    //     if(valueForm.thangSinh === ""){
                    //         setValidateForm({...validateForm,thangSinh: true})
                    //     } else {
                    //         setValidateForm({...validateForm,thangSinh: false})
                    //     }
                    // }}
                    onChange={getValueSelect_Quan}>
                        {renderQuan()}
                    </Select>
                    <Select defaultValue="Huyện" 
                    // onBlur={()=>{
                    //     if(valueForm.namSinh === ""){
                    //         setValidateForm({...validateForm,namSinh: true})
                    //     } else {
                    //         setValidateForm({...validateForm,namSinh: false})
                    //     }
                    // }}
                    onChange={getValueSelect_Tinh}>
                        {renderTinh()}
                    </Select>
                </div>
                <div className="field two__content">
                    <div className="fisrt__content">
                        <label htmlFor="danToc">Dân tộc:</label>
                        <input name="danToc" type="text" />
                    </div>
                    <div className="second__content">
                        <label htmlFor="tonGiao">Tôn giáo:</label>
                        <input name="tonGiao" type="text" />
                    </div>
                </div>
                <div className="field">
                    <label htmlFor='ngheNghiep'>Nghề nghiệp:</label>
                    <input id="ngheNghiep" type="text" />
                </div>
                <div className="Step7__quaTrinh">
                    <div className="Step7__content">
                            <p>Đặc điểm lịch sử:</p>
                            <Steps progressDot current={dacDiemLichSu.length - 1} direction="vertical">
                                {
                                    dacDiemLichSu.map( (item, index) => {
                                            return <Step title={item.title} description={item.description} key={index} />
                                    })
                                }
                            </Steps>
                    </div>
                    <div className="Step7__footer">
                        <Button 
                        onClick={()=>{
                            setIsShowModal(true)
                        }}
                        type="default"
                        icon={<AiOutlinePlusCircle />}
                        >Thêm lịch sử</Button>
                    </div>
                    <ModalComponent 
                    title={lichSuBanThan}
                    isShowModal={isShowModal}
                    closeModal={closeModal} />
                </div>
                <div className="field">
                    <label htmlFor='thaiDoCT'>Thái độ chính trị:</label>
                    <input id="thaiDoCT" type="text" />
                </div>
            </div>
        </div>
        <div className="Step7__right">
            <p>Con:</p>
            <div className="field">
                <label htmlFor='hoTen'>Họ tên:</label>
                <input id="hoTen" type="text" />
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
                    onChange={getValueSelect_Day_Con}>
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
                    onChange={getValueSelect_Month_Con}>
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
                    onChange={getValueSelect_Year_Con}>
                        {renderYear()}
                    </Select>
            </div>
            <div className="field">
                <label htmlFor='ngheNghiep'>Nghề nghiệp:</label>
                <input id="ngheNghiep" type="text" />
            </div>
            <div className="field">
                <label htmlFor='chucDanh'>Chức danh:</label>
                <input id="chucDanh" type="text" />
            </div>
            <div className="field">
                <label htmlFor='chucVu'>Chức vụ:</label>
                <input id="chucVu" type="text" />
            </div>
            <div className="field">
                <label htmlFor='donViCongTac'>Đơn vị công tác:</label>
                <input id="donViCongTac" type="text" />
            </div>
            <div className="field">
                <label htmlFor='hocTap'>Học tập:</label>
                <input id="hocTap" type="text" />
            </div>
            <div className="field diaChi">
                <label htmlFor='diaChi'>Địa chỉ:</label>
                <input id="diaChi" type="text" />
                <Select defaultValue="Tỉnh (Thành phố)"
                    // onBlur={()=>{
                    //     if(valueForm.ngaySinh === ""){
                    //         setValidateForm({...validateForm,ngaySinh: true})
                    //     } else {
                    //         setValidateForm({...validateForm,ngaySinh: false})
                    //     }
                    // }}
                    onChange={getValueSelect_Huyen}>
                        {renderHuyen()}
                    </Select>
                    <Select defaultValue="Quận (Thành phố)" 
                    // onBlur={()=>{
                    //     if(valueForm.thangSinh === ""){
                    //         setValidateForm({...validateForm,thangSinh: true})
                    //     } else {
                    //         setValidateForm({...validateForm,thangSinh: false})
                    //     }
                    // }}
                    onChange={getValueSelect_Quan}>
                        {renderQuan()}
                    </Select>
                    <Select defaultValue="Huyện" 
                    // onBlur={()=>{
                    //     if(valueForm.namSinh === ""){
                    //         setValidateForm({...validateForm,namSinh: true})
                    //     } else {
                    //         setValidateForm({...validateForm,namSinh: false})
                    //     }
                    // }}
                    onChange={getValueSelect_Tinh}>
                        {renderTinh()}
                    </Select>
            </div>
            <div className="btn__ThemCon">
                <Button type="default"
                icon={<AiOutlinePlusCircle />}>Con</Button>
            </div>
        </div>
    </div>
  )
}
