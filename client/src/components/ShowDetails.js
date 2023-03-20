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
                    <>
                        <h2>{data.name}</h2>
                        <p>Lives in {data.address}</p>
                        <p>Scored {data.cgpa} CGPA</p>
                        <p>{data.tenth} in 10<sup>th</sup> standard and {data.twelvfth} in 12<sup>th</sup></p>
                        <p>Their mentor says this for them: {data.remarks}</p>
                        <p>You can call them on this number {data.phone}</p>
                    </>
                    :
                    <></>
            }
        </>
    );
}