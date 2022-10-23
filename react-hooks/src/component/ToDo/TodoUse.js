import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



//Ứng dụng thêm mới công việc todo list, lấy dữ liệu từ ô input truyền vào

const list = [
    {
        id:1,
        name:'Bui Quang Vinh',
        age:18,
        address:"Huế City",
        img:"https://i.pinimg.com/736x/9f/2b/56/9f2b56e87178e9172f7bc69dcfc24611.jpg"
    },
    {
        id:2,
        name:'Truong Van Phon',
        age:22,
        address:"Huế City",
        img:"https://i.pinimg.com/736x/9f/2b/56/9f2b56e87178e9172f7bc69dcfc24611.jpg"
    },
    {
        id:3,
        name:'Huynh Van Vinh',
        age:19,
        address:"Huế City",
        img:"https://files.fullstack.edu.vn/f8-prod/courses/3.png"
    }
]

function ToDo() {


    const [jobs, setJobs] = useState(list);

    const [count, setCount] = useState(4); // id tự động tăng gán vào là xong

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [img, setImg] = useState("");




    // console.log(jobs);
 

    //Giúp thẻ form không bị reload lại trang 
    const handleSubmit = (e) => {
         e.preventDefault();

         const newUser = {           
            id: count, //id tự động tăng , (ta lấy ở biến count mặc định), mỗi lần thành công. phía dưới ta setCount lại, rồi return về count + 1 là xong
            name: name,
            age: age,
            address: address,
            img: img
         }
        
         console.log(newUser); // đã lấy ra 1 Object có dữ liệu, truyền vào dữ liệu vào setJobs, phải đặt biến đúng như tên của nó(id..v.v)
       
         setJobs([
            ...jobs,
            newUser
         ])
         
        document.querySelector('.clear2').value = '';
        document.querySelector('.clear3').value = '';
        document.querySelector('.clear4').value = '';
        document.querySelector('.clear5').value = '';

        setCount((count) => count + 1);

    };


    const [valueAll, setValueAll] = useState({id:"",name:"",age:"",address:"",img:""});


    const onChange = (e) =>{
        setValueAll({...valueAll, [e.target.name]:e.target.value})
    }

    // Phần modal
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
    };

    //Hiển thị dữ liệu theo id
    const handleShowEdit = (job) => {
        console.log(job.id);
        console.log(job.name);
    
        setValueAll({name: job.name, age:job.age, address: job.address, img:job.img}) //giờ muốn lấy dữ liệu, chỉ cần lấy tk value.name; chấm tới các thuộc tính của nó, và gán lại vào ô input

        setShow(true);
       
    }
    const handleClick = (e) =>{
        console.log("update" , jobs);
        e.preventDefault();

    } 
    return (  
        <div className='container mt-3'>
             <form onSubmit={handleSubmit}>
                <fieldset className="row">

                    <div className="col-md-6 mt-3">
                        <label>Name</label>
                        <input
                            className="form-control clear2"
                            type="text"
                            onChange={(e) => setName(e.target.value)}                                               
                        />
                    </div>
                    <div className="col-md-6 mt-3">
                        <label>Age</label>
                        <input
                            className="form-control clear3"
                            type="text"
                            onChange={(e) => setAge(e.target.value)}                     
                        />
                    </div>
                    <div className="col-md-6 mt-3">
                        <label>Address</label>
                        <input
                            className="form-control clear4"
                            type="text"
                            onChange={(e) => setAddress(e.target.value)}                     
                        />
                    </div>
                    <div className="col-md-6 mt-3">
                        <label>Img</label>
                        <input
                            className="form-control clear5"
                            type="text"
                            onChange={(e) => setImg(e.target.value)}                     
                        />
                    </div>

        
                </fieldset>
                <button 
                    className="btn btn-danger mt-3 "
                    type='submit'
                >
                    Add Job
                </button>
             </form>
             
          
       
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal show={show} onHide={handleClose} className='modal-xl'>
                
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading
                    
                    </Modal.Title>
                </Modal.Header>
                     
                     <Modal.Body>
                     Woohoo, you're reading this text in a modal!
                     <div className='container mt-3'>
                        <form onSubmit={handleClick}>
                            <fieldset className="row">

                                <div className="col-md-6 mt-3">
                                    <label>Name</label>
                                    <input
                                        className="form-control md1"
                                        name="name"
                                        type="text"
                                        value={valueAll.name} //hiển thị tên dữ liệu, khi kích vào edit id đó
                                        onChange={onChange}              
                                    />
                                </div>
                                <div className="col-md-6 mt-3">
                                    <label>Age</label>
                                    <input
                                        className="form-control clear3"
                                        name="age"
                                        type="text"
                                        value={valueAll.age}
                                        onChange={onChange}
                                                            
                                    />
                                </div>
                                <div className="col-md-6 mt-3">
                                    <label>Address</label>
                                    <input
                                        className="form-control clear4"
                                        name="address"
                                        type="text"
                                        value={valueAll.address}
                                        onChange={onChange}
                                                           
                                    />
                                </div>
                                <div className="col-md-6 mt-3">
                                    <label>Img</label>
                                    <input
                                        className="form-control clear5"
                                        name="img"
                                        type="text"                           
                                        value={valueAll.img}
                                        onChange={onChange}
                                      
                                                          
                                    />
                                </div>

                            </fieldset>
                            <button 
                                className="btn btn-danger mt-3 "
                                type='submit'
                            >
                                Add Job
                            </button>
                        </form>
                     </div>
                     </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                       
                    <Button variant="primary" type='button' onClick={handleClick}>Update</Button>
                   
                    
                </Modal.Footer>
            </Modal>


               
            <div>
                <table className="table table-hover table-bordered mt-3 text-center">
                    <thead>
                        <tr>
                            <th>#Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Img</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map((job => 
                                <tr id={`tr_${job.id}`} key={job.id}>
                                    <td>{job.id}</td>
                                    <td>{job.name}</td>
                                    <td>{job.age}</td>
                                    <td>{job.address}</td>
                                    <td><img src={job.img}  width="40px" height="40px" /></td>
                                    <td>
                                        <button 
                                        className='btn btn-success'
                                
                                        onClick={() => handleShowEdit(job)}> 
                                        Edit

                                        </button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>

        </div>
    
     );
   
}

export default ToDo;