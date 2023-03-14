import { Router } from '@reach/router';
import Posts from './components/posts';
import Today from './components/today';
function App() {
  return (
    <Router>
	<Posts path="/" />
        <Today path="/today" />
    </Router>
  );
}

export default App;
