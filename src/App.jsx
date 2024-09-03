import { useState } from 'react'
import './App.css'
import Header from './components/base/Header'
import RegisterForm from './components/register/RegisterForm'
import ContactList from './components/contactList/ContactList'
import SearchTemplate from './components/search/SearchTemplate'

function App() {
  const [keyword, setKeyword] = useState('');

  return (
    <>
      <Header level={1} strong underline color="red">연락처 리스트</Header>
      <RegisterForm style={{backgroundColor: "skyblue"}}/>
      <>
      <SearchTemplate setKeyword={setKeyword} style={{backgroundColor: "pink"}}/>
      <ContactList keyword={keyword} style={{backgroundColor: "yellow", color: "green"}}/>
      </>
    </>
  )
}

export default App;
