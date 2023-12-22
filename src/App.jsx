import React from 'react'
import { Header } from './components/common/header'
import { MainLayout } from './components/common/main-layout'
import { Separator } from './components/common/main-layout/separator'

export const App = () => {
  return (
    <>
      <Header />
      <MainLayout />
      <Separator />
    </>
  )
}
