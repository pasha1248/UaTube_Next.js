/** @format */

import '../apps/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store, persistor } from '../apps/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import ReduxToastrLib from 'react-redux-toastr'
import NextProgressBar from 'nextjs-progressbar'
import AuthProvider from '../apps/providers/AuthProvider'
import { type } from 'os'
import { TypeComponentAithFields } from '../apps/providers/privateRoutes.interface'

type TypeAppProps = AppProps & TypeComponentAithFields

export default function App({ Component, pageProps }: TypeAppProps) {
  return (
    <>
      <NextProgressBar
        color='#FF7652'
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <AuthProvider Component={Component}>
            <Component {...pageProps} />
            <ReduxToastrLib
              newestOnTop={false}
              preventDuplicates
              progressBar
              closeOnToastrClick
              timeOut={4000}
              transitionIn='fadeIn'
              transitionOut='fadeOut'
            />
          </AuthProvider>
        </PersistGate>
      </Provider>
    </>
  )
}
