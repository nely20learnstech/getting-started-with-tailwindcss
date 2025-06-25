import './App.css'
import {Card} from './components/professional-card'
import {SimpleComponent} from './components/SimpleComponent'

function App() {

  return (
    // <>
    //   <div className='bg-violet-200 w-full border-2 border-violet-600 rounded-md my-4 p-6 flex justify-center items-center'>
    //     <h1 className='text-center font-mono font-extrabold text-[50px]'>Hello World</h1>
    //   </div>

    //   {/* <div className='grid grid-cols-3 gap-2 mx-2'>
    //     <div className='h-16 w-16 rounded-full bg-blue-500'></div>
    //     <div className='h-16 w-16 rounded-full bg-orange-500'></div>
    //     <div className='h-16 w-16 rounded-full bg-green-500'></div>
    //   </div> */}
    
    //   <div className='sm:bg-amber-500 md:bg-amber-700'>
    //     <p className='text-chestnut'>I appear on screen wider thatn 768px</p>
    //   </div>

    //   <div className="bg-[#716f02] dark:bg-[#363131] text-black dark:text-white">
    //     Dark mode enabled!
    //   </div>

    //   <div className='card'>
    //     <h3>Writes Upside-Down</h3>

    //     <button>Toggle Dark Mode</button>
    //   </div>
    //   {/* Fuild Texts */}
    //   <p className='text-[min(10vw,70px)] text-light'>Something Fluid</p>
    //   <p className='sm:text-7xl text-5xl text-light'>Something less fluid</p>

    //   {/* File */}
    //   <label className='my-4 block'>
    //     <input type="file" className='block w-full text-sm text-slate-500 file:mr-4
    //     file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2
    //     file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-200' />
    //   </label>

    //   {/* Highlight */}
    //   <div className='text-justify text-light selection:bg-green-400 selection:text-white'>
    //     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    //       Tempora temporibus facilis aspernatur. Nesciunt consequuntur,
    //       corrupti facere rem, error quidem explicabo temporibus sunt perspiciatis, 
    //       ducimus at. Natus hic perferendis alias eius.</p>
    //   </div>

    //   {/* Less JavaScript */}
    // </>

    <>
      <Card/>
      <SimpleComponent/>
    </>
  )
}

export default App
