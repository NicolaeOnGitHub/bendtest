import React, { useEffect, useState } from "react";
import Area from "./Area";

export default function Areas() {
    const [areas, setAreas] = useState([]);

    const getAreas = async () => {
        const res = await fetch("areas.json");
        const data = await res.json();
        setAreas(data);
    };

    useEffect(() => {
        getAreas();
    }, []);

    return (
        <>
            {areas.map((area) => {
                return <Area key={area.areaId} area={area} />;
            })}
        </>
    );
}
