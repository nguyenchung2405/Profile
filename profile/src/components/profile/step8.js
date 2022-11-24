import { Button, Select, Steps } from 'antd'
import React, { useEffect, useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { setNoiOHienTaiHuyen } from '../../redux/Steps/step8Slice';
import { GET_DISTRICTS_STEP8, GET_PROVINCES, lichSuBanThan } from '../../title/title';
import ModalComponent from '../modal/modal';

export default function Step8() {

    const {Option} = Select;
    const {Step} = Steps;
    const dispatch = useDispatch();
    let {noiOHienTaiTinh, noiOHienTaiQuan, noiOHienTaiHuyen} = useSelector(state => state.step8Reducer);
    let [isShowModal, setIsShowModal] = useState(false)
    const [valueForm, setValueForm] = useState({});

    useEffect(()=>{
        dispatch({
            type: GET_PROVINCES
        })
    }, [dispatch])

    useEffect(() => {
        setValueForm({
            ...valueForm,
            noiOHienTai: { ...valueForm.noiOHienTai, quan: "", huyen: "" }
        });
    }, [noiOHienTaiQuan])

    useEffect(() => {
        setValueForm({
            ...valueForm,
            noiOHienTai: { ...valueForm.noiOHienTai, huyen: "" }
        });
    }, [noiOHienTaiHuyen])

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

    const getValueSelect_Day = (value)=>{
        
    }

    const getValueSelect_Month = (value)=>{
        
    }

    const getValueSelect_Year = (value)=>{
        
    }

    const getValueSelect_NoiO_Huyen = (value)=>{
        let { noiOHienTai } = valueForm;
        let noiOHienTaiNew = { ...noiOHienTai, huyen: value };
        setValueForm({
            ...valueForm,
            noiOHienTai: { ...noiOHienTaiNew }
        });
    }

    const getValueSelect_NoiO_Quan_TP = (value)=>{
        dispatch(setNoiOHienTaiHuyen(value));
        let { noiOHienTai } = valueForm;
        let noiOHienTaiNew = { ...noiOHienTai, quan: value };
        setValueForm({
            ...valueForm,
            noiOHienTai: { ...noiOHienTaiNew }
        });
    }

    const getValueSelect_NoiO_Tinh_TP = (value)=>{
        let tinhSelected = noiOHienTaiTinh.find(tinh => tinh.name === value);
        dispatch({
            type: GET_DISTRICTS_STEP8,
            code: tinhSelected.code
        })
        // let { noiOHienTai } = valueForm;
        // let noiOHienTaiNew = { ...noiOHienTai, tinh: value };
        setValueForm({
            ...valueForm,
            noiOHienTai: { tinh: value }
        });
    }

    const renderTinh = ()=>{
        return noiOHienTaiTinh.map((tinh, index) => {
            return <Option value={tinh.name} key={index}>{tinh.name}</Option>
        })
    }

    const renderQuan = ()=>{
        return noiOHienTaiQuan.map((quan, index) => {
            return <Option value={quan.name} key={index}>{quan.name}</Option>
        })
    }

    const renderHuyen = ()=>{
        return noiOHienTaiHuyen.map((huyen, index) => {
            return <Option value={huyen.name} key={index}>{huyen.name}</Option>
        })
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

    const renderHistoryFeatures = ()=>{
        return dacDiemLichSu.map((item, index)=>{
            return <div className="center">
                <div className="process step8" key={index}>
                    <div className="point"></div>
                    <div className="process__infor">
                        <p>{item.title}</p>
                        <p>{item.description}</p>
                    </div>
                    <svg onClick={() => {
                        // dispatch({
                        //     type: DELETE_REWARD_DISCIPLINE,
                        //     re_dis_id: item.re_dis_id
                        // })
                    }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z">
                        </path>
                    </svg>
                </div>
            </div>
        })
    }

  return (
    <div className="alignCenter">
        <div className="Step8">
            <p>Cha:</p>
            <div className="field">
                <label htmlFor="hoTen">Họ tên:</label>
                <input id="hoTen" />
            </div>
            <div className="field birthday">
                <label>Ngày tháng năm sinh:</label>
                <Select defaultValue="Ngày"
                onChange={getValueSelect_Day}>
                    {renderDay()}
                </Select>
                <Select defaultValue="Tháng" 
                onChange={getValueSelect_Month}>
                    {renderMonth()}
                </Select>
                <Select defaultValue="Năm" 
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
                            {renderHistoryFeatures()}
                    </div>
                    <div className="Step8__footer">
                        <Button 
                        onClick={()=>{
                            setIsShowModal(true)
                        }}
                        type="default"
                        icon={<AiOutlinePlusCircle />}>Thêm lịch sử</Button>
                    </div>
                    <ModalComponent 
                    title={lichSuBanThan}
                    isShowModal={isShowModal}
                    closeModal={closeModal} />
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
                        {renderTinh()}
                    </Select>
                    <Select defaultValue="Quận (Thành phố)" 
                    onChange={getValueSelect_NoiO_Quan_TP}>
                        {renderQuan()}
                    </Select>
                    <Select defaultValue="Huyện" 
                    onChange={getValueSelect_NoiO_Huyen}>
                        {renderHuyen()}
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