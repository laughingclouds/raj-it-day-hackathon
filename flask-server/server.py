from flask import Flask, request, redirect, render_template
from FaceCheck.main import Detect, Register
from FaceCheck.dataEntry import db

app = Flask(__name__, static_folder="../client/build/static",
            template_folder="../client/build")


@app.route("/")
def home(path):
    return render_template('index.html')


@app.route("/api/submit-student-image", methods=["POST"])
def submitStudentImage():
    """
    1) Send image to model
    2) Get response from model
    3) Redirect/Return response to frontend]
    """

    if request.method != "POST":
        return redirect("/", 400)

    imgFile = request.files["studentImage"]
    imgPath = f"./dump/{imgFile.filename}"
    imgFile.save(imgPath)
    result = Detect(imgPath)
    if result == "Unkown":
        return redirect(f"/notfound")
    else:
        return redirect(f"/{result}")


@app.route("/api/userget/<string:id>")
def userget(id: str):
    userData = db.selectUID(id)
    return {
        "id": userData[0],
        "name": userData[1],
        "address": userData[2],
        "cgpa": userData[3],
        "tenth": userData[4],
        "twelfth": userData[5],
        "remarks": userData[6],
        "phone": userData[7]
    }


@app.route("/api/userpost", methods=["POST"])
def userpost():
    db.insertValues(
        request.form["id"],
        request.form["name"],
        request.form["address"],
        request.form["cgpa"],
        request.form["tenth"],
        request.form["twelfth"],
        request.form["remarks"],
        request.form["phone"]
    )

    imgList = []
    for i in range(1, 6):
        imgFile = request.files[f"img{i}"]
        imgPath = f"./dump/{imgFile.filename}"
        imgFile.save(imgPath)
        imgList.append(imgPath)

    Register(request.form["id"], imgList)
    print(vals)

    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)
