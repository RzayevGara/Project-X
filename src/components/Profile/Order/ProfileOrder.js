import React, { useEffect } from "react";
import commerce from "../../../lib/Commerce";
import { useSelector, useDispatch } from "react-redux";
import {
  setOrder,
  setOrderCount,
  setProfileMenuActive
} from "../../../Reducer/CustomerOrder";
import { useNavigate } from "react-router-dom";
import ProfileOrderEmpty from './ProfileOrderEmpty'

function ProfileOrder() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setProfileMenuActive("order"))
    const changePage = () => {
      window.scrollTo({ top: 0 });
    };
    changePage();
  }, []);

  useEffect(() => {
    commerce.customer
      .getOrders(`${localStorage.getItem("commercejs_customer_id")}`)
      .then((orders) => dispatch(setOrder(orders.data)))
      .then(() => {
        if (document.querySelector(".profile-order_div")) {
          const order =
            document.querySelector(".profile-order_div").childElementCount;

          dispatch(setOrderCount(order));
        }
      });
  }, [dispatch]);

  const orders = useSelector((state) => state.customer.orders);

  const orderCount = useSelector((state) => state.customer.orderCount);

  return (
    <div className="profile-order">
      <p className="profile-order_title">
        Sifarişlərim ({orderCount? orderCount: 0} məhsul)
      </p>
      {orders? (
        <ul className="profile-order_div">
          {orders.map((item) =>
            item.order.line_items.map((lineItem, index) => (
              <li className="profile-order_list" key={index}>
                <img src={lineItem.image.url} alt="logo" />
                <div className="profile-order_detail">
                  <p className="profile-order-detail_date">
                    Sifariş tarixi:
                    <br />
                    <span>12.04.2020</span>
                  </p>
                  <p className="profile-order-detail_name">
                    Məhsul:
                    <br />
                    <span>{lineItem.product_name}</span>
                  </p>
                  <p className="profile-order-detail_price">
                    Ümumi məbləğ:
                    <br />
                    <span>{lineItem.line_total.formatted_with_symbol}</span>
                  </p>
                  <button
                    onClick={() => {
                      navigate(`/profil/sifarislerim/${item.id} ${lineItem.id}`, {
                        replace: true,
                      });
                    }}
                    type="button"
                  >
                    Sifarişin detalları
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      ): 
      <ProfileOrderEmpty/>
    }
    </div>
  );
}

export default ProfileOrder;
