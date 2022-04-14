import Video from './video'
import { useRef } from 'react'

function App() {

  const videoRef1 = useRef();

  const handlePlay = () => {
    videoRef1.current.play2()
  }

  const handlePause = () => {
    videoRef1.current.pause()
  }


  // neu nhu Video nay la 1 HTML element thi khi dung useRef se lay ra dc element,  nhung do Video la mot cai function component 
  // do do minh phai lay bang cach useImperativeHandle o ben function Component
  // useImperativeHandle(ref, () => ({
  //     play2() {
  //       videoRef.current.play();
  //   },

  //   pause() {
  //       videoRef.current.pause();
  //   }
  // }))
  // muc dich function nay la de public hai function play2, pause ra su dung, giong nhu huong doi tuong vay
  // ben function component dung forwardRef va truyen useRef vao moi lay dc html

  return (
    <div className="App">
        <Video ref={ videoRef1 } /> 

        <button onClick={ handlePlay }> Play </button>
        <button onClick={ handlePause }> Pause </button> 
    </div>
  );
}

export default App;
