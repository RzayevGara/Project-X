import React, {useEffect} from 'react'
import "./card.sass"
import { useSelector} from "react-redux";
import Empty from '../components/Card/empty card/Empty'
import Full from '../components/Card/full card/Full'

function Card() {
  useEffect(() => {
    const changePage = () => {
      window.scrollTo({top: 0});
    };
    changePage()
  }, []);
  
  const BasketList = useSelector((state) => state.listOrder.SimpleList);
  return (
    <div id="card-page">
      <div className="container">
        <h3 className="basket-count_text">Səbət <span>({BasketList && BasketList.line_items.length} məhsul)</span> </h3>
        {BasketList && 
        BasketList.line_items.length>0?<Full/>:<Empty/>
        }
      </div>
    </div>
  )
}

export default Card