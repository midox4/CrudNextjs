import EditData from "@/components/EditData";

const getDataById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/Datas/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditDataa({ params }) {
  const { id } = params;
  const { data } = await getDataById(id);
  const { title, description } = data;

  return <EditData id={id} title={title} description={description} />;
}