import React from 'react'
import Link from '~/components/Link'
import FeedEntry from '~/components/FeedEntry'
import MemberList from '~/components/MemberList'
import { CATEGORIES } from '~/constants/guides'

export default React.memo(function FeedGuideEntry(props) {
  const category = CATEGORIES[props.category].name.short.toLowerCase()
  const prefix = /^[aeiou]/.test(category) ? 'an' : 'a'
  const name = props.authors.find(author => author.toLowerCase() === props.user)

  return (
    <FeedEntry icon='compass' date={props.date}>
      {name} has written
      {props.authors.length > 1 ? (
        <>
          , alongside{' '}
          <MemberList
            members={props.authors.filter(author => author !== name)}
          />
          ,
        </>
      ) : null}{' '}
      {prefix} {category} guide called{' '}
      <Link to={'/guides/' + props.slug}>{props.name}</Link>.
      <blockquote>{props.excerpt}</blockquote>
    </FeedEntry>
  )
})
