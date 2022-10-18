import {useState,useEffect} from 'react'

function Content() {
    const[posts, setPosts] = useState([])
  
    const getFetchUser =() => {
      fetch('https://jsonplaceholder.typicode.com/posts' , {method:"GET"} )
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
    }, []);

    const deleteById = (postId) => {
      let confirm = window.confirm('Bạn có chắc muốn xóa dữ liệu từ id ' + postId + 'không ?');
      
      if(confirm){
        setPosts(posts.filter((postFillter) => postFillter.id !== postId ))

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
        <i className="fa-regular fa-plus"/>
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
