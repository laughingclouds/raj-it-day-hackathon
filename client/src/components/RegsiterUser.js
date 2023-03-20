import { useState } from "react";

export default function RegisterUser() {
    const [hideForm, setHideForm] = useState({
        bool: true,
        txt: "Register?"
    });

    const toggleViewBtn = () => {
        if (hideForm.bool) {
            setHideForm({ bool: false, txt: "Cancel" })
        } else {
            setHideForm({ bool: true, txt: "Register?" })
        }
    }
    return (
        <>
            <button onClick={toggleViewBtn}>{hideForm.txt}</button>

            {
                hideForm.bool ?
                    <></>
                    :
                    <RegistrationForm />
            }
        </>
    );
}

function RegistrationForm() {
    return (
        <>
            <h2>Register Yourself</h2>

            <form action="/api/userpost" method="post" enctype="multipart/form-data">
                <div>
                    <label>ID</label>
                    <input required id="id" name="id" type="text" />
                </div>

                <div>
                    <label>Name</label>
                    <input required id="name" name="name" type="text" />
                </div>

                <div>
                    <label>Address</label>
                    <input required id="address" name="address" type="text" />
                </div>
                <div>
                    <label>CGPA</label>
                    <input required id="cgpa" name="cgpa" type="number" min={0} step={0.01} max={10}/>
                </div>

                <div>
                    <label>10<sup>th</sup>%</label>
                    <input required id="tenth" name="tenth" type="number" min={0} step={0.01} max={100} />
                </div>

                <div>
                    <label>12<sup>th</sup>%</label>
                    <input required id="twelfth" name="twelfth" type="number" min={0} step={0.01} max={100}/>
                </div>

                <div>
                    <label>Remarks</label>
                    <input required id="remarks" name="remarks" type="text" />
                </div>

                <div>
                    <label>Phone</label>
                    <input required id="phone" name="phone" type="text"/>
                </div>

                <div>
                    {[1, 2, 3, 4, 5].map(i =>
                        <div key={i}>
                            <label htmlFor={`img${i}`}>{`Img${i}`}</label>
                            <input required id={`img${i}`} name={`img${i}`} type="file" />
                        </div>)}
                </div>

                <button>Submit</button>
            </form>
        </>
    );
}