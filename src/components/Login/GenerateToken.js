import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import commerce from "../../lib/Commerce";
import { TailSpin } from "react-loading-icons";
import {useParams, useNavigate } from 'react-router-dom'
import {setCustomer} from '../../Reducer/LoginReducer'

function GenerateToken() {
    const dispatch = useDispatch()
    let navigate = useNavigate();
    let {token}  = useParams()

    useEffect(() => {
        commerce.customer.getToken(`${token}`).then((jwt) => {dispatch(setCustomer(jwt));  navigate("/", { replace: true });console.log(jwt)});
    }, [dispatch,token, navigate])

  return (
    <div className="generate-token">
        <TailSpin stroke="#00D68F" className="loading" />
        <p>Zəhmət olmasa gözləyin</p>
    </div>
  );
}

export default GenerateToken;
