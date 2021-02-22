import React from 'react'
const Bar = () => {
  return (
    <>
      <div className='bar d-flex flex-row justify-content-between  py-3'>
        <div className='rightWing d-flex align-items-end'>
          10 / 25 / 50 / 100
        </div>
        <div className='rightWing d-flex align-items-end'>
          WPM: 45 / ACC: 95
        </div>
      </div>
    </>
  )
}

export default Bar
