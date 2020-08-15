import React from 'react'
import Article from '../Article'
import Notice from '../Notice'
import PageMeta from '../PageMeta'
import Timeline from '../Timeline'
import Title from '../Title'
import { Coins, Stones, Rubies } from '../Resource'

const TIMELINE = [
  {
    date: new Date(2020, 9, 1),
    title:
      'The registration opens and participants get to fill the form to enter the tournament.',
  },
  {
    date: new Date(2020, 9, 7),
    title:
      'The registration closes and the brackets are being composed by the organisers.',
  },
  {
    date: new Date(2020, 9, 8),
    title: 'The group stage starts and participants start battling each other.',
  },
  {
    date: new Date(2020, 9, 15),
    title: 'The group stage ends and the final round is being layed down.',
  },
  {
    date: new Date(2020, 9, 16),
    title: 'The final stage starts and participants start battling each other.',
  },
  {
    date: new Date(2020, 9, 22),
    title: 'The final stage ends and the winners are announced.',
  },
  {
    date: new Date(2020, 9, 23),
    title: 'Tournament ends and rewards are being sent to the winners.',
  },
]

export default React.memo(function TournamentOddEven(props) {
  return (
    <Article
      title='Odd Tournament'
      authors={['Kitty', 'Derk']}
      backLink={{ to: '/', children: 'Home' }}
      readingTime='In preparation'
      noDropCap
    >
      <p>
        The Odd Tournament is organised by Derk (derk#7109) and Kitty
        (kitty#1909), with help from Arthis (arthisroo#7189).
      </p>

      <ol style={{ columns: '16em' }}>
        <li>
          <a href='#introduction'>Introduction</a>
        </li>
        <li>
          <a href='#code-of-conduct'>Code of Conduct</a>
        </li>
        <li>
          <a href='#timeline'>Timeline</a>
        </li>
        <li>
          <a href='#rewards'>Rewards</a>
        </li>
        <li>
          <a href='#banned-cards'>Banned cards</a>
        </li>
        <li>
          <a href='#deck-changes'>Deck changes</a>
        </li>
      </ol>

      <div style={{ color: 'var(--light-ironclad)' }}>
        <Notice>
          If you stumble upon this page before it is officially announced,
          please keep it for yourself. A lot of work goes into making this
          tournament nice, and I’d like it not to be spoiled.
        </Notice>
      </div>

      <Title id='introduction'>Introduction</Title>
      <p>
        The concept of the Odd Tournament relies on using only cards whose mana
        cost is odd, or only cards whose mana cost is even (token cards
        excluded). This sole restriction has a few consequences for deck making:
      </p>
      <ul>
        <li>
          By eliminating essentially half the cards of the Stormbound
          collection, the usual efficient combos (Archdruid Earyn + Gift of the
          Wise, Doctor Mia + Trueshot Post/Siege Assembly, Rain of Frogs + Prime
          Oracle Bragda…) are going to be less prominent or downright impossible
          to compose.
        </li>
        <li>
          At least one turn out of two is going to lead to some mana waste, for
          both players equally. This might make for some uncomfortable turns,
          that’s part of the deal.
        </li>
        <li>
          Deck building skills, like in any tournament, is going to be essential
          and will hopefully lead to some unseen decks.
        </li>
      </ul>

      <Title id='code-of-conduct'>Code of Conduct</Title>
      <p>
        In the interest of fostering an open and welcoming environment, we as
        organisers pledge to make participation in our tournament a
        harassment-free experience for everyone, regardless of their identity.
      </p>
      <p>
        No toxic behaviour of any kind will be tolerated, and the organisers
        reserve themselves the rights to disqualify participants contributing to
        a hostile environment, as well as revoking access to said players from
        all tournament-related material.
      </p>
      <p>Participants should be kind and respectful towards one another.</p>

      <Title id='timeline'>Timeline</Title>
      <Timeline items={TIMELINE} />

      <Title id='rewards'>Rewards</Title>
      <p>The rewards go as follow:</p>
      <ol>
        <li>
          The tournament winner is awarded{' '}
          <span className='Highlight'>Mirz’ Stash</span>:{' '}
          <Coins amount='1000' />, <Rubies amount='80' /> and{' '}
          <Stones amount='15' />.
        </li>
        <li>
          The tournament runner-up is awarded{' '}
          <span className='Highlight'>Tegor’s Loot</span>:{' '}
          <Coins amount='600' />, <Rubies amount='60' /> and{' '}
          <Stones amount='10' />.
        </li>
        <li>
          The tournament third-place finisher is awarded{' '}
          <span className='Highlight'>Bragda’s Wisdom</span>:{' '}
          <Coins amount='300' />, <Rubies amount='40' /> and{' '}
          <Stones amount='5' />.
        </li>
      </ol>

      <p>
        Additionally, the top-performing player of each group during the group
        stage will be rewarded with a random legendary card. In case of a{' '}
        <span className='Highlight'>flawless victory</span> (all matches won),
        they get 2 legendary cards.
      </p>

      <Title id='banned-cards'>Banned Cards</Title>

      <p>To be defined.</p>

      <Title id='deck-changes'>Deck Changes</Title>
      <p>The basic rules for deck changes are as follow:</p>

      <ul>
        <li>
          Every player is granted one deck change for the tournament (see below
          for additional circumstances).
        </li>
        <li>
          At no point during the tournament can the faction be changed, so
          participants should pick their faction wisely.
        </li>
        <li>
          A deck change can replace up to 4 cards. This implies it is not
          possible to go from an even deck to an odd deck and vice versa.
        </li>
      </ul>
      <p>
        Additionally, before a match between two players is announced, here is
        what happens:
      </p>
      <ul>
        <li>
          If none of the two players is enabling their deck change, the match
          proceeds as usual.
        </li>
        <li>
          If a player wants to change their deck, their opponent is granted a
          deck change opportunity as well, whether or not they have already
          issued their own deck change during the tournament. The decks are
          updated privately and only revealed when both players have recorded
          their deck changes with the tournament organisers.
        </li>
      </ul>

      <p style={{ fontStyle: 'italic' }}>
        For example:{' '}
        <span style={{ color: 'var(--light-winter)' }}>Charlie</span> — who has
        already changed their deck once during the tournament — is supposed to
        face <span style={{ color: 'var(--light-shadowfen)' }}>Jamie</span>{' '}
        next. <span style={{ color: 'var(--light-shadowfen)' }}>Jamie</span>{' '}
        decides they want to change their deck. Therefore,{' '}
        <span style={{ color: 'var(--light-winter)' }}>Charlie</span> is also
        offered the possibility to change their deck. Both participants will
        inform the organisers of their deck change (or lack thereof) privately
        without disclosing the details to each other. Once done, the organisers
        will reveal both decks to everyone, and the match can be scheduled
        between the two participants. Note that while{' '}
        <span style={{ color: 'var(--light-winter)' }}>Charlie</span> was
        offered the opportunity to change their deck, they did not have to; they
        can inform the organiser that they will keep their deck as is.
      </p>
      <p>
        This rule is essentially there to make sure someone does not make a
        counter-deck, only to have their opponent waiting to see the changes to
        perform their own deck update reactionarily.
      </p>
      <PageMeta
        title='The Odd Tournament'
        description='Everything you need to know to participate in The Odd Tournament, an upcoming Tournament by Derk & Kitty'
      />
    </Article>
  )
})