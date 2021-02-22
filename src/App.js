import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './screens/HomePage'
import { Container } from 'react-bootstrap'
import ChangeTheme from './screens/ChangeTheme'
import Footer from './components/Footer'
import Header from './components/Header'
function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path='/' exact component={HomePage} />
          <Route path='/theme' exact component={ChangeTheme} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
