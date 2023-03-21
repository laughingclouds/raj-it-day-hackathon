import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ShowDetails() {
    let { id } = useParams();
    const [data, setData] = useState(false);
    useEffect(() => {
        fetch(`/api/userget/${id}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            });
    }, []);

    return (
        <>
            {
                data ?
                    <div className="pt-6">
                        <h2 className="text-2xl font-bold">{data.name}</h2>
                        <p>Lives in <span className="font-semibold">{data.address}</span></p>
                        <p>Scored <span className="font-semibold">{data.cgpa} CGPA</span></p>
                        <p><span className="font-semibold">{data.tenth}</span> in 10<sup>th</sup> standard and <span className="font-semibold">{data.twelfth}</span> in 12<sup>th</sup></p>
                        <p>Their mentor says this for them: <span className="font-semibold">{data.remarks}</span></p>
                        <p>You can call them on this number <span className="font-semibold">{data.phone}</span></p>
                    </div>
                    :
                    <></>
            }
        </>
    );
}