import React, { useEffect } from 'react'
import { BsTrashFill } from 'react-icons/bs'
// import { AiFillEdit } from 'react-icons/ai'
const Todoli = (props) => {

    const deletData = (id, props) => {
        console.log(props)
        const updateitem = props.itemData.filter((element, ind) => {
            return ind != id;
        })

        props.setitem(updateitem);

    }

    const delall =  ()=>
    {
        props.setitem([]);
    }

    return (

        <div className='w-[100] flex  justify-center items-center   flex-col my-3'>
            {
                props.itemData.map((element, ind) => {
                    return (
                        <div key={ind} className='hover:bg-slate-400 text-3xl overflow-auto  my-3 text-white w-[100%] rounded-xl px-4 flex justify-between items-center bg-slate-600'>
                            <h3 className=' pb-2 overflow-hidden'>{element}</h3>

                            <div className='' >
                                <span className='flex flex-row items-center justify-start gap-2'>
                                    {/* <AiFillEdit className='text-black text 2xl z-10'/> */}
                                    <BsTrashFill className='text-black text-2xl z-10 cursor-pointer ' onClick={() => deletData(ind, props)} />
                                </span>
                            </div>
                        </div>
                        )
                })
            }

                <div><button className=' hover:scale-110 hover:bg-sky-400  h-10 w-full p-4 my-4 flex justify-center items-center rounded-2xl bg-sky-600' onClick={delall} >Delete All</button></div>

        </div>
    )
}

export default Todoli
