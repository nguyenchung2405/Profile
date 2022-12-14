import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { TOKEN } from '../../title/title';

export default function Image() {

    const [path, setPath] = useState("");
    let { user_id } = useSelector(state => state.stepsReducer.user_profile_id);
    let {avatar} = useSelector(state => state.steps1Reducer);
    const dispatch = useDispatch();
    // console.log(avatar)
    useEffect(()=>{
        setPath(`data:image/jpeg;base64,${avatar}`)
    }, [avatar]);

    // useEffect(()=>{
    //     return ()=>{
    //         dispatch(setAvatar(""))
    //     }
    // }, [])

  return (
    <div className="image">
        <div className="image-3x4">
            <img src={path} alt="ảnh cá nhân" />
        </div>
        <input type="file" id="img-input" onChange={ async (e)=>{
            // console.dir(e.target.files[0])
            const form = new FormData();
            form.append("image3x4",e.target.files[0]);
            if(user_id){
                form.append("user_id", user_id)
                // POST ảnh lên
                const result = await axios({
                    url: "http://localhost:3001/api/upload",
                    method: "POST",
                    headers: {
                        Authorization: "Bearer " + TOKEN
                    },
                    data: form
                });
                // console.log(result.data)
                let { path } = result.data;
                if(path){
                    setPath(`http://localhost:3001/${path}`)
                } else {
                    // let index = result.data[0].resource_content.length - 1;
                    let {content} = result.data.data.resource;
                    // console.log(content)
                    // console.log(Base64.decode(content));
                    setPath(`data:image/jpeg;base64,${content}`)
                }
            } 
        }} />
        <label className="file-input__label" htmlFor="img-input">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="upload" 
            className="svg-inline--fa fa-upload fa-w-16" role="img" 
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" 
            d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
            </svg>
            <span>Chỉnh sửa ảnh 3x4</span>
        </label>
    </div>
  )
}