
const Bg = () => {
  return (
    <div>

      <p className="leading-loose">So I started to walk into the water. I wont lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I dont know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
      <p className="leading-relazed lower-case">So I started to walk into the water. I wont lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I dont know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
      <h2 className="font-jersey">i am learning tailwind css basicsS</h2>
      <button className="bg-red-300 text-white h-[120px] w-[240px] shadow-xl rounded-xl shadow-red-500/65">shadow</button>
      <div className="bg-[url(/images/1.jpg)] bg-blue-500 bg-blend-overlay h-64 w-64 bg-cover "></div>
      <div className="bg-[url(/images/1.jpg)] bg-blue-500 bg-blend-darken h-64 w-64 bg-cover"></div>
      <div className="bg-[url(/images/1.jpg)] bg-blue-500 bg-blend-screen h-64 w-64 bg-cover"></div>
      <div className="bg-[url(/images/1.jpg)] blur-sm hover:blur-none h-64 w-64 bg-cover"></div>
      <div className="bg-[url(/images/1.jpg)] grayscale h-64 w-64 bg-cover"></div>
      <div className="bg-[url(/images/1.jpg)] brightness-100 hover:brightness-0 ease-in-out transition duration-1000 h-64 w-64 bg-cover"></div>
      <div className="bg-[url('/images/1.jpg')] h-64 w-64 bg-cover rotate-x-50 rotate-z-45 transition hover:-scale-y-125  duration-3000 ease-in-out"></div>

     <div className="bg-[url('/images/1.jpg')] opacity-50 relative h-64 w-64 bg-cover">
      <div className="bg-[url('/images/1.jpg')] opacity-100 absolute h-64 w-64 bg-cover transition hover:scale-125 durat ease-in-out"
          style={{ transform: 'rotateX(50deg) rotateZ(45deg)',}}></div>
     </div>



     <div className="relative h-64 w-64">
  {/* Semi-transparent background */}
  <div className="absolute inset-0 bg-[url('/images/1.jpg')] bg-cover" style={{ opacity: 0.5 }}></div>

  {/* Rotated and scaled child */}
  <div
    className="absolute inset-0 bg-[url('/images/1.jpg')] shadow-2xl bg-cover transition-transform hover:scale-125 ease-in-out"
    style={{ transform: 'rotateX(50deg) rotateZ(45deg)',  }}
  ></div>
</div>

      <div className="bg-[url(/images/1.jpg)] translate-2 h-64 w-64 bg-cover"></div>


    </div>
  )
}

export default Bg