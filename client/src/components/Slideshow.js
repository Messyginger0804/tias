import React from 'react'
// import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

// HiArrowLeft
// HiArrowRight

function Slideshow({ products }) {
    // const [currentSlide, setCurrentSlide] = useState(0);
    // const data = [
    //     'https://m.media-amazon.com/images/I/61GKar3CjTS._AC_SX466_.jpg',
    //     'https://m.media-amazon.com/images/I/4150mryQtGL._MCnd_AC_.jpg',
    //     'https://m.media-amazon.com/images/I/61PnHlc0HCL._AC_UY218_.jpg',
    //     'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_electronics_sr_pg1_1?ie=UTF8&adId=A07589191Z3KJ9M95YR78&qualifier=1677957219&id=1753450893022265&widgetName=sp_atf&url=%2FSAMSUNG-QN32LS03BBFXZA-Quantum-Enhanced-Protection%2Fdp%2FB0BJ33ZC8D%2Fref%3Dsr_1_1_sspa%3Fcrid%3DJJ9Y1N6V48I8%26keywords%3D65%2Binch%2Btv%26nav_sdd%3Daps%26qid%3D1677957219%26refinements%3Dp_n_size_browse-bin%253A1232879011%26rnid%3D1232878011%26s%3Dtv%26sprefix%3D65%2B%26sr%3D1-1-spons%26psc%3D1'


    // ]


    return (
        <div className='w-scree h-auto'>
            <div className='relative'>
                <div className='text-center text-3xl font-extrabold'>
                    <h1>Welcome to Tias. This is an online market where you can buy electrics, clothes and so much more!!</h1>
                </div>
                {/* <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8'>
                    <div className='w-14 h-12 border-[1px] border-gray-600 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'> <HiArrowLeft /> </div>
                    <div className='w-14 h-12 border-[1px] border-gray-600 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'> <HiArrowRight /> </div>
                </div> */}
            </div>
        </div >
    )
}

export default Slideshow;