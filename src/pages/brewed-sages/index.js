import React from 'react'
import BrewedSages from '~/components/BrewedSages'
import Layout from '~/components/Layout'
import PODCASTS from '~/data/podcasts'
import getNavigation from '~/helpers/getNavigation'

export async function getStaticProps() {
  return { props: { navigation: getNavigation(), episodes: PODCASTS } }
}

const BrewedSagesPage = ({ navigation, ...props }) => (
  <Layout
    active={['COMMUNITY', 'DISCOVER', 'BREWED_SAGES']}
    navigation={navigation}
  >
    <BrewedSages {...props} />
  </Layout>
)

export default BrewedSagesPage
