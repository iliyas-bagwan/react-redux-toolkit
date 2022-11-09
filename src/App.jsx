import './App.css'
import CakeView from './features/cake/CakeView'
import IceCreameView from './features/iceCream/IceCreameView'
import UserView from './features/users/UserView'

function App() {

  return (
    <div className="App">
    <CakeView></CakeView>
    <IceCreameView></IceCreameView>
    <UserView></UserView>
    </div>
  )
}

export default App
