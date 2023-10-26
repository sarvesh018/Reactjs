import React, { useState } from "react";

export default function MpveItems() {
  const [leftList, setLeftList] = useState([
    { id: 1, name: "Coffee", checked: false },
    { id: 2, name: "Milk", checked: false },
    { id: 3, name: "Sugar", checked: false },
  ]);
  const [rightList, setRightList] = useState([
    { id: 4, name: "Cold-Coffee", checked: false },
    { id: 5, name: "Ice-Tea", checked: false },
    { id: 6, name: "Icecream", checked: false },
  ]);

  //function to handle checked items and update the list
  const handleCheck = (list, setList, itemID) => {
    const updateList = list.map((item) => {
      if (item.id === itemID) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setList(updateList);
  };

  //Function to move items from left to right and vice versa
  const moveItems = (sourceList, setSourceList, targetList, setTargetList) => {
    const itemsToMove = sourceList.filter((item) => item.checked);

    setSourceList(sourceList.filter((item) => !item.checked));
    setTargetList([
      ...targetList,
      ...itemsToMove.map((item) => ({ ...item, checked: false })),
    ]);
  };

  return (
    <div>
      <div flex items-center justify-center>
        <div className="flex flex-row gap-12">
          <div>
            <h1 className="mb-8">List 1</h1>
            <div>
              <div className="py-2 flex flex-col gap-2 items-center justify-center">
                {leftList.map((items) => (
                  <label>
                    <ul key={items.id}>
                      <input
                        className="mx-1"
                        type="checkbox"
                        checked={items.checked}
                        onChange={() =>
                          handleCheck(leftList, setLeftList, items.id)
                        }
                      />
                      {items.name}
                    </ul>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-8">
            {/**Button to Shift Items to RIGHT */}
            <button
              className="bg-[#545454] hover:bg-[#363636]"
              onClick={() =>
                moveItems(leftList, setLeftList, rightList, setRightList)
              }
            >
            {"⇛"}
            </button>

            {/**Button to Shift Items to LEFT */}
            <button
              className="bg-[#545454] hover:bg-[#363636]"
              onClick={() =>
                moveItems(rightList, setRightList, leftList, setLeftList)
              }
            >
            {"⇚"}
            </button>
          </div>
          <div>
            <h1 className="mb-8">List 2</h1>
            <div>
              <div className="py-2 flex flex-col gap-2 items-center justify-center">
                {rightList.map((items) => (
                  <label>
                    <ul key={items.id}>
                      <input
                        className="mx-1"
                        type="checkbox"
                        checked={items.checked}
                        onChange={() =>
                          handleCheck(rightList, setRightList, items.id)
                        }
                      />
                      {items.name}
                    </ul>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
