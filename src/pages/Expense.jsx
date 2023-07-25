import { useState } from "react";
import AppNav from '../components/AppNav';

const Expense = () => {
  const [expenseList, setExpenseList] = useState([
    {
      description: "হোস্টিং কেনা বাবদ",
      amount: 10000,
    },
    {
      description: "লাইভে আপলোড খরচ",
      amount: 200,
    },
  ]);

  const [newExpenseDesc, setNewExpenseDesc] = useState("");
  const [newExpenseAmount, setNewExpenseAmount] = useState("");

  const addExpense = () => {
    if (!newExpenseDesc || !newExpenseAmount) {
      return; // Do not add empty entries
    }

    const newExpense = {
      description: newExpenseDesc,
      amount: parseInt(newExpenseAmount),
    };

    setExpenseList([...expenseList, newExpense]);
    setNewExpenseDesc("");
    setNewExpenseAmount("");
  };

  const deleteExpense = (index) => {
    const deletedAmount = expenseList[index].amount;
    setExpenseList(expenseList.filter((_, i) => i !== index));
  };

  // Calculate the total price
  const totalExpense = expenseList.reduce((total, expense) => {
    return total + expense.amount;
  }, 0);

  return (
    <div>
      <AppNav/>
      
      <div className="container">
        <h1 className=' text-2xl font-bold font-fontBn my-6 text-center'>আপনার খরচ যুক্ত করুন</h1>

        <div className=' grid grid-cols-2 py-8 gap-9'>
          <div className=' bg-slate-100 p-6 rounded-lg'>
            <h3 className=' py-3 font-fontBn font-bold italic'>খরচের বর্ননা দিন</h3>
            <label className=' font-fontBn' htmlFor="description">ঘটনা লিখুন</label><br />
            <input
              className='font-fontBn px-2 py-1 border-2 rounded border-gray-100 mb-3'
              type="text"
              placeholder='বর্ননা লিখুন'
              value={newExpenseDesc}
              onChange={(e) => setNewExpenseDesc(e.target.value)}
            /><br />
            <label className=' font-fontBn' htmlFor="amount">টাকার পরিমান লিখুন (ইংরেজীতে) </label><br />
            <input
              className='font-fontBn px-2 py-1 border-2 rounded border-gray-100 mb-3'
              type="text"
              placeholder='100'
              value={newExpenseAmount}
              onChange={(e) => setNewExpenseAmount(e.target.value)}
            /><br />
            <button className="font-fontBn btn btn-active btn-neutral px-4 py-1" onClick={addExpense}>যুক্ত করুন</button>
          </div>
          <div>
            <ul>
              {expenseList.map((expense, index) => {
                return (
                  <li
                    key={index}
                    className='listItem font-fontBn text-md flex justify-between bg-slate-100 p-4 rounded-lg mb-4'
                  >
                    <span
                      className='cross'
                      onClick={() => deleteExpense(index)}
                    >
                      x
                    </span>
                    <p>
                      <span className='mr-2'>
                        <i className="fa-solid fa-angles-right"></i>
                      </span>
                      {expense.description}
                    </p>
                    <p>{expense.amount} টাকা</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className='flex justify-end font-bold text-lg font-fontBn'>
          <p className='mr-6'>Total: </p>
          <p>{totalExpense} টাকা</p>
        </div>
      </div>
    </div>
  );
};

export default Expense;
