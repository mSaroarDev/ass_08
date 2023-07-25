import { useRef, useState } from "react";
import AppNav from "../components/AppNav";

const Income = () => {
  const desc = useRef();
  const amount = useRef();
  const [inputArr, setInputArr] = useState([
   
  ]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addData = () => {
    const newDescription = desc.current.value;
    const newAmount = amount.current.value;
    if (!newDescription || !newAmount) {
      return; // Do not add empty entries
    }

    const newData = {
      description: newDescription,
      amount: parseInt(newAmount),
    };

    setInputArr((prevInputArr) => [...prevInputArr, newData]);
    setTotalPrice((prevTotal) => prevTotal + parseInt(newAmount));

    // Clear input fields after adding data
    desc.current.value = "";
    amount.current.value = "";
  };

  const deleteData = (index) => {
    const deletedAmount = inputArr[index].amount;
    setInputArr((prevInputArr) =>
      prevInputArr.filter((_, i) => i !== index)
    );
    setTotalPrice((prevTotal) => prevTotal - deletedAmount);
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
            />
            <br />
            <button onClick={addData}>যুক্ত করুন</button>
          </div>
          <div>
            <ul>
              {inputArr.map((item, ind) => {
                return (
                  <li
                    key={ind}
                    className="listItem font-fontBn text-md flex justify-between bg-slate-100 p-4 rounded-lg mb-4"
                  >
                    <span
                      className="cross"
                      onClick={() => deleteData(ind)}
                    >
                      x
                    </span>
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
          <p>{totalPrice} টাকা</p>
        </div>
      </div>
    </div>
  );
};

export default Income;
