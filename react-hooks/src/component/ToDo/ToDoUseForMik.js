import React, { useState, useRef} from 'react';

import  { useFormik } from 'formik';


//Ứng dụng thêm mới công việc todo list, lấy dữ liệu từ ô input truyền vào

const list = [
    {
        id:1,
        name:'Bui Quang Vinh',
        // age:18,
        // address:"Huế City",
        // img:"https://i.pinimg.com/736x/9f/2b/56/9f2b56e87178e9172f7bc69dcfc24611.jpg"
    },
    {
        id:2,
        name:'Truong Van Phon',
        // age:22,
        // address:"Huế City",
        // img:"https://i.pinimg.com/736x/9f/2b/56/9f2b56e87178e9172f7bc69dcfc24611.jpg"
    },
    {
        id:3,
        name:'Huynh Van Vinh',
        // age:19,
        // address:"Huế City",
        // img:"https://files.fullstack.edu.vn/f8-prod/courses/3.png"
    }
]

function ToDo() {


    const [jobs, setJobs] = useState(list);

    const [id, setId] = useState("");
    const [name, setName] = useState("");

    console.log(jobs);
    const formik = useFormik({
        initialValues:{
            id:"",
            name:""
        }
    })
    

    // const [input, setInput] = useState({
    //     // id:0,
    //     // name:"1",
    //     // age:0,
    //     // address:"1",
    //     // img:"1"
    // });
    //Kích vào sẽ truyền dữ liệu vào job, để ta render map tất cả ra dữ liệu
    // const handleClickData = () => {
   
    //     setJobs([
    //             ...jobs,
            
    
    //     ])

    //     console.log(jobs);
       
    // };
    
    //
    
    
    
    
    
    
    
    //Giúp thẻ form không bị reload lại trang 
    
    
    const handleSubmit = (e) => {
         e.preventDefault();

         const newUser = {
            id: id, //lấy được vì đã set giá trị từ ô input,đưa vào Object có các thuộc tính tương tự như job, nên ta set lại thành công vào mảng đó
            name: name
         }
         console.log(newUser);
        //  setJobs([
        //     ...jobs,
        //     newUser
        //  ])
    };
    console.log(formik.values);

    return (  
        <div className='container mt-3'>
             <form onSubmit={handleSubmit}>
                <fieldset className="row">

                    <div className="col-md-6 mt-3">
                        <label>Id</label>
                        <input
                            className="form-control"
                            type="text"
                            onChange={(e) => setId(e.target.value)}         
                        />
                    </div>

                    <div className="col-md-6 mt-3">
                        <label>Name</label>
                        <input
                            className="form-control"
                            type="text"
                            onChange={(e) => setName(e.target.value)}

                            // name="name"
                            // value={formik.values.name}
                            // onChange={formik.handleChange}         
                        />
                    </div>

        
                </fieldset>
                <button 
                    className="btn btn-danger mt-3 "
                    type='submit'
                    // onClick={handleClickData}
                    >
                    Add Job
                </button>
             </form>
             
                    
                
            <div>
                <table className="table table-hover table-bordered mt-3 text-center">
                    <thead>
                        <tr>
                            <th>#Id</th>
                            <th>Name</th>
                            {/* <th>Age</th>
                            <th>Address</th>
                            <th>Img</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map((job => 
                                <tr key={job.id}>
                                    <td>{job.id}</td>
                                    <td>{job.name}</td>
                                    {/* <td>{job.age}</td>
                                    <td>{job.address}</td>
                                    <td><img src={job.img}  width="40px" height="40px" /></td> */}
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