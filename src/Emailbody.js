import React from 'react'
import "./css/emaillist.css"
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openMessage } from './features/mailSlice';
function Emailbody({name,email,subject,message,time}) {

    const history = useHistory();
    const dispatch = useDispatch()

    const setMail =()=>{
        dispatch(openMessage({
            name,
            subject,
            message,
            email,
            time
        }))

        history.push('/mail')
    }
    return (
        <div className="emailbody"  onClick={setMail}>
             
            <div className="emailbody__left">
                <CheckBoxOutlineBlankIcon/>
                <StarBorderIcon/>
                <LabelOutlinedIcon/>

                <h4>{name}</h4>
            </div>

            <div className="emailbody__middle">
                <div className="emailbody__middle__msg">
                        <p><b>{subject}</b> {message}</p>
                </div>
            </div>

            <div className="emailbody__right">
                    <p>{time}</p>
            </div>
            
            
        </div>
    )
}

export default Emailbody
