import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <div style={{border:'solid 1px black',maxWidth:100}}>
      <h1 className="title red">Your name here</h1>
     
<div className="img">
 <img   src="/logo512.png"/>
<img  src="/logo192.png"/>
</div>
 </div>
 <video width="320" height="240" controls>

 <source src="myVideo.mp4" type="video/mp4"/>

</video>
    </div>     
  );
}

export default App;
