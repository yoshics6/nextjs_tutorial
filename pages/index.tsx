import React, { useState, useEffect } from "react";
import List from "@/components/List";

//Store
import { appDispatch, appSelector } from "@/store/hooks";
import { getBanner } from "@/features/test";

function index(props: any) {
  // const dataProps = props.data.data;
  const [user, setUser] = useState("Yo");
  const [manager, setManager] = useState("");

  //Store
  const dispatch = appDispatch();
  useEffect(() => {
    dispatch(getBanner(''));
  }, [user]);

  return (
    <div>
      <List user={user}></List>
      <p>{user}</p>
      <button onClick={(e) => setUser("New")}>Change Name</button>
    </div>
  );
}

// export const getServerSideProps: any = async () => {
//   const url = process.env.NEXT_PUBLIC_BASE_URL_API;
//   const res = await fetch(`${url}/testapi/lists`);
//   const data = await res.json();
//   return { props: { data } };
// };

export default index;
