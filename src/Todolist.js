import React, { useEffect, useState } from "react";
import styled from "styled-components";
const Wrapper = styled.section`
  .main {
    min-height: 40rem;
    max-height: 100%;
    max-width: 55%;
    margin: auto;
    border: 1.4px solid purple;
    margin-top: 2rem;
    padding-bottom: 1rem;
    background-color: transparent;
    // background-color: #0c356ab6;
    border-radius: 4px;
    // box-shadow: 10px 10px 8px #888888;
  }
  .eachItem {
    display: flex;
    max-width: 12rem;
    height: 24px;
    margin: auto;
    margin-top: 12px;
    border: none;
    border-radius: 2px;
    padding: 4px 4px;
    justify-content: space-between;
    background-color: black;
    color: white;
  }
  .showItems {
    height: 100%;
    width: 100%;
    justify-content: start;
    background-color: transparent;
    border: none;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-transform: capitalize;
  }
  .eachItem {
    width: 100%;
    height: 100%;
    min-width: 12rem;
    max-width: 19rem;
    padding: 8px 4px;
    border: none;
    // border-radius: 2px;
    padding: 8px 4px;
    display: flex;
    justify-content: start;
    align-self: center;
  }
  .todo-item {
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: start;
    // align-self:center;
  }

  .addItems {
    display: flex;
    min-width: 12rem;
    max-width: 19rem;
    margin: auto;
    padding: 8px 4px;
    border: none;
    border-radius: 2px;
    padding: 4px 4px;
    background-color: black;
    color: white;
  }
  input {
    margin: 2px 1px;
    border-radius: 2px;
    padding: 8px 4px;
    color: white;
    background-color: transparent;
    border: 0px solid;
    font-size: 1rem;
    width: 80%;
    text-transform: capitalize;
    margin-right: 8px;
  }
  .btn {
    display: flex;
    cursor: pointer;
  }
  .todo-btn,
  .todo-item {
    display: flex;
    justify-content: start;
    vertical-align: bottom;
    margin: 4px 4px;
    
  }
  .icon{
    color:#96EFFF;
  }
  .heading {
    display: flex;
    justify-content: center;
    font-weight: 900;
    color: black;
    font-size: 1.4rem;
    letter-spacing: 4px;
    text-decoration-line: underline;
    text-transform: uppercase;
  }
  .bottonPlus {
    cursor: pointer;
    padding: 10px 15px;
    border-radius: 2px;
    background-color: #96EFFF;
    color: black;
  }
  .clearall {
    padding: 10px 6px;
    width: 100%;
    color: white;
    font-size: 1rem;
    font-weight: 400;
    border-radius:4px;
    letter-spacing:3px;
    text-transform: uppercase;
    background-color: purple;
  }
  .btn {
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 600px) {
    .main {
      max-width: 97%;
      height: 100%;
    }
  }
`;

const Todolist = () => {
  const getLocalStorageData = () => {
    const lists = localStorage.getItem("mytodolist");
    if (lists) {
      return JSON.parse(lists);
    } else {
      return [];
    }
  };
  const [inputdata, setInputdata] = useState("");
  const [items, SetItems] = useState(getLocalStorageData());
  const [isEditItem, setIsEditItem] = useState("");
  const [toggle, setToggle] = useState(false);
  const addItem = () => {
    if (!inputdata) {
      alert("Plz enter something");
    } else if (inputdata && toggle) {
      SetItems(
        items.map((currElem) => {
          if (currElem.id === isEditItem) {
            return { ...currElem, name: inputdata };
          }
          return currElem;
        })
      );
      setInputdata("");
      setIsEditItem(null);
      setToggle(false);
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputdata,
      };
      SetItems([...items, myNewInputData]);
      setInputdata("");
    }
  };

  //   delete the item
  const deleteItem = (index) => {
    const updatedItems = items.filter((currElem) => {
      return currElem.id !== index;
    });
    SetItems(updatedItems);
  };

  //   edit the items
  const editItem = (index) => {
    const todo_item_edited = items.find((currElem) => {
      return currElem.id === index;
    });
    setInputdata(todo_item_edited.name);
    setIsEditItem(index);
    setToggle(true);
  };

  // delete all items
  const deleteAll = () => {
    SetItems([]);
    // alert("Function is called");
  };

  //   adding to local storage
  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(items));
  }, [items]);
  return (
    <Wrapper>
      {/* <div className="screen"> */}
      <div className="main">
        <div className="child-main">
          <div>
            <h4 className="heading">Add your task here</h4>
          </div>
          <div className="addItems">
            <input
              type="text"
              placeholder="Add Item ✍️"
              value={inputdata}
              onChange={(e) => setInputdata(e.target.value)}
            />
            <div className="bottonPlus">
            {toggle ? (
              <botton onClick={addItem}>
                <i className="fa fa-edit add-item plus-icon"></i>
              </botton>
            ) : (
              <botton onClick={addItem}>
                {" "}
                <i className="fa fa-plus add-item plus-icon"></i>{" "}
              </botton>
            )}
            </div>
          </div>
          <div className="showItems">
            {items.map((currElem) => {
              return (
                <div className="eachItem" key={currElem.id}>
                  <div className="todo-item">
                    <span>{currElem.name}</span>
                  </div>
                  <div className="btn">
                    <div className="todo-btn">
                      <i
                        className="fa fa-edit icon"
                        onClick={() => editItem(currElem.id)}
                      ></i>
                    </div>
                    <div className="todo-btn">
                      <i
                        className="fa fa-trash icon"
                        onClick={() => deleteItem(currElem.id)}
                      ></i>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="showItems eachItem">
            <button
              className="btn  effect04"
              data-sm-link-text="remove all"
              onClick={() => deleteAll()}
            >
              <span className="clearall">clear all</span>
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </Wrapper>
  );
};

export default Todolist;
