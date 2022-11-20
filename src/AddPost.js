import React, { useEffect, useState } from "react";
import LogOut from "./LogOut";
import axios from "axios";
import "./AddPost.css";

const AddPost = () => {
  const [input, setInput] = useState();
  const [display, setDisplay] = useState([]);
  const data = localStorage.getItem("token");
  // const [isEditItem,setIsEditItem]=useState(null)

  useEffect(() => {
    getData();
  }, []);
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  //   console.log(data);
  const addPostHandler = () => {
    const allItem = { id: new Date().getTime().toString(), name: input };
    setDisplay((item) => {
      return [...item, allItem];
    });

   
    addData(allItem.id);
    setInput("");
  };

  const addData = async (id) => {
    console.log(id);
    console.log("..", display);
    const response = await axios.post(
      `https://joblogin-7e035-default-rtdb.firebaseio.com/addpost/${id}.json/`,
      display
    );
    console.log(response);
  };

  const editHandler = async (i) => {
    console.log(i);
    const newUpdatedItem = display.find((item) => {
      return i === item.id;
    });

    setInput(newUpdatedItem.name);
    // setIsEditItem(i)
    delHandler(i);
  };

  const delHandler = async (i) => {
    setDisplay((item) => {
      return item.filter((arr) => {
        return i !== arr.id;
      });
    });
    const response = await axios.delete(
      `https://joblogin-7e035-default-rtdb.firebaseio.com/addpost/${i}.json/`
    );
    console.log(response);
  };

  const getData = async () => {
    const response = await axios.get(
      "https://joblogin-7e035-default-rtdb.firebaseio.com/addpost.json/"
    );
    const data = response.data;
    let xyz = [];
    for (const key in data) {
      const x = data[key];
      //  console.log(x)
      for (const keyy in x) {
        const y = x[keyy];
        for (const keyyy in y) {
          // console.log(y[keyyy].name)
          xyz.push({ id: y[keyyy].id, name: y[keyyy].name });
        }
      }
    }
    // console.log(xyz)
    setDisplay(xyz);
  };
  return (
    <div>
      {data && <LogOut />}
      <div className="new-expense__control">
        {data && (
          <input
            type="text"
            className="textInput"
            value={input}
            onChange={inputHandler}
          />
        )}
      </div>
      <br />
      <div className="new-expense">
        {data && <button onClick={addPostHandler}>Add Post</button>}
      </div>
      <br />
      <br />
      <div className="note">
        {display.map((item) => {
          return (
            <ul key={item.id}>
              <h3>{item.name}</h3>
              {data && (
                <button
                  className="btn"
                  onClick={() => {
                    editHandler(item.id);
                  }}
                >
                  Edit
                </button>
              )}
              {data && (
                <button
                  className="btn"
                  onClick={() => {
                    delHandler(item.id);
                  }}
                >
                  Del
                </button>
              )}
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default AddPost;
