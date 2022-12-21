import React, { useEffect, useState } from 'react'
import { AiOutlinePlusCircle, AiOutlineEdit, AiOutlineMinusCircle } from 'react-icons/ai';
import { Button, Steps } from 'antd'
import ModalComponent from '../modal/modal';
import {DELETE_REWARD_DISCIPLINE, khenThuong as khenThuongTitle, kyLuat as kyLuatTitle} from "../../title/title"
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import ModalUpdate from '../modal/modalUpdate';
import { setIsNextStep } from '../../redux/Steps/stepsSlice';

export default function Step6() {

    const {Step} = Steps;
    const dispatch = useDispatch();
    let [isShowModal, setIsShowModal] = useState(false)
    let [isShowModal2, setIsShowModal2] = useState(false)
    let [isShowModalUpdate, setIsShowModalUpdate] = useState(false)
    let [isShowModalUpdate2, setIsShowModalUpdate2] = useState(false)
    let {rewardDiscipline} = useSelector(state => state.step6Reducer);
    let {nextStep} = useSelector(state => state.stepsReducer);

    useEffect(()=>{
        if(nextStep !== 5){
            dispatch(setIsNextStep(true))
        }
    }, [nextStep])

    const closeModal = ()=>{
        setIsShowModal(false)
    }

    const closeModal2 = ()=>{
        setIsShowModal2(false)
    }

    const closeModalUpdate = ()=>{
        setIsShowModalUpdate(false)
    }

    const closeModalUpdate2 = ()=>{
        setIsShowModalUpdate2(false)
    }

    const khenThuong = rewardDiscipline.map((item, index)=>{
        let ngayKhenThuong = moment(new Date(item.time_from)).format("DD/MM/YYYY")
        if(item.type === "reward"){
            return {
                title: `${ngayKhenThuong}`,
                description: item.note,
                re_dis_id: item.id
            }
        }
    })

    const kyLuat = rewardDiscipline.map((item, index)=>{
        let ngayKyLuat = moment(new Date(item.time_from)).format("DD/MM/YYYY")
        if(item.type === "discipline"){
            return {
                title: `${ngayKyLuat}`,
                description: item.note,
                re_dis_id: item.id
            }
        }
    })

   const renderReward = ()=>{
        let newKhenThuong = khenThuong.filter(item => item !== undefined);
        return newKhenThuong.map((item, index) => {
            return <div className="process step6" key={index}>
                <div className="point"></div>
                <div className="process__infor">
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                </div>
                <AiOutlineMinusCircle onClick={() => {
                    dispatch({
                        type: DELETE_REWARD_DISCIPLINE,
                        re_dis_id: item.re_dis_id
                    })
                }} />
        </div>
        })
   }

   const renderDiscipline = ()=>{
    let newKyLuat = kyLuat.filter(item => item !== undefined);
    return newKyLuat.map((item, index) => {
        return <div className="process step6" key={index}>
            <div className="point"></div>
            <div className="process__infor">
                <p>{item.title}</p>
                <p>{item.description}</p>
            </div>
            <AiOutlineMinusCircle onClick={() => {
                dispatch({
                    type: DELETE_REWARD_DISCIPLINE,
                    re_dis_id: item.re_dis_id
                })
        }} />
    </div>
    })
}

  return (
    <div className="Step6">
        <div className="Step6__first__content">
            <div className="Step6__content khenThuong">
                    <p>Khen thưởng:</p>
                    {renderReward()}
            </div>
            <div className="Step6__footer khenThuong">
                <Button 
                onClick={()=>{
                    setIsShowModal(true)
                }}
                type="default"
                icon={<AiOutlinePlusCircle />}>Thêm</Button>
            </div>
            <div className="Step6__footer khenThuong">
                <Button 
                onClick={()=>{
                    setIsShowModalUpdate(true)
                }}
                type="default"
                icon={<AiOutlineEdit />}>Cập nhật</Button>
            </div>
            <ModalComponent 
            title={khenThuongTitle} 
            isShowModal={isShowModal}
            closeModal={closeModal} />
            <ModalUpdate
            title={khenThuongTitle} 
            isShowModal={isShowModalUpdate}
            closeModal={closeModalUpdate}
            dataStep6={rewardDiscipline} />
        </div>
        <div className="Step6__second__content">
            <div className="Step6__content kyLuat">
                    <p>Kỷ luật:</p>
                    {renderDiscipline()}
            </div>
            <div className="Step6__footer kyLuat">
                <Button 
                onClick={()=>{
                    setIsShowModal2(true)
                }}
                type="default"
                icon={<AiOutlinePlusCircle />}>Thêm</Button>
            </div>
            <div className="Step6__footer kyLuat">
                <Button 
                onClick={()=>{
                    setIsShowModalUpdate2(true)
                }}
                type="default"
                icon={<AiOutlineEdit />}>Cập nhật</Button>
            </div>
            <ModalComponent 
            title={kyLuatTitle} 
            isShowModal={isShowModal2}
            closeModal={closeModal2} />
            <ModalUpdate
            title={kyLuatTitle} 
            isShowModal={isShowModalUpdate2}
            closeModal={closeModalUpdate2}
            dataStep6={rewardDiscipline} />
        </div>
    </div>
  )
}
