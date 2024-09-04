import { useState } from 'react'
import Header from './components/base/Header'
import RegisterForm from './components/register/RegisterForm'
import ContactList from './components/contactList/ContactList'
import SearchTemplate from './components/search/SearchTemplate'
import './App.css'


function App() {
  const [keyword, setKeyword] = useState('');

  return (
    <>
      <Header level={1} strong >연락처 리스트</Header>
      <RegisterForm/>
      <>
      <SearchTemplate setKeyword={setKeyword} style={{backgroundColor: "pink"}}/>
      <ContactList keyword={keyword} style={{backgroundColor: "yellow", color: "green"}}/>
      </>
    </>
  )
}

export default App;