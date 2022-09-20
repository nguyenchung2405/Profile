import { Steps,Button } from 'antd'
import React, { useState } from 'react'
import {AiOutlinePlusCircle} from "react-icons/ai";
import { thamGiaToChucCT } from '../../title/title';
import ModalComponent from '../modal/modal';

export default function Step4() {

    const {Step} = Steps;
    let [isShowModal, setIsShowModal] = useState(false)

    const quaTrinhThamGiaCacToChuc = [
        {
            title: '05/04/2003 - 10/05/2005',
            description: "Nhân viên công ty OneTech"
        },
        {
            title: '10/05/2005 - 10/05/2008',
            description: "Nhân viên công ty FPT"
        },
    ];

    const closeModal = ()=>{
        setIsShowModal(false)
    }

  return (
    <div className="Step4">
        <div className="Step4__content">
                <p>Tham gia các tổ chức chính trị, các hôị nghề nghiệp:</p>
                <Steps progressDot current={quaTrinhThamGiaCacToChuc.length - 1} direction="vertical">
                    {
                        quaTrinhThamGiaCacToChuc.map( (item, index) => {
                                return <Step title={item.title} description={item.description} key={index} />
                        })
                    }
                </Steps>
        </div>
        <div className="Step4__footer">
            <Button 
            onClick={()=>{
                setIsShowModal(true)
            }}
            type="default"
            icon={<AiOutlinePlusCircle />}>Thêm</Button>
        </div>
        <ModalComponent 
            title={thamGiaToChucCT} 
            isShowModal={isShowModal}
            closeModal={closeModal} />
    </div>
  )
}
