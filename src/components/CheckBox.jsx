import React, { useState } from "react";
import ChangeList from "./ChangeList";

export default function CheckBox() {
  const leftList = [
    {id: 1, name: "Coffee", checked: false},
    {id: 2, name:"Milk", checked: false},
    {id: 3, name:"Sugar", checked: false}
  ];
  const rightList = [
    {id: 1, name: "Cold-Coffee", checked: false},
    {id: 2, name:"Ice-Tea", checked: false},
    {id: 3, name:"Icecream", checked: false}
  ];

  return (
    <div>
      <div flex items-center justify-center>
        <div className="flex flex-row gap-12">
          <div>
            <h1 className="mb-8">List 1</h1>
            <div>
              <div className="py-2 flex flex-col gap-2 items-center justify-center">
                {leftList.map((items) => (
                  <ul key={items.id}>
                    <input type="checkbox"/>
                    {items.name}
                  </ul>
                ))}
              </div>
              <ChangeList left={leftList} right={rightList}/>
              <div className="py-2 flex flex-col gap-2 items-center justify-center">
                {rightList.map((items) => (
                  <ul key={items.id}>
                    <input type="checkbox"/>
                    {items.name}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
