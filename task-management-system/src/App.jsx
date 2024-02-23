import React from 'react'
import './index.css'

const App = () => {
  return (
    <div>
      {/* Intro */}
      {/* <div className='center fade space-y-2 md:space-y-3'>
        <h1 className="text-center">Weather App</h1>
        <p>Start your day right with our innovative app, offering precise weather forecasts for cities worldwide, ensuring you're never caught off guard by the elements.</p>
      </div> */}

      {/* Main */}
      <main className='px-4 md:px-8 xl:px-14 py-3 md:py-5 space-y-5 md:space-y-8 xl:w-[1440px] mx-auto'>
        <h1 className='md:text-center'>Task management System</h1>

        {/* Tasks */}
        <section className='flex gap-x-4 md:gap-x-6 overflow-x-auto'>

          {/* Todo */}
          <div className='space-y-2 min-w-[314px]'>
            <div className='flex justify-between items-center pr-2'>
              <div className='flex items-center gap-x-2'>
                <h3 className='text-lg uppercase'>Todo</h3>
                <span className='text-gray-500 text-xs'> - 3 items</span>
              </div>
              <button className='text-3xl bg-gray-100 hover:bg-gray-200 cursor-pointer px-3 pb-1 rounded-full'>+</button>
            </div>
            <div className='space-y-3 overflow-y-auto h-tms'>
              <div className='bg-gray-100 py-4 px-6 rounded-sm space-y-2'>
                <h4 className='font-bold'>Task 1</h4>
                <p className='text-sm line-clamp-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore laborum cum accusantium non nam fugiat ullam ab modi officia illo sint excepturi quo, facere, unde harum amet nisi fuga quas.</p>
              </div>
              <div className='bg-gray-100 py-4 px-6 rounded-sm space-y-2'>
                <h4 className='font-bold'>Task 1</h4>
                <p className='text-sm line-clamp-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore laborum cum accusantium non nam fugiat ullam ab modi officia illo sint excepturi quo, facere, unde harum amet nisi fuga quas.</p>
              </div>
              <div className='bg-gray-100 py-4 px-6 rounded-sm space-y-2'>
                <h4 className='font-bold'>Task 1</h4>
                <p className='text-sm line-clamp-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore laborum cum accusantium non nam fugiat ullam ab modi officia illo sint excepturi quo, facere, unde harum amet nisi fuga quas.</p>
              </div>
            </div>
          </div>


          {/* Progress */}
          <div className='space-y-2 min-w-[314px]'>
            <div className='flex justify-between items-center pr-2'>
              <div className='flex items-center gap-x-2'>
                <h3 className='text-lg uppercase'>Progress</h3>
                <span className='text-gray-500 text-xs'> - 3 items</span>
              </div>
              <button className='text-3xl bg-gray-100 hover:bg-gray-200 cursor-pointer px-3 pb-1 rounded-full'>+</button>
            </div>
            <div className='space-y-3 overflow-y-auto h-tms'>
              <div className='bg-gray-100 py-4 px-6 rounded-sm space-y-2'>
                <h4 className='font-bold'>Task 1</h4>
                <p className='text-sm line-clamp-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore laborum cum accusantium non nam fugiat ullam ab modi officia illo sint excepturi quo, facere, unde harum amet nisi fuga quas.</p>
              </div>
              <div className='bg-gray-100 py-4 px-6 rounded-sm space-y-2'>
                <h4 className='font-bold'>Task 1</h4>
                <p className='text-sm line-clamp-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore laborum cum accusantium non nam fugiat ullam ab modi officia illo sint excepturi quo, facere, unde harum amet nisi fuga quas.</p>
              </div>
              <div className='bg-gray-100 py-4 px-6 rounded-sm space-y-2'>
                <h4 className='font-bold'>Task 1</h4>
                <p className='text-sm line-clamp-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore laborum cum accusantium non nam fugiat ullam ab modi officia illo sint excepturi quo, facere, unde harum amet nisi fuga quas.</p>
              </div>

            </div>
          </div>


          {/* Blocked */}
          <div className='space-y-2 min-w-[314px]'>
            <div className='flex justify-between items-center pr-2'>
              <div className='flex items-center gap-x-2'>
                <h3 className='text-lg uppercase'>Blocked</h3>
                <span className='text-gray-500 text-xs'> - 3 items</span>
              </div>
              <button className='text-3xl bg-gray-100 hover:bg-gray-200 cursor-pointer px-3 pb-1 rounded-full'>+</button>
            </div>
            <div className='space-y-3 overflow-y-auto h-tms'>
              <div className='bg-gray-100 py-4 px-6 rounded-sm space-y-2'>
                <h4 className='font-bold'>Task 1</h4>
                <p className='text-sm line-clamp-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore laborum cum accusantium non nam fugiat ullam ab modi officia illo sint excepturi quo, facere, unde harum amet nisi fuga quas.</p>
              </div>
              <div className='bg-gray-100 py-4 px-6 rounded-sm space-y-2'>
                <h4 className='font-bold'>Task 1</h4>
                <p className='text-sm line-clamp-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore laborum cum accusantium non nam fugiat ullam ab modi officia illo sint excepturi quo, facere, unde harum amet nisi fuga quas.</p>
              </div>
              <div className='bg-gray-100 py-4 px-6 rounded-sm space-y-2'>
                <h4 className='font-bold'>Task 1</h4>
                <p className='text-sm line-clamp-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore laborum cum accusantium non nam fugiat ullam ab modi officia illo sint excepturi quo, facere, unde harum amet nisi fuga quas.</p>
              </div>

            </div>
          </div>


          {/* Completed */}
          <div className='space-y-2 min-w-[314px]'>
            <div className='flex justify-between items-center pr-2'>
              <div className='flex items-center gap-x-2'>
                <h3 className='text-lg uppercase'>Completed</h3>
                <span className='text-gray-500 text-xs'> - 3 items</span>
              </div>
              <button className='text-3xl bg-gray-100 hover:bg-gray-200 cursor-pointer px-3 pb-1 rounded-full'>+</button>
            </div>
            <div className='space-y-3 overflow-y-auto h-tms'>
              <div className='bg-gray-100 py-4 px-6 rounded-sm space-y-2'>
                <h4 className='font-bold'>Task 1</h4>
                <p className='text-sm line-clamp-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore laborum cum accusantium non nam fugiat ullam ab modi officia illo sint excepturi quo, facere, unde harum amet nisi fuga quas.</p>
              </div>
              <div className='bg-gray-100 py-4 px-6 rounded-sm space-y-2'>
                <h4 className='font-bold'>Task 1</h4>
                <p className='text-sm line-clamp-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore laborum cum accusantium non nam fugiat ullam ab modi officia illo sint excepturi quo, facere, unde harum amet nisi fuga quas.</p>
              </div>
              <div className='bg-gray-100 py-4 px-6 rounded-sm space-y-2'>
                <h4 className='font-bold'>Task 1</h4>
                <p className='text-sm line-clamp-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore laborum cum accusantium non nam fugiat ullam ab modi officia illo sint excepturi quo, facere, unde harum amet nisi fuga quas.</p>
              </div>

            </div>
          </div>
          
        </section>



      </main>
    </div>
  )
}

export default App