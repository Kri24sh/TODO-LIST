import React, { useEffect, useState } from 'react'
import Todoli from './Component/Todoli'
import { AiOutlinePlus } from "react-icons/ai";


    const getlocal =()=>
    {
        let list = localStorage.getItem('list');

        if(list)
        {
            return JSON.parse(localStorage.getItem('list'));  
        }
        else
        {
            [];
        }
    }


const App = () => {

    const [inputData, setinputData] = useState("");
    const [itemData, setitemData] = useState(getlocal());
    let count = 0;
    const addNewitem = () => {
        if (inputData == "") {
            count += 1;
            // console.log(count);
            if (count >= 5) {
                alert(`SO MANY TRY TODO IS EMPTY `);
                count = 0;
            }
        } else {
            setitemData([...itemData, inputData]);
            setinputData("");
            count=0;
        }
    };

        useEffect(()=>{
            localStorage.setItem('list' , JSON.stringify(itemData));
        },[itemData]) 


    return (
        <div className=' h-[100vh] overflow-auto w-full bg-slate-800'>

            <div className=' bg-slate-800 w-full h-full  flex p-10 justify-center'>
                <div className=' w-[80%] h-[100vh] bg-slate-800  rounded-3xl flex flex-col'>

                    <div>
                        <h1 className=' text-white text-center font-bold text-4xl my-4 mx-auto overflow-hidden'>MY TODO LIST</h1>
                    </div>

                    <div>

                        <div className="flex overflow-auto flex-row p-4 justify-center ">
                            <input
                            id='1'
                                type="text"
                                className="w-[80%] mx-4 p-3 focus:border-blue-500 overflow-hidden border-slate-900 text-xl h-16 rounded-xl"
                                placeholder="Write Your TODO"
                                value={inputData}
                                onChange={(e) => setinputData(e.target.value)}
                            />
                            <div
                            title='Add'
                                className=" bg-white w-16 h-16 overflow-auto rounded-full cursor-pointer flex justify-center hover:bg-slate-400 items-center"
                                onClick={addNewitem}
                            >
                                <AiOutlinePlus className=" text-4xl " />
                            </div>

                        </div>

                    </div>

            <Todoli  itemData = {itemData} setitem = {setitemData} />
            
                </div>
            </div>



        </div>
    )
}

export default App
