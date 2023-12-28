import './App.css';
import GallaryFooter from './components/GallaryFooter';
import ComponentHeader from './components/GallaryHeader';
import ComponentBody from './components/GalleryBody';
import imageData from './components/ComponentData';

function App() {
  return (
    <div>
      <ComponentHeader/>
     <ComponentBody image = {imageData}/>
      <GallaryFooter/> 
    </div>
  )
}

export default App;
