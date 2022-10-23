import {useState , useEffect} from 'react'


const typeNameAPI = ['posts', 'comments', 'albums'];

function Content() {

    const[posts, setPosts] = useState([])

    const [nameAPI , setNameAPI] = useState('posts');
    //tạo tên đường dẫn mặc định, nếu muốn thay đổi tên đường dẫn thì setNameAPI() lại, nhưng yêu cầu các trường dữ liệu phải giống nhau mới render ra được
    const getFetchUser =() => {
      fetch(`https://jsonplaceholder.typicode.com/${nameAPI}` , {method:"GET"} )
      .then((res) =>
        res.json()
      )
      .then((posts => {
        console.log(posts);
        setPosts(posts)
        //phải dùng useState để hứng dữ liệu, ta setPosts(posts) để posts có dữ liệu
      }))
    }

    useEffect(() => {
        getFetchUser();

    }, [nameAPI]); //[deps, truyền vào tên API được setNameAPI vào]




    const deleteById = (postId) => {
      let confirm = window.confirm('Bạn có chắc muốn xóa dữ liệu từ id ' + postId + 'không ?');
      
      if(confirm){
        setPosts(posts.filter((postFillter) => postFillter.id !== postId )) // Kiểm tra id, setPost lại, tìm thấy id có tồn tại thì xóa luôn

      }
      console.log(">>>>>>Show deleteById", postId);
      
    }

    const handShowEditPosts = (postId) =>{
      let list = posts.find((postFind) => postFind.id === postId);
      document.querySelector(`#tr_${postId} > td:nth-child(2)`).innerHTML = `<input class='form-control' value='${list.title}' />`;
      document.querySelector(`#tr_${postId} > td:nth-child(3)`).innerHTML = `<input class='form-control' value='${list.body}' />`;

      console.log('edit' + postId);
    }

    const handleSaveStudentsPosts = (postId) => {
      let list = posts.find((postFind) => postFind.id === postId);
      //Save lại chỉ cần lấy giá trị value từ ô input truyền vào, tại hàm edit ta ghi vào giờ chỉ lấy ra và lưu lại
      list.title = document.querySelector(`#tr_${postId} > td:nth-child(2) > input`).value;
      list.body = document.querySelector(`#tr_${postId} > td:nth-child(3) > input`).value;

     
      //Gán dữ liệu mới vào innerHTML để hiển thị lại dữ liệu mới thay vào
      document.querySelector(`#tr_${postId} > td:nth-child(2)`).innerHTML = list.title
      document.querySelector(`#tr_${postId} > td:nth-child(3)`).innerHTML = list.body

      console.log('save' + postId);
  }
  
  return (
      <div>
        {typeNameAPI.map(type =>
          <button
              key={type}
              className='me-3'// magin-right
              style={nameAPI === type ? {
                color: '#fff',backgroundColor:'#333'
              } : {}}  // lấy tên truyền vào đúng với cái type tên đó, thì hiển thị màu
              
              onClick={() => setNameAPI(type)} //tên type khi ta kích vào thẻ button nào sẽ truyền vào setNameAPI
          >
            {type} 
          </button>
        )}
  
        <table className='table table-hover'>
          <thead>
           <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
              <th colSpan={3} className='text-center'>Action</th>       
           </tr>
          </thead>
          <tbody>
            {posts.map(post => 
              <tr id={`tr_${post.id}`} key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <button 
                    className='btn btn-primary'
                    title='Edit'
                    onClick={() => handShowEditPosts(post.id)}> 
                    <i className="fa-solid fa-pen-to-square fa-edit"/>
                  </button>
                </td>
                <td>
                  <button 
                    className='btn btn-success'
                    title='Save' 
                    onClick={() => handleSaveStudentsPosts(post.id)}> 
                    <i className="fa-regular fa-floppy-disk fa-check"/>
                  </button>
                </td>
                <td>
                  <button 
                    className='btn btn-danger'
                    title='Delete'
                    onClick={() => deleteById(post.id)}> 
                    <i className="fa-solid fa-trash"/>
                  </button>
                </td>
              
            </tr>
            )}
          </tbody>
        </table>
      </div> 
  )
}
export default Content;
