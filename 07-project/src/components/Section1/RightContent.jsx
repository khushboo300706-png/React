import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
console.log(props.users)
  return (
    <div className='h-full flex overflow-x-auto flex-nowrap gap-8 p-6 4 w-2/3'>
      {props.users.map(function(elem,idx){
        return <RightCard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default RightContent
