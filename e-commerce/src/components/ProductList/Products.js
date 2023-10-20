import { Link } from "react-router-dom";
import { data } from "../../mocks/data";
import Pagination from "./Pagination";

const Products = () => {
  return (
    <div className="py-12">
      <div className="flex flex-col gap-12 ">
        <div className="flex flex-wrap gap-[30px] ">
          {data.map((d) => (
            <Link
              to={`/product/${d.id}`}
              className="flex flex-col text-center gap-[10px]"
            >
              <img src={d.src} className=""></img>
              <h5 className="text-center font-bold text-base">{d.heading}</h5>
              <a
                href=""
                className="font-bold text-sm text-second-text text-center"
              >
                English Department
                <div className="pt-3">
                  <span className="text-[#BDBDBD] text-base ">$16.48</span>
                  <span className="text-[#23856D] text-base ">$16.48</span>
                </div>{" "}
              </a>
              <div>
                <button>
                  <i class="bx bxs-circle text-primary-color"></i>
                </button>
                <button>
                  <i class="bx bxs-circle text-[#23856D]"></i>
                </button>
                <button>
                  <i class="bx bxs-circle text-[#E77C40]"></i>
                </button>
                <button>
                  <i class="bx bxs-circle text-[#252B42]"></i>
                </button>
              </div>
            </Link>
          ))}
        </div>
        <Pagination />
      </div>
    </div>
  );
};
export default Products;
