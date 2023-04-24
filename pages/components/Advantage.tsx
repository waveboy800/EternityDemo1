import Link from 'next/link'

export default function Advantage() {
  return (
    <div 
    style={{
      backgroundImage: "url('/images/advantage.png')",
      height: '100vh',
      width: '100%',
      backgroundSize: 'cover',
    }}>
      
    <div className="relative left-[170px] top-[651.57px] h-[118px] w-[260px]flex flex-column  items-center gap-[24px] text-black text-center">
      <p className="absolute left-[44px] top-[0px] h-[35px] w-[208px] font-Harmony text-4xl font-bold not-italic ">
        All in One Storage
      </p>
      <p className="absolute left-[20px] top-[100px] h-[59px] w-[260px] font-Harmony text-xl font-normal not-italic ">
        Adaptable storage for images, videos, documents, social media accounts,
        NFT, etc.
      </p>
    </div>
        <div className=" relative left-[590px] top-[520px] h-[147px] w-[260px] gap-[24px] flex flex-column items-center  text-black text-center">
        <p className="absolute left-[50px] top-[10px] h-[35px] w-[208px] font-Harmony text-4xl font-bold not-italic ">
         Never Lose
        </p>
        <p className="absolute left-[28px] top-[80px] h-[59px] w-[260px] font-Harmony text-xl font-normal not-italic ">
        Storage solution based on Arweave blockchain technology ensures that users' digital assets are stored for at least 200 years, enabling data to be stored forever
        </p>
      </div>
      <div className=" relative left-[1050px] top-[380px] h-[118px] w-[260px] gap-[24px] flex flex-column  items-center  text-black text-center">
      <p className="absolute left-[30px] top-[0px] h-[35px] w-[208px] font-Harmony text-4xl font-bold not-italic">
      Personalized AI Avatars
      </p>
      <p className="absolute left-[12px] top-[100px] h-[59px] w-[260px] font-Harmony text-xl font-normal not-italic">
      Use AI to build an integrated model of intelligence, form and sound to achieve a personalized intelligent avatar
      </p>
    </div>
        <div className=" relative left-[1490px] top-[260px]  h-[147px] w-[260px] gap-[24px] flex flex-column items-center  text-black text-center">
        <p className="absolute left-[40px] top-[0px] h-[35px] w-[208px] font-Harmony text-4xl font-bold not-italic"> 
        Flexible and inheritable
        </p>
        <p className="absolute left-[16px] top-[100px] h-[59px] w-[260px] font-Harmony text-xl font-normal not-italic">
        Support users to set inheritance rules for digital assets, allowing them to pass on their digital assets to future generations
        </p>
      </div>
      </div>
      
  )
}
