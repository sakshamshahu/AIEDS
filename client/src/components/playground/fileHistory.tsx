import React, { useContext, useEffect, useState } from 'react'
import { useAppSelector } from '../../store/store';
import { UserContext } from '../../context/userContext';



const HistoryField = () => {
  const context = useContext(UserContext);

  const { getFiles } = context!;
  
  const files = useAppSelector(state=> state.files);

  useEffect(() => {
    // TODO: This WILL loop endlessly. Fix it hamran : )
    // getFiles("userid_value_1");
    
  }, [files.files]);
  return (
    // <div>        TODO: I plan on a scrollable selection of the PDFs, since anything else seems like a UI nightmare. Couldn't get it working though.
    //   <select
    //     value={selectedOption ? selectedOption.value : ''}
    //     onChange={(e) =>
    //       handleSelect(
    //         options.find((option) => option.value === e.target.value)
    //       )
    //     }
    //   >
    //     <option value="">Select an option</option>
    //     {options.map((option) => (
    //       <option key={option.value} value={option.value}>
    //         {option.label}
    //       </option>
    //     ))}
    //   </select>
    //   {selectedOption && (
    //     <div>
    //       <h4>Selected Option:</h4>
    //       <p>{selectedOption.label}</p>
    //     </div>
    //   )}
    // </div>
    <></>
  );
}

export default HistoryField