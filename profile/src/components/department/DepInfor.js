import React, { useEffect, useState } from 'react'
import { Select } from 'antd';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_DEPARTMENT, GET_DEPARTMENT_INFOR, UPDATE_DEPARTMENT } from '../../title/title';

export default function DepInfor() {

    const {Option} = Select;
    const dispatch = useDispatch();
    let {depID} = useParams();
    let {depInfor} = useSelector(state => state.departmentsReducer);
    const {tableDepList} = useSelector(state => state.departmentsReducer)
    let [formValue, setFormValue] = useState({});
    let [validate, setValidate] = useState({
        name: false,
        address: false,
        phone: false,
    });
    // let [depParentArray, setDepParentArray] = useState([]);
    // console.log(formValue)
    // console.log(tableDepList)
    
    useEffect(()=>{
        if(depID){
            dispatch({
                type: GET_DEPARTMENT_INFOR,
                dep_id: depID
            })
        }
    }, [depID])

    useEffect(()=>{
        setFormValue({...depInfor})
    }, [depInfor])

    // useEffect(()=>{
    //     setDepParentArray([...depParentArr()])
    // }, [tableDepList])

    const submitForm = (e)=>{
        e.preventDefault()
        let isSubmit = checkValueForm();
        if(isSubmit){
            if(depID){
                dispatch({
                    type: UPDATE_DEPARTMENT,
                    data: formValue
                })
            } else {
                dispatch({
                    type: CREATE_DEPARTMENT,
                    data: formValue
                });
            }
        }
    }

    const handleChangeInput = (e)=>{
        let {value, id} = e.target;
        // let isSubmit = checkValueForm();
        setFormValue({
            ...formValue,
            [id]:value
        })
    }

    const handleChangeSelect = (value)=>{
        setFormValue({
            ...formValue,
            parent_id :value
        })
    }

    const setValueField = (name)=>{
        if(formValue[name] && formValue[name] !== ""){
            return formValue[name]
        }
    }

    const showRemind = (nameOfField)=>{
        if(validate[nameOfField]){
            return <p className="required__field">* Trường này không được để trống</p>
        }
    }

    const checkValueForm = ()=>{
        let isNext;
        let newValidate = {};
        for(let prop in validate){
            if(formValue[prop] && formValue[prop] !== ""){
                isNext = true;
                newValidate = {...newValidate, [prop]:false}
            } else {
                isNext = false;
                newValidate = {...newValidate, [prop]:true}
            }
        }
        setValidate({
            ...newValidate
        })
        return isNext;
    }

    const renderButton = ()=>{
        if(depID){
            return <div className="alignCenter">
                <button type='submit' className="dep__btn">
                    Cập nhật
                </button>
            </div>
        } else {
            return <div className="alignCenter">
                <button type='submit' className="dep__btn">
                    Tạo
                </button>
            </div>
        }
    }

    const showDepParentSelect = ()=>{
        if(!depID){
            return <div className="dep__infor__parent onefield">
            <label htmlFor="parent">Phòng ban cha:</label>
            <Select
            id="parent_id"
            showSearch
            onChange={handleChangeSelect}
            filterOption={(input, option) =>
                (option?.name ?? '').toLowerCase().includes(input.toLowerCase())
              }
            >
                { tableDepList.map((dep,index)=>{
                    if(dep.parent_id === null){
                        return <Option value={dep.id} name={dep.name} >
                            {dep.name}
                        </Option>
                    }
                })}
            </Select>
        </div>
        }
    }

  return (
    <div className="dep__infor">
        <form onSubmit={submitForm}>
            <div className="dep__infor__name onefield">
                <label htmlFor="name">Tên phòng ban:<span className="required__field"> *</span></label>
                <input id="name" type="text" 
                value={setValueField("name")}
                onChange={handleChangeInput} />
                {showRemind("name")}
            </div>
            <div className="dep__infor__address onefield">
                <label htmlFor="address">Địa chỉ phòng ban:<span className="required__field"> *</span></label>
                <input id="address" type="text" 
                value={setValueField("address")}
                onChange={handleChangeInput} />
                {showRemind("address")}
            </div>
            <div className="dep__infor__phone onefield">
                <label htmlFor="phone">Số điện thoại phòng ban:<span className="required__field"> *</span></label>
                <input id="phone" type="text" 
                value={setValueField("phone")}
                onChange={handleChangeInput} />
                {showRemind("phone")}
            </div>
            <div className="dep__infor__note onefield">
                <label htmlFor="note">Ghi chú:</label>
                <textarea name="note" id="note" 
                value={setValueField("note")}
                onChange={handleChangeInput} ></textarea>
            </div>
            {showDepParentSelect()}
            {renderButton()}
        </form>
    </div>
  )
}
