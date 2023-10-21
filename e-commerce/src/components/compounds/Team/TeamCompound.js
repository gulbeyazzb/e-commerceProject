import { TeamData } from "../../../mocks/AboutData/TeamData";

const TeamCompound = () => {
  return (
    <div className="flex flex-wrap gap-[30px]  ">
      {TeamData.map((data) => (
        <div className="w-[316px] m-auto font-bold mb-10">
          <img className="w-[316px] h-[231px]" src={data.img}></img>
          <div className="flex flex-col gap-[10px] p-[30px]">
            <h5 className="text-base">{data.header}</h5>
            <h6 className="text-sm text-second-text">{data.role}</h6>
            <div className="flex gap-5 justify-center ">
              <a href={data.facebook}>
                {" "}
                <i class="bx bxl-facebook-circle text-2xl text-[#335BF5] sm:text-primary-color"></i>
              </a>
              <a href={data.instagram}>
                {" "}
                <i class="bx bxl-instagram text-2xl text-[#E51F5A] sm:text-primary-color"></i>
              </a>
              <a href={data.twitter}>
                {" "}
                <i class="bx bxl-twitter text-2xl text-primary-color"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamCompound;
