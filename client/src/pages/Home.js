import { Routes, Route } from "react-router-dom";
import DetailsNotFound from "../components/DetailsNotFound";
import FileUpload from "../components/FileUpload";
import RegisterUser from "../components/RegsiterUser";
import ShowDetails from "../components/ShowDetails";

export default function Home() {

  return (
    <>
      <h1>FaceCheck</h1>

      <FileUpload />

      <Routes>
        <Route path="/:id" element={<ShowDetails />} />
        <Route path="/None" element={<DetailsNotFound />} />
      </Routes>
      
      <RegisterUser />
    </>
  );
}