import React from 'react'

const Sidebar = (props) => {
  return (
    <div className={props.className? `${props.className } sidebar` : "sidebar"} style={{right:props.isOpen ? 0 : "-100%"}}>
       {props.onClose && <span className='sidebar_close' onClick={()=>props.onClose()}><i class="fa fa-times" aria-hidden="true"></i></span>}
       {props.children}
    </div>
  )
}

export default Sidebar