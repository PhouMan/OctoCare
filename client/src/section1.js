import './section1.css';
import { Link } from 'react-router-dom';
import CircleItem from './CircleItem';
import { ReactComponent as Octo } from './images/AltmanMascot1.svg'
import HeaderNav from './HeaderNav';

function Section1() {
    const book = (
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2946 3.1874C10.3875 2.11918 6.81993 0.812517 2.88595 0.345778C1.2994 0.157544 0 1.46495 0 3.06262V18.4912C0 20.089 1.3057 21.362 2.87768 21.6474C6.42706 22.292 9.37926 23.9939 11.2631 25.3395C11.5786 25.5649 11.928 25.7356 12.2946 25.8517V3.1874ZM14.7054 25.8521C15.0715 25.7362 15.4204 25.5657 15.7356 25.3406C17.6193 23.9949 20.5721 22.2923 24.1224 21.6478C25.6944 21.3624 27 20.0891 27 18.4915V3.06291C27 1.46522 25.7005 0.157819 24.1141 0.346052C20.18 0.812791 16.6125 2.11928 14.7054 3.18744V25.8521Z" fill="#327184"/>
      </svg>
      );

    const pen = (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <g clip-path="url(#clip0_15_138)">
            <path d="M18.3686 -0.00167847C18.0261 -0.00167847 17.687 0.0667609 17.3712 0.199621C17.0575 0.331655 16.7731 0.524666 16.5345 0.76744L2.41255 14.8208C2.3077 14.9252 2.23164 15.0549 2.19177 15.1973L0.0317655 22.9116C-0.0517289 23.2097 0.032107 23.5298 0.251071 23.7489C0.470037 23.9678 0.79008 24.0516 1.08827 23.9681L8.80257 21.8081C8.94499 21.7682 9.07467 21.6921 9.17901 21.5873L23.2322 7.46554L23.2346 7.46322C23.4744 7.22465 23.6649 6.94107 23.795 6.62873C23.9256 6.31539 23.9928 5.97929 23.9928 5.63982C23.9928 5.30036 23.9256 4.96426 23.795 4.6509C23.6649 4.33856 23.4744 4.05497 23.2346 3.81641L23.2322 3.81411L20.2044 0.769232C19.9656 0.525615 19.6805 0.331979 19.3659 0.199621C19.0502 0.0667609 18.7111 -0.00167847 18.3686 -0.00167847Z" fill="#327184"/>
        </g>
        <defs>
            <clipPath id="clip0_15_138">
            <rect width="24" height="24" fill="white"/>
            </clipPath>
        </defs>
        </svg>
    );

    const buttonPlay = (<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.20503 0.0301161C3.74027 0.0301161 3.28328 0.148582 2.87719 0.374177C2.46369 0.584967 2.11466 0.903585 1.86712 1.2965C1.61603 1.69505 1.47898 2.15482 1.47086 2.62581L1.47074 2.63934V19.3908L1.47086 19.4043C1.47898 19.8753 1.61603 20.3351 1.86712 20.7336C2.11466 21.1266 2.46369 21.4451 2.87719 21.656C3.28328 21.8815 3.74027 22 4.20503 22C4.67638 22 5.13973 21.8782 5.55011 21.6463C5.55915 21.6412 5.56807 21.6359 5.57689 21.6304L19.138 13.243C19.5492 13.0357 19.8963 12.72 20.1418 12.3295C20.3949 11.9263 20.5295 11.4598 20.5295 10.9836C20.5295 10.5075 20.3949 10.041 20.1418 9.63776C19.8962 9.24688 19.5484 8.93087 19.1367 8.72363L5.57466 0.398302C5.56657 0.393336 5.55838 0.388517 5.55011 0.383846C5.13973 0.151968 4.67638 0.0301161 4.20503 0.0301161Z" fill="#327184"/>
      </svg>);

    const note = (<svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
        <path d="M20.7075 26.6613C24.9975 27.0738 27.28 25.0663 28.435 20.1025L29.7825 14.355C31.13 8.60751 29.37 5.76126 23.6087 4.41376L21.3125 3.87751C16.72 2.79126 13.9837 3.68501 12.375 7.01251M20.7075 26.6613C20.02 26.6063 19.2775 26.4825 18.48 26.29L16.17 25.74C10.4363 24.3788 8.6625 21.5463 10.01 15.7988L11.3575 10.0375C11.6325 8.86876 11.9625 7.85126 12.375 7.01251M20.7075 26.6613C19.855 27.2388 18.7825 27.72 17.4763 28.1463L15.3038 28.8613C9.845 30.6213 6.97125 29.15 5.1975 23.6913L3.4375 18.26C1.6775 12.8013 3.135 9.91376 8.59375 8.15376L10.7662 7.43876C11.33 7.26001 11.8662 7.10876 12.375 7.01251M17.38 11.7288L24.0487 13.42M16.0325 17.05L20.02 18.0675" stroke="#327184" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>);

    return (
        <div>
            <HeaderNav title="SECTION I: Emergency Response Protocol" backLink="/"/>

            {/* scrollable page here*/}
           
            <div className='page-background'>
            <div className='center'>


                <Link to='/readSection1/1'>
                <CircleItem
                        x={188}
                        y={116}
                        svgIcon={book} 
                        text="Read"
                        color="#b1d8b7"
                        status="complete"
                    />
                </Link>

                <CircleItem
                        x={295}
                        y={254}
                        svgIcon={pen} 
                        text="Practice"
                        color="#2BD0DC"
                        status="incomplete"
                    />

                 <CircleItem
                        x={260}
                        y={445}
                        svgIcon={buttonPlay} 
                        text="Watch"
                        color="#2BD0DC"
                        status="incomplete"
                    />

                    <Octo className='octo-logo' width="150" height="120"/> 

                    <CircleItem
                        x={140}
                        y={580}
                        svgIcon={pen} 
                        text="Practice"
                        color="#2BD0DC"
                        status="incomplete"
                    />

                <CircleItem
                        x={145}
                        y={800}
                        svgIcon={note} 
                        text="Review"
                        color="#2BD0DC"
                        status="incomplete"
                    />
                 <svg className='dashed-line-path' xmlns="http://www.w3.org/2000/svg" width="208" height="689" viewBox="0 0 208 689" fill="none">
                    <path d="M96 3C143.667 40.5 230.4 140.9 196 242.5C153 369.5 -100 417 51.5 707.5" stroke="black" stroke-opacity="0.15" stroke-width="7" stroke-dasharray="22 13"/>
                </svg>

            </div>
            </div>
</div>
    );
}

export { Section1 };