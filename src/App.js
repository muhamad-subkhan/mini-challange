import Todo from "./pages/todo" 
import {  Routes, Route} from 'react-router-dom'


function App() {
  return (
<>
<Routes>
<Route path="/" element={<Todo />}/>
<Route path="/account/id" element=""/>
</Routes>
  <Todo/>
</>
  )
}

export default App;
