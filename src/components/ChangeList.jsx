import React, { useState } from 'react'

export default function ChangeList({leftList, rightList}) {
    const [left, setLeft] = useState(leftList);
    const [right, setRight] = useState(rightList);

    const handleClick = () => {
        left.filter((item) => (item.checked));

        setRight([...right, ...left])
    }

    return (
        <div>
            <button onClick={handleClick}> Transform </button>
        </div>
    )
}
