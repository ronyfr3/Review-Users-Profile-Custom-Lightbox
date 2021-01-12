import React, { useState } from 'react'
import data from './data'
import './Images.css'
import SIngleImage from './SIngleImage'


const AllContent = () => {
    const [value]=useState(data)
    const [ind,setind] = useState(0)
    const [clic,setClic] = useState(false)
 
    const handleclick=(i,item)=>{
         setClic(!clic)
         setind(i)
        }
        
    return (
        <div className='wrapper'>
              {
                value.map((item,i)=>{
                    const {name,img,info,id} = item
                    return(
                            <div key={id} className='images'>
                                    <p>Name: {name}</p>
                                    <img src={img} alt={name} onClick={()=>handleclick(i)}/>
                                    <p className='infotext'>{info}</p>  
                            </div>
                     
                    )
                })}
                {
                    clic && <SIngleImage 
                                setClic={setClic}
                                ind={ind}/>
                }
        </div>
    )
}

export default AllContent
