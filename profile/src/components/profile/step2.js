import React, { useEffect, useState } from 'react'
import { Steps, Button } from 'antd';
import { AiOutlinePlusCircle, AiOutlineEdit, AiOutlineMinusCircle} from "react-icons/ai"
import ModalComponent from '../modal/modal';
import { DELETE_PERSONAL_HISTORY, quaTrinhLVHT } from '../../title/title';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { setIsNextStep } from '../../redux/Steps/stepsSlice';
import ModalUpdate from '../modal/modalUpdate';

export default function Step2() {

    const { Step } = Steps;
    const dispatch = useDispatch()
    const {personal_history} = useSelector(state => state.step2Reducer)
    let {nextStep} = useSelector(state => state.stepsReducer);
    let [isShowModal, setIsShowModal] = useState(false)
    let [isShowModalUpdate, setIsShowModalUpdate] = useState(false)
    // console.log(personal_history, pro_id)
    const quaTrinh = personal_history.map((history)=>{
        let tuNgay = moment(new Date(history.work_from.concat(".000Z"))).format("DD/MM/YYYY");
        let denNgay = moment(new Date(history.work_to.concat(".000Z"))).format("DD/MM/YYYY");
        let description = history.work_place;
        return {
            title: `${tuNgay} - ${denNgay}`,
            description,
            id: history.id
        }
    });

    const closeModal = () => {
        setIsShowModal(false)
    }

    const closeModalUpdate = () => {
        setIsShowModalUpdate(false)
    }

    useEffect(()=>{
        if(nextStep !== 1){
            dispatch(setIsNextStep(true))
        }
    }, [nextStep])

    return (
        <div className="Step2">
            <div className="Step2__content">
                <p>Quá trình học tập và làm việc:</p>
                {
                    quaTrinh.map((item, index) => {
                        return <div className="process" >
                        <div className="point"></div>
                        <div className="process__infor">
                            <p>{item.title}</p>
                            <p>{item.description}</p>
                        </div>
                            <AiOutlineMinusCircle onClick={() => {
                                dispatch({
                                    type: DELETE_PERSONAL_HISTORY,
                                    personal_history_id: item.id
                                })
                            }} />
                    </div> 
                    })
                }
            </div>
            <div className="Step2__footer">
                <Button type="default"
                    icon={<AiOutlinePlusCircle />}
                    onClick={() => {
                        setIsShowModal(true)
                    }}
                >Thêm</Button>
            </div>
            <div className="Step2__footer">
                <Button type="default"
                    icon={<AiOutlineEdit />}
                    onClick={() => {
                        setIsShowModalUpdate(true)
                    }}
                >Cập nhật</Button>
            </div>
            <ModalComponent
                title={quaTrinhLVHT}
                isShowModal={isShowModal}
                closeModal={closeModal} />
            <ModalUpdate
                title={quaTrinhLVHT}
                isShowModal={isShowModalUpdate}
                closeModal={closeModalUpdate}
                dataStep2={personal_history} />
        </div>
    )
}
