import { Button, Steps } from 'antd'
import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai';

export default function Step5() {

    const {Step} = Steps;

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
                <Button type="default"
                icon={<AiOutlinePlusCircle />}>Thêm</Button>
            </div>
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
                <Button type="default"
                icon={<AiOutlinePlusCircle />}>Thêm</Button>
            </div>
        </div>
    </div>
  )
}
