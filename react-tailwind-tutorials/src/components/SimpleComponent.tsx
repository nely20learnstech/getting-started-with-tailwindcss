// spacing
// box properties


// colors
// pseudo-classes 
// transitions & transforms 
// animations

import React from 'react'

export const SimpleComponent = () => {
  return (
    <>
      <div className='p-20'>
        <h2 className='mb-4'>Spacing Section</h2>
        <p>Tailwind helps us space things out with margin and padding.</p>
        <button className='mr-3 py-2 px-4'>Learn More</button>
        <button className='py-2 px-8'>Sign Up</button>
      </div>

      {/* background, borders, rounding (border radius), shadows */}
      <div className='p-20 bg-blue-400'>
        <h2 className='mb-4'>Box Properties</h2>
        <div  className='p-10 bg-purple-400 rounded-lg border
        border-purple-500 shadow-2xl'>I am a box</div>
      </div>  
      
      {/* sizing & numbering */}
      <div className="p-20 bg-orange-300">
        <button className='p-4 bg-green-400 rounded w-8'>Click me</button>
        <button className='p-4 bg-green-400 rounded w-12'>Click me</button>
        <button className='p-4 bg-green-400 rounded w-20'>Click me</button>
        <button className='p-4 bg-green-400 rounded w-32'>Click me</button>
        <button className='p-4 bg-green-400 rounded w-48 h-48'>Click me</button>
      </div>


      {/* typography */}

      <div className='p-20'>
        <h2 className='mb-2 text-4xl'>Learning Tailwind is Fun!</h2>
        <h3 className='mb-10 text-2xl'>More fun than I expected!</h3>

        <p className='mb-8'>I love I love tart cookie cotton candy.
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
    </>
  )
}

