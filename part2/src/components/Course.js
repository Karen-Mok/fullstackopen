import React from 'react'

const Course =({name,parts}) => {
    /*
    const total = parts.reduce((s, p) => {
      console.log('what is happening', s, p)
      return s.exercises+p.exercises; //这样写不对，一开始s,p都是js对象，但第二个s就是纯数了，没有属性了。
    })*/
  
    const total = parts.map(part=>part.exercises).reduce((s, p) => {  //先把对象数组转换为纯数数组
      console.log('what is happening', s, p)  //s暂存求和结果,p指向下一个元素
      return s+p;
    })
  
    return(
      <div>
        <h2>{name}</h2>
        {parts.map(
          part =>(<p key={part.id}>{part.name} {part.exercises}</p>) 
        )}
  
        <p><strong>total of {total} exercises</strong></p>
      </div>
    )
  }

export default Course