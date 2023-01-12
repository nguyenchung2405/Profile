import { Steps,Button } from 'antd'
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import {AiOutlinePlusCircle, AiOutlineEdit, AiOutlineMinusCircle} from "react-icons/ai";
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
        if(nextStep !== 3){
            dispatch(setIsNextStep(true))
        }
    }, [nextStep])
    
    const quaTrinhThamGiaCacToChuc = organization.map((organ)=>{
        let tuNgay = moment(new Date(organ.time_from.concat(".000Z"))).format("DD/MM/YYYY");
        let denNgay = moment(new Date(organ.time_to.concat(".000Z"))).format("DD/MM/YYYY");
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
                <p>Tham gia các tổ chức chính trị, các hội nghề nghiệp:</p>
            {
                quaTrinhThamGiaCacToChuc.map((item, index) => {
                    return <div className="process" >
                    <div className="point"></div>
                    <div className="process__infor">
                        <p>{item.title}</p>
                        <p>{item.description}</p>
                    </div>
                        <AiOutlineMinusCircle onClick={() => {
                            dispatch({
                                type: DELETE_ORGANIZATION,
                                organ_id: item.organ_id
                            })
                        }} />
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
