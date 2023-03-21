export default function RegisterUser() {
    return (
        <>
            <label htmlFor="registrationFormModal" className="font-bold">Register?</label>
            <input type="checkbox" id="registrationFormModal" className="modal-toggle" />
            <RegistrationFormModal />
        </>
    );
}

function RegistrationFormModal() {
    return (
        <>
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="registrationFormModal" className="btn btn-sm btn-circle absolute right-2 top-2">X</label>
                    <h2 className="font-bold">Register Yourself</h2>

                    <form action="/api/userpost" method="post" enctype="multipart/form-data">
                        <input type="text" placeholder="ID" required id="id" name="id" className="input input-bordered input-accent w-full mt-2 max-w-xs" />
                        <input type="text" placeholder="Name" required id="name" name="name" className="input input-bordered input-accent w-full mt-2 max-w-xs" />
                        <input type="text" placeholder="Address" required id="address" name="address" className="input input-bordered input-accent w-full mt-2 max-w-xs" />
                        <input type="number" placeholder="CGPA" required id="cgpa" name="cgpa" min={0} step={0.01} max={10} className="input input-bordered input-accent w-full mt-2 max-w-xs" />
                        <input placeholder="10th percentage" required id="tenth" name="tenth" type="number" min={0} step={0.01} max={100} className="input input-bordered input-accent w-full mt-2 max-w-xs" />
                        <input placeholder="12th percentage" required id="twelfth" name="twelfth" type="number" min={0} step={0.01} max={100} className="input input-bordered input-accent w-full mt-2 max-w-xs" />
                        <input placeholder="Remarks" required id="remarks" name="remarks" type="text" className="input input-bordered input-accent w-full mt-2 max-w-xs" />
                        <input type="text" placeholder="Phone" required id="phone" name="phone" className="input input-bordered input-accent w-full mt-2 max-w-xs" />
                        <div>
                            {[1, 2, 3, 4, 5].map(i =>
                                <div key={i}>

                                    <label className="label" htmlFor={`img${i}`}><span className="label-text">{`Image ${i}`}</span></label>
                                    <input required id={`img${i}`} name={`img${i}`} type="file" className="file-input file-input-bordered" />
                                </div>)}
                        </div>

                        <button className="btn mt-4">Submit</button>
                    </form> 
                </div>
            </div>
        </>
    );
}

