
const BoxBorder = () => {
  return ( <div className="overflow-auto">
    {/* <div className="h-[300px] w-[300px] bg-red-500 mt-6 rounded-lg">
    <img height={200} width={200} className="rounded-lg mt-4 object-cover" src="/images/1.jpg" alt="" />
  </div> */}


          <div className="relative">
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

      <div className="bg-red-200 h-32 w-32 mt-6 text-slate-500 flex justify-center items-center">
        <div className="bg-slate-800 h-16 w-16 text-white ">slate</div>
      </div>


  </div>
  )
}

export default BoxBorder