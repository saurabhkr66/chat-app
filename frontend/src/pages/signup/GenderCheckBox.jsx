import React from 'react'

function GenderCheckBox() {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label className={'label gap-2 cursor-pointer'}>
                <span className='label-text'>male</span>
                <input type='checkbox'className='border-slate-900'/>
            </label>
        </div>
        <div className='form-control'>
            <label className={'label gap-2 cursor-pointer'}>
                <span className='label-text'>female</span>
                <input type='checkbox'className='border-slate-900'/>
            </label>
        </div>
    </div>
  )
}

export default GenderCheckBox