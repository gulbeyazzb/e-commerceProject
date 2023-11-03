import { useEffect } from "react";
import "./App.css";
import Main from "./layouts/Main";
import { animateScroll as scroll } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { getUserVerifyAction } from "./store/actions/userAction";
import { fetchProductActionCreator } from "./store/actions/productAction";

function App() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const dispatch = useDispatch();

  useEffect(() => {
    //todo: thunk action ile yapılacak
    if (localStorage.getItem("token")) {
      dispatch(getUserVerifyAction());
    }
    dispatch(fetchProductActionCreator());
  }, []);
  const products = useSelector((store) => store.product.productList);

  return (
    <>
      <Main />
      <a
        onClick={scrollToTop}
        className="animate-bounce text-center flex flex-col items-center fixed sm:right-10 left-[300px] sm:left-[1300px] bottom-2 rounded-[100%]"
      >
        <i class="bx bxs-chevron-up text-[#7673a6] text-5xl hover:text-[#3730A3]"></i>
        go up
      </a>
    </>
  );
}

export default App;
