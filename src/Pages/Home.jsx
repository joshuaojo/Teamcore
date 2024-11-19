import React from 'react'
import { motion } from 'framer-motion';

const Home = () => {

  return (
    <div className='w-full  h-[1000px]   bg-custom-gradient'>
    <div className='grid xl:grid-cols-2 gap-40'>
    <div className=' mt-60 w-full lg:ml-10 xl:ml-56'>
      <p className=' hidden md:block xl:font-poppins xl:text-xl xl:font-extralight xl:text-customwhite'> Where you get value for your money...  </p>
      <p className='font-poppins text-6xl font-semibold mt-3 lg:flex'> <span className='text-4xl md:text-6xl'>Welcome to</span> Te<span className='text-customOrange'>a</span>mC<span className='text-customOrange'>o</span>re</p>
      <p className='text-customwhite font-poppins text-xl mt-3'>Lorem ipsum dolor sit amet consectetur. Risus neque id semper ante,<p>Nunc consectetur feugiat feugiat libero diam enim. Egestas vitae</p>  egestas dolor dictumst</p>
   <div className='mt-16 inline-flex gap-6'>
      <motion.button 
  className='w-[171px] h-[54px]   rounded-md bg-customOrange  border-2 border-customOrange font-poppins text-white '
  whileHover={{
    backgroundColor: 'white',
    color: 'rgba(255, 102, 0, 1)'
   
  }}
  transition={{ duration: 0.3,  }}  
>
Hire Us
</motion.button>

<motion.button
      className='hidden sm:block   h-[54px] w-[171px] rounded-md border-2  border-customOrange text-customOrange font-poppins'
      whileHover={{ 
        backgroundColor: 'rgba(255, 102, 0, 1)', 
        color: '#ffffff' 
      }}
      transition={{ duration: 0.3 }} 
    >
      Contact us
    </motion.button>
</div>

    </div>
<div className='lg:relative  mt-28'>

<motion.img
  src="/img/3D Cone.png"
  alt="3D Cone"
  className=' hidden lg:block lg:absolute lg:w-[127px] lg:h-[131px]   lg:top-28 lg:left-6'
  initial={{ opacity: 1, y: -40 }}  
  animate={{ opacity: 1, y: 0 }}   
  transition={{ 
    duration: 2,     
    repeat: Infinity,      
    repeatType: "reverse"  
  }}
/>

<motion.img
  src="/img/2D Cone.png"
  alt="2D Cone"
  className=' lg:hidden absolute  top-72 left-[300px] w-[75px] h-[84px] md:left-[700px] md:w-[155px] md:h-[164px] '
  initial={{ opacity: 1, y: -40 }}  
  animate={{ opacity: 1, y: 0 }}   
  transition={{ 
    duration: 2,     
    repeat: Infinity,      
    repeatType: "reverse"  
  }}
/>




  <img src="/img/man.png" alt="" className=' w-[306px] h-[349px] top-[690px] left-9 md:w-[386px] md:h-[409px] md:top-[590px] md:left-32 lg:w-[427px] lg:h-[460.2px]  lg:-z-0 absolute lg:top-28 lg:left-10' />
  <motion.img src="/img/3D Stick.png" alt="" className='w-[134px] hidden lg:block h-[150px] absolute top-[440px] left-[456px] '
   initial={{ opacity: 1, y: -50  }}  
   animate={{ opacity: [1, 0.8, 1], y: [50, -50, 50] }}
 
   transition={{ 
    duration: 5,         
    ease: 'easeInOut', 
    repeat: Infinity,      
    repeatType: 'reverse'
  }}
  
  />
  <img src="/img/3D Cube.png" alt="" className=' hidden lg:block lg:absolute lg:w-[82.81px] lg:-z-50 lg:h-[82px] lg:top-[190px] lg:left-[436px]' />
</div>



    </div>
<div className=' mt-80 md:mt-[400px] xl:mt-[500px] '>

<p className='font-poppins  text-center text-5xl font-bold '> <span className='border-b-4 border-customOrange'>What</span> We Do</p>
 <div className='grid grid-cols-2 lg:grid-cols-4 lg:mx-40 md:mx-28 mx-3 gap-6 md:gap-14 lg:gap-20 mt-28'>
 <motion.div 
 whileHover={{scale:1.3}}
 whileTap={{scale:1}}
 className='bg-customorangeg md:w-[309px] w-[165px] h-[206px] md:h-[375px] rounded-sm md:rounded-xl text-center hover:shadow-2xl  '>
  <img src="/img/Frame 37.png" alt="" className='w-[47px] ml-14 h-[38.74px] md:w-[100px] md:h-[81px] md:mt-10 md:ml-24' />
  <p className='font-poppins text-2xl md:mt-14'>Create</p>
  <p className='font-poppins md:mt-7 text-customgrey font-thin'>Lorem ipsum dolor sit amet consectetur. Cursus vel vestibulum etiam nulla sed risus blandit. </p>
 </motion.div>
 <motion.div 
 whileHover={{scale:1.3}}
 whileTap={{scale:1}}
 className='bg-customorangeg md:w-[309px] w-[165px] h-[206px] md:h-[375px] rounded-sm md:rounded-xl text-center hover:shadow-2xl'>
  <img src="/img/Frame 37.png" alt="" className='w-[47px]  ml-14 h-[38.74px] md:w-[100px] md:h-[81px] md:mt-10 md:ml-24' />
  <p className='font-poppins text-2xl md:mt-14'>Edit</p>
  <p className='font-poppins md:mt-7 text-customgrey font-thin'>Lorem ipsum dolor sit amet consectetur. Cursus vel vestibulum etiam nulla sed risus blandit. </p>
 </motion.div>
 <motion.div  
 whileHover={{scale:1.3}}
 whileTap={{scale:1}}
 className='bg-customorangeg md:w-[309px] w-[165px] h-[206px] md:h-[375px] rounded-sm md:rounded-xl text-center hover:shadow-2xl '>
  <img src="/img/Frame 37.png" alt="" className='w-[47px]  ml-14 h-[38.74px] md:w-[100px] md:h-[81px] md:mt-10 md:ml-24' />
  <p className='font-poppins text-2xl md:mt'>Assist</p>
  <p className='font-poppins md:mt-7 text-customgrey font-thin'>Lorem ipsum dolor sit amet consectetur. Cursus vel vestibulum etiam nulla sed risus blandit. </p>
 </motion.div>
 <motion.div 
 whileHover={{scale:1.3}}
 whileTap={{scale:1}}
 className='bg-customorangeg md:w-[309px] w-[165px] h-[206px] md:h-[375px] rounded-sm md:rounded-xl text-center hover:shadow-2xl '>
  <img src="/img/Frame 37.png" alt="" className='w-[47px]  ml-14 h-[38.74px] md:w-[100px] md:h-[81px] md:mt-10 md:ml-24' />
  <p className='font-poppins text-xl md:mt'>Delete</p>
  <p className='font-poppins md:mt-7 text-customgrey  font-thin'>Lorem ipsum dolor sit amet consectetur. Cursus vel vestibulum etiam nulla sed risus blandit. </p>
 </motion.div>

 </div>

</div>
 <div className='md:mt-52'>
  <img src="/img/yellow.png" alt="" className='lg:w-[484px] h-[428px] float-right' />
 
 </div>
<div className='mt-[600px]'>
  <p className='font-poppins text-3xl text-center md:ml-[230px] lg:ml-96 font-semibold' >  About Us </p>
  <p className=' font-poppins  text-center text-xl font-thin text-customgrey '>Teamcore is lorem ipsum dolor sit amet consectetur. Ante tellus ut ornare ut nibh volutpat risus elit. </p> <p className='font-poppins text-center font-thin text-customgrey text-xl'>Magna ultrices leo id libero purus donec lacus hendrerit. Ut semper nisl amet faucibus</p> <p className='font-poppins text-center text-customgrey font-thin text-xl'>sit faucibus. Libero commodo justo feugiat mi non velit urna tempus morbi. Lacus purus morbi viverra morbi habitant </p> <p className=' font-poppins  text-center text-customgrey text-xl font-thin'>  varius. Amet varius mollis quam viverra.
     Malesuada facilisis in aliquam vulputate lectus cursus vivamus <br/> posuere.</p>
<img src="/img/orange.png" alt=""  className='xl:w-[484px]  h-[428px] xl:top-[2100px] lg:absolute float-left'/>
<div className=' md:mx-10 lg:mt-72  xl:ml-[600px] inline-flex gap-10 md:gap-32'>
<div > <p className='font-poppins text-center font-extrabold text-xl md:text-5xl'>12+</p>
<p className='text-center font-poppins font-extralight'>Years of Experience</p>
</div>
<div ><p className='font-poppins font-extrabold text-xl md:text-5xl'>12,000+</p>
<p className='text-center font-poppins font-extralight'>Users</p>
</div>
<div  > <p className='font-poppins text-center font-extrabold text-xl md:text-5xl'>200+</p>
<p className='text-center font-poppins font-extralight inline-flex'> Team Members</p>
</div>
</div>
</div>
<div className='bg-custom-gradient  mt-44'>
<div className='grid lg:grid-cols-2 lg:mx-64 gap-0.5 lg:mt-40'>
<div className=' lg:inline-flex hidden gao-0 mt-24'>

  <motion.img src="/img/3D Stick.png" alt="" className=' hidden lg:block w-[134px] mt-80   h-[150px]  '
   initial={{ opacity: 1, y: -50  }}  
   animate={{ opacity: [1, 0.8, 1], y: [50, -50, 50] }}
 
   transition={{ 
    duration: 15,         
    ease: 'easeInOut', 
    repeat: Infinity,      
    repeatType: 'reverse'
  }}
  
  />
  <div className=' hidden lg:block relative'>
  <img src="/img/vector.png" alt="" className='relative w-[435px] h-[471px]' />
  <img src="/img/man2.png" alt="" className='absolute top-0' />
  </div>
 
</div>
<div className=' mt-14 lg:mt-60 '>
<motion.img
  src="/img/3D Cone2.png"
  alt="3D Cone"
  className='lg:hidden block lg:absolute w-[127px]  h-[131px] ml-28 md:ml-80'
  initial={{ opacity: 1, y: -40 }}  
  animate={{ opacity: 1, y: 0 }}   
  transition={{ 
    duration: 2,     
    repeat: Infinity,      
    repeatType: "reverse"  
  }}
/>
<p className='font-poppins text-4xl md:text-7xl font-bold md:inline-flex md:ml-40'>15%... <span className='text-xl md:text-2xl md:mt-10 lg:block font-poppins'>Get A Discount Right Now!</span> </p>
<div className='mt-4'>
<p className=' font-poppins lg:float-right text-center   text-customgrey md:text-xl font-extralight'>Lorem ipsum dolor sit amet consectetur. Dignissim accumsan </p> 
<p className=' font-poppins lg:float-right text-center text-customgrey md:text-xl font-extralight'>blandit in turpis non semper mi massa. Ultrices lacus viverra facilisi</p> 
<p className=' font-poppins lg:float-right text-center text-customgrey md:text-xl font-extralight'>elit at ut at. Amet suscipit id sed sed. Lacus fringilla vitae at ut quis </p>
<p className='font-poppins lg:float-right text-center text-customgrey md:text-xl font-extralight'> orci aliquet orci orci.</p>

</div>
<motion.button 
  className='md:w-[171px] ml-28 w-[151px] h-[40px] md:h-[54px] md:ml-[350px] lg:ml-96 mt-5 lg:float-right rounded-md bg-customOrange  border-2 border-customOrange font-poppins text-white '
  whileHover={{
    backgroundColor: 'white',
    color: 'rgba(255, 102, 0, 1)'
   
  }}
  transition={{ duration: 0.3,  }}  
>
Get Discount
</motion.button>
<motion.img
  src="/img/3D Cone2.png"
  alt="3D Cone"
  className='hidden lg:block lg:absolute w-[127px]  h-[131px] top-[2990px] left-[1619px]'
  initial={{ opacity: 1, y: -40 }}  
  animate={{ opacity: 1, y: 0 }}   
  transition={{ 
    duration: 2,     
    repeat: Infinity,      
    repeatType: "reverse"  
  }}
/>
<img src="/img/3D Tilted.png" alt=""  className='hidden  lg:absolute   lg:top-[2999px] lg:left-[1619px] '/>
</div>
</div>

<img src="/img/Frame 51.png" alt=""  className='lg:hidden mt-6 ml-8 w-[275px] h-[289px] md:mt-6 md:ml-36 md:w-[495px] md:h-[509px]'/>
</div>
 <div className='mt-72'>
 <p className="font-poppins hidden lg:block lg:text-4xl lg:font-bold lg:text-center lg:relative">
  Reviews
  <span className="absolute w-20 mt-11 left-[878px] h-[9px] bg-customOrange"></span>
</p>
<p className='font-poppins text-xl hidden lg:block text-center mt-5 font-thin'>Know what past clients think about us</p>

 </div>
 <div className=' hidden  lg:inline-flex lg:gap-16 lg:mx-14 lg:mt-64'>
<div className='bg-Custombrown xl:w-[395px] xl:h-[408px]'>

  <img src="/img/Ellipse 1.png" alt="" className='xl:w-[292px] xl:h-[292px] absolute xl:top-[3900px] left-28'/>
  <p className='font-poppins font-bold text-4xl mt-36 text-center'>John Doe</p>
  <p className='font-poppins font-extralight text-center'>Lorem ipsum dolor sit amet consectetur. Venenatis at in egestas non nisl enim consequat. Sed commodo at elit vitae platea interdum mattis.</p>
</div>

<div className='bg-Custombrown xl:w-[395px] xl:h-[408px]'>

  <img src="img/Ellipse 1.png" alt="mmm" className='xl:w-[292px] xl:h-[292px] absolute xl:top-[3900px] left-[570px]'/>
  <p className='font-poppins font-bold text-4xl mt-36 text-center'>John Doe</p>
  <p className='font-poppins font-extralight text-center'>Lorem ipsum dolor sit amet consectetur. Venenatis at in egestas non nisl enim consequat. Sed commodo at elit vitae platea interdum mattis.</p>
</div>
<div className='bg-Custombrown xl:w-[395px] xl:h-[408px]'>

  <img src="/img/Ellipse 1.png" alt="" className='xl:w-[292px] xl:h-[292px] absolute xl:top-[3900px] left-[1030px]'/>
  <p className='font-poppins font-bold text-4xl mt-36 text-center'>John Doe</p>
  <p className='font-poppins font-extralight text-center'>Lorem ipsum dolor sit amet consectetur. Venenatis at in egestas non nisl enim consequat. Sed commodo at elit vitae platea interdum mattis.</p>
</div>
<div className='bg-Custombrown xl:w-[395px] xl:h-[408px]'>

  <img src="/img/Ellipse 1.png" alt="" className='xl:w-[292px] xl:h-[292px] absolute xl:top-[3900px] left-[1490px]'/>
  <p className='font-poppins font-bold text-4xl mt-36 text-center'>John Doe</p>
  <p className='font-poppins font-extralight text-center'>Lorem ipsum dolor sit amet consectetur. Venenatis at in egestas non nisl enim consequat. Sed commodo at elit vitae platea interdum mattis.</p>
</div>
 </div>


<div className='lg:mt-80 mt-0 md:mx-16 grid lg:grid-cols-2 lg:relative lg:mx-48'>
<div>
  <p className='font-poppins text-3xl md:text-6xl font-bold'>Meet The Founder</p>
  <div className='mt-5'>
  <p className='font-poppins text-customgrey md:text-xl font-extralight'>Chidi is amet consectetur. Magna vel hendrerit interdum </p>
  <p className='font-poppins text-customgrey md:text-xl font-extralight'> tincidunt imperdiet suscipit nibh magna convallis. Dui ac </p>
  <p className='font-poppins text-customgrey md:text-xl font-extralight'> convallis consectetur amet morbi tincidunt velit accumsan </p>
  <p className='font-poppins text-customgrey md:text-xl font-extralight'>tortor. Eu arcu volutpat dapibus arcu. Dictumst ornare et </p>
  <p className='font-poppins text-customgrey md:text-xl font-extralight'> penatibus faucibus netus in eros luctus. Nisl cras nunc euismod </p> 
  <p className='font-poppins text-customgrey md:text-xl font-extralight'> et porttitor lectus.</p>
  </div>

</div>
<div>
  <img src="/img/Vector2.png" alt=""  className='md:w-[406px] mt-4 ml-4 md:h-[474px] w-[275px] h-[289px] lg:w-[446px] lg:h-[504px] md:ml-9 md:absolute lg:-top-36 lg:left-[900px] '/>
</div>

</div>

<div className='bg-custom-gradient mt-[500px] lg:mt-64 h-[990px] '>
<div className='pt-44'>
<p className='text-center font-poppins font-bold text-2xl md:text-5xl' >Frequently Asked Questions</p>
</div>

 <div className='inline-flex lg:gap-96 bg-white mt-24 lg:mx-16 rounded-3xl w-screen shadow-xl md:w-screen xl:w-[1700px] h-20  xl:h-32 '>
  <p className='font-poppins inline-flex text-2xl md:text-4xl mt-5 lg:mt-10 ml-7 '> What Is Teamcore?</p>
  <img src="/img/drop.png" alt="" className='w-[50px] ml-9 mt-4 h-[50px] md:w-[70px] md:h-[70px]  md:mt-1 lg:w-[100px] lg:h-[100px] md:ml-96 float-right lg:mt-4 lg:ml-[750px]' />
 
 </div>
 <div className='inline-flex lg:gap-96 bg-white mt-24 lg:mx-16 rounded-3xl w-screen shadow-xl md:w-screen xl:w-[1700px] h-20  xl:h-32 '>
  <p className='font-poppins inline-flex text-2xl md:text-4xl mt-5 lg:mt-10 ml-7 '> What Is Teamcore?</p>
  <img src="/img/drop.png" alt="" className='w-[50px] ml-9 mt-4 h-[50px] md:w-[70px] md:h-[70px]  md:mt-1 lg:w-[100px] lg:h-[100px] md:ml-96 float-right lg:mt-4 lg:ml-[750px]' />
 
 </div>
 <div className='inline-flex lg:gap-96 bg-white mt-24 lg:mx-16 rounded-3xl w-screen shadow-xl md:w-screen xl:w-[1700px] h-20  xl:h-32 '>
  <p className='font-poppins inline-flex text-2xl md:text-4xl mt-5 lg:mt-10 ml-7 '> What Is Teamcore?</p>
  <img src="/img/drop.png" alt="" className='w-[50px] ml-9 mt-4 h-[50px] md:w-[70px] md:h-[70px]  md:mt-1 lg:w-[100px] lg:h-[100px] md:ml-96 float-right lg:mt-4 lg:ml-[750px]' />
 
 </div>
 <div className='inline-flex lg:gap-96 bg-white mt-24 lg:mx-16 rounded-3xl w-screen shadow-xl md:w-screen xl:w-[1700px] h-20  xl:h-32 '>
  <p className='font-poppins inline-flex text-2xl md:text-4xl mt-5 lg:mt-10 ml-7 '> What Is Teamcore?</p>
  <img src="/img/drop.png" alt="" className='w-[50px] ml-9 mt-4 h-[50px] md:w-[70px] md:h-[70px]  md:mt-1 lg:w-[100px] lg:h-[100px] md:ml-96 float-right lg:mt-4 lg:ml-[750px]' />
 
 </div>

</div>
<div className='hidden lg:block lg:mt-44'>
<p className='font-poppins font-bold text-4xl text-center'> Subscribe To Our Newsletter</p>
{/* <hr className='broder-t-2 border-customOrange w-32 h-2' /> */}
<div className=' mt-5 inline-flex'>
<input type="text"
 name="username"
 id="username"
 placeholder="Enter your email"
 className='text-lg p-2 ml-96 w-[700px] border-4 border-black h-16 '

 />
<input type="text"
 name="username"
 id="username"
 placeholder="Contact Us"
 className='text-lg p-2  w-[300px] border-4 border-customOrange h-16 '
 />

</div>


</div>

<div className='bg-black hidden mt-32 relative lg:grid lg:grid-cols-3  h-[400px]'>
  <div>
  <img src="/img/LOGO3.png" alt="Company Logo" className=' absolute mt-36 ml-36 left-10 xl:w-[190px] xl:h-[97px] ' />
  </div>
  <div className=' items-center'>
<p className='font-poppins text-white text-4xl font-extrabold mt-44'>Info</p>
<p className='font-poppins font-semibold text-white mt-7 text-2xl'>Education</p>
<p className='font-poppins font-semibold text-white mt-2 text-2xl'>About Us</p>
<p className='font-poppins font-semibold text-white mt-2 text-2xl'>Services</p>
  </div>
  <div>
    <p className='font-poppins text-white text-4xl font-extrabold mt-44'>Help</p>
    <p className='font-poppins font-semibold text-white mt-7 text-2xl'>Contact Us</p>
    <div className='inline-flex mt-2 gap-3'>
<img src="/img/T2.png" alt="" />
<img src="/img/G1.png" alt="" />
<img src=" /img/G2.png" alt="" />
    </div>
  </div>

</div>
<div className='lg:hidden bg-black w-screen relative h-[400px] md:h-[500px]'>
  <div className='grid grid-cols-3 gap-9'>
    <img src="/img/LOGO3.png" alt="Company Logo" className='mt-16 md:mt-24' />
  
  <div className=' md:ml-20'>
  
  <p className='font-poppins text-white md:text-4xl mt-[70px] font-extrabold md:mt-32'>Info</p>
<p className='font-poppins font-semibold text-white mt-5  md:mt-7 md:text-2xl'>Education</p>
<p className='font-poppins font-semibold text-white mt-5  md:mt-2 md:text-2xl'>About Us</p>
<p className='font-poppins font-semibold text-white mt-5 md:mt-2 md:text-2xl'>Services</p>
   
  
  </div>
  <div>
    <p className='font-poppins text-white md:text-4xl mt-[70px] font-extrabold md:mt-32'>Help</p>
    <p className='font-poppins font-semibold text-white mt-5  md:mt-7 md:text-2xl'>Contact Us</p>
    <div className='inline-flex mt-5 gap-3'>
<img src="/img/T2.png" alt="" />
<img src="/img/G1.png" alt="" />
<img src=" /img/G2.png" alt="" />
    </div>
  </div>

  </div>
  
</div>
<div className='   lg:hidden inline-flex absolute top-[7000px] md:top-[7100px]'>
<input type="text"
 name="username"
 id="username"
 placeholder="Enter your email"
 className='text-lg   md:w-[300px] border-4 border-white h-16 '

 />
<input type="text"
 name="username"
 id="username"
 placeholder="Contact Us"
 className='text-lg   w-[100px] border-4 border-customOrange  h-16 '
 />

</div>
    </div>
   
  )
}

export default Home