import React, { useEffect, useState } from 'react';
import "./profile.css";
import { Radio, Select, DatePicker } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addPBCV } from '../../redux/Steps/step1/step1Slice';
import { AiOutlineMinus } from "react-icons/ai"

export default function SoYeuLyLich(props) {

    const {Option} = Select;
    const dispatch = useDispatch();
    let {phongBanChucVuArr} = useSelector(state => state.step1Reducer);
    let [phongBanCVOb,setPhongBanCVOb] = useState({phongBan : "", chucVu: ""});
    // console.log(phongBanCVOb)
    useEffect(()=>{
        // checkValueForm()
    },[])

    const [valueForm, setValueForm] = useState({
        hoTen: "",
        ngaySinh: "",
        chieuCao: "",
        canNang: "",
        thangSinh: "",
        namSinh: "",
        danToc: "",
        tonGiao: "",
        hocVan: "",
        chuyenMon: "",
        lyLuanCT:"",
        ngayDuocTuyenDung: "",
        ngayVaoDangCSVN: "",
        ngayChinhThuc: "",
        ngachVienChuc: "",
        coQuanTuyenDung:"",
        bacLuong: "",
        tinhHinhSK: "",
        gioiTinh: "Nam",
        tuNgayThangNam: "",
        phongBanCVObj: {chucVu:"", phongBan: ""},
        xuatThan: {thanhPhanXuatThan:"", maSo: ""},
        noiSinh: {huyen: "",quan:"",tinh:""},
        queQuan: {huyen: "",quan:"",tinh:""},
        noiOHienTai: {diaChi: "",huyen: "",quan:"",tinh:""},
    });

    const [validateForm, setValidateForm] = useState({
        hoTen: false,
        ngaySinh: false,
        thangSinh: false,
        namSinh: false,
        danToc: false,
        tonGiao: false,
        hocVan: false,
        chuyenMon: false,
        lyLuanCT:false,
        ngayDuocTuyenDung: false,
        coQuanTuyenDung : false,
        ngayVaoDangCSVN: false,
        ngayChinhThuc: false,
        ngachVienChuc: false,
        bacLuong: false,
        tuNgayThangNam: false,
        tinhHinhSK: false,
        phongBanCVObj: false,
        xuatThan: {thanhPhanXuatThan:false, maSo: false},
        noiSinh: {huyen: false,quan:false,tinh:false},
        queQuan: {huyen: false,quan:false,tinh:false},
        noiOHienTai: {diaChi:false,huyen: false,quan:false,tinh:false},
    });

    const renderPhongBanCV = ()=>{
        if(phongBanChucVuArr.length >= 1){
            return phongBanChucVuArr.map((infor,index)=>{
                return <div key={index}>
                    <p>{infor.phongBan}</p>
                    <p>{infor.chucVu}</p>
                    <AiOutlineMinus />
                </div>
            })
        }
    }

    const checkValueForm = ()=>{
        let newValueForm = {};
        for(let value in valueForm){
            if(value === "noiSinh" || value === "queQuan"){
                if(valueForm[value].huyen === "" || valueForm[value].quan === "" || valueForm[value].tinh === ""){
                    newValueForm = {...newValueForm,[value]: {huyen: true}}
                }
            } else if(value === "noiOHienTai"){
                if(valueForm[value].diaChi === "" || valueForm[value].huyen === "" || valueForm[value].quan === "" || valueForm[value].tinh === ""){
                    newValueForm = {...newValueForm,[value]: {huyen: true}}
                }
            } else if(value === "xuatThan"){
                if(valueForm[value].thanhPhanXuatThan === "" || valueForm[value].maSo === ""){
                    newValueForm = {...newValueForm,[value]: {thanhPhanXuatThan: true}}
                }
            } else if(value === "phongBanCVObj"){
                if(valueForm[value].phongBan === "" ){
                    newValueForm = {...newValueForm, [value]: {...newValueForm[value], phongBan: true}}
                }
                if(valueForm[value].chucVu === ""){
                    newValueForm = {...newValueForm, [value]: {...newValueForm[value], chucVu: true}}
                }
            } else {
                if(valueForm[value] === ""){
                    newValueForm = {...newValueForm,[value]: true}
                }
            }
            setValidateForm({
                ...newValueForm
            })
            // console.log(newValueForm)
        }
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

    const handleChangeGetValueInput = (e)=>{
        let {name,value} = e.target;
        setValueForm({
            ...valueForm,
            [name]:value
        });
    }

    const getValueSelect_Day = (value)=>{
        setValueForm({
            ...valueForm,
            ngaySinh: value
        });
    }

    const getValueSelect_Month = (value)=>{
        setValueForm({
            ...valueForm,
            thangSinh: value
        });
    }

    const getValueSelect_Year = (value)=>{
        setValueForm({
            ...valueForm,
            namSinh: value
        });
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

    const renderPhongBan = ()=>{
        let htmlRendered = [];
        let phongBanArr = ["Nhân viên khoán","Giám đốc Nhà in","Nhân viên",
         "Bí thư Liên Chi đoàn","Tỉnh táo viên","Phóng viên","Ủy viên Ban biên tập",
        "Phó tổng biên tập","Nhân viên nội dung", "Thư ký tòa soạn", "Nhân viên kinh doanh",
        "Tổ trưởng Kế toán vật tư", "Phó Giám đốc TT DV-TT, Trưởng phòng Phát triển Sản phẩm",
        "Phó Giám đốc TT DV-TT, Trưởng phòng Truyền thông sự kiện"];
        htmlRendered.push(<Option value="">Phòng ban</Option>)
        for(let phongBan of phongBanArr){
            htmlRendered.push(<Option value={phongBan}>{phongBan}</Option>) 
        }
        return htmlRendered
    }

    const handleChangeValueRadio = (e)=>{
        let {value} = e.target;
        setValueForm({
            ...valueForm,
            gioiTinh: value
        });
    }

    const getValueSelect_NoiSinh_Huyen = (value)=>{
        let {noiSinh} = valueForm;
        let noiSinhNew = {...noiSinh, huyen: value};
        setValueForm({
            ...valueForm,
            noiSinh: { ...noiSinhNew}
        });
    }

    const getValueSelect_NoiSinh_Quan_TP = (value)=>{
        let {noiSinh} = valueForm;
        let noiSinhNew = {...noiSinh, quan: value};
        setValueForm({
            ...valueForm,
            noiSinh: { ...noiSinhNew}
        });
    }

    const getValueSelect_NoiSinh_Tinh_TP = (value)=>{
        let {noiSinh} = valueForm;
        let noiSinhNew = {...noiSinh, tinh: value};
        setValueForm({
            ...valueForm,
            noiSinh: { ...noiSinhNew }
        });
    }

    const getValueSelect_QueQuan_Huyen = (value)=>{
        let {queQuan} = valueForm;
        let queQuanNew = {...queQuan, huyen: value};
        setValueForm({
            ...valueForm,
            queQuan: {...queQuanNew}
        });
    }

    const getValueSelect_QueQuan_Quan_TP = (value)=>{
        let {queQuan} = valueForm;
        let queQuanNew = {...queQuan, quan: value};
        setValueForm({
            ...valueForm,
            queQuan: {...queQuanNew}
        });
    }

    const getValueSelect_QueQuan_Tinh_TP = (value)=>{
        let {queQuan} = valueForm;
        let queQuanNew = {...queQuan, tinh: value};
        setValueForm({
            ...valueForm,
            queQuan: {...queQuanNew}
        });
    }

    const getValueSelect_NoiO_Huyen = (value)=>{
        let {noiOHienTai} = valueForm;
        let noiOHienTaiNew = {...noiOHienTai, huyen: value};
        setValueForm({
            ...valueForm,
            noiOHienTai: {...noiOHienTaiNew}
        });
    }

    const getValueSelect_NoiO_Quan_TP = (value)=>{
        let {noiOHienTai} = valueForm;
        let noiOHienTaiNew = {...noiOHienTai, quan: value};
        setValueForm({
            ...valueForm,
            noiOHienTai: {...noiOHienTaiNew}
        });
    }

    const getValueSelect_NoiO_Tinh_TP = (value)=>{
        let {noiOHienTai} = valueForm;
        let noiOHienTaiNew = {...noiOHienTai, tinh: value};
        setValueForm({
            ...valueForm,
            noiOHienTai: {...noiOHienTaiNew}
        });
    }

    

    // console.log(phongBanChucVuArr)
    // console.log(phongBanCVOb)

    const getValueSelect_ChucVu = (value)=>{
        if(phongBanCVOb.phongBan !== ""){
            dispatch(addPBCV({...phongBanCVOb, chucVu: value}));
            setValueForm({
                ...valueForm,
                phongBanCVObj: {...valueForm.phongBanCVObj,chucVu: value}
            })
            let newPhongBanCVObj = {phongBan : "", chucVu: ""}
            setPhongBanCVOb({...newPhongBanCVObj})
        }
    }

    const getValueSelect_PhongBan = (value)=>{
        setPhongBanCVOb({...phongBanCVOb, phongBan: value});
        setValueForm({
        ...valueForm,
        phongBanCVObj: {...valueForm.phongBanCVObj,phongBan: value}
        })
    }

    const showRequiredAlert = ()=>{
        return <p className="required__field">* Trường này không được để trống</p>
    }

    const validateField = (e)=>{
        let {value,name} = e.target;
        if(value === ""){
            setValidateForm({...validateForm,[name]: true});
        } else {
            setValidateForm({...validateForm,[name]: false});
        }
    }

    return (
        <div className="SoYeuLyLich">
            <div className="SoYeuLyLich__left">
                <div className="SYLL__left__field">
                    <label htmlFor='hoTen'>Họ và tên khai sinh:
                        <span className="required__field"> *</span>
                    </label>
                    <input required id="hoTen" name="hoTen" type="text" 
                    onBlur={validateField}
                    onChange={(e)=>{
                        handleChangeGetValueInput(e);
                        window.addEventListener("beforeunload", function (e) {
                            var confirmationMessage = "\o/";
                          
                            (e || window.event).returnValue = confirmationMessage; //Gecko + IE
                            return confirmationMessage;                            //Webkit, Safari, Chrome
                        });
                    }} />
                    {validateForm.hoTen ? showRequiredAlert() : ""}
                </div>
                <div className="SYLL__left__field">
                    <label htmlFor='tenThuongGoi'>Tên thường gọi:</label>
                    <input id="tenThuongGoi" name="tenThuongGoi" type="text" 
                    onChange={(e)=>{
                        handleChangeGetValueInput(e);
                    }} />
                </div>
                <div className="SYLL__left__field">
                    <label htmlFor='tenKhac'>Các tên gọi khác:</label>
                    <input id="tenKhac" name="tenKhac" type="text" 
                    value={valueForm.tenKhac}
                    onChange={(e)=>{
                        handleChangeGetValueInput(e);
                    }} />
                </div>
                <div className="SYLL__left__field birthday">
                    <label>Ngày tháng năm sinh:<span className="required__field"> *</span></label>
                    <Select defaultValue="Ngày"
                    onBlur={()=>{
                        if(valueForm.ngaySinh === ""){
                            setValidateForm({...validateForm,ngaySinh: true})
                        } else {
                            setValidateForm({...validateForm,ngaySinh: false})
                        }
                    }}
                    onChange={getValueSelect_Day}>
                        {renderDay()}
                    </Select>
                    <Select defaultValue="Tháng" 
                    onBlur={()=>{
                        if(valueForm.thangSinh === ""){
                            setValidateForm({...validateForm,thangSinh: true})
                        } else {
                            setValidateForm({...validateForm,thangSinh: false})
                        }
                    }}
                    onChange={getValueSelect_Month}>
                        {renderMonth()}
                    </Select>
                    <Select defaultValue="Năm" 
                    onBlur={()=>{
                        if(valueForm.namSinh === ""){
                            setValidateForm({...validateForm,namSinh: true})
                        } else {
                            setValidateForm({...validateForm,namSinh: false})
                        }
                    }}
                    onChange={getValueSelect_Year}>
                        {renderYear()}
                    </Select>
                    {validateForm.ngaySinh || validateForm.thangSinh || validateForm.namSinh
                     ? showRequiredAlert() 
                     : ""}
                </div>
                <div className="SYLL__left__field">
                    <label>Giới tính:</label>
                    <Radio.Group onChange={handleChangeValueRadio} value={valueForm.gioiTinh}>
                        <Radio value="Nam">Nam</Radio>
                        <Radio value="Nữ">Nữ</Radio>
                        <Radio value="Khác">Khác</Radio>
                    </Radio.Group>
                </div>
                <div className="SYLL__left__field noiSinh">
                    <label>Nơi sinh:<span className="required__field"> *</span></label>
                    <Select defaultValue="Tỉnh (Thành phố)" 
                    onBlur={()=>{
                        if(valueForm.noiSinh.tinh === ""){
                            setValidateForm({...validateForm,noiSinh: {...validateForm.noiSinh,tinh:true}})
                        } else {
                            setValidateForm({...validateForm,noiSinh: {...validateForm.noiSinh,tinh:false}})
                        }
                    }}
                    onChange={getValueSelect_NoiSinh_Tinh_TP}
                    >
                        {renderYear()}
                    </Select>
                    <Select defaultValue="Quận (Thành phố)" 
                    onBlur={()=>{
                        if(valueForm.noiSinh.quan === ""){
                            setValidateForm({...validateForm,noiSinh: {...validateForm.noiSinh,quan:true}})
                        } else {
                            setValidateForm({...validateForm,noiSinh: {...validateForm.noiSinh,quan:false}})
                        }
                    }}
                    onChange={getValueSelect_NoiSinh_Quan_TP}
                    >
                        {renderMonth()}
                    </Select>
                    <Select defaultValue="Huyện" 
                    onBlur={()=>{
                        if(valueForm.noiSinh.huyen === ""){
                            setValidateForm({...validateForm,noiSinh: {...validateForm.noiSinh,huyen:true}})
                        } else {
                            setValidateForm({...validateForm,noiSinh: {...validateForm.noiSinh,huyen:false}})
                        }
                    }}
                    onChange={getValueSelect_NoiSinh_Huyen}
                    >
                        {renderDay()}
                    </Select>
                    {validateForm.noiSinh.huyen || validateForm.noiSinh.quan || validateForm.noiSinh.tinh
                        ? showRequiredAlert() 
                        : ""}
                </div>
                <div className="SYLL__left__field queQuan">
                    <label>Quê quán:<span className="required__field"> *</span></label>
                    <Select defaultValue="Tỉnh (Thành phố)" 
                    onBlur={()=>{
                        if(valueForm.queQuan.tinh === ""){
                            setValidateForm({...validateForm,queQuan: {...validateForm.queQuan,tinh:true}})
                        } else {
                            setValidateForm({...validateForm,queQuan: {...validateForm.queQuan,tinh:false}})
                        }
                    }}
                    onChange={getValueSelect_QueQuan_Tinh_TP}>
                        {renderYear()}
                    </Select>
                    <Select defaultValue="Quận (Thành phố)" 
                    onBlur={()=>{
                        if(valueForm.queQuan.quan === ""){
                            setValidateForm({...validateForm,queQuan: {...validateForm.queQuan,quan:true}})
                        } else {
                            setValidateForm({...validateForm,queQuan: {...validateForm.queQuan,quan:false}})
                        }
                    }}
                    onChange={getValueSelect_QueQuan_Quan_TP}>
                        {renderMonth()}
                    </Select>
                    <Select defaultValue="Huyện" 
                    onBlur={()=>{
                        if(valueForm.queQuan.huyen === ""){
                            setValidateForm({...validateForm,queQuan: {...validateForm.queQuan,huyen:true}})
                        } else {
                            setValidateForm({...validateForm,queQuan: {...validateForm.queQuan,huyen:false}})
                        }
                    }}
                    onChange={getValueSelect_QueQuan_Huyen}>
                        {renderDay()}
                    </Select>
                    {validateForm.queQuan.huyen || validateForm.queQuan.quan || validateForm.queQuan.tinh
                        ? showRequiredAlert() 
                        : ""}
                </div>
                <div className="SYLL__left__field noiOHienTai">
                    <label htmlFor='diaChi'>Nơi ở hiện tại:
                        <span className="required__field"> *</span>
                    </label>
                    <input id="NoiOHienTai" name="diaChi" type="text" 
                    onBlur={(e)=>{
                        let {value} = e.target;
                        if(value === ""){
                            setValidateForm({
                                ...validateForm,
                                noiOHienTai: {...validateForm.noiOHienTai,diaChi:true}})
                        } else {
                            setValidateForm({
                                ...validateForm,
                                noiOHienTai: {...validateForm.noiOHienTai,diaChi:false}})
                        }
                    }}
                    onChange={(e)=>{
                        let {value} = e.target;
                        let {noiOHienTai} = valueForm;
                        let noiOHienTaiNew = {...noiOHienTai,diaChi: value}
                        setValueForm({
                            ...valueForm,
                            noiOHienTai : {...noiOHienTaiNew}
                        })
                    }} />
                    <Select defaultValue="Tỉnh (Thành phố)" 
                    onBlur={()=>{
                        if(valueForm.noiOHienTai.tinh === ""){
                            setValidateForm({...validateForm,noiOHienTai: {...validateForm.noiOHienTai,tinh:true}})
                        } else {
                            setValidateForm({...validateForm,noiOHienTai: {...validateForm.noiOHienTai,tinh:false}})
                        }
                    }}
                    onChange={getValueSelect_NoiO_Tinh_TP}>
                        {renderYear()}
                    </Select>
                    <Select defaultValue="Quận (Thành phố)" 
                    onBlur={()=>{
                        if(valueForm.noiOHienTai.quan === ""){
                            setValidateForm({...validateForm,noiOHienTai: {...validateForm.noiOHienTai,quan:true}})
                        } else {
                            setValidateForm({...validateForm,noiOHienTai: {...validateForm.noiOHienTai,quan:false}})
                        }
                    }}
                    onChange={getValueSelect_NoiO_Quan_TP}>
                        {renderMonth()}
                    </Select>
                    <Select defaultValue="Huyện" 
                    onBlur={()=>{
                        if(valueForm.noiOHienTai.huyen === ""){
                            setValidateForm({...validateForm,noiOHienTai: {...validateForm.noiOHienTai,huyen:true}})
                        } else {
                            setValidateForm({...validateForm,noiOHienTai: {...validateForm.noiOHienTai,huyen:false}})
                        }
                    }}
                    onChange={getValueSelect_NoiO_Huyen}>
                        {renderDay()}
                    </Select>
                    {validateForm.noiOHienTai.huyen || validateForm.noiOHienTai.quan 
                        || validateForm.noiOHienTai.tinh || validateForm.noiOHienTai.diaChi
                        ? showRequiredAlert() 
                        : ""}
                </div>
                <div className="SYLL__left__field two__content">
                    <div className="fisrt__content danToc">
                        <label htmlFor="danToc">Dân tộc:
                            <span className="required__field"> *</span> 
                        </label>
                        <input id="danToc" name="danToc" type="text" 
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
                        onChange={(e)=>{
                            handleChangeGetValueInput(e)
                        }} />
                    </div>
                </div>
                <div className="SYLL__left__field two__content xuatThan">
                    <div>
                        <div className="fisrt__content thanhPhanXuatThan">
                        <label htmlFor="thanhPhanXuatThan">Thành phần xuất thân:
                            <span className="required__field"> *</span>
                        </label>
                        <input id="thanhPhanXuatThan" name="thanhPhanXuatThan" type="text" 
                        onBlur={(e)=>{
                            let {value} = e.target;
                            if(value === ""){
                                setValidateForm({
                                    ...validateForm,
                                    xuatThan: {...validateForm.xuatThan,thanhPhanXuatThan:true}})
                            } else {
                                setValidateForm({
                                    ...validateForm,
                                    xuatThan: {...validateForm.xuatThan,thanhPhanXuatThan:false}})
                            }
                        }}
                        onChange={(e)=>{
                            let {value,name} = e.target;
                            let {xuatThan} = valueForm;
                            let xuatThanNew = {...xuatThan, [name]: value};
                            setValueForm({
                                ...valueForm,
                                xuatThan: {...xuatThanNew}
                            })
                        }} />
                        </div>
                        <div className="second__content maSo">
                            <input placeholder="Mã Số" id="maSo" name="maSo" type="text" 
                            onBlur={(e)=>{
                                let {value} = e.target;
                                if(value === ""){
                                    setValidateForm({
                                        ...validateForm,
                                        xuatThan: {...validateForm.xuatThan,maSo:true}})
                                } else {
                                    setValidateForm({
                                        ...validateForm,
                                        xuatThan: {...validateForm.xuatThan,maSo:false}})
                                }
                            }}
                            onChange={(e)=>{
                                let {value,name} = e.target;
                                let {xuatThan} = valueForm;
                                let xuatThanNew = {...xuatThan, [name]: value};
                                setValueForm({
                                    ...valueForm,
                                    xuatThan: {...xuatThanNew}
                                })
                            }} />
                        </div>
                    </div>
                    {validateForm.xuatThan.thanhPhanXuatThan || validateForm.xuatThan.maSo 
                        ? showRequiredAlert() 
                        : ""}
                </div>
                <div className="SYLL__left__field">
                    <label htmlFor='ngheNghiep'>Nghề nghiệp khi được tuyển dụng:</label>
                    <input id="ngheNghiep" name="ngheNghiep" type="text" onChange={(e)=>{
                        handleChangeGetValueInput(e)
                    }} />
                </div>
                <div className="SYLL__left__field two__content">
                    <div className="fisrt__content hocVan">
                        <label htmlFor="hocVan">Trình độ học vấn:
                            <span className="required__field"> *</span>
                        </label>
                        <input placeholder='Văn hóa phổ thông' id="hocVan" name="hocVan" type="text"
                        onBlur={validateField}
                        onChange={(e)=>{
                            handleChangeGetValueInput(e)
                        }} />
                        {validateForm.hocVan 
                            ? showRequiredAlert() 
                            : ""}
                    </div>
                    <div id="chuyenMon__content">
                        <div className="second__content">
                        <input placeholder='Chuyên môn kỹ thuật' id="chuyenMon" name="chuyenMon" 
                        type="text" 
                        onBlur={validateField}
                        onChange={(e)=>{
                            handleChangeGetValueInput(e)
                        }} />
                        </div>
                        {validateForm.chuyenMon 
                            ? showRequiredAlert() 
                            : ""}
                    </div>
                </div>
            </div>
            <div className="SoYeuLyLich__right">
                <div className="SYLL__right__field">
                    <label htmlFor='lyLuanCT'>Lý luận chính trị:
                        <span className="required__field"> *</span>
                    </label>
                    <input id="lyLuanCT" name="lyLuanCT" type="text" 
                    onBlur={validateField}
                    onChange={(e)=>{
                        handleChangeGetValueInput(e)
                    }} />
                    {validateForm.lyLuanCT ? showRequiredAlert() : ""}
                </div>
                <div className="SYLL__right__field">
                    <label htmlFor='ngoaiNgu'>Ngoại ngữ:</label>
                    <input id="ngoaiNgu" name="ngoaiNgu" type="text" onChange={(e)=>{
                        handleChangeGetValueInput(e)
                    }} />
                </div>
                <div className="SYLL__right__field two__content">
                    <div className="fisrt__content ngayThamGiaCM">
                        <label >Ngày tham gia cách mạng:</label>
                        <DatePicker onChange={(date,dateString)=>{
                            setValueForm({
                                ...valueForm,
                                ngayThamGiaCM: dateString
                            })
                        }}
                        placeholder=""
                        suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6"/>
                        </svg>}
                        format="DD-MM-YYYY"
                        />
                    </div>
                    <div className="second__content toChuc">
                        <label htmlFor="toChucLamViec">Làm việc gì, tổ chức nào:
                        </label>
                        <input id="toChucLamViec" name="toChucLamViec" type="text" onChange={(e)=>{
                            handleChangeGetValueInput(e)
                        }}/>
                    </div>
                </div>
                <div className="SYLL__right__field three__content">
                    <div className="fisrt__content">
                        <label>Ngày nhập ngũ:</label>
                        <DatePicker onChange={(date,dateString)=>{
                            setValueForm({
                                ...valueForm,
                                ngayNhapNgu: dateString
                            })
                        }}
                        placeholder="" 
                        suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6"/>
                        </svg>}
                        format="DD-MM-YYYY"
                        />
                    </div>
                    <div className="second__content">
                        <label>Ngày xuất ngũ:</label>
                        <DatePicker onChange={(date,dateString)=>{
                            setValueForm({
                                ...valueForm,
                                ngayXuatNgu: dateString
                            })
                        }}
                        placeholder=""
                        suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6"/>
                        </svg>}
                        format="DD-MM-YYYY"
                        />
                    </div>
                    <div className="third__content">
                        <label htmlFor='capBac'>Cấp bậc:
                        </label>
                        <input id="capBac" name="capBac" type="text" onChange={(e)=>{
                            handleChangeGetValueInput(e)
                        }} />
                    </div>
                </div>
                <div className="SYLL__right__field two__content">
                    <div className="fisrt__content date__picker">
                        <label >Ngày được tuyển dụng:
                            <span className="required__field"> *</span>
                        </label>
                        <DatePicker 
                        onBlur={()=>{
                            if(valueForm.ngayDuocTuyenDung === ""){
                                setValidateForm({
                                    ...validateForm,
                                    ngayDuocTuyenDung: true
                                })
                            } else {
                                setValidateForm({
                                    ...validateForm,
                                    ngayDuocTuyenDung: false
                                })
                            }
                        }}
                        onChange={(date,dateString)=>{
                            setValueForm({
                                ...valueForm,
                                ngayDuocTuyenDung: dateString
                            })
                        }}
                        placeholder=""
                        suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6"/>
                        </svg>}
                        format="DD-MM-YYYY"
                        />
                        {validateForm.ngayDuocTuyenDung ? showRequiredAlert() : ""}
                    </div>
                    <div className="second__content">
                        <label htmlFor="coQuanTuyenDung">Cơ quan tuyển dụng:
                            <span className="required__field"> *</span>
                        </label>
                        <input id="coQuanTuyenDung" name="coQuanTuyenDung" type="text" 
                        onBlur={validateField}
                        onChange={(e)=>{
                            handleChangeGetValueInput(e)
                        }} />
                        {validateForm.coQuanTuyenDung ? showRequiredAlert() : ""}
                    </div>
                </div>
                <div className="SYLL__right__field two__content">
                    <div className="fisrt__content date__picker">
                        <label >Ngày vào ĐCSVN:
                            <span className="required__field"> *</span>
                        </label>
                        <DatePicker 
                        onBlur={()=>{
                            if(valueForm.ngayVaoDangCSVN === ""){
                                setValidateForm({
                                    ...validateForm,
                                    ngayVaoDangCSVN: true
                                })
                            } else {
                                setValidateForm({
                                    ...validateForm,
                                    ngayVaoDangCSVN: false
                                })
                            }
                        }}
                        onChange={(date,dateString)=>{
                            setValueForm({
                                ...valueForm,
                                ngayVaoDangCSVN: dateString
                            })
                        }}
                        placeholder=""
                        suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6"/>
                        </svg>}
                        format="DD-MM-YYYY"
                        />
                        {validateForm.ngayVaoDangCSVN ? showRequiredAlert() : ""}
                    </div>
                    <div className="second__content date__picker">
                        <label>Ngày chính thức:
                            <span className="required__field"> *</span>
                        </label>
                        <DatePicker 
                        onBlur={()=>{
                            if(valueForm.ngayChinhThuc === ""){
                                setValidateForm({
                                    ...validateForm,
                                    ngayChinhThuc: true
                                })
                            } else {
                                setValidateForm({
                                    ...validateForm,
                                    ngayChinhThuc: false
                                })
                            }
                        }}
                        onChange={(date,dateString)=>{
                            setValueForm({
                                ...valueForm,
                                ngayChinhThuc: dateString
                            })
                        }}
                        placeholder=""
                        suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6"/>
                        </svg>}
                        format="DD-MM-YYYY"
                        />
                        {validateForm.ngayChinhThuc ? showRequiredAlert() : ""}
                    </div>
                </div>
                <div className="SYLL__right__field ">
                    <div className="two__content">
                        <div className="fisrt__content phongBan">
                            <label htmlFor="phongBan">Phòng ban:
                                <span className="required__field"> *</span>
                            </label>
                            <Select defaultValue= "Phòng ban"
                            value={phongBanCVOb.phongBan === "" ? "" : phongBanCVOb.phongBan }
                            onBlur={()=>{
                                if(valueForm.phongBanCVObj.phongBan === ""){
                                    setValidateForm({
                                        ...validateForm,
                                        phongBanCVObj: {...validateForm.phongBanCVObj,phongBan: true}
                                    })
                                } else {
                                    setValidateForm({
                                        ...validateForm,
                                        phongBanCVObj: {...validateForm.phongBanCVObj,phongBan: false}
                                    })
                                }
                            }}
                            onChange={getValueSelect_PhongBan}>
                                {renderPhongBan()}
                            </Select>
                            {validateForm.phongBanCVObj.phongBan && phongBanChucVuArr.length < 1 
                                ? showRequiredAlert() 
                                : ""}
                        </div>
                        <div className="second__content chucVuHienTai">
                            <label htmlFor="chucVuHienTai">Chức vụ:
                                <span className="required__field"> *</span>
                            </label>
                            <Select defaultValue="Chức vụ" 
                            value={phongBanCVOb.chucVu === "" ? "" : phongBanCVOb.chucVu }
                            onBlur={()=>{
                                if(valueForm.phongBanCVObj.chucVu === ""){
                                    setValidateForm({
                                        ...validateForm,
                                        phongBanCVObj: {...validateForm.phongBanCVObj,chucVu: true}
                                    })
                                } else {
                                    setValidateForm({
                                        ...validateForm,
                                        phongBanCVObj: {...validateForm.phongBanCVObj,chucVu: false}
                                    })
                                }
                            }}
                            onChange={getValueSelect_ChucVu}>
                                {renderChucVu()}
                            </Select>
                            {validateForm.phongBanCVObj.chucVu && phongBanChucVuArr.length < 1 
                                ? showRequiredAlert() 
                                : ""}
                        </div>
                    </div>
                    <div className="phongBanCV__list">
                        {renderPhongBanCV()}
                    </div>    
                </div>
                <div className="SYLL__right__field two__content">
                    <div className="fisrt__content">
                        <label htmlFor="ngachVienChuc">Ngạch Viên Chức:
                            <span className="required__field"> *</span>
                        </label>
                        <input id="ngachVienChuc" name="ngachVienChuc" type="text" 
                        onBlur={validateField}
                        onChange={(e)=>{
                            handleChangeGetValueInput(e)
                        }} />
                        {validateForm.ngachVienChuc ? showRequiredAlert() : ""}
                    </div>
                    <div className="second__content">
                        <label htmlFor="bacLuong">Bậc lương:
                            <span className="required__field"> *</span>
                        </label>
                        <input id="bacLuong" name="bacLuong" type="text" 
                        onBlur={validateField}
                        onChange={(e)=>{
                            handleChangeGetValueInput(e)
                        }} />
                        {validateForm.bacLuong ? showRequiredAlert() : ""}
                    </div>
                </div>
                <div className="SYLL__right__field two__content ngayVaoDang">
                    <div className="fisrt__content date__picker">
                        <label >Từ ngày tháng năm:
                            <span className="required__field"> *</span>
                        </label>
                        <DatePicker 
                        onBlur={()=>{
                            if(valueForm.tuNgayThangNam === ""){
                                setValidateForm({
                                    ...validateForm,
                                    tuNgayThangNam: true
                                })
                            } else {
                                setValidateForm({
                                    ...validateForm,
                                    tuNgayThangNam: false
                                })
                            }
                        }}
                        onChange={(date,dateString)=>{
                            setValueForm({
                                ...valueForm,
                                tuNgayThangNam: dateString
                            })
                        }}
                        placeholder=""
                        suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6"/>
                        </svg>}
                        format="DD-MM-YYYY"
                        />
                        {validateForm.tuNgayThangNam ? showRequiredAlert() : ""}
                    </div>
                    <div className="maSo__ChucVu">
                        <div className="second__content maSo">
                            <input placeholder='Mã Số' name="maSoFake" type="text" 
                            onBlur={validateField}
                            onChange={(e)=>{
                                handleChangeGetValueInput(e)
                            }} />
                            {validateForm.maSoFake ? showRequiredAlert() : ""}
                        </div>
                    </div>
                </div>
                <div className="SYLL__right__field">
                    <label htmlFor='danhHieuDuocPhong'>Danh hiệu được phong:</label>
                    <input id="danhHieuDuocPhong" name="danhHieuDuocPhong" type="text" onChange={(e)=>{
                        handleChangeGetValueInput(e)
                    }} />
                </div>
                <div className="SYLL__right__field">
                    <label htmlFor='tinhHinhSK'>Tình hình sức khỏe:
                        <span className="required__field"> *</span>
                    </label>
                    <input id="tinhHinhSK" name="tinhHinhSK" type="text" 
                    onBlur={validateField}
                    onChange={(e)=>{
                        handleChangeGetValueInput(e)
                    }} />
                    {validateForm.tinhHinhSK ? showRequiredAlert() : ""}
                    <div className="two__content">
                        <div className="chieuCao">
                            <input placeholder='Chiều cao (m)' name="chieuCao" type="text" 
                            onBlur={validateField}
                            onChange={(e)=>{
                                handleChangeGetValueInput(e)
                            }} />
                            {validateForm.chieuCao ? showRequiredAlert() : ""}
                        </div>
                        <div className="canNang">
                            <input placeholder='Cân nặng (kg)' name="canNang" type="text" 
                            onBlur={validateField}
                            onChange={(e)=>{
                                handleChangeGetValueInput(e)
                            }} />
                            {validateForm.canNang ? showRequiredAlert() : ""}
                        </div>
                    </div>
                </div>
                <div className="SYLL__right__field">
                    <label htmlFor='soTruongCongTac'>Sở trường công tác:</label>
                    <input id="soTruongCongTac" name="soTruongCongTac" type="text" 
                    onChange={(e)=>{
                        handleChangeGetValueInput(e)
                    }} />
                </div>
            </div>
        </div>
    )
}
