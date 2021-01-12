import React, { useState } from 'react'
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa'
import data from './data'
import './Preview.css'

const SIngleImage = ({ind,setClic}) => {
    const [indexs,setIdexs] =useState(ind)
    const {img,name} = data[indexs]

    console.log(data[indexs])

     const changevalue=(val)=>{
         
        //last index er besi hle 0 te jbe
         if(val > data.length -1){
             return 0
         }
         //0 theke kom hle last index e jbe
         if(val < 0){
             return data.length -1
         }
         //err thakle ja tai thakbe
         return val;
     }
    const leftmove = ()=>{
        setIdexs(()=>{
            return changevalue(indexs-1)
        })
        console.log(indexs)
    }
    const rightmove = ()=>{
        setIdexs(()=>{
            return changevalue(indexs+1)
        })
        console.log(indexs)
    }
    const closebtn=()=>{
        setClic(false)
    }
    return (
        // just want to show an image thats why i don't use map bcz it shows all images one by one
       
        <div className='smsg'>
            <div className='previewImage'>
                <p className='xcross' onClick={closebtn}>X</p>
                <span onClick={leftmove}><FaChevronCircleLeft className='rightarrow'/></span>  
                <img src={img} alt={name}/>
                <span onClick={rightmove}><FaChevronCircleRight className='leftarrow'/></span>
            </div>
        </div>
    )
}

export default SIngleImage
