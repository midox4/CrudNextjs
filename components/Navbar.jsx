import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <h2 className="  hover:scale-125 mt-20 flex flex-auto font-bold text-green-700 justify-center cursor-pointer">
        NextJs 13 Crud operation With MongoDB DataBase
      </h2>
      <nav className="mt-10  mb-20 flex justify-between items-center bg-cyan-500 px-2 py-3">
        <Link className="text-white font-bold" href={"/"}>
          {" "}
          HA.Crud.Nextjs
        </Link>
        <Link
          className="hover:scale-125 mx-2 text-white  bg-lime-500   font-bold rounded-lg p-2  hover:bg-sky-700 "
          href={"/addData"}
        >
          {" "}
          Add Data
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
