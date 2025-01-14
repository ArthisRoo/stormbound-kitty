import React from 'react'
import Link from '~/components/Link'
import FeedEntry from '~/components/FeedEntry'
import MemberList from '~/components/MemberList'

export default React.memo(function FeedPodcastEntry(props) {
  const name = props.displayName

  return (
    <FeedEntry icon='bubbles' date={props.date}>
      {name} has featured in
      {props.hosts.length > 1 ? (
        <>
          , alongside{' '}
          <MemberList members={props.hosts.filter(host => host !== name)} />,
        </>
      ) : null}{' '}
      an episode of the Brewed Sages podcast named{' '}
      <Link to='/brewed-sages'>{props.title}</Link> ({props.meta}
      ).
      <blockquote>{props.excerpt}</blockquote>
    </FeedEntry>
  )
})
