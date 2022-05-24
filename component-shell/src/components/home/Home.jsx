import React, { useEffect, useState } from "react";
import { getHomeData } from "../../../../authentication-shell/src/services/service";

export default function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    getHomeData().then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <h1 className="text-white text-center">Boiler-plate for micro frontend </h1>
      {data && <h1>{data}</h1>}
    </div>
  );
}
