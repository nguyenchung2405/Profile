import { Button, DatePicker, Select, Steps } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { setIsSubmit } from '../../redux/Steps/step1/step1Slice';
import { setDiaChiHuyen_ST7, setQueQuanHuyen_ST7 } from '../../redux/Steps/step7Slice';
import { setIsNextStep } from '../../redux/Steps/stepsSlice';
import { CREATE_FAMILY_RELATIONSHIP, GET_DISTRICTS_STEP7, GET_DISTRICTS_STEP7_CON, GET_PROVINCES, lichSuBanThan, UPDATE_FAMILY_RELATIONSHIP } from '../../title/title';
import { handleDateTime } from '../../ultils/helper';
import ModalComponent from '../modal/modal';

export default function Step7() {

    const {Option} = Select;
    const {Step} = Steps;
    const dispatch = useDispatch();
    const {queQuanTinh, queQuanQuan, queQuanHuyen, diaChiTinh, diaChiQuan, diaChiHuyen} = useSelector(state => state.step7Reducer);
    let {nextStep, user_profile_id: { pro_id }} = useSelector(state => state.stepsReducer);
    let { familyRelationship } = useSelector(state => state.step8Reducer);
    let {isSubmit} = useSelector(state => state.steps1Reducer);
    let [isShowModal, setIsShowModal] = useState(false)
    const [valueForm, setValueForm] = useState({});
    const [valueFormCon, setValueFormCon] = useState({});
    // console.log(valueForm)
    // console.log(valueFormCon)
    // console.log(familyRelationship)

    useEffect(()=>{
        return ()=>{
            dispatch(setIsSubmit(false))
        }
    }, [])

    useEffect(()=>{
        if(isSubmit){
            if(!valueForm.type){
                console.log("Tạo vợ chồng")
                valueForm.type = "vo_chong"
                valueForm.pro_id = pro_id;
                dispatch({
                    type: CREATE_FAMILY_RELATIONSHIP,
                    data: valueForm
                })
                if(!valueFormCon.type){
                    valueFormCon.type="con"
                    valueFormCon.pro_id = pro_id;
                    dispatch({
                        type: CREATE_FAMILY_RELATIONSHIP,
                        data: valueFormCon
                    })
                } else {
                    dispatch({
                        type: UPDATE_FAMILY_RELATIONSHIP,
                        data: valueFormCon
                    })
                }
            } else {
                console.log("Cập nhất vợ chồng")
                dispatch({
                    type: UPDATE_FAMILY_RELATIONSHIP,
                    data: valueForm
                })
                if(valueFormCon.type){
                    dispatch({
                        type: UPDATE_FAMILY_RELATIONSHIP,
                        data: valueFormCon
                    })
                } else {
                    valueFormCon.type="con"
                    valueFormCon.pro_id = pro_id;
                    dispatch({
                        type: CREATE_FAMILY_RELATIONSHIP,
                        data: valueFormCon
                    })
                }
            }
        }
    }, [isSubmit])

    useEffect(()=>{
        dispatch({
            type: GET_PROVINCES
        })
    }, [dispatch])

    useEffect(()=>{
        let voChong = familyRelationship.find(item => item.type === "vo_chong");
        let con = familyRelationship.find(item => item.type === "con");
        setValueForm({...voChong});
        setValueFormCon({...con});
    }, [familyRelationship])

    useEffect(()=>{
        if(nextStep !== 6){
            dispatch(setIsNextStep(true))
        }
    }, [nextStep])

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

    const valueOfField = (name)=>{
        if(name === "birthday"){
            if(valueForm[name] && valueForm[name] !== null && valueForm[name] !== undefined){
                return handleDateTime(valueForm[name])
            }
        } else if(valueForm[name] && valueForm[name] !== null && valueForm[name] !== undefined && valueForm[name] !== "") {
            return valueForm[name]
        }
    }

    const valueOfFieldCon = (name)=>{
        if(name === "birthday"){
            if(valueFormCon[name] && valueFormCon[name] !== null && valueFormCon[name] !== undefined){
                return handleDateTime(valueFormCon[name])
            }
        } else if(valueFormCon[name] && valueFormCon[name] !== null && valueFormCon[name] !== undefined && valueFormCon[name] !== "") {
            return valueFormCon[name]
        }
    }

    const handleChange = (e)=>{
        let {name, value} = e.target;
        setValueForm({
            ...valueForm,
            [name]: value
        })
    }

    const handleChangeCon = (e)=>{
        let {name, value} = e.target;
        setValueFormCon({
            ...valueFormCon,
            [name]: value
        })
    }

    const getValueSelect_Huyen = (value)=>{
        let { queQuan } = valueForm;
        let queQuanNew = { ...queQuan, huyen: value };
        setValueForm({
            ...valueForm,
            queQuan: { ...queQuanNew }
        });
    }

    const getValueSelect_Quan = (value)=>{
        dispatch(setQueQuanHuyen_ST7(value));
        let { queQuan } = valueForm;
        let queQuanNew = { ...queQuan, quan: value };
        setValueForm({
            ...valueForm,
            queQuan: { ...queQuanNew }
        });
    }

    const getValueSelect_Tinh = (value)=>{
        let tinhSelected = queQuanTinh.find(tinh => tinh.name === value);
        dispatch({
            type: GET_DISTRICTS_STEP7,
            code: tinhSelected.code
        })
        let { queQuan } = valueForm;
        let queQuanNew = { ...queQuan, tinh: value };
        setValueForm({
            ...valueForm,
            queQuan: { ...queQuanNew }
        });
    }

    const getValueSelect_Huyen_Con = (value)=>{
        let { noiOHienTai } = valueFormCon;
        let noiOHienTaiNew = { ...noiOHienTai, huyen: value };
        setValueFormCon({
            ...valueFormCon,
            noiOHienTai: { ...noiOHienTaiNew }
        });
    }

    const getValueSelect_Quan_Con = (value)=>{
        dispatch(setDiaChiHuyen_ST7(value));
        let { noiOHienTai } = valueFormCon;
        let noiOHienTaiNew = { ...noiOHienTai, quan: value };
        setValueFormCon({
            ...valueFormCon,
            noiOHienTai: { ...noiOHienTaiNew }
        });
    }

    const getValueSelect_Tinh_Con = (value)=>{
        let tinhSelected = queQuanTinh.find(tinh => tinh.name === value);
        dispatch({
            type: GET_DISTRICTS_STEP7_CON,
            code: tinhSelected.code
        })
        let { noiOHienTai } = valueFormCon;
        let noiOHienTaiNew = { ...noiOHienTai, tinh: value };
        setValueFormCon({
            ...valueFormCon,
            noiOHienTai: { ...noiOHienTaiNew }
        });
    }
    
    const renderTinh = (name)=>{
        if(name=== "quequan"){
            return queQuanTinh.map((tinh, index) => {
                return <Option value={tinh.name} key={index}>{tinh.name}</Option>
            })
        } else if(name=== "diaChi"){
            return diaChiTinh.map((tinh, index) => {
                return <Option value={tinh.name} key={index}>{tinh.name}</Option>
            })
        }
    }

    const renderQuan = (name)=>{
        if(name=== "quequan"){
            return queQuanQuan.map((quan, index) => {
                return <Option value={quan.name} key={index}>{quan.name}</Option>
            })
        } else if(name=== "diaChi"){
            return diaChiQuan.map((quan, index) => {
                return <Option value={quan.name} key={index}>{quan.name}</Option>
            })
        }
    }

    const renderHuyen = (name)=>{
        if(name=== "quequan"){
            return queQuanHuyen.map((huyen, index) => {
                return <Option value={huyen.name} key={index}>{huyen.name}</Option>
            })
        } else if(name=== "diaChi"){
            return diaChiHuyen.map((huyen, index) => {
                return <Option value={huyen.name} key={index}>{huyen.name}</Option>
            })
        }
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
                    <input id="hoTen" type="text" name="full_name" 
                    value={valueOfField("full_name")}
                    onChange={handleChange} />
                </div>
                <div className="field birthday">
                    <label>Ngày tháng năm sinh:</label>
                    <DatePicker 
                        value={valueOfField("birthday")}
                        onChange={(date,dateString)=>{
                        let namSinh = moment(dateString, "DD-MM-YYYY")["_d"].getFullYear();
                        // console.log(namSinh)
                        let ngayThangNamHienTai = moment(new Date(Date.now()).toLocaleDateString()).format("DD-MM-YYYY")
                        let namHienTai = moment(ngayThangNamHienTai, "DD-MM-YYYY")["_d"].getFullYear();
                        // console.log(namHienTai)
                        if(namHienTai - namSinh >= 18){
                            setValueForm({
                                ...valueForm,
                                birthday: moment(dateString, "DD-MM-YYYY").toISOString()
                            })
                        } else if(dateString === "") {
                            setValueForm({
                                ...valueForm,
                                birthday: dateString
                            })
                        } else {
                            alert(`Ngày tháng năm sinh phải từ 31/12/${namHienTai - 18} trở về trước`)
                        }
                    
                    }}
                    placeholder=""
                    suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6"/>
                    </svg>}
                    format="DD-MM-YYYY"
                    />
                    
                </div>
                <div className="field queQuan">
                    <label>Quê quán:</label>
                    <Select defaultValue="Tỉnh (Thành phố)"
                    onChange={getValueSelect_Tinh}>
                        {renderTinh("quequan")}
                    </Select>
                    <Select defaultValue="Quận (Thành phố)" 
                    onChange={getValueSelect_Quan}>
                        {renderQuan("quequan")}
                    </Select>
                    <Select defaultValue="Huyện" 
                    onChange={getValueSelect_Huyen}>
                        {renderHuyen("quequan")}
                    </Select>
                </div>
                <div className="field two__content">
                    <div className="fisrt__content">
                        <label htmlFor="danToc">Dân tộc:</label>
                        <input name="danToc" type="text" onChange={handleChange} />
                    </div>
                    <div className="second__content">
                        <label htmlFor="tonGiao">Tôn giáo:</label>
                        <input name="tonGiao" type="text" onChange={handleChange} />
                    </div>
                </div>
                <div className="field">
                    <label htmlFor='ngheNghiep'>Nghề nghiệp:</label>
                    <input id="ngheNghiep" type="text" name="job" 
                    value={valueOfField("job")}
                    onChange={handleChange} />
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
                    <input id="thaiDoCT" type="text" name="chinhTri" onChange={handleChange} />
                </div>
            </div>
        </div>
        <div className="Step7__right">
            <p>Con:</p>
            <div className="field">
                <label htmlFor='hoTen'>Họ tên:</label>
                <input id="hoTen" type="text" name="full_name" 
                value={valueOfFieldCon("full_name")}
                onChange={handleChangeCon} />
            </div>
            <div className="field birthday">
                    <label>Ngày tháng năm sinh:</label>
                    <DatePicker 
                    value={valueOfFieldCon("birthday")}
                        onChange={(date,dateString)=>{
                            setValueFormCon({
                                ...valueFormCon,
                                birthday: moment(dateString, "DD-MM-YYYY").toISOString()
                            })
                        }}
                        placeholder=""
                        suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6"/>
                        </svg>}
                        format="DD-MM-YYYY"
                    />
            </div>
            <div className="field">
                <label htmlFor='ngheNghiep'>Nghề nghiệp:</label>
                <input id="ngheNghiep" type="text" name="job" 
                value={valueOfFieldCon("job")}
                onChange={handleChangeCon} />
            </div>
            <div className="field">
                <label htmlFor='chucDanh'>Chức danh:</label>
                <input id="chucDanh" type="text" onChange={handleChangeCon} />
            </div>
            <div className="field">
                <label htmlFor='chucVu'>Chức vụ:</label>
                <input id="chucVu" type="text" onChange={handleChangeCon} />
            </div>
            <div className="field">
                <label htmlFor='donViCongTac'>Đơn vị công tác:</label>
                <input id="donViCongTac" type="text" name="workplace" 
                value={valueOfFieldCon("workplace")}
                onChange={handleChangeCon} />
            </div>
            <div className="field">
                <label htmlFor='hocTap'>Học tập:</label>
                <input id="hocTap" type="text" onChange={handleChangeCon} />
            </div>
            <div className="field diaChi">
                <label htmlFor='diaChi'>Địa chỉ:</label>
                <input id="diaChi" type="text" name="diaChi" 
                value={valueFormCon.noiOHienTai?.diaChi !== "" ? valueFormCon.noiOHienTai?.diaChi : ""}
                onChange={(e)=>{
                    let {value, name} = e.target;
                    setValueFormCon({
                        ...valueFormCon,
                        noiOHienTai: {...valueFormCon.noiOHienTai, [name]: value}
                    })
                }}/>
                <Select defaultValue="Tỉnh (Thành phố)"
                value={valueFormCon.noiOHienTai?.tinh !== "" ? valueFormCon.noiOHienTai?.tinh : "Tỉnh (Thành phố)"}    
                onChange={ getValueSelect_Tinh_Con}>
                        { renderTinh("diaChi")}
                    </Select>
                    <Select defaultValue="Quận (Thành phố)" 
                    value={valueFormCon.noiOHienTai?.quan !== "" ? valueFormCon.noiOHienTai?.quan : "Quận (Thành phố)"}    
                    onChange={getValueSelect_Quan_Con}>
                        {renderQuan("diaChi")}
                    </Select>
                    <Select defaultValue="Huyện" 
                    value={valueFormCon.noiOHienTai?.huyen !== "" ? valueFormCon.noiOHienTai?.huyen : "Huyện"}    
                    onChange={getValueSelect_Huyen_Con}>
                        {renderHuyen("diaChi")}
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