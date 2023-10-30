import { useEffect } from "react";
import "./App.css";
import Main from "./layouts/Main";
import { animateScroll as scroll } from "react-scroll";
import { axiosWithAuth } from "./utilities/axiosWithAuth";
import { useDispatch } from "react-redux";
import { fetchUserActionCreator } from "./store/actions/userAction";

function App() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const dispatch = useDispatch();

  useEffect(() => {
    axiosWithAuth()
      .get("verify")
      .then((res) => {
        console.log(res);
        dispatch(fetchUserActionCreator(res.data));
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        localStorage.removeItem("token");
      });
  }, []);

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
