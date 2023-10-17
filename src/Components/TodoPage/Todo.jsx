import { useEffect, useState } from "react";
import useTodo from "../CustomHooks/useTodo";
import { Actions } from "../CustomHooks/ReducerActions";
import Card from "../Card/Card";
import { BsPlusLg } from "react-icons/bs";

const Todo = () => {
  const [InputField, setInputField] = useState({
    Task: "",
    Date: "",
  });

  const { ReducerState, ReducerDispatch } = useTodo();

  const InputChangeField = (e) => {
    const { name, value } = e.target;

    setInputField((inp) => {
      return {
        ...inp,
        [name]: value,
      };
    });
  };

  const AddTaskCard = (data) => {
    ReducerDispatch({
      type: Actions.ADD_TASK,
      payload: data,
    });
    setInputField({
      Task: "",
      Date: "",
    });
  };

  // console.log(ReducerState);
  useEffect(() => {
    return () => {
      if (ReducerState.length === 0 && !Array.isArray(ReducerState)) {
        return null;
      }
    };
  }, [ReducerState]);

  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-[50px] font-bold text-slate-500">TODO APP</h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center justify-center flex-col border-2 border-gray-600 rounded-xl shadow-2xl shadow-slate-400 w-[20vw] h-[50vh] mt-[2%] p-[5%]"
        >
          <div className="flex items-center justify-center flex-col mt-[25%]">
            <div className="text-center mt-[-45%]">
              <label
                htmlFor="NoteTask"
                className="font-extrabold text-gray-600"
              >
                Note Task:
              </label>
              <div className="text-center ">
                <input
                  type="text"
                  name="Task"
                  value={InputField.Task}
                  onChange={InputChangeField}
                  className="border-[2.5px] border-gray-400 w-[15vw] mt-[5%] rounded-[8px] p-[3%]"
                />
              </div>
            </div>
            <div className="text-center mt-[5%]">
              <label htmlFor="Date" className="font-extrabold text-gray-600">
                Date:
              </label>
              <div>
                <input
                  type="date"
                  name="Date"
                  value={InputField.Date}
                  onChange={InputChangeField}
                  className="border-[2.5px] w-[15vw] mt-[5%] border-gray-400 rounded-[8px] p-[3%]"
                />
              </div>
            </div>
          </div>
          <div>
            <button
              className="border-[2px]  mt-[10%] w-[3vw] h-[5vh] rounded-[10px] bg-green-400 text-white flex items-center justify-center"
              onClick={() => AddTaskCard(InputField)}
            >
              <BsPlusLg className="text-center" size={30} />
            </button>
          </div>
        </form>
        <div className="grid items-center justify-center mt-16 grid-cols-3 gap-y-8 gap-x-[15px]">
          {Array.isArray(ReducerState) &&
            ReducerState.map((data, index) => {
              return (
                <Card
                  stateData={data}
                  key={index}
                  ReducerDispatch={ReducerDispatch}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Todo;
