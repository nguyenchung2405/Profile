import { Button, Steps } from 'antd'
import React, { useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import ModalComponent from '../modal/modal';
import {daoTao as daoTaoTitle, boiDuong as boiDuongTitle} from "../../title/title"

export default function Step5() {

    const {Step} = Steps;
    let [isShowModal, setIsShowModal] = useState(false)
    let [isShowModal2, setIsShowModal2] = useState(false)

    const daoTao = [
        {
            title: '05/04/2003 - 10/05/2005',
            subTitle: "Cử nhân",
            description: "Quản trị Kinh doanh - Trường Đại học Kinh Tế - Văn bằng 2 - Học từ xa"
        },
        {
            title: '10/05/2005 - 10/05/2008',
            subTitle: "Cử nhân",
            description: "Lụât - Trường Đai học Luật - Văn bằng 2 - Học từ xa"
        },
    ]

    const boiDuong = [
        {
            title: '05/04/2003 - 10/05/2005',
            description: "Lớp học A"
        },
        {
            title: '10/05/2005 - 10/05/2008',
            description: "Lớp học B"
        },
    ]

    const closeModal = ()=>{
        setIsShowModal(false)
    }

    const closeModal2 = ()=>{
        setIsShowModal2(false)
    }


  return (
    <div className="Step5">
        <div className="Step5__first__content">
            <div className="Step5__content daoTao">
                    <p>Đào tạo:</p>
                    <Steps progressDot current={daoTao.length - 1} direction="vertical">
                        {
                            daoTao.map( (item, index) => {
                                    return <Step title={item.title} 
                                    subTitle={item.subTitle}
                                    description={item.description} 
                                    key={index} />
                            })
                        }
                    </Steps>
            </div>
            <div className="Step5__footer daoTao">
                <Button 
                onClick={()=>{
                    setIsShowModal(true)
                }}
                type="default"
                icon={<AiOutlinePlusCircle />}>Thêm</Button>
            </div>
            <ModalComponent 
            title={daoTaoTitle} 
            isShowModal={isShowModal}
            closeModal={closeModal} />
        </div>
        <div className="Step5__second__content">
            <div className="Step5__content daoTao">
                    <p>Bồi dưỡng:</p>
                    <Steps progressDot current={boiDuong.length - 1} direction="vertical">
                        {
                            boiDuong.map( (item, index) => {
                                    return <Step title={item.title} description={item.description} key={index} />
                            })
                        }
                    </Steps>
            </div>
            <div className="Step5__footer daoTao">
                <Button 
                onClick={()=>{
                    setIsShowModal2(true)
                }}
                type="default"
                icon={<AiOutlinePlusCircle />}>Thêm</Button>
            </div>
            <ModalComponent 
            title={boiDuongTitle} 
            isShowModal={isShowModal2}
            closeModal={closeModal2} />
        </div>
    </div>
  )
}
