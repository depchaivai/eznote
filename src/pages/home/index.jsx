
const Home = () => {
  return (
    <div className="min-h-screen h-full w-full min-w-full flex-col text-white flex justify-center items-center" style={{ backgroundImage: "url('/images/homebg.png')", backgroundSize: "cover" }}>
      <h1 className="text-xl">Welcome to EZ Note</h1>
      <p className="font-thin text-sm opacity-75 mt-2">never lost your info, easy note, use it</p>
      <div className="mt-4">
        <a href="/signin" className="px-2 py-1 min-w-[40px] bg-orange-600 rounded-md mx-2">sign up</a>
        /
        <a href="/signup" className="px-2 py-1 min-w-[40px] bg-cyan-600 rounded-md mx-2">sign in</a>
      </div>
    </div>
  )
}

export default Home