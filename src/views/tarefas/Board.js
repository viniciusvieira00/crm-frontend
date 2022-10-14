import React from "react";
import ReactDOM from "react-dom";
import data from "./data.json";
import Board from "react-trello";


const board = {
  lanes: [
    {
      id: 1,
      title: "Backlog",
      cards: [
        {
          id: 1,
          title: "Card title 1",
          label: "15 mins",
          description: "Card content"
        },
        {
          id: 2,
          title: "Card title 2",
          label: "15 mins",
          description: "Card content"
        },
        {
          id: 3,
          title: "Card title 3",
          label: "15 mins",
          description: "Card content"
        }
      ]
    },
    {
      id: 2,
      title: "Doing",
      cards: [
        {
          id: 9,
          title: "Card title 9",
          label: "15 mins",
          description: "Card content"
        }
      ]
    },
    {
      id: 3,
      title: "Q&A",
      cards: [
        {
          id: 10,
          title: "Card title 10",
          label: "15 mins",
          description: "Card content"
        },
        {
          id: 11,
          title: "Card title 11",
          label: "15 mins",
          description: "Card content"
        }
      ]
    },
    {
      id: 4,
      title: "Production",
      cards: [
        {
          id: 12,
          title: "Card title 12",
          description: "Card content"
        },
        {
          id: 13,
          title: "Card title 13",
          description: "Card content"
        }
      ]
    }
  ]
};

function Teste() {
  return (
    <>
      <h1>Board</h1>
      <Board style= {{height: '700px', overflow: 'auto', fontFamily: 'MontSerrat', fontSize: '20px', color : 'black', backgroundColor: 'white'}} data={board} editLaneTitle canAddLanes editable draggable />
    </>
  );
}

export default Teste
