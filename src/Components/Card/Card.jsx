import { useState } from "react";
import { Actions } from "../CustomHooks/ReducerActions";
// import useTodo from "../CustomHooks/useTodo";
import { BsPen, BsTrash3 } from "react-icons/bs";

const Card = ({ stateData, ReducerDispatch }) => {
  const [IsEditing, setIsEditing] = useState(false);

  function DeleteTask(id) {
    ReducerDispatch({
      type: Actions.DELETE_TASK,
      payload: { id },
    });
  }

  const EditData = (data) => {
    ReducerDispatch({
      type: Actions.EDIT_TASK,
      payload: data,
    });
  };

  return (
    <>
      <div className="w-[10vw]  border-[2px] h-[10vw] rounded-lg bg-gray-200 border-slate-600 ml-[10em] p-[2%] overflow-y-scroll overflow-x-scroll">
        <div>
          {!IsEditing ? (
            stateData.Task
          ) : (
            <input
              type="text"
              name="TaskField"
              className="mt-2 border-[2px] border-slate-300 rounded-md"
              value={stateData.Task}
              onChange={(e) =>
                EditData({
                  ...stateData,
                  Task: e.target.value,
                })
              }
            />
          )}
        </div>
        <div>
          {!IsEditing ? (
            stateData.Date
          ) : (
            <input
              type="date"
              name="DateField"
              className="mt-2 border-[2px] border-slate-300 rounded-md"
              value={stateData.Date}
              onChange={(e) =>
                EditData({
                  ...stateData,
                  Date: e.target.value,
                })
              }
            />
          )}
        </div>
        <div>
          <div>
            <button
              className="mt-2 w-[20px] h-[20px] text-center rounded-[50%] bg-[rgb(244,78,78)] p-[2px] border-[1px] border-slate-400"
              onClick={() => DeleteTask(stateData.id)}
            >
              <BsTrash3 />
            </button>
          </div>
          <div>
            <button
              onClick={() => setIsEditing((edit) => !edit)}
              className="w-[20px] h-[20px] text-center rounded-[50%] bg-[rgb(170,76,248)] p-[2px] border-[1px] border-slate-400"
            >
              <BsPen />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
