from flask import Flask, request, redirect, render_template
from FaceCheck.main import Detect

# FILE_STORAGE = "C:\Program\awdawd\path"

app = Flask(__name__, static_folder="../client/build/static", template_folder="../client/build")

@app.route("/")
def home(path):
  return render_template('index.html')

@app.route("/api/submit-student-image", methods=["POST"])
def submitStudentImage():
  """1) Send image to model
  2) Get response from model
  3) Redirect/Return response to frontend"""
  if request.method != "POST":
    return redirect("/", 400)
  imgFile = request.files["studentImage"]
  imgFile.save("./")
  # request.files["studentImage"].save("./random.jpg")
  # imgPath = "./random.jpg"
  return {"well": "lol"}


if __name__ == "__main__":
  app.run(debug=True)