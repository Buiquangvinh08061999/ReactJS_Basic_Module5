import { useState } from "react";

import Content from "./Bai32-Mounted_Unmounted";


function App() {

    const[show, setShow] = useState(false)

    const handShowFalseTrue = () => {
        setShow(!show) 
        /* chú ý, kích vào thì true, kích tiếp ngược lại của nó là flase,
         kích tiếp thì true, nên sử dụng lặp đi liên tục */
    }

    return (
        <div style={{ padding : 20}}>
            <button onClick={handShowFalseTrue}>Show</button>       
          
            {show && <Content/> }
  
        </div>
    )
  }
  
  export default App;
  