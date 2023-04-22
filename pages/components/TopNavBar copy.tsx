import Link from 'next/link'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function TopNavBar() {
return (
<nav className="relative w-full h-85.33 left-160 top-4 shadow-md flex justify-between items-center">
<div className="w-138 h-34 ">
<img src="/images/logo.png" className="w-60 object-contain"></img>
</div>

  <div className="w-437.33 h-19 ml-20" >
    <ul className="flex justify-start">
      <li className="mx-20">
        <Link href="/">
          <a className="text-white font-medium hover:text-gray-20">Home</a>
        </Link>
      </li>
      <li className="mx-20">
        <Link href="/Advantage">
          <a className="text-white font-medium hover:text-gray-200">Advantage</a>
        </Link>
      </li>
      <li className="mx-20">
        <Link href="/RoadMap">
          <a className="text-white font-medium hover:text-gray-200">RoadMap</a>
        </Link>
      </li>
      <li className="mx-20">
        <Link href="/Parter">
          <a className="text-white font-medium hover:text-gray-200">Parter</a>
        </Link>
      </li>
      <li className="mx-20">
        <Link href="/Community">
          <a className="text-white font-medium hover:text-gray-200">Community</a>
        </Link>
      </li>

    </ul>
  </div>
  <div className="flex items-center">
    <li className="mx-20 inline-block">
      <Link href="/CN">
        <a className="text-white font-medium hover:text-gray-200">CN</a>
      </Link>
    </li>
    <li className="inline-block">
      <div className="mx-20">
        <ConnectButton />
      </div>
    </li>
  </div>
</nav>
)
}