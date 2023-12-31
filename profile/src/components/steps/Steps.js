import React, { useEffect, useState } from 'react'
import { Steps, message,Button } from 'antd';
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
import { moveToNextStep, setIsDone, setIsNextStep, setMessageAlert, setStatus, setUserProfileID } from '../../redux/Steps/stepsSlice';
import { useParams } from 'react-router-dom';
import { GET_AVATAR, GET_PROFILE_BY_ID, GET_PROFILE_BY_TOKEN, GET_PROFILE_BY_USER_ID } from '../../title/title';
import Loading from "../Loading"
import { setIsLoading } from '../../redux/Slice/loading';
import { removePBCV, setAction, setAvatar, setEmailPhone, setIsCreateProfile, setIsOnLyCreateProfile, setIsSubmit, setValues } from '../../redux/Steps/step1/step1Slice';
import { clearParty } from '../../redux/Steps/step3.slice';
import jwt_decode from "jwt-decode";
import {TOKEN} from "../../title/title"
import { userInforEmpty } from '../../ultils/defaultUserInfor';
export default function StepsAntd() {

  const { Step } = Steps;
  const [current, setCurrent] = useState(0);
  let { nextStep, isNextStep, messageAlert, status } = useSelector(state => state.stepsReducer);
  let { emailPhone } = useSelector(state => state.steps1Reducer);
  const { party } = useSelector(state => state.step3Reducer)
  let { user_id } = useSelector(state => state.stepsReducer.user_profile_id);
  const { isLoading } = useSelector(state => state.loadingReducer);
  let { familyRelationship, familyRelationshipExist } = useSelector(state => state.step8Reducer);
  let { proID, userID, User_ID } = useParams();
  // console.log(proID, userID, User_ID, user_id)
  // console.log(status)
  // console.log(isSubmit)
  const dispatch = useDispatch();
  const onChangeSteps = (value) => {
    dispatch(moveToNextStep(value));
  };

    useEffect(()=>{
      let {type, msg} = messageAlert;
      if(type === "success"){
        message.success(msg)
      } else if(type === "error") {
        message.error(msg)
      }
    }, [messageAlert])
    useEffect(()=>{
      // lấy user_id từ param trên URL => call API lấy profile
      if(proID ){
        let {email, soDienThoai} = emailPhone;
        dispatch({
          type: GET_PROFILE_BY_ID,
          // user_id này là API cũ cần để lấy profile nhưng do API mới cần là pro_id 
          // nên truyền vào pro_id còn tên user_id thì giư để khỏi thay đổi code ở redux, saga
          data: {proID, email, soDienThoai }
        });
        dispatch(setIsOnLyCreateProfile(false))
        dispatch(setIsLoading(true));
      } else if(User_ID) {
        dispatch(setIsCreateProfile(false))
      } else {
        dispatch(setIsCreateProfile(true))
      }
    },[proID])

    useEffect(()=>{
      if(userID){
        // console.log(userID, user_id, User_ID)
        dispatch(setIsCreateProfile(false))
        dispatch(setIsOnLyCreateProfile(true))
        dispatch(setUserProfileID({user_id: userID}))
      }
    },[userID])

    useEffect(()=>{
      // User_ID là id của thông tin cá nhân
      if(User_ID){
        let newUser_ID = parseInt(User_ID);
        dispatch(setUserProfileID({user_id: newUser_ID}))
        dispatch({
          type: GET_PROFILE_BY_TOKEN
        })
        dispatch(setIsLoading(true))
        // ben dưới là dispatch lấy profile theo user_id mốt có cần thì mở ra xài
        // dispatch({
        //   type: GET_PROFILE_BY_USER_ID,
        //   User_ID: newUser_ID
        // })
      }
    }, [User_ID])

    useEffect(()=>{
      if(user_id){
        // Tam thoi cmt de test upload
        dispatch({
          type: GET_AVATAR,
          user_id: user_id
        })
      }
    },[user_id])

    useEffect(()=>{
      if(nextStep < current){
        setCurrent(nextStep);
      }
    },[nextStep])

    useEffect(()=>{
      return () => {
        dispatch(moveToNextStep(0))
        dispatch(removePBCV())
        dispatch(setUserProfileID({}))
        dispatch(setAvatar(""))
        dispatch(setEmailPhone({}))
        dispatch(setMessageAlert({type: "", msg:""}))
        dispatch(setIsLoading(false));
        dispatch(clearParty());
        dispatch(setIsDone(false));
        dispatch(setIsSubmit(false))
        dispatch(setValues(userInforEmpty));
        dispatch(setStatus({state: "", can_action: false}))
      }
    },[])
    
    useEffect(()=>{
      // console.log(nextStep)
      // console.log(isNextStep)
      if(isNextStep){
        setCurrent(nextStep);
        dispatch(setIsNextStep(false))
      }
    },[isNextStep])

  const showLoading = () => {
    if (isLoading) {
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

  const showButton = ()=>{
      let decoded = jwt_decode(TOKEN);
      if(nextStep === 0){
            if(proID && proID !== undefined){
                // proID có tồn tại => có profile thì check id user xem có phải admin ko
                if(decoded.id !== user_id && status.can_action){
                  // user_id admin = 1 phải khác user_id bình thường và action = true thì mới hiện nút
                    if(status.state === "SENDING" || status.state === "SAVED" || status.state === "NEW"){
                        return <>
                          <button className="SoYeuLyLich__btn btn__update" onClick={(e)=>{
                              dispatch(setIsSubmit(true))
                              dispatch(setAction("save"))
                    }}>Lưu</button>
                          <button className="SoYeuLyLich__btn btn__send" onClick={()=>{
                              dispatch(setIsSubmit(true))
                              dispatch(setAction("send"))
                          }}>{status.state === "NEW" ? "Gửi" : "Kích hoạt"}</button>
                          <button className={status.state === "NEW" ? "btn__none" : "SoYeuLyLich__btn btn__reject"} onClick={()=>{
                              dispatch(setIsSubmit(true))
                              dispatch(setAction("reject"))
                          }}>Trả về</button>
                      </>
                    } 
                }
                // khi kích hoạt profile rồi thì chỉ hiện nút cập nhật thôi
                if(decoded.id !== user_id && status.state === "ACTIVE" && status["can_action"] === true){
                  return <>
                    <button className="SoYeuLyLich__btn btn__update" onClick={()=>{
                      dispatch(setIsSubmit(true))
                    }}>Cập nhật</button>
                    <button className="SoYeuLyLich__btn btn__inactive" onClick={()=>{
                      dispatch(setIsSubmit(true))
                      dispatch(setAction("inactive"))
                    }}>Hủy kích hoạt</button>
                  </>
              }
            } else if(decoded.id === user_id && status.can_action){
              // khi user vô hồ sơ của mình thì hiện 2 nút lưu, gửi
              if(status.state === "SENDING" || status.state === "SAVED" || status.state === "REJECTED" 
              || status.state === "NEW" || status.state === "INACTIVE"){
                  return <>
                  <button className="SoYeuLyLich__btn btn__update" onClick={()=>{
                    dispatch(setAction("save"))
                    dispatch(setIsSubmit(true))
                  }}>Lưu</button>
                  <button className="SoYeuLyLich__btn btn__send" onClick={()=>{
                    dispatch(setIsSubmit(true))
                    dispatch(setAction("send"))
                    }}>Gửi</button>
                </>
              }
            } else if( proID === undefined && decoded.id !== user_id) {
                return <button class="SoYeuLyLich__btn btn__create" onClick={()=>{
                    dispatch(setIsSubmit(true))
                }}>Tạo</button>
            } 
      } else if(nextStep === 2){
          if(party.length > 0){
              return <button className="SoYeuLyLich__btn btn__update" onClick={()=>{
                dispatch(setIsSubmit(true))
              }}>Cập nhật</button>
          } else {
              return <button className="SoYeuLyLich__btn btn__create" onClick={()=>{
                  dispatch(setIsSubmit(true))
              }}>Tạo</button>
          }
      } else if(nextStep === 6){
        let voChong = familyRelationship.find(item => item.type === "vo_chong");
        if(voChong){
            return <button className="SoYeuLyLich__btn btn__update" onClick={()=>{
              dispatch(setIsSubmit(true))
            }}>Cập nhật</button>
        } else {
            return <button className="SoYeuLyLich__btn btn__create" onClick={()=>{
                dispatch(setIsSubmit(true))
            }}>Tạo</button>
        } 
      } else if(nextStep === 7 ){
          if(familyRelationshipExist){
              return <button className="SoYeuLyLich__btn btn__update" onClick={()=>{
                dispatch(setIsSubmit(true))
              }}>Cập nhật</button>
          } else {
              return <button className="SoYeuLyLich__btn btn__create" onClick={()=>{
                dispatch(setIsSubmit(true))
              }}>Tạo</button>
          }
      } else if( nextStep === 8){
          if(familyRelationshipExist){
              return <button className="SoYeuLyLich__btn btn__update" onClick={()=>{
                dispatch(setIsSubmit(true))
              }}>Cập nhật</button>
          } else {
              return <button className="SoYeuLyLich__btn btn__create" onClick={()=>{
                dispatch(setIsSubmit(true))
              }}>Tạo</button>
          }
      }
  }

  const disabledStep = ()=>{
    if(!user_id && !proID){
      return true
    } else {
      return false
    }
  }

  return (
    <div className={style.alignCenter}>
      <div className={style["steps__noflex"]}>
        <section className={style.steps}>
          <Steps className={style.editWidth} current={current} onChange={onChangeSteps} direction="vertical">
            {
              steps.map((item, index) => {
                return <Step key={index} title={item.title} disabled={disabledStep()} />
              })
            }
          </Steps>
          <div className="steps-content">{steps[current].content}</div>
        </section>
        <div className="next">
          {showButton()}
          {current <= 7
            ?
            <button disabled={disabledStep()} className="SoYeuLyLich__btn" onClick={(e) => {
              let disabled = disabledStep();
              if(disabled === false){
                dispatch(moveToNextStep(current + 1));
              }
            }}>Tiếp theo</button>
            :
            <button className="SoYeuLyLich__btn" onClick={() => {
              // console.log("Hoàn thành.");
              // console.log(nextStep)
              if(nextStep === 8){
                  dispatch(setIsDone(true))
              }
            }}>Hoàn thành</button>
          }
        </div>
      </div>
      {showLoading()}
    </div>
  )
}