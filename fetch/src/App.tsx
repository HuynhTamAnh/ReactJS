import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import "./App.css";
// import {
//   createNewPost,
//   deleteNewPort,
//   getAllPorts,
//   updatePort,
// } from "./service";
import { useDispatch, useSelector } from "react-redux";
import Post from "./component/Post";
import {
  act_change_word,
  act_increasement_n,
  act_random_number,
} from "./store/actions";
import { store, StoreInterface } from "./store";
import { userReducer4 } from "./store/reducers/userReducer4";
import { decrement, increment, powerUp } from "./store/reducers";

// interface Post {
//   title: string;
//   body: string;
// }

function App() {
  // const [data, setData] = useState<Post[]>([]);

  // useEffect(() => {
  //   //gọi api
  //   // getAllPosts()
  //   //   .then((data: any) => setData(data))
  //   //   .catch((err: any) => console.log(err));
  //   //thêm mới
  //   // createNewPosts({ title: "đi chơi", body: "hú" })
  //   //   .then((d) => {
  //   //     setData([data, d]);
  //   //   })
  //   //   .catch((err) => console.log(err));
  //   //xoá
  //   // deletePosts(3).then((data) => {
  //   //   console.log(data);
  //   // });
  //   //sửa
  //   const data = {
  //     title: "thầy ",
  //     body: "hh",
  //   };
  //   updatePosts(data, 4).then((data) => {
  //     setData([data]);
  //   });
  // }, []);
  //////////////////////////
  // const [posts, setPosts] = useState<IPost[]>([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postPerPage] = useState(9);
  // const [totalPosts, setTotalPosts] = useState(100);

  // useEffect(() => {
  //   getPostWithPaginate(currentPage, postPerPage).then((data) =>
  //     setPosts(data)
  //   );
  // }, [currentPage]);

  // const totalPages = Math.ceil(totalPosts / postPerPage);

  // const handlePageChange = (page: number) => {
  //   setCurrentPage(page);
  // };

  // const renderPaginationItems = () => {
  //   const pageNumbers = [];
  //   const maxVisiblePages = 5; // Số lượng nút trang hiển thị tối đa

  //   let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  //   let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  //   if (endPage - startPage + 1 < maxVisiblePages) {
  //     startPage = Math.max(1, endPage - maxVisiblePages + 1);
  //   }

  //   for (let i = startPage; i <= endPage; i++) {
  //     pageNumbers.push(
  //       <Pagination.Item
  //         key={i}
  //         active={i === currentPage}
  //         onClick={() => handlePageChange(i)}
  //       >
  //         {i}
  //       </Pagination.Item>
  //     );
  //   }

  //   return pageNumbers;
  // };
  /////////////////////////
  //lấy state của store
  // const state = store.getState();
  //function component có hook
  // const randomNumbers = useSelector(
  //   (state: StoreInterface) => state.userStore5
  // );
  const dispatch = useDispatch();
  // // console.log(randomNumbers);
  // const handleGenerate = () => {
  //   const randomNumber = Math.floor(Math.random() * 100) + 1;
  //   dispatch(act_random_number(randomNumber));
  // };
  const num = useSelector((state: StoreInterface) => state.countSlice);
  // const changeWord = () => {
  //   dispatch(act_change_word());
  // };

  return (
    // <div className="container">
    //   <Row>
    //     {posts.map((d, index) => (
    //       <Col key={index} className="mt-2" sm={4}>
    //         <Post data={d} />
    //       </Col>
    //     ))}
    //   </Row>
    //   <div className="pagination mt-4 d-flex justify-content-end">
    //     <Pagination size="lg">
    //       <Pagination.First onClick={() => handlePageChange(1)} />
    //       <Pagination.Prev
    //         onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
    //       />
    //       {renderPaginationItems()}
    //       <Pagination.Next
    //         onClick={() =>
    //           handlePageChange(Math.min(totalPages, currentPage + 1))
    //         }
    //       />
    //       <Pagination.Last onClick={() => handlePageChange(totalPages)} />
    //     </Pagination>
    //   </div>
    // </div>

    // <div className="container mt-5">
    //   <div>{inf?.id}</div>
    //   <div>{inf?.name}</div>
    //   <div>{inf?.sex ? "male" : "female"}</div>
    //   <div>{inf?.date}</div>
    //   <div>{inf?.address}</div>
    // </div>
    <div className="container mt-5">
      <button onClick={() => dispatch(increment(1))}>bấm</button>
      <p>{num}</p>
    </div>
  );
}

export default App;
