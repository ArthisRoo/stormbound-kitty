import React from 'react'

export default React.memo(function Stack(props) {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 32 32'
      {...props}
    >
      <path d='M32 10l-16-8-16 8 16 8 16-8zM16 4.655l10.689 5.345-10.689 5.345-10.689-5.345 10.689-5.345zM28.795 14.398l3.205 1.602-16 8-16-8 3.205-1.602 12.795 6.398zM28.795 20.398l3.205 1.602-16 8-16-8 3.205-1.602 12.795 6.398z'></path>
    </svg>
  )
})
