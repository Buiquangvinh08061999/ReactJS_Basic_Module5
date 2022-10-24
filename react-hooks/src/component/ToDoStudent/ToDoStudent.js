import useAvatar from '../../asset/img/use.jpg'
import { useState} from 'react'


const student_db ='student_db'
function ToDoStudent() {
    const [students, setStudents] = useState(() =>{
        let data =[]
        if(window.localStorage.getItem(student_db) === null){ // nếu không có dữ liệu vào trả về Json rỗng

            window.localStorage.setItem(student_db, JSON.stringify(data))

        }else{// nếu có dữ liệu thì ta truyền dữ liệu vào mảng data[]
            data = JSON.parse(window.localStorage.getItem(student_db))
        }

        return data // rồi trả về dữ liệu da ta đấy, thằng students sẽ nhận dữ liệu
    });

    const [student, setStudent] = useState({
        id: 0,
        fullname: "",
        email: "",
        avatar: ""
    });

   

    //Đã gán dữ liệu nhập vào từ ô input vào, gán thuộc tính name(fullname) : dữ liệu nhập vào.value 'vinh', nó sẽ lấy từng name tương ứng với value  
    const onInPut = (e) => {
         setStudent({
            ...student,
            [e.target.name] : e.target.value  //dữ liệu mới được thêm vào từ ô input,  giữ giá trị cũ và thêm giá trị mới vào
         })
        
         console.log(student);
    };
    const{fullname, email, avatar} = student;  // dùng để truyền value vào ở dưới, để clear về rỗng

    //Tìm kiếm id lớn nhất trong mảng
    const findMaxId = () => {
         let newStudents = [...students] //Lấy cái mảng từ biên students vào biến, rồi sắp xếp tăng dần,
         newStudents.sort(function(std1, std2){
            return std2.id - std1.id
         })
    
         console.log(newStudents)// mới vào mảng chưa có dữ liệu, nó sẽ lấy tk || 0 + 1,, sau bước đó mới lock đc tk đầu tiền[0]

         return (newStudents[0] && newStudents[0].id) || 0;
    };

    //kích submit nhận dữ liệu từ form 
    const handeleSubmit = (e) => {
        e.preventDefault();

        //Dùng callback function để triển khai logic phía dưới

       setStudents(pre =>{
         let id = findMaxId() + 1
       
         let newStudent = { //Lấy dữ liệu student ở OnInPut nhận đc ở trên, đẩy vào đây là thêm id tăng, Rồi set dự liệu mới này cho setStudents, để ta hiển thị ở cart
            ...student,
            id: id
         }
        //  console.log(newStudent);

         let newDaTa =[
            ...pre, //lưu dữ liệu cũ của thằng students, và đưa dữ liệu mới nhận dc vào students, để hiển thị
            newStudent
         ]

         window.localStorage.setItem(student_db, JSON.stringify(newDaTa)); //Lưu dự liệu mới từ students , lên localStorage giữ dữ liệu cho ta
        
         return newDaTa;
       })
    
       //Thực hiện xong clear input về "", những id truyền vào 0, để nó thực hiện tiếp
       setStudent({
        id:0,
        fullname: "",
        email: "",
        avatar: ""
       })

   };


   //Clear input về rỗng, nếu ta không muốn create
   const handleClearInPut = (e) => {
        setStudent({
            id:0,
            fullname: "",
            email: "",
            avatar: ""
        })
   };

   //Hàm xóa theo id, std đã nhận được tất cả dữ liệu student truyền vào
   //Xóa thì ta setStudent lại, xóa dữ liệu đó ra, và trả về dữ liệu khi xóa lại
   const handleRemoveById = (std) => {
        let confirm = window.confirm("Bạn có chắc muốn xóa dữ liệu này không?")
        if(confirm){
        setStudents(pre =>{ //pre tương ứng với biến students(tất cả dữ liệu), ta duyệt qua để thực thi hàm xóa, lưu ở localStorage
            let newData = pre.filter(student => student.id !== std.id);

            window.localStorage.setItem(student_db, JSON.stringify(newData)) //xóa xong thì set dữ liệu vào lại localStorage, để xóa dữ liệu ở đấy lun
            
            return newData;
        })
        }
   };
    return ( 
        <div className="container">
            <section className="create-student mt-2">
                <form onSubmit={handeleSubmit}>
                    <div className="row">
                        <div className="col-6">  {/*Nhóm lại tất cả vào col-6 */}
                    
                            <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <input 
                                    className="form-control"
                                    type="text"
                                    name="fullname"
                                    value={fullname} // để trả về rỗng, nhận ở handleSubmit setStudent
                                    onInput={onInPut} // nhận giá trị, phải tạo biến name gán = value

                                />

                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input 
                                    className="form-control"
                                    type="email"
                                    name="email"
                                    value={email}
                                    onInput={onInPut}

                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Avatar URL</label>
                                <input 
                                    className="form-control"
                                    type="url"
                                    name="avatar"
                                    value={avatar}
                                    onInput={onInPut}

                                />
                            </div>
                            <div className="mb-3">
                                <button 
                                    className="btn btn-primary me-2"
                                    type='submit'
                                >
                                Create
                                </button>

                                <button 
                                    className="btn btn-warning"
                                    type='button'
                                    onClick={handleClearInPut}
                                >
                                Cancel
                                </button>
                            </div>

                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <img 
                                    src={avatar || useAvatar} alt="error avatar" //Nếu có avatar thì hiển thị, còn ko có hiển thị ảnh gốc
                                    className='rounded mx-auto d-block w-50'

                                />

                            </div>
                        </div>
                    </div>
                </form>
            </section>

            {/**Hiển thị Cart thông tin*/}
            <section className="display-student">
                <div className="row">
                {
                    students.map((student) =>(
                    <div className="col-3" key={student.id}>
                        <div className="card">
                            <img src={student.avatar} className="card-img-top" alt=""/>

                            <div className='card-body'>
                                <h5 className="card-title">{student.fullname}
                                     <i className='fa-solid fa-person-circle-xmark ms-2 text-danger' role='button' onClick={() => handleRemoveById(student)}></i>
                                </h5>
                                <p className="card-text">{student.email}</p>
                            </div>
                        </div>
                    </div>
                    ))
                }
                  
      
                </div>
            </section>

            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
        </div>
     );
}

export default ToDoStudent;