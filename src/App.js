import React from 'react'
import ContactsForm from './components/ContactsForm'
import MyNavbar from './components/MyNavbar'
import QuestionsTable from './components/QuestionsTable'

const App = () => {
  return (
    <div>
      <MyNavbar/>
     <ContactsForm/>
     <QuestionsTable/>
      </div>
  )
}

export default App
