
const BoxBorder = () => {
  return ( <div className="overflow-auto">
    {/* <div className="h-[300px] w-[300px] bg-red-500 mt-6 rounded-lg">
    <img height={200} width={200} className="rounded-lg mt-4 object-cover" src="/images/1.jpg" alt="" />
  </div> */}



    <div className=" mt-4 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white">
      1
    </div>
    <div className=" mt-4 h-14 bg-gradient-to-t from-cyan-500 to-rose-500 flex items-center justify-center text-white">
      2
    </div>
    <div className=" mt-4 h-14 bg-gradient-to-bl from-cyan-500 to-pink-500 flex items-center justify-center text-white">
      3
    </div>
    <div className=" mt-4 h-14 bg-gradient-to-65 from-cyan-500 to-orange-500 flex items-center justify-center text-white">
      3
    </div>

    <h2 className="bg-gradient-to-t from-rose-400 to-blue-500 bg-clip-text text-transparent">Sohan</h2>

    <div className="text-center mt-10">
  <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
    Gradient Text
  </h1>
  <p className="mt-4 text-lg bg-gradient-to-r from-green-400 to-purple-600 bg-clip-text text-transparent">
    You can also apply gradients to paragraph text like this!
  </p>
</div>

<div className="size-18 rounded-full bg-gradient-radial from-pink-400 from-40% to-fuchsia-700"></div>
<div className="size-18 rounded-full bg-gradient-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%"></div>
<div className="size-18 rounded-full bg-gradient-radial-[at_25%_25%] from-white to-zinc-900 to-75%"></div>

<div className="w-32 h-32 rounded-full bg-gradient-radial from-pink-400 to-fuchsia-700"></div>
<div className="w-32 h-32 rounded-full bg-gradient-radial at-[50%_75%] from-sky-200 via-blue-400 to-indigo-900"></div>
<div className="w-32 h-32 rounded-full bg-gradient-radial at-[25%_25%] from-white to-zinc-900"></div>

          <div className="relative mt-6">
           <div className="absolute z-0 h-9 w-24 bg-red-500 mt-6 rounded-lg">red</div>
           <div className="absolute z-10 h-7 w-20 bg-green-600">green</div>
           <div className="absolute z-20 h-5 w-16 bg-blue-700">blue</div>
          </div>

          <div className="relative h-[500px] w-[500px] mt-32">
           <div className="absolute z-0 h-[400px] w-[400px] bg-red-500 mt-6 rounded-lg ">red</div>
           <div className="absolute z-10 h-[300px] w-[300px] bg-green-600 ">green</div>
           <div className="absolute z-20 h-[200px] w-[200px] bg-blue-700 ">blue</div>
           <div className="absolute z-30 h-[100px] w-[100px] bg-black ">blue</div>
          </div>

          <div className="relative flex justify-center items-center h-[500px] w-[500px] mt-32">
  <div className="absolute z-0 h-[400px] w-[400px] bg-red-500 mt-6 rounded-lg">red</div>
  <div className="absolute z-10 h-[300px] w-[300px] bg-green-600">green</div>
  <div className="absolute z-20 h-[200px] w-[200px] bg-blue-700">blue</div>
  <div className="absolute z-30 h-[100px] w-[100px] bg-black">blue</div>
</div>


<div className="relative h-[500px] w-[500px] mt-32">
  <div className="absolute z-0 h-[400px] w-[400px] bg-red-500 mt-6 rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">red</div>
  <div className="absolute z-10 h-[300px] w-[300px] bg-green-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">green</div>
  <div className="absolute z-20 h-[200px] w-[200px] bg-blue-700 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">blue</div>
  <div className="absolute z-30 h-[100px] w-[100px] bg-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">black</div>
</div>

      <div className="relative h-32 w-32 bg-green-500 mt-6 rounded-lg">
        <div className="absolute left-0 top-0 h-16 w-16 bg-red-300">01</div>
      </div>

      <div className="relative h-32 w-32 bg-green-500 mt-6 rounded-lg">
        <div className="absolute inset-x-0 top-0 h-16 bg-red-300">02</div>
      </div>

      <div className="relative h-32 w-32 bg-green-500 mt-6 rounded-lg">
        <div className="absolute top-0 right-0 h-16 w-16 bg-red-300">03</div>
      </div>

      <div className="relative h-32 w-32 bg-green-500 mt-6 rounded-lg">
        <div className="absolute inset-y-0 left-0 w-16 bg-red-300">04</div>
      </div>

       <div className="relative h-32 w-32 bg-green-500 mt-6 rounded-lg">
        <div className="absolute inset-0 bg-red-300">05</div>
      </div>

      <div className="relative h-32 w-32 bg-green-500 mt-6 rounded-lg">
        <div className="absolute inset-y-0 right-0 w-16 bg-red-300">06</div>
      </div>

      <div className="relative h-32 w-32 bg-green-500 mt-6 rounded-lg">
        <div className="absolute bottom-0 left-0 h-16 w-16 bg-red-300">07</div>
      </div>

      <div className="relative h-32 w-32 bg-green-500 mt-6 rounded-lg">
        <div className="absolute inset-x-0 bottom-0 h-16 bg-red-300">08</div>
      </div>

      <div className="relative h-32 w-32 bg-green-500 mt-6 rounded-lg">
        <div className="absolute -bottom-4 -right-8 -top-5 h-16 w-16 bg-red-300">09</div>
      </div>

      <div className="grid grid-rows-3 gap-y-2 grid-flow-col">
       <div className=" bg-slate-600">01</div>
       <div className=" bg-slate-600">02</div>
       <div className=" bg-slate-600">03</div>
       <div className=" bg-slate-600">04</div>
       <div className=" bg-slate-600">05</div>
       <div className=" bg-slate-600">06</div>
       <div className=" bg-slate-600">07</div>
       <div className=" bg-slate-600">08</div>
       <div className=" bg-slate-600">09</div>
      </div>

      <div className="bg-red-700 z-10 mt-6 text-slate-500 flex justify-center items-center py-2 px-4">
        <div className="bg-blue-800 z-20 h-16 w-16 text-white ">slate</div>
      </div>


         <div className="w-screen bg-indigo-500">
          width
         </div>

         <div className=" bg-slate-600 w-24 min-w-full md:min-w-0">
          </div>

        <div className="bg-[url(/images/1.jpg)] h-64 w-64 bg-cover bg-scroll">
          <h2>sohan</h2>
          <strong>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, est!</strong>
          <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, modi.</small>
          <b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, obcaecati!</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, eum.</p>
          <button className="bg-blue-500 text-orange-500 h-8 w-16  rounded-xl">contact</button>
        </div>

        <div className="relative bg-[url(/images/1.jpg)] h-64 w-64 bg-cover bg-scroll p-4 text-white">
  <h2>sohan</h2>
  <strong>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, est!</strong>
  <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, modi.</small>
  <b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, obcaecati!</b>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, eum.</p>
  <button className="bg-blue-500 text-orange-500 h-8 w-16 rounded-xl mt-4">contact</button>
</div>


<div className="h-screen overflow-auto bg-gray-100">
  {/* Section with bg-scroll */}
  <div className="h-screen bg-[url('/images/1.jpg')] bg-scroll bg-cover bg-center">
    <div className="h-full w-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold">Scrolling Background</h1>
        <p className="mt-4">
          This is an example of a `bg-scroll` utility. The background image moves
          along with the scrolling.
        </p>
      </div>
    </div>
  </div>

  {/* Section with scrollable text */}
  <div className="h-96 bg-white overflow-y-scroll p-4">
    <h2 className="text-2xl font-semibold">Scrollable Text Section</h2>
    <p className="mt-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
      tincidunt, nisi nec laoreet vestibulum, magna lacus convallis risus, ut
      tincidunt nisi est at enim. Nulla facilisi. Curabitur accumsan malesuada
      turpis, non tincidunt nulla hendrerit sed. Duis tincidunt sollicitudin
      lacus ut accumsan. Pellentesque quis leo non ipsum tempus cursus.
    </p>
    <p className="mt-4">
      Suspendisse potenti. Aliquam erat volutpat. Proin commodo, felis non
      consectetur sollicitudin, arcu sem placerat sapien, vel fermentum mi
      purus eget justo. Aenean euismod quam nec augue pharetra, sit amet
      consequat nisi tincidunt.
    </p>
  </div>

  {/* Section with bg-fixed */}
  <div className="h-screen bg-[url('/images/1.jpg')] bg-fixed bg-cover bg-center">
    <div className="h-full w-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold">Fixed Background</h1>
        <p className="mt-4">
          This is an example of a `bg-fixed` utility. The background image
          remains fixed while you scroll the content.
        </p>
      </div>
    </div>
  </div>
</div>


<div className="h-screen overflow-auto mt-12">
  {/* Fixed Background Section */}
  <div className="h-screen bg-[url('/images/1.jpg')] bg-fixed bg-cover bg-center flex items-center justify-center">
    <div className="text-center text-white bg-black bg-opacity-50 p-8 rounded-lg">
      <h1 className="text-4xl font-bold">Fixed Background</h1>
      <p className="mt-4">
        This section uses the `bg-fixed` utility. The background image stays
        fixed in the viewport while the content scrolls over it.
      </p>
    </div>
  </div>

  {/* Scrollable Content */}
  <div className="h-[1500px] bg-gray-100 p-4">
    <h2 className="text-2xl font-semibold">Scrollable Content</h2>
    <p className="mt-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
      tincidunt, nisi nec laoreet vestibulum, magna lacus convallis risus, ut
      tincidunt nisi est at enim. Nulla facilisi. Curabitur accumsan malesuada
      turpis, non tincidunt nulla hendrerit sed. Duis tincidunt sollicitudin
      lacus ut accumsan.
    </p>
    <p className="mt-4">
      Suspendisse potenti. Aliquam erat volutpat. Proin commodo, felis non
      consectetur sollicitudin, arcu sem placerat sapien, vel fermentum mi
      purus eget justo. Aenean euismod quam nec augue pharetra, sit amet
      consequat nisi tincidunt.
    </p>
  </div>
</div>

      <button className="bg-transparent bg-rose-400 mt-6 h-6 w-6">click</button>

  </div>
  )
}

export default BoxBorder