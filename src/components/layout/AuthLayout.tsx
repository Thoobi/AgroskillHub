import { Outlet, Link } from "react-router-dom";

export default function AuthLayout() {
  return (
    <section className="bg-[#f2f2e6] min-h-screen flex max-lg:flex-col flex-row items-stretch justify-between max-lg:justify-center font-jarkata w-full p-5 max-lg:py-5">
      <div className="flex w-1/2 rounded-lg max-md:hidden">
        <img
          src="/assets/bg-illus5.jpeg"
          alt="background"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>

      <div className="flex-1 justify-center items-center flex flex-col gap-10 rounded-lg p-5 max-lg:w-full max-lg:p-0 max-lg:py-5 max-lg:gap-5">
        <Link to={"/"} className="h-20 w-20 max-lg:h-10 max-lg:w-10">
          <img src={"/MASTASKILLZ.svg"} alt="the icon logo for the project" />
        </Link>
        <Outlet />
      </div>
    </section>
  );
}
