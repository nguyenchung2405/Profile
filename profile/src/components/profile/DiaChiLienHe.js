import React from "react";
import { Select } from "antd";
import "./profile.css"
export default function DiaChiLienHe({
  valueForm,
  setValidateForm,
  validateForm,
  setValueForm,
  getValueSelect_NoiO_Tinh_TP,
  renderTinh,
  getValueSelect_NoiO_Quan_TP,
  renderQuan,
  getValueSelect_NoiO_Huyen,
  renderHuyen,
  showRequiredAlert,
  getValueSelect_HoKhau_Tinh_TP,
  getValueSelect_HoKhau_Quan_TP,
  getValueSelect_HoKhau_Huyen,
  disabledInput,
}) {
  const { Option } = Select;

  return (
    <div>
      <div className="SYLL__left__field noiOHienTai">
    <p style={{fontWeight:'500',fontSize:'initial'}}>Nơi ở hiện tại:</p>
        <Select
        style={{borderRadius:20}}
        className="select-now-address"
          showSearch
          filterOption={(input, option) =>
            (option?.children ?? "").toLowerCase().includes(input.toLowerCase())
          }
          disabled={disabledInput()}
          value={
            valueForm.noiOHienTai?.tinh !== ""
              ? valueForm.noiOHienTai?.tinh
              : ""
          }
          onBlur={() => {
            if (valueForm.noiOHienTai?.tinh === "") {
              setValidateForm({
                ...validateForm,
                noiOHienTai: { ...validateForm.noiOHienTai, tinh: true },
              });
            } else {
              setValidateForm({
                ...validateForm,
                noiOHienTai: { ...validateForm.noiOHienTai, tinh: false },
              });
            }
          }}
          onChange={getValueSelect_NoiO_Tinh_TP}
        >
          <Option value="">Tỉnh (Thành phố)</Option>
          {renderTinh("noiO")}
        </Select>
        <Select
          showSearch
          filterOption={(input, option) =>
            (option?.children ?? "").toLowerCase().includes(input.toLowerCase())
          }
          disabled={disabledInput()}
          value={
            valueForm.noiOHienTai?.quan !== ""
              ? valueForm.noiOHienTai?.quan
              : ""
          }
          onBlur={() => {
            if (valueForm.noiOHienTai?.quan === "") {
              setValidateForm({
                ...validateForm,
                noiOHienTai: { ...validateForm.noiOHienTai, quan: true },
              });
            } else {
              setValidateForm({
                ...validateForm,
                noiOHienTai: { ...validateForm.noiOHienTai, quan: false },
              });
            }
          }}
          onChange={getValueSelect_NoiO_Quan_TP}
        >
          <Option value="">Quận (Thành phố)</Option>
          {renderQuan("noiO")}
        </Select>
        <Select
          showSearch
          filterOption={(input, option) =>
            (option?.children ?? "").toLowerCase().includes(input.toLowerCase())
          }
          disabled={disabledInput()}
          value={
            valueForm?.noiOHienTai?.huyen !== ""
              ? valueForm?.noiOHienTai?.huyen
              : ""
          }
          onBlur={() => {
            if (valueForm.noiOHienTai?.huyen === "") {
              setValidateForm({
                ...validateForm,
                noiOHienTai: { ...validateForm.noiOHienTai, huyen: true },
              });
            } else {
              setValidateForm({
                ...validateForm,
                noiOHienTai: { ...validateForm.noiOHienTai, huyen: false },
              });
            }
          }}
          onChange={getValueSelect_NoiO_Huyen}
        >
          <Option value="">Huyện (Xã)</Option>
          {renderHuyen("noiO")}
        </Select>
        {validateForm.noiOHienTai?.huyen ||
        validateForm.noiOHienTai?.quan ||
        validateForm.noiOHienTai?.tinh ||
        validateForm.noiOHienTai?.diaChi
          ? showRequiredAlert()
          : ""}
        <label style={{ marginTop: 20,fontWeight:'500'}} htmlFor="diaChi">
          Địa chỉ nơi ở hiện tại:
          {/* <span className="required__field"> *</span> */}
        </label>
        <input
          id="NoiOHienTai"
          name="diaChi"
          type="text"
          disabled={disabledInput()}
          value={
            valueForm.noiOHienTai.diaChi !== ""
              ? valueForm.noiOHienTai.diaChi
              : ""
          }
          onBlur={(e) => {
            let { value } = e.target;
            if (value === "") {
              setValidateForm({
                ...validateForm,
                noiOHienTai: { ...validateForm.noiOHienTai, diaChi: true },
              });
            } else {
              setValidateForm({
                ...validateForm,
                noiOHienTai: { ...validateForm.noiOHienTai, diaChi: false },
              });
            }
          }}
          onChange={(e) => {
            let { value } = e.target;
            let { noiOHienTai } = valueForm;
            let noiOHienTaiNew = { ...noiOHienTai, diaChi: value };
            setValueForm({
              ...valueForm,
              noiOHienTai: { ...noiOHienTaiNew },
            });
          }}
        />
      </div>
      <div className="SYLL__left__field hoKhauThuongTru">
    <p style={{fontWeight:'500',fontSize:'initial'}}>Hộ khẩu thường trú:</p>
        <Select
          showSearch
          filterOption={(input, option) =>
            (option?.children ?? "").toLowerCase().includes(input.toLowerCase())
          }
          disabled={disabledInput()}
          value={
            valueForm.hoKhauThuongTru.tinh !== ""
              ? valueForm.hoKhauThuongTru.tinh
              : ""
          }
          onBlur={() => {
            if (valueForm.hoKhauThuongTru.tinh === "") {
              setValidateForm({
                ...validateForm,
                hoKhauThuongTru: {
                  ...validateForm.hoKhauThuongTru,
                  tinh: true,
                },
              });
            } else {
              setValidateForm({
                ...validateForm,
                hoKhauThuongTru: {
                  ...validateForm.hoKhauThuongTru,
                  tinh: false,
                },
              });
            }
          }}
          onChange={getValueSelect_HoKhau_Tinh_TP}
        >
          <Option value="">Tỉnh (Thành phố)</Option>
          {renderTinh("hoKhau")}
        </Select>
        <Select
          showSearch
          filterOption={(input, option) =>
            (option?.children ?? "").toLowerCase().includes(input.toLowerCase())
          }
          disabled={disabledInput()}
          value={
            valueForm.hoKhauThuongTru.quan !== ""
              ? valueForm.hoKhauThuongTru.quan
              : ""
          }
          onBlur={() => {
            if (valueForm.hoKhauThuongTru.quan === "") {
              setValidateForm({
                ...validateForm,
                hoKhauThuongTru: {
                  ...validateForm.hoKhauThuongTru,
                  quan: true,
                },
              });
            } else {
              setValidateForm({
                ...validateForm,
                hoKhauThuongTru: {
                  ...validateForm.hoKhauThuongTru,
                  quan: false,
                },
              });
            }
          }}
          onChange={getValueSelect_HoKhau_Quan_TP}
        >
          <Option value="">Quận (Thành phố)</Option>
          {renderQuan("hoKhau")}
        </Select>
        <Select
          showSearch
          filterOption={(input, option) =>
            (option?.children ?? "").toLowerCase().includes(input.toLowerCase())
          }
          disabled={disabledInput()}
          value={
            valueForm.hoKhauThuongTru.huyen !== ""
              ? valueForm.hoKhauThuongTru.huyen
              : ""
          }
          onBlur={() => {
            if (valueForm.hoKhauThuongTru.huyen === "") {
              setValidateForm({
                ...validateForm,
                hoKhauThuongTru: {
                  ...validateForm.hoKhauThuongTru,
                  huyen: true,
                },
              });
            } else {
              setValidateForm({
                ...validateForm,
                hoKhauThuongTru: {
                  ...validateForm.hoKhauThuongTru,
                  huyen: false,
                },
              });
            }
          }}
          onChange={getValueSelect_HoKhau_Huyen}
        >
          <Option value="">Huyện (Xã)</Option>
          {renderHuyen("hoKhau")}
        </Select>
        {validateForm.hoKhauThuongTru?.huyen ||
        validateForm.hoKhauThuongTru?.quan ||
        validateForm.hoKhauThuongTru?.tinh ||
        validateForm.hoKhauThuongTru?.diaChi
          ? showRequiredAlert()
          : ""}
        <label style={{ marginTop: 20, fontWeight:'500'}} htmlFor="diaChi">
          Địa chỉ thường trú:
          <span className="required__field"> *</span>
        </label>
        <input
          id="hoKhauThuongTru"
          name="diaChi"
          type="text"
          disabled={disabledInput()}
          value={
            valueForm.hoKhauThuongTru.diaChi !== ""
              ? valueForm.hoKhauThuongTru.diaChi
              : ""
          }
          onBlur={(e) => {
            let { value } = e.target;
            if (value === "") {
              setValidateForm({
                ...validateForm,
                hoKhauThuongTru: {
                  ...validateForm.hoKhauThuongTru,
                  diaChi: true,
                },
              });
            } else {
              setValidateForm({
                ...validateForm,
                hoKhauThuongTru: {
                  ...validateForm.hoKhauThuongTru,
                  diaChi: false,
                },
              });
            }
          }}
          onChange={(e) => {
            let { value } = e.target;
            let { hoKhauThuongTru } = valueForm;
            let hoKhauThuongTruNew = { ...hoKhauThuongTru, diaChi: value };
            setValueForm({
              ...valueForm,
              hoKhauThuongTru: { ...hoKhauThuongTruNew },
            });
          }}
        />
      </div>
    </div>
  );
}
