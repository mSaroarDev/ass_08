import AppNav from "../components/AppNav";

const Homepage = () => {
  return (
    <div>
      <AppNav />
      <div className=" h-screen w-full flex items-center justify-center">
        <div>
          <div>
            <span className="react-logo">
              <span className="nucleo"></span>
            </span>
          </div>
          <h1 className=" font-fontBn font-bold text-3xl text-center">
            রিয়েক্ট দিয়ে তৈরী করা সাধারন একটি অ্যাপ। <br /> যা আপনার উপার্জন এবং
            ব্যয়কে ট্র‌্যাকিং করতে পারে।
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Homepage;