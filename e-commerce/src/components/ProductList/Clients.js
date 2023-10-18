import brand1 from "../../Assets/clientsLogo/Vector.png";
import brand2 from "../../Assets/clientsLogo/fa-brands-2.png";
import brand3 from "../../Assets/clientsLogo/fa-brands-3.png";
import brand4 from "../../Assets/clientsLogo/fa-brands-4.png";
import brand5 from "../../Assets/clientsLogo/fa-brands-5.png";
import brand6 from "../../Assets/clientsLogo/fa-brands-6.png";

const Clients = () => {
  return (
    <div className=" p-12 bg-[#FAFAFA]">
      <div className="flex justify-center items-center  gap-10">
        <img className="w-[80px] h-[33.81px]" src={brand1}></img>
        <img className="w-[83px] h-[59px]" src={brand2}></img>
        <img className="w-[102px] h-[75px]" src={brand3}></img>
        <img className="w-[103px] h-[42px]" src={brand4}></img>
        <img className="w-[104px] h-[62px]" src={brand5}></img>
        <img className="w-[76px] h-[72px] " src={brand6}></img>
      </div>
    </div>
  );
};
export default Clients;
