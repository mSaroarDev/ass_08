import { useRef, useState } from "react";
import AppNav from "../components/AppNav";

const Income = () => {
    const desc = useRef();
    const amount = useRef();
  const [inputArr, setInputArr] = useState([]);

  const [inputData, setInputData] = useState({
    description: desc.value,
    amount: amount.value,
  });

  const changehandle = (e) => {
    setInputData(setInputData);
  };

  const addData = () => {
    setInputArr(
        inputArr.push(setInputData)
        );
    setInputArr([...inputArr])
    console.log(inputArr);
  };

  return (
    <div>
      <AppNav />

      <div className="container">
        <h1 className=" text-2xl font-bold font-fontBn my-6 text-center">
          আপনার উপার্জন যুক্ত করুন
        </h1>

        <div className="grid grid-cols-2 py-8 gap-9">
          <div className="bg-slate-100 p-6 rounded-lg">
            <h3 className=" py-3 font-fontBn font-bold italic">
              উপার্জনের বর্ননা দিন
            </h3>
            <label className="font-fontBn" htmlFor="description">
              ঘটনা লিখুন
            </label>
            <br />
            <input
            ref={desc}
              className="input"
              type="text"
              placeholder="বর্ননা লিখুন"
              name="description"
              value={inputData.description}
              onChange={changehandle}
            />
            <br />
            <label className="font-fontBn" htmlFor="amount">
              টাকার পরিমান লিখুন (ইংরেজীতে){" "}
            </label>
            <br />
            <input
            ref={amount}
              className="input"
              type="text"
              placeholder="100"
              name="amount"
              value={inputData.amount}
              onChange={changehandle}
            />
            <br />
            <button onClick={addData}>যুক্ত করুন</button>
          </div>
          <div>
            <ul>
              {inputArr.map((item, ind) => {
                return (
                  <li key={ind} className="listItem font-fontBn text-md flex justify-between bg-slate-100 p-4 rounded-lg mb-4">
                    <span className="cross">x</span>
                    <p>
                      <span className="mr-2">
                        <i className="fa-solid fa-angles-right"></i>
                      </span>
                      {item.description}
                    </p>
                    <p>{item.amount} টাকা</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex justify-end font-bold text-lg font-fontBn">
          <p className="mr-6">Total: </p>
          <p>15200 টাকা</p>
        </div>
      </div>
    </div>
  );
};

export default Income;
