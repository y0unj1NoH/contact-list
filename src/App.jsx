import { useState } from 'react'
import Header from './components/base/Header'
import RegisterForm from './components/register/RegisterForm'
import ContactList from './components/contactList/ContactList'
import SearchTemplate from './components/search/SearchTemplate'
import './App.css'


function App() {
  const [keyword, setKeyword] = useState('');
  const [length, setLength] = useState(JSON.parse(localStorage.getItem("contactList"))?.length || 0);

  return (
    <>
      <Header level={1} strong >연락처 리스트</Header>
      <RegisterForm setLength={setLength}/>
      <>
      <SearchTemplate setKeyword={setKeyword} style={{backgroundColor: "pink"}}/>
      <ContactList length={length} setLength={setLength} keyword={keyword} style={{backgroundColor: "yellow", color: "green"}}/>
      </>
    </>
  )
}

export default App;