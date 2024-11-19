import React from 'react';
import { motion } from 'framer-motion';
const About = () => {
  const whatsappNumber = "2349045200511"; 
  const message = "Hello! I would like to get in touch.";
  const telegramUsername = "yourTelegramUsername"; 
  const instagramUsername = "yourInstagramUsername"; 

  return (
    <div className="mt-72 ">
      <div className="xl:mx-56 md:ml-14 ">
        <p className="  font-poppins font-bold text-6xl">
          Ab<span className="text-customOrange">o</span>ut <span className="text-customOrange">U</span>s
        </p>
        <motion.img
  src="/img/A.png"
  alt="3D Cone"
  className=' hidden lg:block lg:absolute lg:w-[127px] lg:h-[131px]   lg:top-72 lg:left-[1300px]'
  initial={{ opacity: 1, y: -40 }}  
  animate={{ opacity: 1, y: 0 }}   
  transition={{ 
    duration: 2,     
    repeat: Infinity,      
    repeatType: "reverse"  
  }}
/>

        <div className="mt-9">
          <p className="lg:text-xl font-poppins font-light">
            Teamcore is ipsum dolor sit amet consectetur. Id elementum sit justo convallis imperdiet consectetur quam. Cursus a commodo
          </p>
     <p  className='lg:text-xl font-poppins mt-3  font-light'>nisi sed sit commodo nisl facilisis arcu. Id at nam lacinia aliquam. Sit bibendum pulvinar eget ultricies sed massa lectus purus arcu.</p> 
     <p  className='lg:text-xl font-poppins mt-3 font-light '>Et condimentum pellentesque tortor nibh turpis non eros. Volutpat leo aliquam lobortis aenean libero est suspendisse. Elit </p> 
     <p  className='lg:text-xl font-poppins mt-3 font-light'>commodo maecenas sed quam tellus amet quam. Odio sagittis et egestas amet mattis amet. Molestie cursus maecenas ac mollis.</p> 
     <p  className='lg:text-xl font-poppins mt-3 font-light'>Aliquet justo purus et ac luctus natoque purus. Vitae quam laoreet amet mi lectus quisque nibh rutrum. Tellus enim et consectetur </p> 
     <p  className='lg:text-xl font-poppins mt-3 font-light'>in hendrerit neque scelerisque vitae lorem. Feugiat cursus congue congue sollicitudin. Ut praesent turpis cursus eleifend magnis. Elit </p> 
     <p  className='lg:text-xl font-poppins mt-3 font-light'> suspendisse lorem nascetur a nulla magnis ac pulvinar varius. Amet quam gravida sit blandit quisque id molestie. Parturient dolor </p>
     <p  className='lg:text-xl font-poppins mt-3 font-light'>euismod non egestas. Elit quam ipsum mi nulla felis neque aliquam diam. Cras massa commodo dictumst platea orci nec turpis </p> 
     <p  className='lg:text-xl font-poppins mt-3 font-light'> pellentesque nibh. Cursus lacinia amet eget nec.</p>
        </div>

        <div className="mt-9 gap-7 inline-flex">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/W.png" alt="WhatsApp Icon" className="w-[60px] h-[60px]" />
          </a>
          <a
            href={`https://t.me/${telegramUsername}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/T.png" alt="Telegram Icon" className="w-[60px] h-[60px]" />
          </a>
          <a
            href={`https://instagram.com/${instagramUsername}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/I.png" alt="Instagram Icon" className="w-[60px] h-[60px]" />
          </a>
        </div>

      </div>
      <div className='mt-24 '>
   <p className='font-poppins font-bold text-center text-6xl'>Our Mission</p>
  <div className=' grid xl:grid-cols-2 gap-9 mx-0 xl:mx-0 md:mx-28 mt-16 '>
<div className='bg-customorangeg md:w-[650px] w-screen xl:ml-56  md:h-[350px]'>
  <div className='md:inline-flex md:gap-3 mt-5 md:mt-9 md:ml-8'>
  <div className=' border-customOrange w-[50px] ml-36 md:ml-0 h-[50px] mt-3 border-2 md:w-[80px] md:h-[80px] rounded-full'>
<p className='md:text-5xl mt-2 text-xl md:mt-4  font-bold  font-poppins text-center text-customOrange'>
  1.
</p>
</div>
<p className='font-poppins text-center mt-6 font-semibold  md:mt-10 text-2xl md:text-3xl'>Meet your Needs</p>
  </div>
<div className='md:mt-5 md:mx-0 mx-7 md:ml-8'>
  <p className='font-poppins md:font-semibold'>Lorem ipsum dolor sit amet consectetur. Cursus consequat vestibulum </p> 
 <p className='font-poppins md:font-semibold'> vel quam mattis fermentum suspendisse blandit. Ut tortor diam viverra </p>
 <p className='font-poppins md:font-semibold'> lectus at. Aliquet sem nec nisl dui enim nulla placerat massa. Ultricies id</p>
  <p className='font-poppins md:font-semibold'>egestas nec lectus commodo nam magna pellentesque. Lacus lorem </p> 
  <p className='font-poppins md:font-semibold'>dignissim urna adipiscing. Sed in pretium id donec aenean volutpat.</p> 
   <p className='font-poppins md:font-semibold'>  Nulla amet volutpat amet eget mi eget.</p>
</div>
</div>
<div className='bg-customorangeg md:w-[650px] w-screen md:h-[350px]'>
  <div className='md:inline-flex md:gap-3 mt-5 md:mt-9 md:ml-8'>
  <div className=' border-customOrange md:ml-0 w-[50px] ml-36 h-[50px] mt-3 border-2 md:w-[80px] md:h-[80px] rounded-full'>
<p className='md:text-5xl mt-2 text-xl md:mt-4  font-bold  font-poppins text-center text-customOrange'>
  1.
</p>
</div>
<p className='font-poppins  md:mt-10 text-center mt-6 font-semibold text-2xl md:text-3xl'>Meet your Needs</p>
  </div>
<div className='md:mt-5 md:mx-0 mx-7 md:ml-8'>
  <p className='font-poppins md:font-semibold'>Lorem ipsum dolor sit amet consectetur. Cursus consequat vestibulum </p> 
 <p className='font-poppins md:font-semibold'> vel quam mattis fermentum suspendisse blandit. Ut tortor diam viverra </p>
 <p className='font-poppins md:font-semibold'> lectus at. Aliquet sem nec nisl dui enim nulla placerat massa. Ultricies id</p>
  <p className='font-poppins md:font-semibold'>egestas nec lectus commodo nam magna pellentesque. Lacus lorem </p> 
  <p className='font-poppins md:font-semibold'>dignissim urna adipiscing. Sed in pretium id donec aenean volutpat.</p> 
   <p className='font-poppins md:font-semibold'>  Nulla amet volutpat amet eget mi eget.</p>
</div>
</div>
<div className='bg-customorangeg md:w-[650px] w-screen xl:ml-56  md:h-[350px]'>
  <div className='md:inline-flex md:gap-3 mt-5 md:mt-9 md:ml-8'>
  <div className=' border-customOrange w-[50px] md:ml-0 ml-36 h-[50px] mt-3 border-2 md:w-[80px] md:h-[80px] rounded-full'>
<p className='md:text-5xl mt-2 text-xl md:mt-4  font-bold  font-poppins text-center text-customOrange'>
  1.
</p>
</div>
<p className='font-poppins text-center md:mt-10 mt-6 font-semibold text-2xl md:text-3xl'>Meet your Needs</p>
  </div>
<div className='md:mt-5 md:mx-0 mx-7 md:ml-8'>
  <p className='font-poppins md:font-semibold'>Lorem ipsum dolor sit amet consectetur. Cursus consequat vestibulum </p> 
 <p className='font-poppins md:font-semibold'> vel quam mattis fermentum suspendisse blandit. Ut tortor diam viverra </p>
 <p className='font-poppins md:font-semibold'> lectus at. Aliquet sem nec nisl dui enim nulla placerat massa. Ultricies id</p>
  <p className='font-poppins md:font-semibold'>egestas nec lectus commodo nam magna pellentesque. Lacus lorem </p> 
  <p className='font-poppins md:font-semibold'>dignissim urna adipiscing. Sed in pretium id donec aenean volutpat.</p> 
   <p className='font-poppins md:font-semibold'>  Nulla amet volutpat amet eget mi eget.</p>
</div>
</div>
<div className='bg-customorangeg md:w-[650px] w-screen   md:h-[350px]'>
  <div className='md:inline-flex md:gap-3 mt-5 md:mt-9 md:ml-8'>
  <div className=' border-customOrange md:ml-0 w-[50px] ml-36 h-[50px] mt-3 border-2 md:w-[80px] md:h-[80px] rounded-full'>
<p className='md:text-5xl mt-2 text-xl md:mt-4  font-bold  font-poppins text-center text-customOrange'>
  1.
</p>
</div>
<p className='font-poppins text-center mt-6  md:mt-10 font-semibold text-2xl md:text-3xl'>Meet your Needs</p>
  </div>
<div className='md:mt-5 md:mx-0 mx-7 md:ml-8'>
  <p className='font-poppins md:font-semibold'>Lorem ipsum dolor sit amet consectetur. Cursus consequat vestibulum </p> 
 <p className='font-poppins md:font-semibold'> vel quam mattis fermentum suspendisse blandit. Ut tortor diam viverra </p>
 <p className='font-poppins md:font-semibold'> lectus at. Aliquet sem nec nisl dui enim nulla placerat massa. Ultricies id</p>
  <p className='font-poppins md:font-semibold'>egestas nec lectus commodo nam magna pellentesque. Lacus lorem </p> 
  <p className='font-poppins md:font-semibold'>dignissim urna adipiscing. Sed in pretium id donec aenean volutpat.</p> 
   <p className='font-poppins md:font-semibold'>  Nulla amet volutpat amet eget mi eget.</p>
</div>
</div>
  </div>

      </div>
      <p className='font-poppins mt-24 font-bold text-center text-6xl'> Recent Projects</p>
 <div className='grid grid-cols-2 gap-9 mx-56 mt-11 '>
<div className='border-2 broder-black lg:w-[650px] lg:h-[444px]'></div>
<div className='flex flex-col mt-24 items-end'>
  <p className='float-right text-3xl font-bold font-poppins'>
  Project Name
  </p>
  <p className='font-poppins mt-5 float-right'>A Crypto Trading App</p>
  <p className='float-right mt-5 font-poppins'>Lorem ipsum dolor sit amet consectetur. Varius arcu netus risus facilisi auctor nibh </p> 
  <p className='font-poppins'>sapien interdum. Risus ullamcorper eget sed vulputate. Pellentesque sit duis</p>
  <p className='font-poppins'> pellentesque in orci vel. Amet aliquet leo rutrum dolor ultrices tincidunt enim. Vivamus </p>
  <p className='font-poppins'>aliquam volutpat semper ut enim. Fringilla sit curabitur nam quis. Vitae laoreet amet</p> 
  <p className='font-poppins'> ac pharetra. Massa eu orci pharetra commodo malesuada. Vel amet viverra amet mi </p>
  <p className='font-poppins'> in sed consectetur ullamcorper orci. Massa in ullamcorper purus etiam sed vestibulum </p>
  <p className='font-poppins'>elementum. A diam dapibus tempor pretium rhoncus...<span className='text-blue-400 hover:underline'>Read more.</span></p>
</div>
 </div>
 <div className='grid grid-cols-2 gap-9 mx-56 mt-11 '>
<div className='flex flex-col mt-24 items-baseline'>
  <p className='float-right text-3xl font-bold font-poppins'>
  Project Name
  </p>
  <p className='font-poppins mt-5 float-right'>A Food Delivery App</p>
  <p className='float-right mt-5 font-poppins'>Lorem ipsum dolor sit amet consectetur. Varius arcu netus risus facilisi auctor nibh </p> 
  <p className='font-poppins'>sapien interdum. Risus ullamcorper eget sed vulputate. Pellentesque sit duis</p>
  <p className='font-poppins'> pellentesque in orci vel. Amet aliquet leo rutrum dolor ultrices tincidunt enim. Vivamus </p>
  <p className='font-poppins'>aliquam volutpat semper ut enim. Fringilla sit curabitur nam quis. Vitae laoreet amet</p> 
  <p className='font-poppins'> ac pharetra. Massa eu orci pharetra commodo malesuada. Vel amet viverra amet mi </p>
  <p className='font-poppins'> in sed consectetur ullamcorper orci. Massa in ullamcorper purus etiam sed vestibulum </p>
  <p className='font-poppins'>elementum. A diam dapibus tempor pretium rhoncus...<span className='text-blue-400 hover:underline'>Read more.</span></p>
</div>
<div className='border-2 broder-black lg:w-[650px] lg:h-[444px]'></div>
 </div>
 <div className='grid grid-cols-2 gap-9 mx-56 mt-11 '>
<div className='border-2 broder-black lg:w-[650px] lg:h-[444px]'></div>
<div className='flex flex-col mt-24 items-end'>
  <p className='float-right text-3xl font-bold font-poppins'>
  Project Name
  </p>
  <p className='font-poppins mt-5  float-right'></p>
  <p className='float-right mt-5 font-poppins'>Lorem ipsum dolor sit amet consectetur. Varius arcu netus risus facilisi auctor nibh </p> 
  <p className=' font-poppins' >sapien interdum. Risus ullamcorper eget sed vulputate. Pellentesque sit duis</p>
  <p className=' font-poppins'> pellentesque in orci vel. Amet aliquet leo rutrum dolor ultrices tincidunt enim. Vivamus </p>
  <p className=' font-poppins'>aliquam volutpat semper ut enim. Fringilla sit curabitur nam quis. Vitae laoreet amet</p> 
  <p className='font-poppins'> ac pharetra. Massa eu orci pharetra commodo malesuada. Vel amet viverra amet mi </p>
  <p className='font-poppins'> in sed consectetur ullamcorper orci. Massa in ullamcorper purus etiam sed vestibulum </p>
  <p className='font-poppins' >elementum. A diam dapibus tempor pretium rhoncus...<span className='text-blue-400 hover:underline'>Read more.</span></p>
</div>
 </div>

<div className='grid grid-cols-2 mt-11 xl:mx-56'>
<div className='bg-customorangeg w-[500px] h-[150px]'>
<p className='font-bold font-poppins text-3xl ml-6 mt-6'>Consistency</p>
<p className='font-poppins ml-6 font-light ' >Lorem ipsum dolor sit amet consectetur. Varius arcu   </p> 
<p className='font-poppins font-light ml-6'>nibh sapien interdum. Risus ullamcorper eget  </p>
 <p className='font-poppins font-light ml-6'>  duis pellentesque </p>
</div>
<div className='bg-customorangeg w-[500px] ml-60 h-[150px]'>
<p className='font-bold font-poppins text-3xl ml-6 mt-6'>Durability</p>
<p className='font-poppins ml-6 font-light ' >Lorem ipsum dolor sit amet consectetur. Varius arcu   </p> 
<p className='font-poppins font-light ml-6'>nibh sapien interdum. Risus ullamcorper eget  </p>
 <p className='font-poppins font-light ml-6'>  duis pellentesque </p>
</div>

</div>

<div className='items-center'>
  <p className='font-poppins font-semibold text-3xl text-center'>Why Choose Us</p>
  <p className='text-center font-poppins font-light'>Lorem ipsum dolor sit amet consectetur. Varius arcu netus risus facilisi auctor nibh sapien interdum. </p>
  <p className='text-center font-poppins font-light'>Risus ullamcorper eget sed vulputate. Pellentesque sit duis pellentesque in orci vel, Vivamus aliquam volutpat </p> 
  <p className='text-center font-poppins font-light'>semper ut enim. Fringilla sit curabitur nam qui. </p>
  <motion.button
      className='hidden sm:block ml-[860px] h-[54px] w-[171px] rounded-md border-2  border-customOrange text-customOrange font-poppins'
      whileHover={{ 
        backgroundColor: 'rgba(255, 102, 0, 1)', 
        color: '#ffffff' 
      }}
      transition={{ duration: 0.3 }} 
    >
      Contact us
    </motion.button>
</div>
<div className='grid grid-cols-2  xl:mx-56'>
<div className='bg-customorangeg w-[500px] h-[150px]'>
<p className='font-bold font-poppins text-3xl ml-6 mt-6'>Consistency</p>
<p className='font-poppins ml-6 font-light ' >Lorem ipsum dolor sit amet consectetur. Varius arcu   </p> 
<p className='font-poppins font-light ml-6'>nibh sapien interdum. Risus ullamcorper eget  </p>
 <p className='font-poppins font-light ml-6'>  duis pellentesque </p>
</div>
<div className='bg-customorangeg w-[500px] ml-60 h-[150px]'>
<p className='font-bold font-poppins text-3xl ml-6 mt-6'>Durability</p>
<p className='font-poppins ml-6 font-light ' >Lorem ipsum dolor sit amet consectetur. Varius arcu   </p> 
<p className='font-poppins font-light ml-6'>nibh sapien interdum. Risus ullamcorper eget  </p>
 <p className='font-poppins font-light ml-6'>  duis pellentesque </p>
</div>

</div>

    </div>



  );
};

export default About;
