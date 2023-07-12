import React, { useEffect, useState } from "react";
import "./profile.css";
import { Select, DatePicker, Radio } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  addPBCV,
  removePBCV,
  setHoKhauHuyen,
  setIsNavigate,
  setIsSubmit,
  setNoiOHuyen,
  setNoiSinhHuyen,
  setQueQuanHuyen,
} from "../../redux/Steps/step1/step1Slice";
import { AiOutlineMinus, AiOutlineCloseCircle } from "react-icons/ai";
import {
  moveToNextStep,
  setIsNextStep,
  setMessageAlert,
} from "../../redux/Steps/stepsSlice";
import moment from "moment";
import {
  CREATE_PROFILE,
  DELETE_DEP_POS,
  GET_DEP_POS,
  GET_DISTRICTS_ADDRESS,
  GET_DISTRICTS_BIRTH_PLACE,
  GET_DISTRICTS_HOKHAU,
  GET_DISTRICTS_HOME_TOWN,
  GET_PART,
  GET_PROVINCES,
  noiSinh_Step1,
  ONLY_CREATE_PROFILE,
  queQuan_Step1,
  regexEmail,
  regexPhone,
  UPDATE_PROFILE,
  UPDATE_PROFILE_ACTIVE,
} from "../../title/title";
import { useHistory } from "react-router-dom";
import Image from "./image";
import Modal_Step1 from "../modal/modal_step1";
import { FcPlus } from "react-icons/fc";
import ThongTinCoBan from "./ThongTinCoBan";
import DiaChiLienHe from "./DiaChiLienHe";
import ThongTinCaNhan from "./ThongTinCaNhan";
import { handleDateTime } from "../../ultils/helper";

