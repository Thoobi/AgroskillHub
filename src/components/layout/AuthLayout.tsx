import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <section className="bg-[#f2f2e6] flex max-lg:flex-col height flex-row items-center h-screen justify-between max-lg:justify-center font-jarkata w-full p-5 max-lg:py-5">
      <div
        className="flex h-full max-lg:h-[400px] w-1/2 max-lg:w-full rounded-lg bg-cover bg-no-repeat bg-center max-md:hidden"
        style={{
          backgroundImage: "url('/assets/bg-illus5.jpeg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "contain",
          height: "100%",
        }}
      >
        <span className="flex flex-col items-start justify-start p-5 w-full h-full bg-black/10 text-white rounded-2xl max-md:hidden"></span>
      </div>
      <div className=" w-1/2 h-full justify-center items-center flex flex-col gap-5 rounded-lg p-5 max-lg:w-full max-lg:p-0">
        <Outlet />
      </div>
    </section>
  );
}
