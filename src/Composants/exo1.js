import React from "react";

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
    }
  ];

  return <div>
    {
      datas.map((datas, key) => <p key={key}> {key} - Je m'appelle <strong>{datas.nom}</strong> et j'ai <strong>{datas.age}</strong> ans</p>)
    }
  </div>;
}

export default Exo1;

// Comment avoir la key de chaque element ?