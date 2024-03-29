import React from 'react'

const Sidebar = (props) => {
  return (
    <>
    {props.isOpen &&
      <div className="sidebar_overlay"onClick={()=>props.onClose()} ></div>
    }
    <div className={props.className? `${props.className } sidebar` : "sidebar"} style={{right:props.isOpen ? 0 : "-100%"}}>
       {props.onClose && <span className='sidebar_close' onClick={()=>props.onClose()}><i className="fa fa-times" aria-hidden="true"></i></span>}
       {props.children}
    </div>
    </>
  )
}

export default Sidebar