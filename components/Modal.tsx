/** @format */

import { findIndex, indexOf } from "lodash";
import React from "react";
import useSWR from "swr";

type Props = {
  currentCategory?: string;
};

function Modal({ currentCategory }: Props) {
  console.log(currentCategory);
  const { data, mutate } = useSWR("/api/category");
  console.log([...data]);
  const [currentSubCategory, setSubCurrentCategory] = React.useState("");
  let index = findIndex(data, { name: currentCategory });

  return (
    <>
      {/* <input type="checkbox" id="my-modal-2" className="modal-toggle" /> */}
      <div className="modal " id="my-modal-2">
        <div className="modal-box bg-white ">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>

          <div className="modal-action">
            <input
              type="text"
              placeholder="New Category"
              className="input input-bordered w-full max-w-xs bg-white"
              value={currentSubCategory}
              onChange={(e) => setSubCurrentCategory(e.target.value)}
            />
            <a
              className="btn bg-green-400 text-white"
              onClick={async () => {
                // update the local data immediately and revalidate (refetch)
                // NOTE: key is not required when using useSWR's mutate as it's pre-bound
                // mutate({
                //   ...data,
                //   subCategories: [...data.subCategories, currentSubCategory],
                // });
                let newData = [...data];

                console.log(index);
                // newData[index].subCategories.push(currentSubCategory);

                // mutate(newData, false);
              }}
            >
              Submit
            </a>
            <a href="#" className="btn bg-red-400 text-white">
              Close
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
