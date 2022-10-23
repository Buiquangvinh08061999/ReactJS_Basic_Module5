
import React, {useState} from "react";


//Nâng cao hơn bài 6: nếu tạo thêm 1 ô trường dữ liệu nữa hoặc nhiều ô. 
//Làm cách này thu thập được tất cả dữ liệu. Nâng cao hơn bài 6, áp dụng với số lượng ô input nhiều
function Login() {

    const [state, setState] = useState({
        email:"",
        password:""
    });
    

    const {email , password} = state;
   
    const handleInput = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
         setState({
            ...state,
            [e.target.name] : e.target.value
         })
    };
    //Sổ dữ liệu từ 2 biến trên thành Object. 2 biến được set giá trị từ ô input (e.target.value)
    const handleLogin = () => {
       console.log(state);
    };


    const handleUpdateSetAll = () => {

       setState({
        ...state,
        email :"vinh1@gmail",
        password :"123456"
       })
       console.log(state);
    };

    return (
              
            <div className="container">
                <h1 className="h1">ahihih</h1>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input className="form-control" value={email}  type="email" name="email" id="email" onInput={handleInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="pw">Password</label>
                    <input className="form-control" value={password} type="password" name="password" id="pw" onInput={handleInput}/>
                </div>
                

                <div className="form-group">
                    <button className="btn btn-danger me-3" onClick={handleLogin}>Login</button>

                    <button className="btn btn-danger me-3" onClick={handleUpdateSetAll}>Update</button>  

                    {/*Cập nhật tên và mật khẩu thì phải xóa dữ liệu ô input cũ đi, Đẩy dữ liệu vừa setName cố định vào 2 ô input lại
                    đây gọi là two-way-bidding*/}
                </div>
            </div>
      
    )
}

export default Login;