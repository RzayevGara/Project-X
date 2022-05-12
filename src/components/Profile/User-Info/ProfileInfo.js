import React, {useState, useEffect} from 'react'
import commerce from '../../../lib/Commerce'


function ProfileInfo() {
    // let customerID  = localStorage.getItem('commercejs_customer_id')
    // console.log(customerID)
    const [customerInfo, setCustomerInfo] = useState()
    useEffect(()=>{
        commerce.customer.about().then((customer) => setCustomerInfo(customer));
    }, [])
    // console.log(customerInfo)
  return (
    <div className="profile-info">
        <p className="profile-info_title">Şəxsi məlumatlar</p>
        <div className="profile-info_div">
            <form>
                <div className="profile-info_name_surname">
                    <div>
                        <label>Ad</label>
                        <input type="text" disabled value={customerInfo && customerInfo.firstname}/>
                    </div>
                    <div>
                        <label>Soyad</label>
                        <input type="text" disabled value={customerInfo && customerInfo.lastname}/>
                    </div>
                </div>
                <div className="profile-info_name_surname">
                    <div>
                        <label>E-mail</label>
                        <input type="email" disabled value={customerInfo && customerInfo.email}/>
                    </div>
                    <div>
                        <label>Mobil nömrə</label>
                        <input type="number" disabled value={customerInfo && customerInfo.phone}/>
                    </div>
                </div>
                <button type="submit"></button>
            </form>
        </div>
    </div>
  )
}

export default ProfileInfo