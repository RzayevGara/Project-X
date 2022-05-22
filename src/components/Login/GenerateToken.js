import React, { useEffect } from "react";
import commerce from "../../lib/Commerce";
import { TailSpin } from "react-loading-icons";
import {useParams, useNavigate } from 'react-router-dom'

function GenerateToken() {
    let navigate = useNavigate();
    let {token}  = useParams()

    useEffect(() => {
        commerce.customer.getToken(`${token}`, 'save= true' ).then((jwt) => {navigate("/", { replace: true })});
    }, [token, navigate])

  return (
    <div className="generate-token">
        <TailSpin stroke="#00D68F" className="loading" />
        <p>Zəhmət olmasa gözləyin</p>
    </div>
  );
}

export default GenerateToken;
