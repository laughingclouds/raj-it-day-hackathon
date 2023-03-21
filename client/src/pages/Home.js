import { Routes, Route } from "react-router-dom";
import DetailsNotFound from "../components/DetailsNotFound";
import FileUpload from "../components/FileUpload";
import RegisterUser from "../components/RegisterUser";
import ShowDetails from "../components/ShowDetails";

export default function Home() {

  return (
    <>
      <div className="grid place-items-center min-h-screen text-xl">
        <div>
          <header className="">
            <h1 className="text-4xl font-extrabold">FaceCheck</h1>
            <h2 className="text-base">Data fetching and facial recognition</h2>
          </header>

          <div className="divider"></div>

          <div className="flex flex-col">
            <FileUpload />

            <Routes>
              <Route path="/:id" element={<ShowDetails />} />
              <Route path="/None" element={<DetailsNotFound />} />
            </Routes>

            <div className="divider"></div>

            <RegisterUser />
          </div>
        </div>

      </div>
    </>
  );
}