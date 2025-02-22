import React from 'react'
import Page from '~/components/Page'

export default React.memo(function ReleaseNotes(props) {
  return (
    <Page
      title={props.title}
      description={props.excerpt}
      author='Kitty'
      image={props.background}
      action={{ to: '/releases', children: 'Back to releases' }}
      meta={'Official · ' + props.date}
      background={props.background}
      ratio={props.ratio}
      withAvif={typeof props.withAvif === 'undefined' ? true : props.withAvif}
      isEditorialContent
      withDropCap
    >
      {props.children}
    </Page>
  )
})
