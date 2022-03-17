import { useParams } from "react-router-dom";

function EditDeckPage() {
  const { id } = useParams();

  return <main>{id}</main>;
}

export default EditDeckPage;
