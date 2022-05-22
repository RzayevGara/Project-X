import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import commerce from "../../../lib/Commerce";
import { useSelector, useDispatch } from "react-redux";
import { setOrderDetail } from "../../../Reducer/CustomerOrder";
import { Link } from "react-router-dom";
import axios from "axios";
import ArrowIcon from "../../../assets/images/arrow-icon-order.svg";
import CardIcon from "../../../assets/images/card.svg";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function OrderDetail() {
  let { id } = useParams();
  const dispatch = useDispatch();

  const order = useSelector((state) => state.customer.orderDetail);
  const lineItemsID = useSelector((state) => state.customer.lineItems);

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
    document.querySelector(".order-detail_editBtn").style.display = "none";
    document.querySelector(".order-detail_saveBtn").style.display = "flex";
  };

  const saveBtn = (e) => {
    setSelectStatus(true);
    const countryName = document.querySelector(
      ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input"
    ).innerText;

    e.preventDefault();
    updateInfo(e, countryName);
    document.querySelectorAll(".order-detail_input-control").forEach((item) => {
      item.disabled = true;
      item.style.border = "none";
    });
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

    const url = new URL(`https://api.chec.io/v1/orders/${id}`);

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
        street: `${e.target[6].value}`,
        town_city: `${e.target[7].value}`,
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
    const changePage = () => {
      window.scrollTo({top: 0});
    };
    changePage()
    commerce.customer
      .getOrder(`${id}`)
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

  return (
    <div className="order-detail">
      <Link to="/profil/sifarislerim">
        <p className="profile-detail_title">
          <img src={ArrowIcon} alt="logo" />
          Sifarişin detalları
        </p>
      </Link>
      {order &&
        order.order.line_items.map((lineItem, index) => {
          if (lineItem.id === lineItemsID) {
            return (
              <div className="order-detail_div" key={index}>
                <div className="order-detail-div_specs">
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
                <form onSubmit={saveBtn} className="order-detail-div_info">
                  <div>
                    <p className="order-detail-div-info_title">
                      Şəxsi məlumatlar
                    </p>
                    <ul>
                      <li>
                        <input
                          className="order-detail_input-control"
                          type="text"
                          disabled
                          placeholder={order.customer.firstname}
                        />
                      </li>
                      <li>
                        <input
                          className="order-detail_input-control"
                          type="text"
                          disabled
                          placeholder={order.customer.lastname}
                        />
                      </li>
                      <li>
                        <input
                          className="order-detail_input-control"
                          type="number"
                          disabled
                          placeholder={order.customer.phone}
                        />
                      </li>
                      <li>
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
                        <input
                          className="order-detail_input-control"
                          type="text"
                          disabled
                          placeholder={order.shipping.town_city}
                        />
                      </li>
                      <li>
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
                      Toplam məbləğ
                      <span> {lineItem.line_total.formatted_with_symbol}</span>
                    </p>
                    <p className="order-detail-div-payment_info">
                      Təcili çatdırılma
                      <span> ₼0</span>
                    </p>
                    <p className="order-detail-div-payment_info">
                      Promo kod
                      <span> ₼0</span>
                    </p>
                  </div>
                  <p className="order-detail-div-payment-info_total">
                    Cəmi
                    <span> {lineItem.line_total.formatted_with_symbol}</span>
                  </p>
                </div>
              </div>
            );
          }
        })}
    </div>
  );
}

export default OrderDetail;
