import Link from 'next/link'

export default function Contact() {
  return (
    <div
      style={{
        backgroundImage: "url('/images/contact.png')",
        height: '100vh',
        width: '100%',
        backgroundRepeat: 'no-repeat',
      }}
    >
     
      <div className="flex space-x-40">
        <a href="https://www.example.com">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_202_137)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.842 8.27278C19.849 8.43378 19.854 8.59478 19.854 8.75878C19.854 13.7148 16.08 19.4318 9.17896 19.4318C7.06096 19.4318 5.08896 18.8118 3.42896 17.7468C3.72196 17.7818 4.02096 17.7988 4.32296 17.7988C6.01252 17.8017 7.65393 17.236 8.98295 16.1928C8.20014 16.1785 7.4414 15.9197 6.81291 15.4528C6.18443 14.9859 5.71767 14.3341 5.47796 13.5888C6.04077 13.694 6.62003 13.6714 7.17296 13.5228C6.32392 13.3515 5.5603 12.8917 5.01167 12.2215C4.46303 11.5513 4.16316 10.7119 4.16296 9.84578V9.79778C4.68434 10.087 5.26704 10.2481 5.86296 10.2678C5.06795 9.73748 4.50519 8.92387 4.28945 7.9929C4.07371 7.06193 4.22124 6.08372 4.70196 5.25778C5.64377 6.41689 6.81889 7.36491 8.15097 8.04026C9.48306 8.71561 10.9423 9.10317 12.434 9.17778C12.2452 8.37316 12.3274 7.52872 12.6678 6.7756C13.0081 6.02248 13.5877 5.40282 14.3163 5.01283C15.045 4.62285 15.8821 4.48437 16.6975 4.61889C17.5129 4.75341 18.2612 5.15341 18.826 5.75678C19.6665 5.59184 20.4725 5.28405 21.209 4.84678C20.9286 5.71528 20.3427 6.45257 19.56 6.92178C20.3033 6.83345 21.0293 6.63459 21.714 6.33178C21.2096 7.08439 20.5758 7.74157 19.842 8.27278Z"
                fill="#555555"
              />
            </g>
            <defs>
              <clipPath id="clip0_202_137">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
    </div>
  )
}
