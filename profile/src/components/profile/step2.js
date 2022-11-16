import React, { useEffect, useState } from 'react'
import { Steps, Button } from 'antd';
import {AiOutlinePlusCircle} from "react-icons/ai"
import ModalComponent from '../modal/modal';
import { DELETE_PERSONAL_HISTORY, quaTrinhLVHT } from '../../title/title';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

export default function Step2() {
    
    const { Step } = Steps;
    const dispatch = useDispatch()
    const {personal_history} = useSelector(state => state.step2Reducer)
    let [isShowModal, setIsShowModal] = useState(false)
    // console.log(personal_history)
    const quaTrinh = personal_history.map((history, index)=>{
        let tuNgay = moment(new Date(history.work_from)).format("DD/MM/YYYY");
        let denNgay = moment(new Date(history.work_to)).format("DD/MM/YYYY");
        let description = history.work_place;
        return {
            title: `${tuNgay} - ${denNgay}`,
            description,
            id: history.id
        }
    }); 

    const closeModal = ()=>{
        setIsShowModal(false)
    }

    return (
        <div className="Step2">
            <div className="Step2__header">
                <p>Cử nhân công nghệ thông tin</p>
                <p>trường đại học khoa học tự nhiên</p>
            </div>
            <div className="Step2__content">
                <p>Quá trình học tập và làm việc:</p>
                <Steps progressDot current={quaTrinh.length - 1} direction="vertical">
                    {
                        quaTrinh.map( (item, index) => {
                            return <Step 
                            title={item.title} 
                            description={item.description} 
                            key={index}
                            subTitle={<svg onClick={()=>{
                                dispatch({
                                    type: DELETE_PERSONAL_HISTORY,
                                    personal_history_id: item.id
                                })
                            }} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z">
                            </path></svg>}
                            />
                        })
                    }
                </Steps>
            </div>
            <div className="Step2__footer">
                <Button type="default"
                icon={<AiOutlinePlusCircle />}
                onClick={()=>{
                    setIsShowModal(true)
                }}
                >Thêm</Button>
            </div>
            <ModalComponent 
            title={quaTrinhLVHT} 
            isShowModal={isShowModal}
            closeModal={closeModal} />
        </div>
    )
}
