import React, { useEffect, useState } from 'react'
import { Steps } from 'antd';
import SoYeuLyLich from '../profile/step1';
import style from "./steps.module.css"
import Step3Component from '../profile/step3';
import Step2 from '../profile/step2';
import Step4 from "../profile/step4"
import Step5 from '../profile/step5';
import Step6 from '../profile/step6';
import Step7 from '../profile/step7';
import Step8 from '../profile/step8';
import Step9 from '../profile/step9';
import { useDispatch, useSelector } from 'react-redux';
import { moveToNextStep, setIsNextStep, setUserProfileID } from '../../redux/Steps/stepsSlice';
import { useParams } from 'react-router-dom';
import { GET_AVATAR, GET_PROFILE_BY_ID } from '../../title/title';
import Loading from "../Loading"
import { setIsLoading } from '../../redux/Slice/loading';
import { removePBCV, setAvatar, setIsCreateProfile } from '../../redux/Steps/step1/step1Slice';

export default function StepsAntd() {

    const { Step } = Steps;
    const [current, setCurrent] = useState(0);
    let {nextStep, isNextStep} = useSelector(state => state.stepsReducer);
    const {isLoading} = useSelector(state => state.loadingReducer);
    let {userId} = useParams();
    const dispatch = useDispatch();

    const onChangeSteps = (value) => {
      dispatch(moveToNextStep(value));
    };

    useEffect(()=>{
      // lấy user_id từ param trên URL => call API lấy profile
      if(userId){
        dispatch({
          type: GET_PROFILE_BY_ID,
          user_id: userId
        });
        dispatch(setIsLoading(true));
        dispatch({
          type: GET_AVATAR,
          user_id: userId
        })
      } else {
        dispatch(setIsCreateProfile(true))
      }
    },[userId])

    useEffect(()=>{
      if(isNextStep < current){
        setCurrent(nextStep);
      }
    },[nextStep])

    useEffect(()=>{
      return () => {
        dispatch(moveToNextStep(0))
        dispatch(removePBCV())
        dispatch(setUserProfileID({}))
        dispatch(setAvatar(""))
      }
    },[])

    useEffect(()=>{
      if(isNextStep){
        setCurrent(nextStep);
        dispatch(setIsNextStep(false))
      }
    },[isNextStep])

    const showLoading = ()=>{
      if(isLoading){
        return <Loading />
      }
    }

    const steps = [
      {
        title: 'Sơ yếu lý lịch',
        content: <SoYeuLyLich />,
      },
      {
        title: 'Lịch sử bản thân',
        content: <Step2 />,
      },
      {
        title: 'Gia nhập Đảng Cộng Sản Việt Nam',
        content: <Step3Component />,
      },
      {
          title: 'Tham gia các tổ chức chính trị, xã hội, các nghề nghiệp',
          content: <Step4 />,
      },
      {
          title: 'Đào tạo, bồi dưỡng về chuyên môn, nghiệp vụ, lý luận, chính trị ngoại ngữ',
          content: <Step5 />,
      },
      {
          title: 'Khen thưởng kỷ luật',
          content: <Step6 />,
      },
      {
          title: 'Hoàn cảnh kinh tế, quan hệ gia đình',
          content: <Step7 />,
      },
      {
          title: 'Quan hệ gia đình, thân tộc',
          content: <Step8 />,
      },
      {
          title: 'Quan hệ xã hội',
          content: <Step9 />,
      },
    ];

    return (
      <div className={style.alignCenter}>
          <div className={style["steps__noflex"]}>
              <section className={style.steps}>
                  <Steps className={style.editWidth} current={current} onChange={onChangeSteps} direction="vertical">
                  {
                      steps.map((item,index)=>{
                          return <Step key={index} title={item.title} />
                      })
                  }
                  </Steps>
                  <div className="steps-content">{steps[current].content}</div>
              </section>
              <div className="next">
                      {current <= 7
                      ?
                      <button className="SoYeuLyLich__btn" onClick={()=>{
                          dispatch(moveToNextStep(current + 1));
                      }}>Tiếp theo</button>
                      :
                      <button className="SoYeuLyLich__btn" onClick={()=>{
                          console.log("Hoàn thành.");
                      }}>Hoàn thành</button>
                      }
              </div>
          </div>
          {showLoading()}
      </div>
    )
}
