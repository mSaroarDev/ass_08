import AppNav from "../components/AppNav";

const Error = () => {
  return (
    <div>
      <AppNav />
      <div className="mt-[-80px] h-screen w-full flex items-center justify-center">
        <div className="text-center">
          <p className=" text-6xl mb-6 font-bold">404 :(</p>
          <p className=" text-lg">This page is not found!</p>
        </div>
      </div>
    </div>
  );
};

export default Error;
