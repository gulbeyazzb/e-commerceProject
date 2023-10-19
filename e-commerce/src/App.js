import "./App.css";
import Main from "./layouts/Main";
import { animateScroll as scroll } from "react-scroll";

function App() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Main />
      <a
        onClick={scrollToTop}
        className="animate-bounce  fixed md:right-10 right-52 bottom-2 rounded-[100%]"
      >
        <i class="bx bxs-chevron-up text-[#7673a6] text-4xl hover:text-[#3730A3]"></i>
      </a>
    </>
  );
}

export default App;
