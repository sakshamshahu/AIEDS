import React, { useContext, useEffect, useState } from 'react'
import { useAppSelector } from '../../store/store';
import { UserContext } from '../../context/userContext';



const HistoryField = () => {
  // const [menuOption, hitoryItems] = useState([]);
  const context = useContext(UserContext);
  

  const { getSessions } = context!;
  // console.log(sessions)
  const history = useAppSelector(state=> state.session);

  useEffect(() => {
    if(history.sessions.length === 0) getSessions("userid_value_1");
    // console.log(history.sessions);
  }, [history.sessions]);
  return (
    <div >
    {history.sessions.map(item => (
            <ul key={item.session_id}>
                <li>{item.title}</li>
            </ul>
        ))}
    </div>
  )
}

export default HistoryField