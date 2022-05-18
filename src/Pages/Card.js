import React, {useEffect} from 'react'
import "./card.sass"
import { useSelector} from "react-redux";
import Empty from '../components/Card/empty card/Empty'
import Full from '../components/Card/full card/Full'
import Alert from '@mui/material/Alert';
import Stack from "@mui/material/Stack";



function Card() {
  useEffect(() => {
    const changePage = () => {
      window.scrollTo({top: 0});
    };
    changePage()
  }, []);
  
  const BasketList = useSelector((state) => state.listOrder.SimpleList);

  const increaseAlert = useSelector((state) => state.alertReducer.increase)
  const decreaseAlert = useSelector((state) => state.alertReducer.decrease)
  const deleteAlert = useSelector((state) => state.alertReducer.delete)

  return (
    <div id="card-page">
      <div className="container">
        <h3 className="basket-count_text">Səbət <span>({BasketList && BasketList.line_items.length} məhsul)</span> </h3>
        {BasketList && 
        BasketList.line_items.length>0?<Full/>:<Empty/>
        }
      </div>
      <Stack style={{display: increaseAlert?"flex":"none"}} className="alert-success alert-increase" spacing={2}>
          <Alert  sx={{ height: '85px',display: "flex", alignItems: "center"}} onClose={() => {document.querySelector(".alert-increase").style.display="none"}}>Məhsul sayı artırıldı!</Alert>
        </Stack>
        <Stack style={{display: decreaseAlert?"flex":"none"}} className="alert-success alert-decrease" spacing={2}>
          <Alert  sx={{ height: '85px',display: "flex", alignItems: "center"}} onClose={() => {document.querySelector(".alert-decrease").style.display="none"}}>Məhsul sayı azaldıldı!</Alert>
        </Stack>
        <Stack style={{display: deleteAlert?"flex":"none"}} className="alert-success alert-delete" spacing={2}>
          <Alert severity="error" sx={{ height: '85px',display: "flex", alignItems: "center"}} onClose={() => {document.querySelector(".alert-delete").style.display="none"}}>Məhsul səbətdən silindi!</Alert>
        </Stack>
    </div>
  )
}

export default Card