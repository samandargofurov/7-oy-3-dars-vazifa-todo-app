import { PiTrashSimple } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import "./App.css";

function App() {
  const todo = useRef();

  document.body.style.backgroundColor = "#0D0714";

  const dispatch = useDispatch();

  const validate = () => {
    return true;
  };

  function handleClick(e) {
    e.preventDefault();

    const isValid = validate();

    if (isValid) {
      const todo = {
        todo: todo.current.value,
        id: Date.now(),
      };

      dispatch({ type: "TODO_ADD" });
    }
  }

  return (
    <>
      <div className="container mx-auto w-1/2">
        <div
          className="p-10 mt-10 rounded-xl"
          style={{ backgroundColor: "#1D1825" }}
        >
          <div className="flex gap-3 items-center justify-center">
            <input
              ref={todo}
              className="outline-none bg-transparent border border-violet-800 w-4/6 rounded-lg py-2 px-3 text-white"
              type="text"
              placeholder="Add a new task"
            />
            <span
              onClick={handleClick}
              className="cursor-pointer bg-violet-800 py-1 px-1 rounded-lg"
              style={{ backgroundColor: "#9E78CF" }}
            >
              <FaPlus className="text-white text-3xl" />
            </span>
          </div>

          <div className="pl-20 pr-20 mt-10">
            <h3 className="text-white mb-5 text-md">Tasks to do - 1</h3>
            <div className="cards flex flex-col gap-4">
              <div
                className="card flex justify-between px-5 py-3 rounded-lg"
                style={{ backgroundColor: "#15101C" }}
              >
                <label htmlFor="text" style={{ color: "#9E78CF" }}>
                  To study React fundamentals
                </label>
                <div className="flex gap-2 items-center">
                  <input type="checkbox" name="text" id="text" />
                  <span className="cursor-pointer">
                    <PiTrashSimple
                      className="text-2xl"
                      style={{ color: "#9E78CF" }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
