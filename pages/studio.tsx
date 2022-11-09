/** @format */

import { NextPageAuth } from '../apps/providers/privateRoutes.interface'
import Studio from '../components/layout/pages/studio/Studio'

const StudioPage: NextPageAuth = () => {
  return <Studio />
}

StudioPage.isOnlyUser = true

export default StudioPage
