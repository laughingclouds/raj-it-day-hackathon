export default function FileUpload() {
  return (
    <form action="/api/submit-student-image" method="post" enctype="multipart/form-data">
      <label htmlFor="studentImage">Upload Image</label>
      <input type="file" id="studentImage" name="studentImage" />

      <button>Submit</button>
    </form>
  );
}