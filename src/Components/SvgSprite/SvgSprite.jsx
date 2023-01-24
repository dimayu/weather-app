import './SvgSprite.scss'

export const SvgSprite = ({id}) => {
  switch (id) {
    case 'close':
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.5 4.5L4.5 17.5" strokeWidth="1.5"/>
          <path d="M4.5 4.5L17.5 17.5" strokeWidth="1.5"/>
        </svg>
      );
    case 'favorites':
      return (
        <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.9089 14.8218L10.0077 21.7143L3.10655 14.8218C2.65135 14.3751 2.2928 13.8382 2.05347 13.245C1.81415 12.6517 1.69923 12.0148 1.71595 11.3746C1.73268 10.7343 1.88068 10.1044 2.15065 9.52468C2.42062 8.94492 2.8067 8.42782 3.28459 8.00592C3.76247 7.58402 4.32181 7.26648 4.92737 7.07328C5.53293 6.88008 6.1716 6.81541 6.80317 6.88335C7.43473 6.95129 8.0455 7.15036 8.59702 7.46803C9.14854 7.7857 9.62886 8.21509 10.0077 8.72915C10.3883 8.21882 10.8691 7.79319 11.4203 7.47889C11.9714 7.16459 12.581 6.96839 13.2107 6.90258C13.8405 6.83676 14.477 6.90274 15.0804 7.09639C15.6837 7.29004 16.2409 7.60719 16.7171 8.02799C17.1933 8.44879 17.5783 8.96418 17.8479 9.5419C18.1175 10.1196 18.2659 10.7472 18.2839 11.3855C18.3019 12.0237 18.1891 12.6588 17.9525 13.2511C17.7159 13.8433 17.3606 14.38 16.9089 14.8274"
            strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'minus':
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 16H22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'search':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-search">
          <path d="M14.6033 14.6031L18.2858 18.2857" stroke="black" strokeLinejoin="round"/>
          <path
            d="M16.4444 9.07927C16.4444 13.1469 13.147 16.4443 9.07939 16.4443C5.01179 16.4443 1.71436 13.1469 1.71436 9.07927C1.71436 5.01167 5.01179 1.71423 9.07939 1.71423C13.147 1.71423 16.4444 5.01167 16.4444 9.07927Z"
          />
        </svg>
      );
    case 'user':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.806 7.51997C15.806 10.7586 13.1821 13.3263 9.9289 13.3263C6.67572 13.3263 4.05176 10.7586 4.05176 7.51997C4.05176 4.27411 6.68304 1.64282 9.9289 1.64282C13.1748 1.64282 15.806 4.27411 15.806 7.51997Z"
          />
          <path d="M1.14282 19.0743V19.0743C4.96511 12.061 15.0348 12.061 18.8571 19.0743V19.0743" stroke="black"/>
        </svg>
      );
    case 'logo':
      return (
        <svg width="100" height="22" viewBox="0 0 100 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.22161 18.7068C5.22161 19.3632 5.29031 19.8385 5.42772 20.1327C5.56514 20.427 5.81705 20.6307 6.18348 20.7438C6.54991 20.8344 7.14536 20.8796 7.96982 20.8796H11.7143C13.0197 20.8796 14.0617 20.4835 14.8404 19.6914C15.619 18.8992 16.1343 17.8014 16.3862 16.3981C16.3862 16.3302 16.4435 16.3076 16.558 16.3302C16.6954 16.3302 16.7641 16.3642 16.7641 16.4321C16.558 18.3107 16.4549 19.8611 16.4549 21.0833C16.4549 21.2644 16.4206 21.4002 16.3519 21.4907C16.2832 21.5586 16.1458 21.5926 15.9396 21.5926H0.0687054C0.0229018 21.5926 0 21.5247 0 21.3889C0 21.2531 0.0229018 21.1852 0.0687054 21.1852C0.938973 21.1852 1.56877 21.1286 1.9581 21.0154C2.37034 20.9023 2.64516 20.6872 2.78257 20.3704C2.91998 20.0309 2.98868 19.5216 2.98868 18.8426V3.12346C2.98868 2.44445 2.91998 1.9465 2.78257 1.62963C2.64516 1.31276 2.37034 1.09774 1.9581 0.984567C1.56877 0.848765 0.938973 0.780864 0.0687054 0.780864C0.0229018 0.780864 0 0.712963 0 0.577161C0 0.441359 0.0229018 0.373458 0.0687054 0.373458L1.75199 0.407408C2.71386 0.452675 3.49252 0.475309 4.08797 0.475309C4.72922 0.475309 5.53078 0.452675 6.49266 0.407408L8.14159 0.373458C8.21029 0.373458 8.24464 0.441359 8.24464 0.577161C8.24464 0.712963 8.21029 0.780864 8.14159 0.780864C7.29422 0.780864 6.66442 0.848765 6.25219 0.984567C5.86286 1.09774 5.58804 1.32407 5.42772 1.66358C5.29031 1.98045 5.22161 2.4784 5.22161 3.15741V18.7068Z"
          />
          <path
            d="M32.2102 22C30.0803 22 28.1794 21.5134 26.5076 20.5401C24.8587 19.5442 23.5762 18.2088 22.6601 16.534C21.7669 14.8364 21.3204 12.9918 21.3204 11C21.3204 8.66873 21.9158 6.67695 23.1067 5.02469C24.2976 3.34979 25.8206 2.09362 27.6756 1.25617C29.5536 0.418724 31.4659 0 33.4125 0C35.5882 0 37.5005 0.509259 39.1494 1.52778C40.7983 2.52366 42.0579 3.84774 42.9282 5.5C43.8214 7.15226 44.268 8.90638 44.268 10.7623C44.268 12.822 43.7183 14.7119 42.619 16.4321C41.5197 18.1523 40.0426 19.5103 38.1875 20.5062C36.3554 21.5021 34.3629 22 32.2102 22ZM33.4125 21.287C34.9698 21.287 36.3668 20.9136 37.6035 20.1667C38.8631 19.4198 39.8479 18.322 40.5579 16.8735C41.2907 15.4249 41.6572 13.7047 41.6572 11.713C41.6572 9.58539 41.2564 7.69547 40.4548 6.04321C39.6532 4.39095 38.5196 3.10082 37.0539 2.17284C35.6111 1.24486 33.9163 0.780864 31.9697 0.780864C29.4505 0.780864 27.4809 1.58436 26.061 3.19136C24.6411 4.79835 23.9312 7.00514 23.9312 9.81173C23.9312 11.9393 24.3319 13.8858 25.1335 15.6512C25.9351 17.394 27.0573 18.7747 28.5001 19.7932C29.9429 20.7891 31.5804 21.287 33.4125 21.287Z"
          />
          <path
            d="M62.305 22C59.8087 22 57.633 21.5247 55.7779 20.5741C53.9229 19.6235 52.503 18.3333 51.5182 16.7037C50.5563 15.0741 50.0754 13.2521 50.0754 11.2377C50.0754 9.04218 50.6365 7.09568 51.7587 5.39815C52.9038 3.70062 54.4611 2.37654 56.4306 1.42593C58.4231 0.475309 60.6675 0 63.1638 0C64.286 0 65.3509 0.113169 66.3586 0.339506C67.3892 0.54321 68.2251 0.837449 68.8663 1.22222C69.0495 1.33539 69.1526 1.43724 69.1755 1.52778C69.2213 1.59568 69.2556 1.75412 69.2785 2.00309L69.6908 5.80556C69.6908 5.87346 69.6221 5.91872 69.4847 5.94136C69.3702 5.94136 69.3015 5.90741 69.2785 5.83951C68.7747 4.20988 67.8586 2.9537 66.5303 2.07099C65.2249 1.18827 63.6104 0.746914 61.6866 0.746914C58.801 0.746914 56.5681 1.57305 54.9878 3.22531C53.4076 4.87757 52.6175 7.14095 52.6175 10.0154C52.6175 12.2109 53.0641 14.18 53.9572 15.9228C54.8733 17.643 56.1329 18.9897 57.736 19.963C59.3392 20.9362 61.137 21.4228 63.1294 21.4228C64.2974 21.4228 65.202 21.321 65.8433 21.1173C66.4845 20.9136 66.954 20.5175 67.2517 19.929C67.5495 19.3405 67.6983 18.4691 67.6983 17.3148C67.6983 16.1379 67.6182 15.323 67.4579 14.8704C67.3204 14.3951 66.9884 14.0782 66.4616 13.9198C65.9578 13.7613 65.0761 13.6821 63.8165 13.6821C63.6791 13.6821 63.6104 13.5916 63.6104 13.4105C63.6104 13.3426 63.6218 13.286 63.6447 13.2407C63.6905 13.1728 63.7363 13.1389 63.7821 13.1389C65.5685 13.2521 67.0113 13.3086 68.1106 13.3086C69.1869 13.3086 70.3091 13.2747 71.4771 13.2068C71.5229 13.2068 71.5573 13.2407 71.5802 13.3086C71.626 13.3539 71.6489 13.3992 71.6489 13.4444C71.6489 13.6029 71.5916 13.6821 71.4771 13.6821C70.9275 13.6595 70.5381 13.7387 70.3091 13.9198C70.0801 14.0782 69.9312 14.4177 69.8625 14.9383C69.7938 15.4588 69.7595 16.3642 69.7595 17.6543C69.7595 18.6728 69.7938 19.3971 69.8625 19.8272C69.9541 20.2572 70 20.5288 70 20.642C70 20.7778 69.9771 20.8683 69.9312 20.9136C69.8854 20.9588 69.7824 21.0041 69.6221 21.0494C66.851 21.6831 64.4119 22 62.305 22Z"
          />
          <path
            d="M87.9422 22C85.8123 22 83.9115 21.5134 82.2397 20.5401C80.5907 19.5442 79.3082 18.2088 78.3922 16.534C77.499 14.8364 77.0524 12.9918 77.0524 11C77.0524 8.66873 77.6479 6.67695 78.8388 5.02469C80.0296 3.34979 81.5526 2.09362 83.4077 1.25617C85.2856 0.418724 87.1979 0 89.1446 0C91.3202 0 93.2325 0.509259 94.8815 1.52778C96.5304 2.52366 97.79 3.84774 98.6603 5.5C99.5534 7.15226 100 8.90638 100 10.7623C100 12.822 99.4504 14.7119 98.3511 16.4321C97.2518 18.1523 95.7746 19.5103 93.9196 20.5062C92.0874 21.5021 90.095 22 87.9422 22ZM89.1446 21.287C90.7019 21.287 92.0989 20.9136 93.3356 20.1667C94.5952 19.4198 95.58 18.322 96.2899 16.8735C97.0228 15.4249 97.3892 13.7047 97.3892 11.713C97.3892 9.58539 96.9884 7.69547 96.1869 6.04321C95.3853 4.39095 94.2517 3.10082 92.7859 2.17284C91.3431 1.24486 89.6484 0.780864 87.7017 0.780864C85.1825 0.780864 83.213 1.58436 81.7931 3.19136C80.3732 4.79835 79.6632 7.00514 79.6632 9.81173C79.6632 11.9393 80.064 13.8858 80.8656 15.6512C81.6671 17.394 82.7893 18.7747 84.2321 19.7932C85.6749 20.7891 87.3124 21.287 89.1446 21.287Z"
          />
        </svg>
      );
    case 'plus':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className="icon-plus">
          <path d="M10 16H22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 10L16 22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'loc':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="44" viewBox="0 0 32 44" fill="none">
          <path d="M15.9993 10.3447C14.8347 10.3447 13.6964 10.6977 12.7281 11.359C11.7598 12.0203 11.0052 12.9603 10.5595 14.06C10.1139 15.1597 9.99728 16.3698 10.2245 17.5372C10.4517 18.7047 11.0124 19.777 11.8359 20.6187C12.6593 21.4604 13.7084 22.0336 14.8506 22.2658C15.9927 22.498 17.1766 22.3789 18.2525 21.9233C19.3284 21.4678 20.2479 20.6964 20.8949 19.7067C21.5419 18.717 21.8872 17.5534 21.8872 16.3631C21.8854 14.7675 21.2645 13.2377 20.1607 12.1095C19.0569 10.9812 17.5603 10.3465 15.9993 10.3447ZM15.9993 19.3723C15.417 19.3723 14.8478 19.1958 14.3637 18.8651C13.8796 18.5345 13.5022 18.0645 13.2794 17.5147C13.0566 16.9648 12.9983 16.3598 13.1119 15.776C13.2255 15.1923 13.5058 14.6561 13.9176 14.2353C14.3293 13.8144 14.8539 13.5278 15.4249 13.4117C15.996 13.2956 16.5879 13.3552 17.1259 13.583C17.6638 13.8107 18.1236 14.1964 18.4471 14.6913C18.7706 15.1861 18.9432 15.7679 18.9432 16.3631C18.9423 17.1609 18.6319 17.9258 18.08 18.4899C17.5281 19.054 16.7798 19.3714 15.9993 19.3723Z" fill="#fff"/>
          <path d="M27.3135 4.78885C24.5161 1.93016 20.7818 0.231987 16.8315 0.0220719C12.8811 -0.187844 8.9947 1.10538 5.92233 3.65215C2.84995 6.19892 0.809411 9.8187 0.194532 13.8129C-0.420346 17.807 0.434026 21.8924 2.59275 25.2805L13.7161 42.735C13.9637 43.1234 14.3021 43.4425 14.7008 43.6634C15.0995 43.8843 15.5458 44 15.9993 44C16.4528 44 16.8991 43.8843 17.2978 43.6634C17.6965 43.4425 18.035 43.1234 18.2825 42.735L29.4062 25.2805C31.4093 22.1376 32.2945 18.3863 31.9135 14.6555C31.5325 10.9248 29.9084 7.44124 27.3135 4.78885ZM26.9396 23.638L15.9994 40.8044L5.05907 23.638C1.7103 18.3833 2.42854 11.3512 6.76686 6.91662C7.97928 5.67732 9.41863 4.69424 11.0028 4.02353C12.5869 3.35283 14.2847 3.00762 15.9994 3.00762C17.714 3.00762 19.4119 3.35283 20.996 4.02353C22.5801 4.69424 24.0194 5.67732 25.2319 6.91662C29.5702 11.3512 30.2883 18.3833 26.9396 23.638Z" fill="#fff"/>
        </svg>
      )
    case '200':
      return (
        <svg className="icon-weather">
          <defs>
            <radialGradient id="gradGray" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" style={{stopColor: "white", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor: "darkgray", stopOpacity:1}} />
            </radialGradient>
            <radialGradient id="gradDarkGray" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" style={{stopColor: "white", stopOpacity:1}} />
              <stop offset="70%" style={{stopColor: "gray", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor: "dimgray", stopOpacity:1}} />
            </radialGradient>
            <linearGradient id="gradWhite" x1="40%" y1="50%" x2="90%" y2="90%">
              <stop offset="0%" style={{stopColor: "white", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor: "darkgray", stopOpacity:1}} />
            </linearGradient>
            <symbol id="grayCloud">
              <path  d="M20,15 Q25,0 45,11 Q60,5 60,20 A30,15 5 1,1 20,15 Z" />
            </symbol>
            <symbol id="thunderBolt">
              <path fill="white" d="M15,0 L1,23 L8,23 L0,40 L15,19 L8,19Z" />
            </symbol>
            <symbol id="whiteCloud">
              <path fill="url(#gradWhite)" d="M11,47 Q13,37 21,42 Q31,30 41,38 A28,21 -25 1,1 35,75 Q23,85 19,73 A12,12 0 0,1 11,47Z" />
            </symbol>
          </defs>
          <use xlinkHref="#grayCloud" className="small-cloud" fill="url(#gradGray)"/>
          <use xlinkHref="#grayCloud" x="25" y="10" className="reverse-small-cloud" fill="url(#gradDarkGray)"/>
          <use xlinkHref="#thunderBolt" x="30" y="61" className="lighting"/>
          <use xlinkHref="#whiteCloud" x="7"/>
          <use xlinkHref="#thunderBolt" x="45" y="56" className="lighting lighting-1 "/>
        </svg>
      )
    case '500':
      return (
        <svg className="icon-weather">
          <defs>
            <linearGradient id="gradWhite" x1="40%" y1="50%" x2="90%" y2="90%">
              <stop offset="0%" style={{stopColor: "white", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor: "darkgray", stopOpacity:1}} />
            </linearGradient>
            <radialGradient id="gradGray" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" style={{stopColor: "white", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor: "darkgray", stopOpacity:1}} />
            </radialGradient>
            <symbol id="rainDrop">
              <path fill="lightblue" d="M10 0 Q10,0 14,7 A5,5 0 1,1 6,7 Q10,0 10,0Z" />
            </symbol>
            <symbol id="sun">
              <circle cx="50" cy="50" r="20" fill="url(#gradYellow)"/>
              <line x1="50" y1="27" x2="50" y2="2" className="longRay"/>
              <line x1="50" y1="73" x2="50" y2="98" className="longRay"/>
              <line x1="27" y1="50" x2="2" y2="50" className="longRay"/>
              <line x1="73" y1="50" x2="98" y2="50" className="longRay"/>
              <line x1="34" y1="34" x2="16" y2="16" className="longRay"/>
              <line x1="66" y1="66" x2="84" y2="84" className="longRay"/>
              <line x1="34" y1="66" x2="16" y2="84" className="longRay"/>
              <line x1="66" y1="34" x2="84" y2="16" className="longRay"/>
              <line x1="59" y1="29" x2="66" y2="13" className="shortRay"/>
              <line x1="71" y1="42" x2="87" y2="35" className="shortRay"/>
              <line x1="71" y1="58.5" x2="87" y2="65" className="shortRay"/>
              <line x1="59" y1="71" x2="66" y2="87" className="shortRay"/>
              <line x1="41" y1="71" x2="34" y2="87" className="shortRay"/>
              <line x1="29.5" y1="58.5" x2="13" y2="66" className="shortRay"/>
              <line x1="29" y1="42" x2="13" y2="35" className="shortRay"/>
              <line x1="41" y1="29" x2="35" y2="13" className="shortRay"/>
            </symbol>
          </defs>
          <use xlinkHref="#sun" x="-12" y="-18"/>
          <path fill="url(#gradGray)" className="small-cloud"  d="M20,15 Q25,0 45,11 Q60,5 60,20 A30,15 5 1,1 20,15 Z" />
          <use id="drop1" xlinkHref="#rainDrop" x="25" y="65"/>
          <use id="drop3" xlinkHref="#rainDrop" x="50" y="65"/>
          <path fill="url(#gradWhite)" d="M11,47 Q13,37 21,42 Q31,30 41,38 A28,21 -25 1,1 35,75 Q23,85 19,73 A12,12 0 0,1 11,47Z" />
        </svg>
      )
    case '521':
      return (
        <svg className="icon-weather">
          <defs>
            <linearGradient id="gradWhite" x1="40%" y1="50%" x2="90%" y2="90%">
              <stop offset="0%" style={{stopColor: "white", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor: "darkgray", stopOpacity:1}} />
            </linearGradient>
            <radialGradient id="gradGray" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" style={{stopColor: "white", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor: "darkgray", stopOpacity:1}} />
            </radialGradient>
            <symbol id="rainDrop">
              <path fill="lightblue" d="M10 0 Q10,0 14,7 A5,5 0 1,1 6,7 Q10,0 10,0Z" />
            </symbol>
          </defs>
          <use id="drop4" xlinkHref="#rainDrop" x="15" y="65"/>
          <use id="drop1" xlinkHref="#rainDrop" x="25" y="65"/>
          <use id="drop2" xlinkHref="#rainDrop" x="37" y="65"/>
          <use id="drop3" xlinkHref="#rainDrop" x="50" y="65"/>
          <path fill="url(#gradGray)" className="small-cloud"  d="M20,15 Q25,0 45,11 Q60,5 60,20 A30,15 5 1,1 20,15 Z" />
          <path fill="url(#gradWhite)" d="M11,47 Q13,37 21,42 Q31,30 41,38 A28,21 -25 1,1 35,75 Q23,85 19,73 A12,12 0 0,1 11,47Z" />
        </svg>
      )
    case '600':
      return (
        <svg className="icon-weather">
          <defs>
            <linearGradient id="gradWhite" x1="40%" y1="50%" x2="90%" y2="90%">
              <stop offset="0%" style={{stopColor: "white", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor: "darkgray", stopOpacity:1}} />
            </linearGradient>
            <symbol id="whiteCloud">
              <path fill="url(#gradWhite)" d="M11,47 Q13,37 21,42 Q31,30 41,38 A28,21 -25 1,1 35,75 Q23,85 19,73 A12,12 0 0,1 11,47Z" />
            </symbol>
            <symbol id="snowFlake">
              <path d="M5,0 L5,10 M0,5 L10,5 M1.5,1.5 L8.5,8.5 M8.5,1.5 L1.5,8.5" />
              <path d="M3.5,0.25 L5,2 L6.5,0.25 M3.5,9.75 L5,8 L6.5,9.75" />
              <path d="M0.25,3.5 L2,5 L0.25,6.5 M9.75,3.5 L8,5 L9.75,6.5" />
              <path d="M0.75,2.90 L2.85,2.85 L2.90,0.75 M7.25,9.35 L7.15,7.15 L9.35,7.25" />
              <path d="M0.75,7.25 L2.85,7.15 L2.90,9.35 M7.15,0.75 L7.25,2.85 L9.35,2.90" />
            </symbol>
          </defs>
          <use id="snowFlake1" xlinkHref="#snowFlake" x="20" y="55"/>
          <use id="snowFlake2" xlinkHref="#snowFlake" x="35" y="65"/>
          <use id="snowFlake3" xlinkHref="#snowFlake" x="45" y="60"/>
          <use id="snowFlake4" xlinkHref="#snowFlake" x="50" y="65"/>
          <use id="snowFlake5" xlinkHref="#snowFlake" x="63" y="65"/>
          <use xlinkHref="#whiteCloud" x="10" y="-15"/>
        </svg>
      )
    case '701':
      return (
        <svg className="icon-weather">
          <defs>
            <radialGradient id="gradDarkGray" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" style={{stopColor: "white", stopOpacity:1}} />
              <stop offset="70%" style={{stopColor: "gray", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor: "dimgray", stopOpacity:1}} />
            </radialGradient>
            <radialGradient id="gradGray" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" style={{stopColor: "white", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor: "darkgray", stopOpacity:1}} />
            </radialGradient>
            <symbol id="grayCloud">
              <path  d="M20,15 Q25,0 45,11 Q60,5 60,20 A30,15 5 1,1 20,15 Z" />
            </symbol>
            <symbol id="mist">
              <path d="M5,34 L43,34" />
              <path d="M10,40 L40,40 Q51.5,40 50,35 T60,30 L80,30" />
              <path d="M15,45 L45,45 Q56.5,45 55,40 T65,35 L90,35" />
              <path d="M60,42 L85,42" />
            </symbol>
          </defs>
          <use xlinkHref="#grayCloud" className="small-cloud" fill="url(#gradDarkGray)" x="0" y="20"/>
          <use xlinkHref="#grayCloud" x="30" y="30" className="reverse-small-cloud" fill="url(#gradGray)"/>
          <use id="mist" xlinkHref="#mist" x="0" y="30"/>
        </svg>
      )
    case '781':
      return (
        <svg className="icon-weather" id="tornado">
          <path d="M26,17.5 A25,6.8 -3 1,1 68,15.5 A22,5.25 -3 1,0 26,17.5z" fill="white"/>
          <path d="M29,18.5 A19.5,4.5 -3 1,1 65,17 A17,3.5 -3 1,0 29,18.5z" fill="white"/>
          <path d="M35,20 A15,2.25 -3 1,1 60,19 A13,1.5 -3 1,0 35,20z" fill="white"/>
          <path d="M22,11 A35,12 -3 1,0 70,7 A28,9 -3 1,1 22,11z" fill="white"/>
          <path d="M25,23 A34,11.70 -4 1,0 75,18 A29,7.75 -4 1,1 25,23" fill="white"/>
          <path d="M38,33 A30,11 -5 1,0 70,31 A24,7.5 -5 1,1 38,33" fill="white"/>
          <path d="M38,45 A27,10.5 -3 1,0 73,42 A22.5,7.75 -3 1,1 38,45" fill="white"/>
          <path d="M35,56 A23,9.15 -1 1,0 75,56 A20.25,8 -1 1,1 35,56" fill="white"/>
          <path d="M33,62 A20,8.75 0 1,0 69,66 A18,7.75 0 1,1 33,62" fill="white"/>
          <path d="M31,68 A17,7.75 -1 1,0 60,73 A15,7.125 -1 1,1 31,68" fill="white"/>
          <path d="M28,74.5 Q25,86 50,98 C45,85 61,84 57,77 A8,3.85 2 1,1 28,74.5" fill="white"/>
        </svg>
      )
    case '800':
      return (
        <svg id="sun" className="icon-weather">
          <defs>
            <radialGradient id="gradYellow" cx="50%" cy="50%" r="80%" fx="90%" fy="80%">
              <stop offset="0%" style={{stopColor: "yellow", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"orange", stopOpacity:1}} />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="20" fill="url(#gradYellow)"/>
          <line x1="50" y1="27" x2="50" y2="2" className="longRay"/>
          <line x1="50" y1="73" x2="50" y2="98" className="longRay"/>
          <line x1="27" y1="50" x2="2" y2="50" className="longRay"/>
          <line x1="73" y1="50" x2="98" y2="50" className="longRay"/>
          <line x1="34" y1="34" x2="16" y2="16" className="longRay"/>
          <line x1="66" y1="66" x2="84" y2="84" className="longRay"/>
          <line x1="34" y1="66" x2="16" y2="84" className="longRay"/>
          <line x1="66" y1="34" x2="84" y2="16" className="longRay"/>
          <line x1="59" y1="29" x2="66" y2="13" className="shortRay"/>
          <line x1="71" y1="42" x2="87" y2="35" className="shortRay"/>
          <line x1="71" y1="58.5" x2="87" y2="65" className="shortRay"/>
          <line x1="59" y1="71" x2="66" y2="87" className="shortRay"/>
          <line x1="41" y1="71" x2="34" y2="87" className="shortRay"/>
          <line x1="29.5" y1="58.5" x2="13" y2="66" className="shortRay"/>
          <line x1="29" y1="42" x2="13" y2="35" className="shortRay"/>
          <line x1="41" y1="29" x2="35" y2="13" className="shortRay"/>
        </svg>
      );
    case '801':
      return (
        <svg className="icon-weather">
          <defs>
            <radialGradient id="gradYellow" cx="50%" cy="50%" r="80%" fx="90%" fy="80%">
              <stop offset="0%" style={{stopColor: "yellow", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"orange", stopOpacity:1}} />
            </radialGradient>
            <linearGradient id="gradWhite" x1="40%" y1="50%" x2="90%" y2="90%">
              <stop offset="0%" style={{stopColor: "white", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor: "darkgray", stopOpacity:1}} />
            </linearGradient>
            <radialGradient id="gradGray" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" style={{stopColor: "white", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor: "darkgray", stopOpacity:1}} />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="20" fill="url(#gradYellow)"/>
          <line x1="50" y1="27" x2="50" y2="2" className="longRay"/>
          <line x1="50" y1="73" x2="50" y2="98" className="longRay"/>
          <line x1="27" y1="50" x2="2" y2="50" className="longRay"/>
          <line x1="73" y1="50" x2="98" y2="50" className="longRay"/>
          <line x1="34" y1="34" x2="16" y2="16" className="longRay"/>
          <line x1="66" y1="66" x2="84" y2="84" className="longRay"/>
          <line x1="34" y1="66" x2="16" y2="84" className="longRay"/>
          <line x1="66" y1="34" x2="84" y2="16" className="longRay"/>
          <line x1="59" y1="29" x2="66" y2="13" className="shortRay"/>
          <line x1="71" y1="42" x2="87" y2="35" className="shortRay"/>
          <line x1="71" y1="58.5" x2="87" y2="65" className="shortRay"/>
          <line x1="59" y1="71" x2="66" y2="87" className="shortRay"/>
          <line x1="41" y1="71" x2="34" y2="87" className="shortRay"/>
          <line x1="29.5" y1="58.5" x2="13" y2="66" className="shortRay"/>
          <line x1="29" y1="42" x2="13" y2="35" className="shortRay"/>
          <line x1="41" y1="29" x2="35" y2="13" className="shortRay"/>
          <path fill="url(#gradGray)" className="small-cloud"  d="M20,15 Q25,0 45,11 Q60,5 60,20 A30,15 5 1,1 20,15 Z" />
          <path fill="url(#gradWhite)" d="M11,47 Q13,37 21,42 Q31,30 41,38 A28,21 -25 1,1 35,75 Q23,85 19,73 A12,12 0 0,1 11,47Z" />
        </svg>
      )
    case '802':
      return (
        <svg className="icon-weather">
          <defs>
            <linearGradient id="gradWhite" x1="40%" y1="50%" x2="90%" y2="90%">
              <stop offset="0%" style={{stopColor: "white", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor: "darkgray", stopOpacity:1}} />
            </linearGradient>
            <radialGradient id="gradGray" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" style={{stopColor: "white", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor: "darkgray", stopOpacity:1}} />
            </radialGradient>
          </defs>
          <path fill="url(#gradGray)" className="small-cloud"  d="M20,15 Q25,0 45,11 Q60,5 60,20 A30,15 5 1,1 20,15 Z" />
          <path fill="url(#gradWhite)" d="M11,47 Q13,37 21,42 Q31,30 41,38 A28,21 -25 1,1 35,75 Q23,85 19,73 A12,12 0 0,1 11,47Z" />
        </svg>
      )
    case '803':
      return (
        <svg className="icon-weather">
          <defs>
            <linearGradient id="gradWhite" x1="40%" y1="50%" x2="90%" y2="90%">
              <stop offset="0%" style={{stopColor: "white", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor: "darkgray", stopOpacity:1}} />
            </linearGradient>
            <radialGradient id="gradGray" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" style={{stopColor: "white", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor: "darkgray", stopOpacity:1}} />
            </radialGradient>
            <radialGradient id="gradDarkGray" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" style={{stopColor: "white", stopOpacity:1}} />
              <stop offset="70%" style={{stopColor: "gray", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor: "dimgray", stopOpacity:1}} />
            </radialGradient>
          </defs>
          <path fill="url(#gradGray)" className="small-cloud"  d="M20,15 Q25,0 45,11 Q60,5 60,20 A30,15 5 1,1 20,15 Z" />
          <path fill="url(#gradDarkGray)" className="reverse-small-cloud"  d="M20,15 Q25,0 45,11 Q60,5 60,20 A30,15 5 1,1 20,15 Z" />
          <path fill="url(#gradWhite)" d="M11,47 Q13,37 21,42 Q31,30 41,38 A28,21 -25 1,1 35,75 Q23,85 19,73 A12,12 0 0,1 11,47Z" />
        </svg>
      )
    default:
      return <svg></svg>;
  }
};