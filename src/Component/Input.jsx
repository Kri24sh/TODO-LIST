// import React, { useState } from "react";
// import { AiOutlinePlus } from "react-icons/ai";
// const Input = () => {
//     const [inputData, setinputData] = useState("");
//     const [itemData, setitemData] = useState([]);
//     let count = 0;
//     const addNewitem = () => {
//         if (inputData == "") {
//             count += 1;
//             console.log(count);
//             if (count >= 5) {
//                 alert(`SO MANY TRY TODO IS EMPTY `);
//                 count = 0;
//             }
//         } else {
//             setitemData([...itemData, inputData]);
//             setinputData("");
//             count=0;
//         }
//     };

//     return (
//         <div className="flex  flex-row p-4 justify-center ">
//             <input
//                 type="text"
//                 className="w-[80%] mx-4 p-3 focus:border-blue-500 overflow-hidden border-slate-900 text-xl h-16 rounded-xl"
//                 placeholder="Write Your TODO"
//                 value={inputData}
//                 onChange={(e) => setinputData(e.target.value)}
//                 />
//             <div
//                 className=" bg-white w-16 h-16 rounded-full  flex justify-center hover:bg-slate-400 items-center"
//                 onClick={addNewitem}
//                 >
//                 <AiOutlinePlus className=" text-4xl " />
//             </div>
            
//         </div>
        
//     );
// };

// export default Input;
