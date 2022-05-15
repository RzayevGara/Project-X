import React from "react";

function CheckoutUserInfo() {
  return (
    <div className="checkout-user-info">
      <form>
        <div className="checkout-user-info_name_surname">
          <div>
            <label>Ad</label>
            <input placeholder="Adınızı daxil edin" type="text" />
          </div>
          <div>
            <label>Soyad</label>
            <input placeholder="Soyadınızı daxil edin" type="text" />
          </div>
        </div>
        <div className="checkout-user-info_name_surname">
          <div>
            <label>E-mail</label>
            <input placeholder="nümunə@gmail.com" type="email" />
          </div>
          <div>
            <label>Mobil nömrə</label>
            <input placeholder="Əlaqə nömrəsi daxil edin" type="number" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CheckoutUserInfo;
