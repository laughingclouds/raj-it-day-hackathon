from flask import Flask, request, redirect


app = Flask(__name__)

@app.route("/api/submit-student-image", methods=["POST"])
def submitStudentImage():
  """1) Send image to model
  2) Get response from model
  3) Redirect/Return response to frontend"""
  if request.method != "POST":
    return redirect("/", 400)
  request.files.get("studentImage", "").save("./random.jpg")
  return {"well": "lol"}
  

@app.route("/members")
def members():
  return {"members": [f"Member{i}" for i in range(1, 4)]}

if __name__ == "__main__":
  app.run(debug=True)