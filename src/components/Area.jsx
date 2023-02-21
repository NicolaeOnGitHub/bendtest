import { useEffect, useState } from "react";

import ThingsGroupe from "./ThingsGroupe";
export default function Area({ area }) {
    const [things, setThings] = useState([]);

    const getThings = async () => {
        const res = await fetch("things.json");
        const data = await res.json();
        setThings(data);
    };

    useEffect(() => {
        getThings();
    }, []);

    let newThings = things.filter((el) => {
        return el.areaId === area.areaId;
    });

    const grouped = newThings.reduce(
        (group, thing) => {
            const { joinedWith } = thing;

            let parent = newThings.find((el) => {
                return el.id === joinedWith;
            });
            if (joinedWith !== null) {
                if (!group[joinedWith]) {
                    group[joinedWith] = [parent];
                }
                group[joinedWith].push(thing);
            } else if (!newThings.find((obj) => obj.joinedWith === thing.id)) {
                group.null.push(thing);
            }
            return group;
        },
        { null: [] }
    );

    const sortedResult = {
        ...grouped,
        null: grouped.null.sort((a, b) => a.id - b.id),
    };

    return (
        <div className="areas__list">
            <h1>{area.name}</h1>
            <div className="thingsGroups">
                {Object.keys(sortedResult).map((group) => {
                    return <ThingsGroupe key={group} things={sortedResult[group]} />;
                })}
            </div>
        </div>
    );
}
