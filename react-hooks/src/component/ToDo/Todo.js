import React, { useState, useRef} from 'react';


//Ứng dụng thêm mới công việc todo list, lấy dữ liệu từ ô input truyền vào

const list = ['Ăn sáng', 'Quét nhà', 'Học ReactJS']

function ToDo() {


    const [jobs, setJobs] = useState(list);

    const [input, setInput] = useState();

    const handleInput = (e) => {
        console.log(e.target.value);
        setInput(e.target.value) // lấy dữ liệu từ ô input
    };

    const handleClickData = () => {
        //ToDo list, lưu lại những việc đã làm,sử dụng destructuring và cộng với dữ liệu thêm mới
         setJobs([
            ...jobs,
            input
         ])

         setInput("")

         
         inputRef.current.focus() //add thành công trỏ lại chỗ viết ô input

    };

    const deleteByIndex = (idx) => {
        let confirm = window.confirm("Bạn có muốn xóa công việc này không?");
        if(confirm ===true){
            let data = jobs.filter((job, index) => index !== idx)
            setJobs(data); //Xóa xong gán lại dữ liệu cho setJobs nhận
        }
      
    };

    const inputRef = useRef(); 
    console.log(inputRef); // có chứa tk current, trong tk này chứa 1 Object rất nhiều phương thức

    return (  
            <div className='container mt-3'>

                <label>Công việc hàng ngày</label>
                <input
                    className="form-control"
                    value={input}// để set lại trị rỗng, điền vào ô này để nhận lệnh setInput("")
                    ref={inputRef}
                    onInput={handleInput} 
                 />
                <button 
                    className="btn btn-sm btn-danger mt-3"
                    onClick={handleClickData}
                >
                Add Job
                </button>

                <div>
                    <ul className="list-group">
                    {
                        jobs.map(((job,index) =>
                            <li className="list-group-item" key={index}>{job}
                            
                                <i 
                                    className="fa fa-times text-danger float-end" 
                                    role="button"
                                    onClick={() => deleteByIndex(index)}
                                >                                
                                </i>

                                <i 
                                    className="fa fa-times text-danger float-end" 
                                    role="button"
                                    onClick={() => deleteByIndex(index)}
                                >                                
                                </i>
                           
                            </li>      
                        ))
                    }
                    </ul>
                </div>
            </div>
    
     );
   
}

export default ToDo;