export default function SoYeuLyLich(props) {
  const { Option } = Select;
  const dispatch = useDispatch();
  const history = useHistory();
  let {
    nextStep,
    user_profile_id: {
      user_id,
      jour_card_id,
      user_degree_id,
      pro_id,
      work_object_id,
    },
    status,
  } = useSelector((state) => state.stepsReducer);
  let {
    phongBanChucVuArr,
    values,
    noiSinhTinh,
    noiSinhQuan,
    noiSinhHuyen,
    queQuanTinh,
    queQuanQuan,
    queQuanHuyen,
    noiOTinh,
    noiOQuan,
    noiOHuyen,
    isCreateProfile,
    isOnLyCreateProfile,
    isNavigateTo404,
    phongBan: depList,
    // to:depList,
    chucVu: posList,
    hoKhauTinh,
    hoKhauQuan,
    hoKhauHuyen,
    isSubmit,
    action,
    pathUrl,
  } = useSelector((state) => state.steps1Reducer);
  const [depPosArrCreateWhenUpdate, setDepPosArrCreateWhenUpdate] = useState(
    []
  );

  let [phongBanCVOb, setPhongBanCVOb] = useState({
    phongBan: "",
    chucVu: "",
    to: "",
  });
  let [giaoDuc, setGiaoDuc] = useState("");
  let [isShowModal, setIsShowModal] = useState(false);
  let [isShowModal2, setIsShowModal2] = useState(false);
  const [valueForm, setValueForm] = useState({ ...values });
  const [test, setTest] = useState({ ...values });
  // console.log(valueForm)
  // console.log(work_object_id)
  useEffect(() => {
    // setValueForm từ state test -> lấy dữ liệu hiển thị ra cho user xem
    setValueForm({ ...test });
  }, [test]);
  useEffect(() => {
    if (pathUrl.length > 0) {
      history.push(pathUrl);
    }
  }, [pathUrl]);
  useEffect(() => {
    // Vi lý do nào đó setValueForm ko hoạt động nên đi đường tà đạo
    // setTest xong từ đó set ngược lại valueForm
    setTest({ ...values });
  }, [values]);

  const closeModal = () => {
    setIsShowModal(false);
  };

  const closeModal2 = () => {
    setIsShowModal2(false);
  };

  useEffect(() => {
    return () => {
      dispatch(setIsSubmit(false));
      dispatch(setMessageAlert({ type: "", msg: "" }));
    };
  }, []);

  useEffect(() => {
    setValueForm({
      ...valueForm,
      noiSinh: { ...valueForm.noiSinh, quan: "", huyen: "" },
    });
  }, [noiSinhQuan]);

  useEffect(() => {
    setValueForm({
      ...valueForm,
      noiSinh: { ...valueForm.noiSinh, huyen: "" },
    });
  }, [noiSinhHuyen]);

  useEffect(() => {
    setValueForm({
      ...valueForm,
      queQuan: { ...valueForm.queQuan, quan: "", huyen: "" },
    });
  }, [queQuanQuan]);

  useEffect(() => {
    setValueForm({
      ...valueForm,
      queQuan: { ...valueForm.queQuan, huyen: "" },
    });
  }, [queQuanHuyen]);

  useEffect(() => {
    setValueForm({
      ...valueForm,
      noiOHienTai: { ...valueForm.noiOHienTai, quan: "", huyen: "" },
    });
  }, [noiOQuan]);

  useEffect(() => {
    setValueForm({
      ...valueForm,
      noiOHienTai: { ...valueForm.noiOHienTai, huyen: "" },
    });
  }, [noiOHuyen]);

  useEffect(() => {
    setValueForm({
      ...valueForm,
      hoKhauThuongTru: { ...valueForm.hoKhauThuongTru, quan: "", huyen: "" },
    });
  }, [hoKhauQuan]);

  useEffect(() => {
    setValueForm({
      ...valueForm,
      hoKhauThuongTru: { ...valueForm.hoKhauThuongTru, huyen: "" },
    });
  }, [hoKhauHuyen]);

  useEffect(() => {
    if (valueForm.ngayBoNhiem === "") {
      setValueForm({
        ...valueForm,
        ngayHetHanBoNhiem: "",
      });
    }
  }, [valueForm.ngayBoNhiem]);

  useEffect(() => {
    if (valueForm.theCoHieuLucTu === "") {
      setValueForm({
        ...valueForm,
        theCoHieuLucDen: "",
      });
    }
  }, [valueForm.theCoHieuLucTu]);

  useEffect(() => {
    if (isNavigateTo404) {
      history.push("/notFound");
      dispatch(setIsNavigate(false));
    }
  }, [isNavigateTo404]);

  useEffect(() => {
    // console.log(status, isOnLyCreateProfile, isCreateProfile)
    if (isSubmit) {
      // console.log("isSubmit true")
      let isNextStep = checkValueForm();
      // let isNextStep = true;
      if (!isNextStep) {
        dispatch(moveToNextStep(0));
        dispatch(setIsSubmit(false));
      } else if (isNextStep) {
        if (
          !isCreateProfile &&
          !isOnLyCreateProfile &&
          status.can_action === true &&
          status.state !== "ACTIVE"
        ) {
          let newValueForm = { ...valueForm };
          newValueForm.phongBanCVObj = [...depPosArrCreateWhenUpdate];
          dispatch({
            type: UPDATE_PROFILE,
            valuesUpdate: {
              newValueForm,
              user_id,
              jour_card_id,
              user_degree_id,
              pro_id,
              // navigate,
              // navigate:history,
              action,
              work_object_id,
            },
          });
        } else if (isCreateProfile) {
          dispatch({
            type: CREATE_PROFILE,
            valuesCreate: { valueForm, history },
          });
        } else if (isOnLyCreateProfile && !isCreateProfile && user_id) {
        //  USER ĐÃ CÓ
          dispatch({
            type: ONLY_CREATE_PROFILE,
            valuesCreate: { valueForm, user_id, history },
          });
        }
        // else
        if (
          !isCreateProfile &&
          !isOnLyCreateProfile &&
          status.state === "ACTIVE" &&
          status["can_action"] === true
        ) {
          // Cập nhật user degree, dep ,pos, jour card khi state = ACTIVE
          let newValueForm = { ...valueForm };
          newValueForm.phongBanCVObj = [...depPosArrCreateWhenUpdate];
          dispatch({
            type: UPDATE_PROFILE_ACTIVE,
            valuesUpdate: {
              newValueForm,
              user_id,
              jour_card_id,
              user_degree_id,
              pro_id,
              // navigate,
              action,
              work_object_id,
            },
          });
        }
        setTimeout(() => {
          dispatch(setMessageAlert({ type: "", msg: "" }));
        }, 1000);
      }
    }
  }, [isSubmit]);

  useEffect(() => {
    if (nextStep !== 0) {
      dispatch(setIsNextStep(true));
    }
  }, [nextStep]);

  useEffect(() => {
    // call API lấy tỉnh
    dispatch({
      type: GET_PROVINCES,
    });
    dispatch({
      type: GET_DEP_POS,
    });
  }, [dispatch]);

  useEffect(() => {
    // console.log(phongBanChucVuArr)
    setValueForm({ ...valueForm, phongBanCVObj: [...phongBanChucVuArr] });
  }, [phongBanChucVuArr.length]);

  // field nào cần check validate thì cho vào mảng bên dưới
  const valuesNeedValidate = [
    "hoTen",
    "danToc",
    "email",
    "soDienThoai",
    "hocVan",
    // "chuyenMon",
    "tonGiao",
    // "lyLuanCT",
    "gioiTinh",
    "phongBanCVObj",
    // "thanhPhanXuatThan",
    "noiSinh",
    "queQuan",
    // "noiOHienTai",
    // "email",
    // "soDienThoai",
    // "hoKhauThuongTru",
    "ngayCapCCCD",
    "canCuocCD",
    "loaiNV",
    "ngayThangNamSinh",
  ];
  const [validateForm, setValidateForm] = useState({
    hoTen: false,
    danToc: false,
    email: false,
    soDienThoai: false,
    hocVan: false,
    // chuyenMon: false,
    gioitinh: false,
    phongBanCVObj: false,
    noiSinh: { huyen: false, quan: false, tinh: false },
    queQuan: { huyen: false, quan: false, tinh: false },
    canCuocCD: false,
    ngayCapCCCD: false,
    ngayThangNamSinh: false,
    loaiNV: false,
    tonGiao: false,
    // lyLuanCT: false,
    // thanhPhanXuatThan: false,
    // noiOHienTai: { diaChi: false, huyen: false, quan: false, tinh: false },
    // hoKhauThuongTru: { diaChi: false, huyen: false, quan: false, tinh: false },
  });

  const disabledInput = () => {
    let isDisabled;
    let { state } = status;
    if (state === "ACTIVE") {
      isDisabled = true;
    } else {
      isDisabled = false;
    }
    return isDisabled;
  };

  const renderTinh = (fieldName = "noiSinh") => {
    if (fieldName === "noiSinh") {
      if (noiSinhTinh.length > 0) {
        return noiSinhTinh.map((tinh, index) => {
          return <Option value={tinh.name}>{tinh.name}</Option>;
        });
      }
    } else if (fieldName === "queQuan") {
      if (queQuanTinh.length > 0) {
        return queQuanTinh.map((tinh, index) => {
          return <Option value={tinh.name}>{tinh.name}</Option>;
        });
      }
    } else if (fieldName === "noiO") {
      if (noiOTinh.length > 0) {
        return noiOTinh.map((tinh, index) => {
          return <Option value={tinh.name}>{tinh.name}</Option>;
        });
      }
    } else if (fieldName === "hoKhau") {
      if (hoKhauTinh.length > 0) {
        return hoKhauTinh.map((tinh, index) => {
          return <Option value={tinh.name}>{tinh.name}</Option>;
        });
      }
    }
  };

  const renderQuan = (fieldName = "noiSinh") => {
    if (fieldName === "noiSinh") {
      if (noiSinhQuan.length > 0) {
        return noiSinhQuan.map((tinh, index) => {
          return <Option value={tinh.name}>{tinh.name}</Option>;
        });
      }
    } else if (fieldName === "queQuan") {
      if (queQuanQuan.length > 0) {
        return queQuanQuan.map((tinh, index) => {
          return <Option value={tinh.name}>{tinh.name}</Option>;
        });
      }
    } else if (fieldName === "noiO") {
      if (noiOQuan.length > 0) {
        return noiOQuan.map((tinh, index) => {
          return <Option value={tinh.name}>{tinh.name}</Option>;
        });
      }
    } else if (fieldName === "hoKhau") {
      if (hoKhauQuan.length > 0) {
        return hoKhauQuan.map((tinh, index) => {
          return <Option value={tinh.name}>{tinh.name}</Option>;
        });
      }
    }
  };

  const renderHuyen = (fieldName = "noiSinh") => {
    if (fieldName === "noiSinh") {
      if (noiSinhHuyen.length > 0) {
        return noiSinhHuyen.map((tinh, index) => {
          return <Option value={tinh.name}>{tinh.name}</Option>;
        });
      }
    } else if (fieldName === "queQuan") {
      if (queQuanHuyen.length > 0) {
        return queQuanHuyen.map((tinh, index) => {
          return <Option value={tinh.name}>{tinh.name}</Option>;
        });
      }
    } else if (fieldName === "noiO") {
      if (noiOHuyen.length > 0) {
        return noiOHuyen.map((tinh, index) => {
          return <Option value={tinh.name}>{tinh.name}</Option>;
        });
      }
    } else if (fieldName === "hoKhau") {
      if (hoKhauHuyen.length > 0) {
        return hoKhauHuyen.map((tinh, index) => {
          return <Option value={tinh.name}>{tinh.name}</Option>;
        });
      }
    }
  };

  const renderPhongBanCV = () => {
    // console.log(phongBanChucVuArr)
    if (phongBanChucVuArr.length >= 1) {
      /* Vì value của Option là id của phòng ban , chức vụ nên phải tìm ra Object của phòng ban
            , chức vụ đó từ đó lấy name của PB, CV đó để render ra cho user xem */
      let newPBCVArr = [];
      // console.log(isCreateProfile, isOnLyCreateProfile)
      for (let PB_CV of phongBanChucVuArr) {
        let { phongBan, chucVu, id, to } = PB_CV;
        // console.log(phongBan, chucVu)
        // console.log(depList, posList)
        let phongBanCanTim = depList?.find((PB) => PB.id === phongBan);
        let toBanCanTim = depList?.find((TO) => TO.name === to);
        let chucVuCanTim = posList?.find((CV) => CV.id === chucVu);
        // console.log(phongBanCanTim, chucVuCanTim)
        newPBCVArr.push({
          phongBan: phongBanCanTim?.name,
          chucVu: chucVuCanTim?.position?.name,
          id,
          to: toBanCanTim?.name,
        });
      }
      /* Sau khi bóc ra được name của PB, CV rồi thì lấy Array mới có chứa tên cua PB, CV
            render ra */
      // console.log(phongBanChucVuArr)
      return newPBCVArr.map((infor, index) => {
        return (
          <div key={index}>
            <div className="renderPBCV">
              <ul>
                <li style={{ display: "flex" }}>
                  <span
                    style={{
                      fontWeight: "bold",
                      textDecoration: "underline",
                      width: 150,
                    }}
                  >
                    &#x2022;Sub/Label:
                  </span>
                  <p>{infor.to !== undefined ? infor.to : ""}</p>
                </li>
                <li style={{ display: "flex" }}>
                  <span
                    style={{
                      fontWeight: "bold",
                      textDecoration: "underline",
                      width: 150,
                    }}
                  >
                    &#x2022;Phòng ban:
                  </span>
                  <p>{infor.phongBan}</p>
                </li>
                <li style={{ display: "flex" }}>
                  <span
                    style={{
                      fontWeight: "bold",
                      textDecoration: "underline",
                      width: 150,
                    }}
                  >
                    &#x2022;Chức vụ:
                  </span>
                  <p>{infor.chucVu}</p>
                </li>
              </ul>
              <ul>
                {/* <p>{infor.to!==undefined?infor.to:""}</p>
                <p>{infor.phongBan}</p>
                <p>{infor.chucVu}</p> */}
              </ul>
            </div>
            {/* <AiOutlineMinus */}
            <AiOutlineCloseCircle
              onClick={() => {
                dispatch(removePBCV(index));
                if (!isCreateProfile && !isOnLyCreateProfile) {
                  dispatch({
                    type: DELETE_DEP_POS,
                    dep_pos_id: infor.id,
                  });
                }
              }}
            />
          </div>
        );
      });
    }
  };

  const checkValueForm = () => {
    let newValueForm = {};
    let isNextStep = true;
    for (let value of valuesNeedValidate) {
      if (value === "noiSinh") {
        if (
          valueForm[value].huyen === "" ||
          valueForm[value].quan === "" ||
          valueForm[value].tinh === "" ||
          valueForm[value] === ""
        ) {
          newValueForm = { ...newValueForm, [value]: { huyen: true } };
          isNextStep = false;
        }
      } else if (value === "queQuan") {
        if (
          valueForm[value].huyen === "" ||
          valueForm[value].quan === "" ||
          valueForm[value].tinh === "" ||
          valueForm[value] === ""
        ) {
          newValueForm = { ...newValueForm, [value]: { huyen: true } };
          isNextStep = false;
        }
      } else if (value === "noiOHienTai") {
        if (
          valueForm[value].diaChi === "" ||
          valueForm[value].huyen === "" ||
          valueForm[value].quan === "" ||
          valueForm[value].tinh === "" ||
          valueForm[value] === ""
        ) {
          newValueForm = { ...newValueForm, [value]: { huyen: true } };
          isNextStep = false;
        }
      } else if (value === "hoKhauThuongTru") {
        if (
          valueForm[value].diaChi === "" ||
          valueForm[value].huyen === "" ||
          valueForm[value].quan === "" ||
          valueForm[value].tinh === "" ||
          valueForm[value] === ""
        ) {
          newValueForm = { ...newValueForm, [value]: { huyen: true } };
          isNextStep = false;
        }
      } else if (value === "phongBanCVObj") {
        if (valueForm[value]?.length === 0) {
          newValueForm = {
            ...newValueForm,
            [value]: { ...newValueForm[value], phongBan: true },
          };
          newValueForm = {
            ...newValueForm,
            [value]: { ...newValueForm[value], chucVu: true },
          };
          newValueForm = {
            ...newValueForm,
            [value]: { ...newValueForm[value], to: true },
          };
          isNextStep = false;
        }
      } else if (value === "email" || value === "soDienThoai") {
        if (value === "email") {
          if (!regexEmail.test(valueForm[value])) {
            newValueForm = { ...newValueForm, [value]: true };
            isNextStep = false;
          }
        } else if (value === "soDienThoai") {
          if (!regexPhone.test(valueForm[value])) {
            newValueForm = { ...newValueForm, [value]: true };
            isNextStep = false;
          }
        }
      } else {
        if (
          valueForm[value] === "" ||
          valueForm[value] === undefined ||
          valueForm[value] === null
        ) {
          newValueForm = { ...newValueForm, [value]: true };
          isNextStep = false;
        }
      }
      setValidateForm({
        ...newValueForm,
      });
      // console.log(newValueForm)
    }
    return isNextStep;
  };

  const handleChangeGetValueInput = (e) => {
    let { name, value } = e.target;
    setValueForm({
      ...valueForm,
      [name]: value,
    });
  };
  const handleChangeHocVan = (e) => {
    let value = e;
    setValueForm({
      ...valueForm,
      hocVan: value,
    });
  };
  const renderChucVu = () => {
    let htmlRendered = [];
    htmlRendered.push(<Option value="">Chức vụ</Option>);
    if (posList?.length > 0) {
      for (let chucVu of posList) {
        htmlRendered.push(
          <Option value={chucVu.id}>{chucVu.position.name}</Option>
        );
      }
    }
    return htmlRendered;
  };

  const renderPhongBan = () => {
    let htmlRendered = [];
    htmlRendered.push(<Option value="">Phòng ban</Option>);
    if (depList?.length > 0) {
      for (let phongBan of depList) {
        htmlRendered.push(<Option value={phongBan.id}>{phongBan.name}</Option>);
      }
    }
    return htmlRendered;
  };
  const renderTo = () => {
    let htmlRendered = [];
    htmlRendered.push(<Option value="">Sub/Label</Option>);
    if (depList?.length > 0) {
      for (let phongBan of depList) {
        htmlRendered.push(
          <Option value={phongBan.name}>{phongBan.name}</Option>
        );
      }
    }
    return htmlRendered;
  };
  const handleChangeValueRadio = (e) => {
    let { value } = e.target;
    setValueForm({
      ...valueForm,
      gioiTinh: value,
    });
  };
  const handleChangeValueRadioLyLuan = (e) => {
    let { value } = e.target;
    setValueForm({
      ...valueForm,
      lyLuanCT: value,
    });
  };
  const getValueSelect_NoiSinh_Huyen = (value) => {
    let { noiSinh } = valueForm;
    let noiSinhNew = { ...noiSinh, huyen: value };
    setValueForm({
      ...valueForm,
      noiSinh: { ...noiSinhNew },
    });
  };

  const getValueSelect_NoiSinh_Quan_TP = (value) => {
    dispatch(setNoiSinhHuyen(value));
    let { noiSinh } = valueForm;
    let noiSinhNew = { ...noiSinh, quan: value };
    setValueForm({
      ...valueForm,
      noiSinh: { ...noiSinhNew },
    });
  };

  const getValueSelect_NoiSinh_Tinh_TP = (value) => {
    let tinhSelected = noiSinhTinh.find((tinh) => tinh.name === value);
    dispatch({
      type: GET_DISTRICTS_BIRTH_PLACE,
      code: tinhSelected.code,
    });
    let { noiSinh } = valueForm;
    let noiSinhNew = { ...noiSinh, tinh: value };
    setValueForm({
      ...valueForm,
      noiSinh: { ...noiSinhNew },
    });
  };

  const getValueSelect_QueQuan_Huyen = (value) => {
    let { queQuan } = valueForm;
    let queQuanNew = { ...queQuan, huyen: value };
    // console.log(queQuanNew)
    setValueForm({
      ...valueForm,
      queQuan: { ...queQuanNew },
    });
  };

  const getValueSelect_QueQuan_Quan_TP = (value) => {
    dispatch(setQueQuanHuyen(value));
    let { queQuan } = valueForm;
    let queQuanNew = { ...queQuan, quan: value };
    setValueForm({
      ...valueForm,
      queQuan: { ...queQuanNew },
    });
  };

  const getValueSelect_QueQuan_Tinh_TP = (value) => {
    let tinhSelected = noiSinhTinh.find((tinh) => tinh.name === value);
    dispatch({
      type: GET_DISTRICTS_HOME_TOWN,
      code: tinhSelected.code,
    });
    let { queQuan } = valueForm;
    let queQuanNew = { ...queQuan, tinh: value };
    setValueForm({
      ...valueForm,
      queQuan: { ...queQuanNew },
    });
  };

  const getValueSelect_NoiO_Huyen = (value) => {
    let { noiOHienTai } = valueForm;
    let noiOHienTaiNew = { ...noiOHienTai, huyen: value };
    setValueForm({
      ...valueForm,
      noiOHienTai: { ...noiOHienTaiNew },
    });
  };

  const getValueSelect_NoiO_Quan_TP = (value) => {
    dispatch(setNoiOHuyen(value));
    let { noiOHienTai } = valueForm;
    let noiOHienTaiNew = { ...noiOHienTai, quan: value };
    setValueForm({
      ...valueForm,
      noiOHienTai: { ...noiOHienTaiNew },
    });
  };

  const getValueSelect_NoiO_Tinh_TP = (value) => {
    let tinhSelected = noiOTinh.find((tinh) => tinh.name === value);
    dispatch({
      type: GET_DISTRICTS_ADDRESS,
      code: tinhSelected.code,
    });
    let { noiOHienTai } = valueForm;
    let noiOHienTaiNew = { ...noiOHienTai, tinh: value };
    setValueForm({
      ...valueForm,
      noiOHienTai: { ...noiOHienTaiNew },
    });
  };

  const getValueSelect_HoKhau_Tinh_TP = (value) => {
    let tinhSelected = hoKhauTinh.find((tinh) => tinh.name === value);
    // console.log(tinhSelected)
    dispatch({
      type: GET_DISTRICTS_HOKHAU,
      code: tinhSelected.code,
    });
    let { hoKhauThuongTru } = valueForm;
    let hoKhauThuongTruNew = { ...hoKhauThuongTru, tinh: value };
    setValueForm({
      ...valueForm,
      hoKhauThuongTru: { ...hoKhauThuongTruNew },
    });
  };

  const getValueSelect_HoKhau_Huyen = (value) => {
    let { hoKhauThuongTru } = valueForm;
    let hoKhauThuongTruNew = { ...hoKhauThuongTru, huyen: value };
    setValueForm({
      ...valueForm,
      hoKhauThuongTru: { ...hoKhauThuongTruNew },
    });
  };

  const getValueSelect_HoKhau_Quan_TP = (value) => {
    dispatch(setHoKhauHuyen(value));
    let { hoKhauThuongTru } = valueForm;
    let hoKhauThuongTruNew = { ...hoKhauThuongTru, quan: value };
    setValueForm({
      ...valueForm,
      hoKhauThuongTru: { ...hoKhauThuongTruNew },
    });
  };
  // console.log(phongBanChucVuArr)
  const getValueSelect_ChucVu = (value) => {
    if (phongBanCVOb.phongBan !== "") {
      let newPBCV_Ob = { ...phongBanCVOb, chucVu: value };
      dispatch(addPBCV({ ...phongBanCVOb, chucVu: value }));
      // console.log(newPBCV_Ob)
      if (!isCreateProfile && !isOnLyCreateProfile) {
        setDepPosArrCreateWhenUpdate([
          ...depPosArrCreateWhenUpdate,
          newPBCV_Ob,
        ]);
      }
      let newPhongBanCVObj = { phongBan: "", chucVu: "", to: "" };
      setPhongBanCVOb({ ...newPhongBanCVObj });
    }
  };

  const getValueSelect_PhongBan = (value) => {
    setPhongBanCVOb({ ...phongBanCVOb, phongBan: value });
  };
  const getValueSelect_To = (value) => {
    setPhongBanCVOb({ ...phongBanCVOb, to: value });
  };
  const showRequiredAlert = () => {
    return <p className="required__field">* Trường này không được để trống</p>;
  };

  const validateField = (e) => {
    let { value, name } = e.target;
    if (value === "") {
      setValidateForm({ ...validateForm, [name]: true });
    } else {
      setValidateForm({ ...validateForm, [name]: false });
    }
  };

  const setValueIntoForm = (name) => {
    if (
      valueForm[name] !== "" &&
      valueForm[name] !== null &&
      valueForm[name] !== undefined
    ) {
      return valueForm[name];
    }
  };

  const showImage = () => {
    if (user_id) {
      return <Image />;
    }
  };

  return (
    <div className="SoYeuLyLich">
      <div className="SoYeuLyLich__left">
        {showImage()}
        <ThongTinCoBan
          setValueIntoForm={setValueIntoForm}
          validateField={validateField}
          handleChangeGetValueInput={handleChangeGetValueInput}
          validateForm={validateForm}
          showRequiredAlert={showRequiredAlert}
          valueForm={valueForm}
          setValidateForm={setValidateForm}
          setValueForm={setValueForm}
          handleChangeValueRadio={handleChangeValueRadio}
          disabledInput={disabledInput}
        />
        <div className="SYLL__left__field noiSinh">
          <label>
            Nơi sinh:
            <span className="required__field"> *</span>
          </label>
          <FcPlus
            onClick={() => {
              setIsShowModal(true);
            }}
          />
          <Modal_Step1
            title={noiSinh_Step1}
            isShowModal={isShowModal}
            closeModal={closeModal}
            valueForm={valueForm}
            setValidateForm={setValidateForm}
            setValueForm={setValueForm}
            validateForm={validateForm}
            getValueSelect_NoiSinh_Tinh_TP={getValueSelect_NoiSinh_Tinh_TP}
            getValueSelect_NoiSinh_Quan_TP={getValueSelect_NoiSinh_Quan_TP}
            getValueSelect_NoiSinh_Huyen={getValueSelect_NoiSinh_Huyen}
            renderTinh={renderTinh}
            renderQuan={renderQuan}
            renderHuyen={renderHuyen}
            showRequiredAlert={showRequiredAlert}
            disabledInput={disabledInput}
          />
          {valueForm.noiSinh?.huyen &&
          valueForm.noiSinh?.quan &&
          valueForm.noiSinh?.tinh ? (
            <p>{`${valueForm.noiSinh.huyen}, ${valueForm.noiSinh.quan}, ${valueForm.noiSinh.tinh}`}</p>
          ) : (
            ""
          )}
          {validateForm.noiSinh?.huyen ||
          validateForm.noiSinh?.quan ||
          validateForm.noiSinh?.tinh
            ? showRequiredAlert()
            : ""}
        </div>
        <div className="SYLL__left__field queQuan">
          <label>
            Quê quán:<span className="required__field"> *</span>
          </label>
          <FcPlus
            onClick={() => {
              setIsShowModal2(true);
            }}
          />
          <Modal_Step1
            title={queQuan_Step1}
            isShowModal={isShowModal2}
            closeModal={closeModal2}
            valueForm={valueForm}
            setValidateForm={setValidateForm}
            setValueForm={setValueForm}
            validateForm={validateForm}
            renderTinh={renderTinh}
            renderQuan={renderQuan}
            renderHuyen={renderHuyen}
            getValueSelect_QueQuan_Tinh_TP={getValueSelect_QueQuan_Tinh_TP}
            getValueSelect_QueQuan_Quan_TP={getValueSelect_QueQuan_Quan_TP}
            getValueSelect_QueQuan_Huyen={getValueSelect_QueQuan_Huyen}
            showRequiredAlert={showRequiredAlert}
            disabledInput={disabledInput}
          />
          {valueForm.queQuan?.huyen &&
          valueForm.queQuan?.quan &&
          valueForm.queQuan?.tinh ? (
            <p>{`${valueForm.queQuan.huyen}, ${valueForm.queQuan.quan}, ${valueForm.queQuan.tinh}`}</p>
          ) : (
            ""
          )}
          {validateForm.queQuan?.tinh ||
          (validateForm.queQuan?.huyen && validateForm.queQuan?.quan)
            ? showRequiredAlert()
            : ""}
        </div>
        <DiaChiLienHe
          valueForm={valueForm}
          setValidateForm={setValidateForm}
          validateForm={validateForm}
          setValueForm={setValueForm}
          getValueSelect_NoiO_Tinh_TP={getValueSelect_NoiO_Tinh_TP}
          renderTinh={renderTinh}
          getValueSelect_NoiO_Quan_TP={getValueSelect_NoiO_Quan_TP}
          renderQuan={renderQuan}
          getValueSelect_NoiO_Huyen={getValueSelect_NoiO_Huyen}
          renderHuyen={renderHuyen}
          showRequiredAlert={showRequiredAlert}
          getValueSelect_HoKhau_Tinh_TP={getValueSelect_HoKhau_Tinh_TP}
          getValueSelect_HoKhau_Quan_TP={getValueSelect_HoKhau_Quan_TP}
          getValueSelect_HoKhau_Huyen={getValueSelect_HoKhau_Huyen}
          disabledInput={disabledInput}
        />
      </div>
      <div className="SoYeuLyLich__right">
        <ThongTinCaNhan
          setValidateForm={setValidateForm}
          setValueIntoForm={setValueIntoForm}
          handleChangeGetValueInput={handleChangeGetValueInput}
          valueForm={valueForm}
          setValueForm={setValueForm}
          validateField={validateField}
          validateForm={validateForm}
          showRequiredAlert={showRequiredAlert}
          disabledInput={disabledInput}
        />
        <div className="SYLL__right__field two__content">
          <div className="fisrt__content hocVan">
            <label style={{ fontWeight: "500", fontSize: 15 }} htmlFor="hocVan">
              Giáo dục phổ thông:<span className="required__field"> *</span>
            </label>
            <Select
              style={{
                width: 200,
              }}
              onChange={(e) => {
                handleChangeHocVan(e);
              }}
              value={setValueIntoForm("hocVan")}
              placeholder="Giáo dục phổ thông"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
            >
              <Option value="Trung học cơ sở">Trung học cơ sở</Option>
              <Option value="Trung học phổ thông">Trung học phổ thông</Option>
              <Option value="Trung cấp">Trung cấp</Option>
              <Option value="Cao đẳng">Cao đẳng</Option>
              <Option value="Cử nhân">Cử nhân</Option>
              <Option value="Thạc sỹ">Thạc sỹ</Option>
              <Option value="Tiến sĩ">Tiến sĩ</Option>
            </Select>
            {/* <input
              placeholder="Văn hóa phổ thông"
              id="hocVan"
              name="hocVan"
              type="text"
              value={setValueIntoForm("hocVan")}
              onBlur={validateField}
              onChange={(e) => {
                handleChangeGetValueInput(e);
              }}
            /> */}
            {/* {validateForm.hocVan ? showRequiredAlert() : ""} */}
          </div>
          <div id="chuyenMon__content">
            <div className="second__content">
              <label style={{ fontWeight: "500", fontSize: 15 }}>
                {" "}
                Chuyên môn:
              </label>
              <input
                placeholder="Chuyên môn kỹ thuật"
                id="chuyenMon"
                name="chuyenMon"
                type="text"
                sytle={{ marginTop: 14 }}
                value={setValueIntoForm("chuyenMon")}
                onBlur={validateField}
                onChange={(e) => {
                  handleChangeGetValueInput(e);
                }}
              />
            </div>
            {/* {validateForm.chuyenMon ? showRequiredAlert() : ""} */}
          </div>
        </div>
        <div className="SYLL__right__field">
          <label htmlFor="lyLuanCT">
            Lý luận chính trị:
            {/* <span className="required__field"> *</span> */}
            <Radio.Group
              disabled={disabledInput()}
              onChange={handleChangeValueRadioLyLuan}
              value={setValueIntoForm("lyLuanCT")}
            >
              <Radio value="Sơ cấp">Sơ cấp</Radio>
              <Radio value="Trung cấp">Trung cấp</Radio>
              <Radio value="Cao cấp">Cao cấp</Radio>
            </Radio.Group>
          </label>
          {/* <input
            id="lyLuanCT"
            name="lyLuanCT"
            type="text"
            value={setValueIntoForm("lyLuanCT")}
            onBlur={validateField}
            onChange={(e) => {
              handleChangeGetValueInput(e);
            }}
          /> */}
          {/* {validateForm.lyLuanCT ? showRequiredAlert() : ""} */}
        </div>
        <div className="SYLL__right__field">
          <label htmlFor="ngoaiNgu">Ngoại ngữ:</label>
          <input
            id="ngoaiNgu"
            name="ngoaiNgu"
            type="text"
            value={setValueIntoForm("ngoaiNgu")}
            onChange={(e) => {
              handleChangeGetValueInput(e);
            }}
          />
        </div>
        <div className="SYLL__right__field two__content">
          <div className="fisrt__content date__picker">
            <label style={{ fontWeight: "500", fontSize: 15 }}>
              Ngày bổ nhiệm:
            </label>
            <DatePicker
              value={
                valueForm.ngayBoNhiem !== "" && valueForm.ngayBoNhiem !== null
                  ? handleDateTime(valueForm?.ngayBoNhiem)
                  : ""
              }
              // onBlur={()=>{
              //     if(valueForm.ngayBoNhiem === ""){
              //         setValidateForm({
              //             ...validateForm,
              //             ngayBoNhiem: true
              //         })
              //     } else {
              //         setValidateForm({
              //             ...validateForm,
              //             ngayBoNhiem: false
              //         })
              //     }
              // }}
              onChange={(date, dateString) => {
                setValueForm({
                  ...valueForm,
                  ngayBoNhiem: moment(dateString, "DD-MM-YYYY").toISOString(),
                });
              }}
              placeholder=""
              suffixIcon={
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z"
                    fill="#666666"
                    fillOpacity="0.6"
                  />
                </svg>
              }
              format="DD-MM-YYYY"
            />
            {/*validateForm.ngayBoNhiem ? showRequiredAlert() : ""*/}
          </div>
          <div className="second__content date__picker">
            <label style={{ fontWeight: "500", fontSize: 15 }}>
              Ngày hết hạn bổ nhiệm:
            </label>
            <DatePicker
              value={
                valueForm.ngayHetHanBoNhiem !== "" &&
                valueForm.ngayHetHanBoNhiem !== null
                  ? handleDateTime(valueForm.ngayHetHanBoNhiem)
                  : ""
              }
              onBlur={() => {
                if (valueForm.ngayHetHanBoNhiem === "") {
                  setValidateForm({
                    ...validateForm,
                    ngayHetHanBoNhiem: true,
                  });
                } else {
                  setValidateForm({
                    ...validateForm,
                    ngayHetHanBoNhiem: false,
                  });
                }
              }}
              onChange={(date, dateString) => {
                let ngayBoNhiemINT = Date.parse(valueForm.ngayBoNhiem);
                let ngayHetBoNhiemINT = Date.parse(
                  moment(dateString, "DD-MM-YYYY").toISOString()
                );
                // console.log(ngayBoNhiemINT, ngayHetBoNhiemINT)
                if (ngayHetBoNhiemINT > ngayBoNhiemINT) {
                  setValueForm({
                    ...valueForm,
                    ngayHetHanBoNhiem: moment(
                      dateString,
                      "DD-MM-YYYY"
                    ).toISOString(),
                  });
                } else if (ngayHetBoNhiemINT < ngayBoNhiemINT) {
                  alert("Ngày hết hạn bổ nhiệm phải lớn hơn ngày bổ nhiệm.");
                } else {
                  setValueForm({
                    ...valueForm,
                    ngayHetHanBoNhiem: "",
                  });
                  alert("Ngày bổ nhiêm không được để trống");
                }
              }}
              placeholder=""
              suffixIcon={
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z"
                    fill="#666666"
                    fillOpacity="0.6"
                  />
                </svg>
              }
              format="DD-MM-YYYY"
            />
            {/*validateForm.ngayHetHanBoNhiem ? showRequiredAlert() : ""*/}
          </div>
        </div>
        <div className="SYLL__right__field ">
          <div className="two__content">
            <div className="second__content chucVuHienTai">
              <label
                style={{ fontWeight: "500", fontSize: 15 }}
                htmlFor="chucVuHienTai"
              >
                Sub/Label:
                <span className="required__field"> *</span>
              </label>
              <Select
                defaultValue="Sub/Label"
                showSearch
                filterOption={(input, option) =>
                  (option?.children ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                value={phongBanCVOb.to === "" ? "" : phongBanCVOb.to}
                // onBlur={() => {
                //   if (phongBanCVOb.chucVu === "") {
                //     setValidateForm({
                //       ...validateForm,
                //       phongBanCVObj: {
                //         ...validateForm.phongBanCVObj,
                //         chucVu: true,
                //       },
                //     });
                //   } else {
                //     setValidateForm({
                //       ...validateForm,
                //       phongBanCVObj: {
                //         ...validateForm.phongBanCVObj,
                //         chucVu: false,
                //       },
                //     });
                //   }
                // }}
                onChange={getValueSelect_To}
              >
                Sub/Label:{renderTo()}
              </Select>
              {validateForm.phongBanCVObj?.chucVu &&
              phongBanChucVuArr.length < 1
                ? showRequiredAlert()
                : ""}
            </div>{" "}
            <div className="fisrt__content phongBan">
              <label
                style={{ fontWeight: "500", fontSize: 15 }}
                htmlFor="phongBan"
              >
                Phòng ban:
                <span className="required__field"> *</span>
              </label>
              <Select
                defaultValue="Phòng ban"
                showSearch
                filterOption={(input, option) =>
                  (option?.children ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                value={
                  phongBanCVOb.phongBan === "" ? "" : phongBanCVOb.phongBan
                }
                onBlur={() => {
                  if (phongBanCVOb.phongBan === "") {
                    setValidateForm({
                      ...validateForm,
                      phongBanCVObj: {
                        ...validateForm.phongBanCVObj,
                        phongBan: true,
                      },
                    });
                  } else {
                    setValidateForm({
                      ...validateForm,
                      phongBanCVObj: {
                        ...validateForm.phongBanCVObj,
                        phongBan: false,
                      },
                    });
                  }
                }}
                onChange={getValueSelect_PhongBan}
              >
                {renderPhongBan()}
              </Select>
              {validateForm.phongBanCVObj?.phongBan &&
              phongBanChucVuArr.length < 1
                ? showRequiredAlert()
                : ""}
            </div>
            <div className="second__content chucVuHienTai">
              <label
                style={{ fontWeight: "500", fontSize: 15 }}
                htmlFor="chucVuHienTai"
              >
                Chức vụ:
                <span className="required__field"> *</span>
              </label>
              <Select
                defaultValue="Chức vụ"
                showSearch
                filterOption={(input, option) =>
                  (option?.children ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                value={phongBanCVOb.chucVu === "" ? "" : phongBanCVOb.chucVu}
                onBlur={() => {
                  if (phongBanCVOb.chucVu === "") {
                    setValidateForm({
                      ...validateForm,
                      phongBanCVObj: {
                        ...validateForm.phongBanCVObj,
                        chucVu: true,
                      },
                    });
                  } else {
                    setValidateForm({
                      ...validateForm,
                      phongBanCVObj: {
                        ...validateForm.phongBanCVObj,
                        chucVu: false,
                      },
                    });
                  }
                }}
                onChange={getValueSelect_ChucVu}
              >
                {renderChucVu()}
              </Select>
              {validateForm.phongBanCVObj?.chucVu &&
              phongBanChucVuArr.length < 1
                ? showRequiredAlert()
                : ""}
            </div>
          </div>
          <div className="phongBanCV__list">{renderPhongBanCV()}</div>
        </div>
        <div className="SYLL__right__field two__content">
          <div className="fisrt__content toChuc">
            <label htmlFor="soTheNhaBao">Số thẻ nhà báo:</label>
            <input
              id="soTheNhaBao"
              name="soTheNhaBao"
              type="text"
              value={setValueIntoForm("soTheNhaBao")}
              onChange={(e) => {
                handleChangeGetValueInput(e);
              }}
            />
          </div>
          <div className="second__content date__picker">
            <label>Ngày cấp thẻ nhà báo:</label>
            <DatePicker
              value={
                valueForm.ngayCapTheNhaBao !== "" &&
                valueForm.ngayCapTheNhaBao !== undefined &&
                valueForm.ngayCapTheNhaBao !== null &&
                valueForm.ngayCapTheNhaBao !== "Invalid date"
                  ? moment(valueForm.ngayCapTheNhaBao, "DD-MM-YYYY")
                  : ""
              }
              onChange={(date, dateString) => {
                setValueForm({
                  ...valueForm,
                  ngayCapTheNhaBao: dateString,
                });
              }}
              placeholder=""
              suffixIcon={
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z"
                    fill="#666666"
                    fillOpacity="0.6"
                  />
                </svg>
              }
              format="DD-MM-YYYY"
            />
          </div>
        </div>
        {/* <div className="SYLL__right__field two__content theCoHieuLuc">
          <div className="fisrt__content date__picker">
            <label>Thẻ có hiệu lực từ:</label>
            <DatePicker
              value={
                valueForm.theCoHieuLucTu !== "" &&
                valueForm.theCoHieuLucTu !== undefined &&
                valueForm.theCoHieuLucTu !== null
                  ? handleDateTime(valueForm.theCoHieuLucTu)
                  : ""
              }
              onBlur={() => {
                if (valueForm.theCoHieuLucTu === "") {
                  setValidateForm({
                    ...validateForm,
                    theCoHieuLucTu: true,
                  });
                } else {
                  setValidateForm({
                    ...validateForm,
                    theCoHieuLucTu: false,
                  });
                }
              }}
              onChange={(date, dateString) => {
                setValueForm({
                  ...valueForm,
                  theCoHieuLucTu: moment(
                    dateString,
                    "DD-MM-YYYY"
                  ).toISOString(),
                });
              }}
              placeholder=""
              suffixIcon={
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z"
                    fill="#666666"
                    fillOpacity="0.6"
                  />
                </svg>
              }
              format="DD-MM-YYYY"
            />
          </div>
          <div className="second__content date__picker">
            <label>Thẻ có hiệu lực đến:</label>
            <DatePicker
              value={
                valueForm.theCoHieuLucDen !== "" &&
                valueForm.theCoHieuLucDen !== undefined &&
                valueForm.theCoHieuLucDen !== null
                  ? handleDateTime(valueForm.theCoHieuLucDen)
                  : ""
              }
              onBlur={() => {
                if (valueForm.theCoHieuLucDen === "") {
                  setValidateForm({
                    ...validateForm,
                    theCoHieuLucDen: true,
                  });
                } else {
                  setValidateForm({
                    ...validateForm,
                    theCoHieuLucDen: false,
                  });
                }
              }}
              onChange={(date, dateString) => {
                let theCoHieuLucTuINT = Date.parse(valueForm.theCoHieuLucTu);
                let theCoHieuLucDenINT = Date.parse(
                  moment(dateString, "DD-MM-YYYY").toISOString()
                );
                // console.log(theCoHieuLucTuINT, theCoHieuLucDenINT)
                if (theCoHieuLucDenINT > theCoHieuLucTuINT) {
                  setValueForm({
                    ...valueForm,
                    theCoHieuLucDen: moment(
                      dateString,
                      "DD-MM-YYYY"
                    ).toISOString(),
                  });
                } else if (theCoHieuLucDenINT < theCoHieuLucTuINT) {
                  alert(
                    "Ngày thẻ có hiệu lực đến phải lớn hơn ngày thẻ có hiệu lực từ."
                  );
                } else {
                  setValueForm({
                    ...valueForm,
                    theCoHieuLucDen: "",
                  });
                  alert("Ngày thẻ có hiệu lực từ không được để trống");
                }
              }}
              placeholder=""
              suffixIcon={
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z"
                    fill="#666666"
                    fillOpacity="0.6"
                  />
                </svg>
              }
              format="DD-MM-YYYY"
            />
          </div>
        </div> */}
        {/* <div className="SYLL__right__field">
          <label htmlFor="lyLuanCT">
            Đối tượng lao động:
            <span className="required__field"> *</span>
          </label>
          <Select
            // defaultValue="Chức vụ"
            showSearch
            className="width__100"
            placeholder="Loại nhân viên"
            filterOption={(input, option) =>
              (option?.children ?? "")
                .toLowerCase()
                .includes(input.toLowerCase())
            }
            value={valueForm.loaiNV === "" ? null : valueForm.loaiNV}
            onBlur={() => {
              if (valueForm.loaiNV === "") {
                setValidateForm({
                  ...validateForm,
                  loaiNV: true,
                });
              } else {
                setValidateForm({
                  ...validateForm,
                  loaiNV: false,
                });
              }
            }}
            onChange={(value) => {
              setValueForm({ ...valueForm, loaiNV: value });
            }}
          >
            <Option value="Nhân viên khoán">Nhân viên khoán</Option>
            <Option value="Nhân viên chính thức">Nhân viên chính thức</Option>
          </Select>
          {validateForm.loaiNV ? showRequiredAlert() : ""}
        </div> */}
        <div className="SYLL__right__field">
          <label htmlFor="lyLuanCT">Ghi chú:</label>
          <input
            id="noteWorkObject"
            name="noteWorkObject"
            type="text"
            value={setValueIntoForm("noteWorkObject")}
            onChange={(e) => {
              handleChangeGetValueInput(e);
            }}
          />
        </div>
      </div>
    </div>
  );
}
