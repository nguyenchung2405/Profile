import { Steps,Button } from 'antd'
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import {AiOutlinePlusCircle, AiOutlineEdit} from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { setIsNextStep } from '../../redux/Steps/stepsSlice';
import { DELETE_ORGANIZATION, thamGiaToChucCT } from '../../title/title';
import ModalComponent from '../modal/modal';
import ModalUpdate from '../modal/modalUpdate';

export default function Step4() {

    const {Step} = Steps;
    const dispatch = useDispatch()
    let [isShowModal, setIsShowModal] = useState(false);
    let [isShowModalUpdate, setIsShowModalUpdate] = useState(false)
    const {organization} = useSelector(state => state.step4Reducer);
    let {nextStep} = useSelector(state => state.stepsReducer);

    useEffect(()=>{
        if(nextStep !== 1){
            dispatch(setIsNextStep(true))
        }
    }, [nextStep])
    
    const quaTrinhThamGiaCacToChuc = organization.map((organ, index)=>{
        let tuNgay = moment(new Date(organ.time_from)).format("DD/MM/YYYY");
        let denNgay = moment(new Date(organ.time_to)).format("DD/MM/YYYY");
        return {
            title: `${tuNgay} - ${denNgay}`,
            description: organ.note,
            organ_id: organ.id
        }
    });

    const closeModal = ()=>{
        setIsShowModal(false)
    }

    const closeModalUpdate = ()=>{
        setIsShowModalUpdate(false)
    }

  return (
    <div className="Step4">
        <div className="Step4__content">
                <p>Tham gia các tổ chức chính trị, các hôị nghề nghiệp:</p>
                {/**
                <Steps progressDot current={quaTrinhThamGiaCacToChuc.length - 1} direction="vertical">
                    {
                        quaTrinhThamGiaCacToChuc.map( (item, index) => {
                                return <Step 
                                title={item.title} 
                                description={item.description} 
                                key={index}
                                subTitle={<svg onClick={() => {
                                    dispatch({
                                        type: DELETE_ORGANIZATION,
                                        organ_id: item.organ_id
                                    })
                                }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z">
                                    </path></svg>} />
                        })
                    }
                </Steps>
            */}
            {
                quaTrinhThamGiaCacToChuc.map((item, index) => {
                    return <div className="process" >
                    <div className="point"></div>
                    <div className="process__infor">
                        <p>{item.title}</p>
                        <p>{item.description}</p>
                    </div>
                    <svg onClick={() => {
                        dispatch({
                            type: DELETE_ORGANIZATION,
                            organ_id: item.organ_id
                        })
                    }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z">
                        </path></svg>
                </div> 
                })
            }
        </div>
        <div className="Step4__footer">
            <Button 
            onClick={()=>{
                setIsShowModal(true)
            }}
            type="default"
            icon={<AiOutlinePlusCircle />}>Thêm</Button>
        </div>
        <div className="Step4__footer">
            <Button 
            onClick={()=>{
                setIsShowModalUpdate(true)
            }}
            type="default"
            icon={<AiOutlineEdit />}>Cập nhật</Button>
        </div>
        <ModalComponent 
            title={thamGiaToChucCT} 
            isShowModal={isShowModal}
            closeModal={closeModal} />
        <ModalUpdate
            title={thamGiaToChucCT} 
            isShowModal={isShowModalUpdate}
            closeModal={closeModalUpdate}
            dataStep4={organization} />
    </div>
  )
}
