
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const url = "http://localhost:3000/api/Datas"; // puting endpoint into variable (url)

const getDatas = async () => {
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      throw new Error("failed to fetchhh dataaa..."); // if there is no result 
    }
    return res.json();
  } catch (error) {
    console.log("error loading data ", error); // if there is error 
  }
};

const DataList = async () => {
  const { datas } = await getDatas();

  return (
    < >
      {datas.length === 0 ? (  // if there is no data show me message : no data 
        <div className="font-bold text-red-600  text-5xl text-center ">
          Upss Sorry !. No recording Founnnd !!.....
        </div>
      ) : ( // if there is data so mapping information 
        datas.map((t) => (
          <div
            key={t._id}
            className="   text-justify container mx-auto px-4 p-4 border  border-slate-600 my-3 flex justify-between gap-5 items-end "
          >
            <div>
              <h2 className="font-bold text-2xl">{t.title} </h2>
              <div  >{t.description}</div>
            </div>
            <div className=" flex w-fit gap-2">
              <RemoveBtn id={t._id}  />
              <Link href={`/editData/${t._id}`}>
                <HiPencilAlt size={24}  className="hover:scale-125 text-black" />
              </Link>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default DataList;
