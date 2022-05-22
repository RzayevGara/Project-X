import React, {useState, useEffect} from 'react'
import commerce from '../../../lib/Commerce'
import EditBtn from '../../../assets/images/edit.svg'
import SaveBtn from '../../../assets/images/saveIcon.svg'
import {useSelector, useDispatch} from "react-redux";
import {setCustomerInfo} from '../../../Reducer/CustomerOrder'


function ProfileInfo() {
    const dispatch = useDispatch()
    let customerID  = localStorage.getItem('commercejs_customer_id')
    
    useEffect(()=>{
        const changePage = () => {
            window.scrollTo({top: 0});
          };
          changePage()
        commerce.customer.about().then((customer) => dispatch(setCustomerInfo(customer)));
    }, [])

    const customerInfo = useSelector((state) => state.customer.customerInfo)

    const infoSubmit =(e)=>{
        e.preventDefault();
        commerce.customer.update({
            email: `${e.target[2].value}`,
            firstname: `${e.target[0].value}`,
            lastname: `${e.target[1].value}`,
            phone: `${e.target[3].value}`,
          }, customerID)
    }
    const editBtn =()=>{
        document.querySelectorAll(".input-control").forEach((item)=>{
            item.disabled=false
            item.value=item.placeholder
        })
        document.querySelector(".btn-edit").style.display="none"
        document.querySelector(".btn-save").style.display="flex"

    }
    const saveBtn =()=>{
        document.querySelectorAll(".input-control").forEach((item)=>{
            item.disabled=true
        })
        document.querySelector(".btn-edit").style.display="flex"
        document.querySelector(".btn-save").style.display="none"
    }

  return (
    <div className="profile-info">
        <p className="profile-info_title">Şəxsi məlumatlar</p>
        <div className="profile-info_div">
            <form onSubmit={infoSubmit}>
                <div className="profile-info_name_surname">
                    <div>
                        <label>Ad</label>
                        <input className="input-control" type="text" disabled placeholder={customerInfo && customerInfo.firstname}/>
                    </div>
                    <div>
                        <label>Soyad</label>
                        <input className="input-control" type="text" disabled placeholder={customerInfo && customerInfo.lastname}/>
                    </div>
                </div>
                <div className="profile-info_name_surname">
                    <div>
                        <label>E-mail</label>
                        <input className="input-control" type="email" disabled placeholder={customerInfo && customerInfo.email}/>
                    </div>
                    <div>
                        <label>Mobil nömrə</label>
                        <input className="input-control" type="number" disabled placeholder={customerInfo && customerInfo.phone}/>
                    </div>
                </div>
                <button className="btn-edit" onClick={editBtn} type="button">
                    <img src={EditBtn} alt="logo"/>
                    Məlumatları yenilə
                </button>
                <button className="btn-save" onClick={saveBtn} type="submit">
                    <img src={SaveBtn} alt="logo"/>
                    Yadda saxla
                </button>
            </form>
        </div>
    </div>
  )
}

export default ProfileInfo