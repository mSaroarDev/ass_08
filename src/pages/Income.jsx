import { useRef, useState } from 'react';
import AppNav from '../components/AppNav';

const Income = () => {

    const desVal=useRef();
    const amount=useRef();


    const [text, setText] = useState('');
    const [item, setItem] = useState([
        {
            description: desVal.value,
            amount: amount.value
        }
    ]);


    return (
        <div>
            <AppNav/>
            
            <div className="container">
                <h1 className=' text-2xl font-bold font-fontBn my-6 text-center'>আপনার উপার্জন যুক্ত করুন</h1>

                <div className=' grid grid-cols-2 py-8 gap-9'>
                    <div className=' bg-slate-100 p-6 rounded-lg'>
                        <h3 className=' py-3 font-fontBn font-bold italic'>উপার্জনের বর্ননা দিন</h3>
                        <label className=' font-fontBn' htmlFor="description">ঘটনা লিখুন</label><br />
                        <input ref={desVal} className='font-fontBn px-2 py-1 border-2 rounded border-gray-100 mb-3' type="text" placeholder='বর্ননা লিখুন' /><br />
                        <label className=' font-fontBn' htmlFor="amount">টাকার পরিমান লিখুন (ইংরেজীতে) </label><br />
                        <input ref={amount} className='font-fontBn px-2 py-1 border-2 rounded border-gray-100 mb-3' type="text" placeholder='100' /><br />
                        <button className="font-fontBn btn btn-active btn-neutral px-4 py-1">যুক্ত করুন</button>
                    </div>
                    <div>
                        <ul>
                            <li className='listItem font-fontBn text-md flex justify-between bg-slate-100 p-4 rounded-lg mb-4'>
                                <span className='cross'>x</span>
                                <p><span className='mr-2'><i className="fa-solid fa-angles-right"></i></span>রিয়েক্ট অ্যাপ বানানো বাবদ</p>
                                <p>10000 টাকা</p>
                            </li>

                            <li className='listItem font-fontBn text-md flex justify-between bg-slate-100 p-4 rounded-lg mb-4'>
                                <span className='cross'>x</span>
                                <p><span className='mr-2'><i className="fa-solid fa-angles-right"></i></span>রিয়েক্ট অ্যাপ বানানো বাবদ</p>
                                <p>5000 টাকা</p>
                            </li>

                            <li className='listItem font-fontBn text-md flex justify-between bg-slate-100 p-4 rounded-lg mb-4'>
                                <span className='cross'>x</span>
                                <p><span className='mr-2'><i className="fa-solid fa-angles-right"></i></span>রিয়েক্ট অ্যাপ বানানো বাবদ</p>
                                <p>200 টাকা</p>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className='flex justify-end font-bold text-lg font-fontBn'>
                    <p className='mr-6'>Total: </p>
                    <p>15200 টাকা</p>
                </div>

            </div>
        </div>
    );
};

export default Income;