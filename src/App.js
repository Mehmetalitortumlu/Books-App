import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { useTheme } from './context/ThemeContext';
import Book from './components/Books';
import Basket from './components/Basket';
import BookDetail from './components/BookDetail';

function App() {
  const { theme } = useTheme()
  return (
    <div id={theme}>
      <Router>
        <Header />
        <Navbar />

        <Switch>
          <Route exact path="/" component={Book} />
          <Route path="/basket" component={Basket} />
          <Route path="/bookdetail/:id" component={BookDetail} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
