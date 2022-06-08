import React, { useEffect } from "react";
import commerce from "../../../lib/Commerce";
import { useSelector, useDispatch } from "react-redux";
import {
  setOrder,
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
  }, [dispatch]);

  const orders = useSelector((state) => state.customer.orders);
  console.log(orders)

  return (
    <div className="profile-order">
      <p className="profile-order_title">
        Sifarişlərim ({orders? orders.length: 0} məhsul)
      </p>
      {orders? (
        <ul className="profile-order_div">
          {orders.map((item, index) =>

          <li className="profile-order_list" key={index}>
            <div className="profile-order-list_detail">
              <div  className="profile-order-list-detail_text">
                <p>
                  Alıcı:
                  <br />
                  <span>{item.customer.firstname} {item.customer.lastname}</span>
                </p>
                <p>
                  Ümumi məbləğ:
                  <br />
                  <span>{item.order.total.formatted_with_code}</span>
                </p>
              </div>
              <button
                onClick={() => {
                  navigate(`/profil/sifarislerim/${item.id}`, {
                    replace: true,
                  });
                }}
                type="button"
              >
                Sifarişin detalları
              </button>
            </div>
            {
              item.order.line_items.map((lineItem, indexx) => (
                  <div className="profile-order_container" key={indexx}>
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
                        Qiymət:
                        <br />
                        <span>{lineItem.line_total.formatted_with_symbol}</span>
                      </p>
                    </div>
              </div>
                ))
            }
            </li>

          )}
        </ul>
      ): 
      <ProfileOrderEmpty/>
    }
    </div>
  );
}

export default ProfileOrder;
