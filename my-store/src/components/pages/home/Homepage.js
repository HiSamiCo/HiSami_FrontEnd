import React from 'react';
import '../../../css/Homepage.css'

function Homepage() {
    return (
        <div className='homepage'>

            <div className='banner'>
                <h1>HiSami Co.</h1>
                <img alt='' src=''/>
            </div>

            <div className='aboutUs'>
                <h2>A Little Something About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Non odio euismod lacinia at quis risus. Imperdiet nulla malesuada pellentesque elit eget graa fames. Nunc vel risus commodo viverra maecenas accumsan lacus. Sed euismod nisi porta lorem mollis. Lectus sit amet est placerat in egestas era sed arcu non odio euismod lacinia. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Elit pellentesque habitant morbi tristique. Volutpat maecenas volutpat blandit aliquam. Erat velit scelerisque in dictum non consectetur. Tempor nec feugiat nisl pretium. Non odio euismod lacinia molestie ac. Eget nunc scelerisque viverra mauris in aliquam sem fringilla. Sed enim ut sem viverra.</p>
  
            </div>
            <nav>
                <a href='/shop'>View All Products</a>
            </nav>
                    
            <div className='exampleProducts1'>
                <div className='example1'>
                    <h3>earring</h3>
                    <img alt='earring' src='https://live.staticflickr.com/65535/51561477070_77b09350ba_b.jpg'/>
                </div>

                <div className='example2'>
                    <h3>earring</h3>
                    <img alt='earring' src='https://live.staticflickr.com/65535/51561243964_7c0eb0c4b4_b.jpg' />
                </div>
            </div>
            <div className='exampleProducts2'>
                <div className='example3'>
                    <h3>earring</h3>
                    <img alt='earring' src='https://live.staticflickr.com/65535/51561477485_df4d95dca0_b.jpg' />
                </div>

                <div className='example4'>
                    <h3>earring</h3>
                    <img alt='earring' src='https://live.staticflickr.com/65535/51560551371_a221b9aa8c_b.jpg' />
                </div>
            </div>
            
        </div>
    );
}

export default Homepage;
