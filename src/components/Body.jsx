import { useEffect, useState } from "react";
import { FaDiceSix } from "react-icons/fa6";

const Body = () => {
  const [advice, setAdvice] = useState("");

  const handleAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const jsonData = await response.json();
    const { slip } = jsonData;
    setAdvice(slip);
  };

  useEffect(() => {
    handleAdvice();
  }, []);
  //two parameters inside the useffect, first is a function and second one is the dependencyarray

  return (
    <div className="h-screen bg-slate-800 flex justify-center items-center">
      <div className="bg-slate-600  h-fit w-[320px] rounded-lg p-8">
        <p className="text-center text-xl">Advice #{advice.id}</p>
        <p className="font-bold text-3xl mt-2">"{advice.advice}"</p>
        <div className="flex justify-center m-2">
          <button
            onClick={handleAdvice}
            className="bg-lime-400 p-2 rounded-full "
          >
            <FaDiceSix />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
