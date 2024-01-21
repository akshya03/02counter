// import React //not required now as it is already fulfilled by Babble control
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card';

function TailwindProps() {
  let [counter, setCounter] = useState(15);
  let myObj = {
    username: "hitesh",
    age: 21
  }
  
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      {/* <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-164960,resizemode-75,msid-99824115/top-trending-products/electronics/headphones/10-best-gaming-headphones-under-1500-in-india-for-the-most-immersive-gaming-experience.jpg" alt="" width="384" height="512" />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
            <p class="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
            </p>
            </blockquote>
            <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
                Sarah Dayan
            </div>
            <div class="text-slate-700 dark:text-slate-500">
                Staff Engineer, Algolia
            </div>
            </figcaption>
        </div>
        </figure> */}
        <Card username="chaiaurcode" someObj={myObj}/>

    </>
  )
}

export default TailwindProps;
