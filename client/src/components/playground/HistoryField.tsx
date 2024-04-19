import React, { useContext, useEffect, useState } from 'react'
import { useAppSelector } from '../../store/store';
import { UserContext } from '../../context/userContext';



const HistoryField = () => {
  // const [menuOption, hitoryItems] = useState([]);
  const sessions = useAppSelector(state=> state.session);
  const context = useContext(UserContext);
  
  const { getSessions } = context!;
  // getSessions("userid_value_1");
  // console.log(sessions)

  // useEffect(() => {
  //   console.log("SAFDSSDFSDFSDF")
  //   console.log(sessions)
  // }, [])
  return (
    <div >
    {/* {items.map(item => (
            <ul key={item.id}>
                <li>{item.text}</li>
            </ul>
        ))} */}
    </div>
  )
}

export default HistoryField
