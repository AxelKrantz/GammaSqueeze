import { useEffect, useState } from "react";
import { getOptions } from "../Fetch/fetch";

export default function FrontPageComponent() {
  const [allOptions, setAllOptions] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(allOptions);
  }, [allOptions]);

  async function getData() {
    let response = await getOptions();
    setAllOptions(response.data);
  }

  if (allOptions == undefined) {
    return <p>loading...</p>;
  } else
    return (
      <div>
        <h2>FrontPage</h2>
        {allOptions.map((element) => (
          <p>{element.strikePrice}</p>
        ))}
      </div>
    );
}
