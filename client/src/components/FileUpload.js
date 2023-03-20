import { ICONS } from "../ICONS";

export default function FileUpload() {
  return (
    <form className="" action="/api/submit-student-image" method="post" enctype="multipart/form-data">
      <label className="label">
        <span className="label-text">Upload Image</span>
      </label>

      <div className="flex flex-row">
        <input type="file" id="studentImage" name="studentImage" className="file-input file-input-bordered" />
        <button>{ICONS["cloud-arrow-up"]}</button>
      </div>
    </form>
  );
}