import React from 'react'

export default React.memo(function Template(props) {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 32 32'
      {...props}
    >
      <path d='M12 6h4v2h-4zM18 6h4v2h-4zM28 6v8h-6v-2h4v-4h-2v-2zM10 12h4v2h-4zM16 12h4v2h-4zM6 8v4h2v2h-4v-8h6v2zM12 18h4v2h-4zM18 18h4v2h-4zM28 18v8h-6v-2h4v-4h-2v-2zM10 24h4v2h-4zM16 24h4v2h-4zM6 20v4h2v2h-4v-8h6v2zM30 2h-28v28h28v-28zM32 0v0 32h-32v-32h32z'></path>
    </svg>
  )
})
