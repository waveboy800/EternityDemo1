import Link from 'next/link'

export default function Banner() {
  return (
    <div className="flex flex-col items-start justify-center h-screen ">
      <div className="text-start text-white relative w-[554.67px] h-[254.33px] left-[100px] -top-[10px]">
        <h1 className="text-5xl font-bold tracking-wide md:text-6xl">Building Immortal Silicon-based Life</h1>
        <p className="text-xl font-normal mt-4 md:text-2xl">Innovation Frontier，Dream of Eternal Life, Exploring the Future Road of Silicon Based Life</p>
        <button type="button" className="text-3xl font-bold tracking-widest bg-red-700 text-white rounded-full py-5 px-10 mt-8 md:text-2xl md:py-6 md:px-12">Get Your SBT</button>
      </div>
    </div>
  )
}
