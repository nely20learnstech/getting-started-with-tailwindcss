// spacing
// box properties


// colors

// animations

import React from 'react'

export const SimpleComponent = () => {
  return (
    <>
      <div className='p-20 bg-green-700'>
        <h2 className='mb-2 text-5xl font-bold text-green-100'>Spacing Section</h2>
        <p className="mb-6 text-green-200 text-xl">Tailwind helps us space things out with margin and padding.</p>
        <button className='mr-3 py-2 px-4 bg-purple-600 hover:bg-purple-500 text-purple-100 rounded transition duration-300'>Learn More</button>
        <button className='py-2 px-8 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 rounded transition duration-300 shadow-lg'>Sign Up</button>
      </div>

      {/* background, borders, rounding (border radius), shadows */}
      <div className='p-20 bg-blue-400'>
        <h2 className='mb-4 text-4xl text-blue-800'>Box Properties</h2>
        <div  className='p-10 bg-purple-400 rounded-lg border
        border-purple-500 shadow-2xl text-purple-700 text-center font-bold uppercase tracking-widest'>I am a box</div>
      </div>  
      
      {/* sizing & numbering */}
      <div className="py-20 px-10 bg-orange-300">
        <button className='p-4 m-2 bg-orange-400 text-orange-900 rounded w-8'>Click me</button>
        <button className='p-4 m-2 bg-orange-400 text-orange-900 rounded w-12'>Click me</button>
        <button className='p-4 m-2 bg-orange-400 text-orange-900 rounded w-20'>Click me</button>
        <button className='p-4 m-2 bg-orange-400 text-orange-900 rounded w-32'>Click me</button>
        <button className='p-4 m-2 bg-orange-400 text-orange-900 rounded w-48 h-48'>Click me</button>
      </div>


      {/* typography */}

      <div className='p-20 text-gray-800 leading-relaxed text-lg'>
        <h2 className='mb-4 text-5xl text-gray-700 font-semibold tracking-wide'>Learning Tailwind is Fun!</h2>
        <h3 className='mb-8 text-2xl text-blue-400'>More fun than I expected!</h3>

        <p className='mb-8 '>I love I love tart cookie cotton candy.
           Tiramisu marshmallow gummies icing candy canes candy jujubes tiramisu. 
           Pie cookie tart I love candy apple pie sweet roll chupa chups. 
           Topping jujubes gummi bears pastry I love halvah oat cake chocolate bar. 
           Liquorice chocolate bar muffin candy canes gingerbread apple pie chocolate bar oat cake. 
           Chocolate cake icing chocolate croissant chupa chups sweet tiramisu. 
           Cake ice cream sesame snaps ice cream bonbon ice cream sesame snaps lemon drops sugar plum. 
          Sweet roll macaroon cookie biscuit shortbread pudding danish dessert.</p>
        
        <p className='mb-8'>Marzipan cake fruitcake pie croissant caramels bear claw macaroon.
          Sesame snaps bonbon donut icing muffin toffee jelly icing.
          Sugar plum caramels cake dragée fruitcake candy canes. 
          Tiramisu cheesecake chocolate bar gingerbread caramels. 
          I love sugar plum candy canes marzipan lemon drops donut jelly-o sweet roll. 
          Soufflé jelly beans cheesecake lollipop candy. Topping lollipop jujubes marshmallow jelly.</p>
        
        <p className='mb-8'>Cheesecake chocolate cake dragée bear claw I love.
           Sweet roll I love croissant muffin I love wafer. 
           I love jujubes jelly beans tiramisu candy canes chupa chups. 
           Danish powder I love chupa chups cookie. 
           Candy gummies oat cake brownie pie I love cheesecake chupa chups. 
           Lemon drops macaroon oat cake tiramisu marzipan oat cake. 
          Gingerbread wafer jelly-o tiramisu lollipop liquorice bonbon.</p>
      </div>

      {/* Color and pseudo-class: hover  */}
      <div className='p-20 bg-gray-800 space-y-3'>
        {/* transitions with duration  */}
        {/* trasform with translate and scale */}
        <div className='p-4 rounded-lg bg-red-100 text-red-900 
        hover:bg-red-900 hover:text-red-100 hover:translate-x-4 transform
        transition duration-500'>I am box</div>
        <div className='p-4 rounded-lg bg-red-200 hover:scale-105 transition duration-300'>I am box</div>
        <div className='p-4 rounded-lg bg-red-300'>I am box</div>
        <div className='p-4 rounded-lg bg-red-400 animate-bounce'>I am box</div>
        <div className='p-4 rounded-lg bg-red-500 animate-pulse'>I am box that pulses</div>
        <div className='p-4 rounded-lg bg-red-600 text-red-100'>I am box</div>
        {/* <div className='p-4 rounded-lg bg-red-700 text-red-100 animate-ping'>I am box</div> */}
        <div className='p-4 rounded-lg bg-red-800 text-red-200'>I am box</div>
        {/* <div className='p-4 rounded-lg bg-red-900 text-red-300 animate-spin'>I am box</div> */}
        <div className='p-4 rounded-lg bg-blue-600 text-blue-200 border border-blue-700'>I am box</div>
      </div>

      {/* <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-red-400 to-purple-400"> */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100  to-purple-100">

        {/* API of doing the gradients */}
        {/* 1. Set a class for the gradient
            2. Set a starting color
            3. Set an end color
            4. Set a middle color
        */}
        <h1 className="text-6xl font-bold 
          bg-clip-text bg-gradient-to-br text-transparent 
          from-blue-600 to-purple-800">
          Whoa Gradients
        </h1>
      </div>
    </>
  )
}

