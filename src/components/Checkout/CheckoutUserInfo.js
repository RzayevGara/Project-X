import React,{ useEffect, useRef} from "react";
import {setName, setLastName, setEmail, setPhone, setDisable} from '../../Reducer/CheckoutReducer'
import {useDispatch, useSelector} from "react-redux";

function CheckoutUserInfo(props) {
  const dispatch = useDispatch()
  const fname = useSelector((state) => state.checkout.fname)
  const lname = useSelector((state) => state.checkout.lname)
  const email  = useSelector((state) => state.checkout.email)
  const phone  = useSelector((state) => state.checkout.phone)


  useEffect(()=>{
    if(fname!=="" && lname!=="" && email!=="" && phone!==""){
      dispatch(setDisable(false))
    }else{
      dispatch(setDisable(true))
    }
  }, [dispatch, fname, email,lname,phone])

  return (
    <div className="checkout-user-info">
      <form onSubmit={props.submit}>
        <div className="checkout-user-info_name_surname">
          <div>
            <label>Ad</label>
            <input onChange={(e)=>{dispatch(setName(e.target.value))}} placeholder="Adınızı daxil edin" value={fname} type="text" required/>
          </div>
          <div>
            <label>Soyad</label>
            <input onChange={(e)=>{dispatch(setLastName(e.target.value))}} placeholder="Soyadınızı daxil edin" value={lname} type="text" required/>
          </div>
        </div>
        <div className="checkout-user-info_name_surname">
          <div>
            <label>E-mail</label>
            <input onChange={(e)=>{dispatch(setEmail(e.target.value))}} placeholder="nümunə@gmail.com" value={email} type="email" required/>
          </div>
          <div>
            <label>Mobil nömrə</label>
            <input onChange={(e)=>{dispatch(setPhone(e.target.value))}} placeholder="Əlaqə nömrəsi daxil edin" value={phone} type="number" required/>
          </div>
        </div>
        <button style={{display: "none"}} type="submit"></button>
      </form>
    </div>
  );
}

export default CheckoutUserInfo;
