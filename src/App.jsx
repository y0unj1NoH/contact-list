import { useState } from 'react'
import styled, { css } from 'styled-components';
import Header from './components/base/Header'
import RegisterForm from './components/register/RegisterForm'
import ContactList from './components/contactList/ContactList'
import SearchTemplate from './components/search/SearchTemplate'
import './App.css'

const BodyBlock = styled.div`
  // border: 1px solid red;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
  
  @media (min-width: 768px) {
    > *:first-child {
      flex: 4;
    }
    > *:last-child {
      flex: 6;
    }
  }
`
const RightBlock = styled.div`
`

function App() {
  const [keyword, setKeyword] = useState('');
  const [length, setLength] = useState(JSON.parse(localStorage.getItem("contactList"))?.length || 0);

  return (
    <>
      <Header level={1} strong >연락처 리스트</Header>
      <BodyBlock>
        {/* 폼 큰화면으로 전환될때 placeholder가 짤리는 문제 확인 */}
        <RegisterForm setLength={setLength}/>
        <RightBlock>
          <SearchTemplate setKeyword={setKeyword}/>
          <ContactList length={length} setLength={setLength} keyword={keyword}/>
        </RightBlock>
      </BodyBlock>
    </>
  )
}

export default App;