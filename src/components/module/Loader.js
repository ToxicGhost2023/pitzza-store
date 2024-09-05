import { Hourglass } from "react-loader-spinner";

function Loader() {
  return (
    <div className="flex text-center justify-center mt-[20px]">
      <Hourglass
        visible={true}
        height="40"
        width="50"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#ffbe0b", "#fb5607"]}
      />
    </div>
  );
}

export default Loader;
