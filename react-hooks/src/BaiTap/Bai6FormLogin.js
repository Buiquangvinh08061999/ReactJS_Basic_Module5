
import React, {useState} from "react";


function Login() {

    const [name, setName] = useState();

    //đây là one-way-bidding, chỉ thay đổi theo
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleInputEmail = (e) => {
       
        setEmail(e.target.value); //Lấy dữ liệu điền vào từ ô input

        console.log(e.target.value);
    };

    const handleInputPassword = (e) => {
       
        setPassword(e.target.value); //Lấy dữ liệu điền vào từ ô input

        console.log(e.target.value);
        
    };

    //Sổ dữ liệu từ 2 biến trên thành Object. 2 biến được set giá trị từ ô input (e.target.value)
    const handleLogin = () => {

        console.log({
            email : email,
            password: password
        });
    };

    const handleUpdateSetAll = () => {

        setEmail('vinh1@gmail.com')
        setPassword("123123")

    };

    return (
              
            <div className="container">
                <h1 className="h1">ahihih</h1>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input className="form-control" value={email}  type="email" name="email" id="email" onInput={handleInputEmail} />
                </div>
                <div className="form-group">
                    <label htmlFor="pw">Password</label>
                    <input className="form-control" value={password} type="password" name="password" id="pw" onInput={handleInputPassword}/>
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