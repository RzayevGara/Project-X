import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import commerce from "../../../lib/Commerce";
import { useSelector, useDispatch } from "react-redux";
import { setOrderDetail, setProfileMenuActive } from "../../../Reducer/CustomerOrder";
import { Link } from "react-router-dom";
import axios from "axios";
import ArrowIcon from "../../../assets/images/arrow-icon-order.svg";
import CardIcon from "../../../assets/images/card.svg";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function OrderDetail() {
  let { id } = useParams();
  const dispatch = useDispatch();

  const order = useSelector((state) => state.customer.orderDetail);

  const orderID = id

  const [selectStatus, setSelectStatus] = useState(true);

  const editBtn = () => {
    setSelectStatus(false);
    document
      .querySelectorAll(".order-detail_input-control")
      .forEach((item, index) => {
        if (index === 2) {
          item.disabled = true;
        } else {
          item.disabled = false;
          item.value = item.placeholder;
          item.style.border = "1px solid #828282";
        }
        if (index === 0) {
          item.focus();
        }
      });
    document.querySelectorAll(".hide-label").forEach((item) => {
        item.style.display="block"
      });
    document.querySelector(".css-hfutr2-MuiSvgIcon-root-MuiSelect-icon").style.display= "flex"
    document.querySelector(".css-1d3z3hw-MuiOutlinedInput-notchedOutline").style.border= "1px solid rgb(130, 130, 130)"
    document.querySelector(".order-detail_editBtn").style.display = "none";
    document.querySelector(".order-detail_saveBtn").style.display = "flex";
  };

  const saveBtn = (e) => {
    e.preventDefault();
    setSelectStatus(true);
    const countryName = document.querySelector(
      ".MuiSelect-select"
      ).innerText;
      
    updateInfo(e, countryName);
    document.querySelectorAll(".order-detail_input-control").forEach((item) => {
      item.disabled = true;
      item.style.border = "none";
    });
    document.querySelectorAll(".hide-label").forEach((item) => {
      item.style.display="none"
    });
    document.querySelector(".css-hfutr2-MuiSvgIcon-root-MuiSelect-icon").style.display= "none"
    document.querySelector(".css-1d3z3hw-MuiOutlinedInput-notchedOutline").style.border= "none"
    document.querySelector(".order-detail_editBtn").style.display = "flex";
    document.querySelector(".order-detail_saveBtn").style.display = "none";
  };

  const updateInfo = async (e, countryName) => {
    const countryIso = country
      .map((item, index) => {
        if (item.name === countryName) {
          return item.Iso2;
        }
      })
      .join("");

    const url = new URL(`https://api.chec.io/v1/orders/${orderID}`);

    const checAPIKey = process.env.REACT_APP_CHECK_SECRET_API_KEY;
    let headers = {
      "X-Authorization": checAPIKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    let body = {
      customer: {
        firstname: `${e.target[0].value}`,
        lastname: `${e.target[1].value}`,
        email: `${e.target[3].value}`,
      },
      shipping: {
        street: `${e.target[7].value}`,
        town_city: `${e.target[6].value}`,
        country: `${countryIso}`,
      },
    };
    await axios.put(url, body, {
      headers: headers,
    });
  };
  const [country, setCountry] = useState([]);

  const [age, setAge] = React.useState("");

  useEffect(() => {
    dispatch(setProfileMenuActive("order"))
    const changePage = () => {
      window.scrollTo({top: 0});
    };
    changePage()
    commerce.customer
      .getOrder(`${orderID}`)
      .then((order) => {
        dispatch(setOrderDetail(order));
        return order;
      })
      .then((orderData) => {
        fetch("https://countriesnow.space/api/v0.1/countries/iso")
          .then((data) => data.json())
          .then((response) => {
            setCountry(response.data);
            return response.data;
          })
          .then((data) => {
            data.forEach((item, index) => {
              if (item.Iso2 === orderData.shipping.country) {
                setAge(index);
              }
            });
          });
      });
  }, []);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  console.log(order)

  return (
    <div className="order-detail">
      <Link to="/profil/sifarislerim">
        <p className="profile-detail_title">
          <img src={ArrowIcon} alt="logo" />
          Sifarişin detalları
        </p>
      </Link>
      {
        order && 

      <div className="order-detail_div">

      {
        order.order.line_items.map((lineItem, index) => {
            return (
                <div key={index} className="order-detail-div_specs">
                  <img src={lineItem.image.url} alt="logo" />
                  <div className="order-detail-div-specs_info">
                    <p className="order-detail-div-specs_name">
                      {lineItem.product_name}
                    </p>
                    <div>
                      {lineItem &&
                        lineItem.selected_options.map(
                          (selectedItem, selectedItemIndex) => (
                            <p key={selectedItemIndex}>
                              {selectedItem.group_name}:
                              <br />
                              <span>{selectedItem.option_name}</span>
                            </p>
                          )
                        )}
                      <p>
                        Say:
                        <br />
                        <span>{lineItem.quantity}</span>
                      </p>
                    </div>
                    <div>
                      <p>
                        Sifariş tarixi:
                        <span>12.04.2020</span>
                      </p>
                      <p>
                        Status:
                        <span>Yoldadır</span>
                      </p>
                    </div>
                  </div>
                </div>
            );
        })}

        <form onSubmit={saveBtn} className="order-detail-div_info">
            <div>
              <p className="order-detail-div-info_title">
                Şəxsi məlumatlar
              </p>
              <ul>
                <li>
                  <p className="hide-label">Ad:</p>
                  <input
                    className="order-detail_input-control"
                    type="text"
                    disabled
                    placeholder={order.customer.firstname}
                  />
                </li>
                <li>
                  <p className="hide-label">Soyad:</p>
                  <input
                    className="order-detail_input-control"
                    type="text"
                    disabled
                    placeholder={order.customer.lastname}
                  />
                </li>
                <li>
                <p className="hide-label">Telefon:</p>
                  <input
                    className="order-detail_input-control"
                    type="number"
                    disabled
                    placeholder={order.customer.phone}
                  />
                </li>
                <li>
                  <p className="hide-label">Email:</p>
                  <input
                    className="order-detail_input-control"
                    type="email"
                    disabled
                    placeholder={order.customer.email}
                  />
                </li>
              </ul>
            </div>
            <div>
              <p className="order-detail-div-info_title">
                Çatdırılma ünvanı
              </p>
              <ul>
                <li>
                <p className="hide-label">Ölkə:</p>
                  <FormControl sx={{ width: "300px" }}>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      onChange={handleChange}
                      disabled={selectStatus}
                    >
                      {country &&
                        country.map((item, index) => (
                          <MenuItem key={index} value={index}>
                            {item.name}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </li>
                <li>
                <p className="hide-label">Şəhər:</p>
                  <input
                    className="order-detail_input-control"
                    type="text"
                    disabled
                    placeholder={order.shipping.town_city}
                  />
                </li>
                <li>
                <p className="hide-label">Ünvan:</p>
                  <input
                    className="order-detail_input-control"
                    type="text"
                    disabled
                    placeholder={order.shipping.street}
                  />
                </li>
              </ul>
            </div>
            <button
              type="button"
              className="order-detail-div-info-BTN order-detail_editBtn"
              onClick={editBtn}
            >
              Düzəliş et
            </button>
            <button
              type="submit"
              className="order-detail-div-info-BTN order-detail_saveBtn"
            >
              Yadda saxla
            </button>
        </form>
        <div className="order-detail-div_payment">
          <p className="order-detail-div-payment_title">
            Ödəmə detalları
          </p>
          <div>
            <p className="order-detail-div-payment_info">
              Ödəmə metodu
              <span>
                {" "}
                <img src={CardIcon} alt="logo" /> Kart ilə
              </span>
            </p>
            <p className="order-detail-div-payment_info">
              Məbləğ
              <span> {order.order.subtotal.formatted_with_symbol}</span>
            </p>
            <p className="order-detail-div-payment_info">
              Promo kod
              <span> -{order.order.discount.amount_saved?order.order.discount.amount_saved.formatted_with_symbol:"₼0.00"}</span>
            </p>
          </div>
          <p className="order-detail-div-payment-info_total">
            Cəmi
            <span> {order.order.total.formatted_with_symbol}</span>
          </p>
        </div>
      </div>
      }
    </div>
  );
}

export default OrderDetail;
