import React from "react";

function CheckoutUserAddress() {
  return (
    <div className="checkout-user-address">
      <form>
        <div className="checkout-user-address_city">
          <div>
            <label>Ad və Soyad</label>
            <input placeholder="Adınızı və soyadınızı daxil edin" type="text" />
          </div>
          <div>
            <label>Ünvan</label>
            <input placeholder="Ünvanınızı daxil edin" type="text" />
          </div>
        </div>
        <div className="checkout-user-address_city">
          <div>
            <label>Şəhər</label>
            <input placeholder="Şəhərinizi qeyd edin" type="email" />
          </div>
          <div>
            <label>Poçt</label>
            <input placeholder="Poçt indeksinizi qeyd edin" type="number" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CheckoutUserAddress;
