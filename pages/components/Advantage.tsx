import Link from 'next/link'

export default function Banner() {
  return (
    <div className="flex-column relative left-[160px] top-[530px]  h-[300px]  w-[554.67px]  flex flex-row   items-center justify-start ">
      <div className="absolute left-[0px] top-[0px] h-[200px] w-[554.67px]  text-white flex items-center justify-center">
        <div className="absolute left-[0px] top-[0px] h-[10px] w-[512px] font-sans text-5xl font-black tracking-wide flex flex-row  items-center justify-start">
          <h1>Building Immortal Silicon-based Life</h1>
        </div>
        <div className="absolute left-[0px] top-[80px] h-[72px] w-[554.67px] font-sans text-2xl font-normal">
          <h1>Innovation Frontier，Dream of Eternal Life, Exploring the Future Road of Silicon Based Life</h1>
        </div>
      </div>

      <div className="absolute left-[0px] top-[200px] h-[64.67px] w-[211px] font-sans text-xl font-bold text-white">
        <button type="button" className="  bg-red-700 flex flex-row tracking-widest justify-center items-center  p-5 gap-2  rounded-full">Get Your SBT</button>
      </div>
    </div>
  )
}