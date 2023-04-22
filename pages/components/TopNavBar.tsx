import Link from 'next/link'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function TopNavBar() {
return (
<nav className="relative w-full h-85.33 left-0 top-4 shadow-md flex justify-between items-center">
  <div className="w-138 h-34 ">
    <img src="/images/logo.png" className="w-60 object-contain"></img>
  </div>
  <div className="w-437.33 h-19" >
    <ul className="flex justify-start ">
      <li className="mx-10">
        <Link href="/">
          <a className="text-white font-medium hover:text-gray-20">Home</a>
        </Link>
      </li>
      <li className="mx-10">
        <Link href="/Advantage">
          <a className="text-white font-medium hover:text-gray-200">Advantage</a>
        </Link>
      </li>
      <li className="mx-10">
        <Link href="/RoadMap">
          <a className="text-white font-medium hover:text-gray-200">RoadMap</a>
        </Link>
      </li>
      <li className="mx-10">
        <Link href="/Parter">
          <a className="text-white font-medium hover:text-gray-200">Parter</a>
        </Link>
      </li>
      <li className="mx-10">
        <Link href="/Community">
          <a className="text-white font-medium hover:text-gray-200">Community</a>
        </Link>
      </li>
    </ul>
  </div>
  <div className="flex items-center left-1349.33 top-22.5 w-64 h-19  style={{ gap: '64px' }}">
    <li className="mx-10 inline-block">
      <Link href="/CN">
        <a className="text-white font-medium hover:text-gray-200">CN</a>
      </Link>
    </li>
    <li className="inline-block">
      <div className="mx-1 w-128 h-40.33">
        <ConnectButton />
      </div>
    </li>
  </div>
</nav>

)
}