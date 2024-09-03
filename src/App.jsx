// import { useState } from 'react'
import './App.css'
import Header from './components/base/Header'
import RegisterForm from './components/register/RegisterForm'

function App() {

  return (
    <>
      <Header level={1} strong underline color="red">연락처 리스트</Header>
      <RegisterForm />
    </>
  )
}

export default App;
