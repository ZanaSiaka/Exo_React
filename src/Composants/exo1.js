import React, { useState, useEffect } from "react";
import axios from "axios";

function Exo1() {
  const datas = [
    {
      nom: "Ezechias",
      age: 24,
    },

    {
      nom: "Zana",
      age: 19,
    },

    {
      nom: "Sigata",
      age: 21,
    },

    {
      nom: "Ilham",
      age: 25,
    },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setData(response.data);
      // console.log(data)
    };
    getData();
  }, []);

  return (
    <div>
      {datas.map((datas, key) => (
        <p key={key}>
          {" "}
          {key} - Je m'appelle <strong>{datas.nom}</strong> et j'ai{" "}
          <strong>{datas.age}</strong> ans
        </p>
      ))}
      {/* {
        data.map((datas,key)=>(
          {
          <div key={key}> {datas.title} </div>

        )
        })
      } */}
      {
        console.log(data)
      }

      {data.map((datas, key) => (
        <table>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
          <tr>
            <td>{datas.id}</td>
            <td> {datas.title} </td>
            <td>{datas.completed === "false" ?  "Faux" : "Vrai"}</td>
          </tr>
        </table>
      ))}
    </div>
  );
}

export default Exo1;

// Comment avoir la key de chaque element ?
