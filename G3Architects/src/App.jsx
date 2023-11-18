import React from 'react'
import banner from './assets/banner.png'
import team1 from './assets/team1.png'
import team2 from './assets/team2.png'
import team3 from './assets/team3.png'
import team4 from './assets/team4.png'

const App = () => {
  return (
    <>
    <header className='bg-[#FDF4E8]'>
      <div className='flex w-full justify-center px-20 pt-10'>
        <div className='w-[1250px] flex justify-between items-center'>
          <div className='w-[30%] '>
            <h2 className='font-bold text-[45px] leading-[53px] text-[#131313]'>G3 Architects</h2>
          </div>
          <div className='w-[40%]'>
            <ul className='flex justify-between'>
              <li className='cursor-pointer'>Home</li>
              <li className='cursor-pointer'>About</li>
              <li className='cursor-pointer'>Contact</li>
              <li className='cursor-pointer'>Login</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <main>
      <section className='w-full flex justify-center pt-[70px] pb-[100px] bg-[#FDF4E8]'>
        <div className='w-[1250px] text-center'>
          <h1 className='font-bold text-[64px] leading-[75px] text-[#131313]'>Brand New<br /> Group of Architects</h1>
          <p className='font-normal text-[16px] leading-[26px] text-[#727272] mt-[30px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Commodi eveniet odio doloremque exercitationem distinctio, modi est! Eos odio sapiente dolorum, molestias impedit nemo?</p>
          <button className='bg-[#FF900E] font-semibold text-[20px] leading-[23px] p-[21px] mt-8 border-none rounded-md text-center text-[#FFFFFF] cursor-pointer mb-10'>Explore More</button>
          <img src={banner} alt="banner.png" className='w-full' />
        </div>
      </section>
      
      <section className='m-auto flex flex-wrap pt-[120px] pb-[100px]'>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-[repeat(2,1fr)] gap-[10px] w-[53%]">
            <img className='w-full' src={team1} alt="" />
            <img className='w-full' src={team2} alt="" />
            <img className='w-full' src={team3} alt="" />
            <img className='w-full' src={team4} alt="" />
          </div>
          <div className="w-[47%] pt-[100px] pl-[100px]">
            <h2 className='font-medium text-[45px] leading-[53px] text-[#727272]'>Quick list <span className='text-black font-semibold'>of Our</span><br /><span className='text-[#FF900E] font-semibold'>Features</span></h2>
            <p className='font-normal text-[16px] text-[#727272] leading-[26px] mt-[30px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, 
              by injected humour, or randomised words which don't look even</p>
            <button className='bg-[#FF900E] font-semibold text-[20px] leading-[23px] p-[21px] mt-8 border-none rounded-md text-center text-[#FFFFFF] cursor-pointer mb-10'>Explore More</button>
          </div>
        </div>
      </section>
    </main>
    </>
    

  )
}

export default App