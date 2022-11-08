/** @format */

import { NextPageAuth } from '../apps/providers/privateRoutes.interface'
import { api } from '../apps/store/api/api'
import Layout from '../components/layout/Layout'
import Menu from '../components/layout/sidebar/menu/Menu'

const MySubscriptionsPage: NextPageAuth = () => {
  const { data } = api.useGetProfileQuery(null)

  return (
    <Layout title='My subscribers'>
      <Menu
        title='My subscribers'
        items={data?.subscriptions.map(({ toChanne }) => ({
          title: toChanne.name,
          image: toChanne.avatarPath,
          link: `/c/${toChanne.id}`,
        }))}
      />
    </Layout>
  )
}

MySubscriptionsPage.isOnlyUser = true

export default MySubscriptionsPage
