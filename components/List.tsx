import React, { useEffect } from "react";

//Store
import { appDispatch, appSelector } from "@/store/hooks";
import { getBanner, deleteBanner } from "@/features/test";

function List({ user }: any) {
  //Store
  const dispatch = appDispatch();
  const { data } = appSelector((state) => state.teststore);
  var rows: any = data ?? [];
  console.log(rows);

  const Delete = (id: any) => {
    dispatch(deleteBanner(id)).then((result: any) => {
      dispatch(getBanner(''));
    });
  };
  return (
    <div>
      <ul>
        {rows.map((value: any) => (
          <li key={value.banner_id}>
            {value.topic}
            <button
              onClick={(e) => Delete(value.banner_id)}
              style={{ marginLeft: 20, marginBottom: 20 }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {user}
    </div>
  );
}

export default List;
