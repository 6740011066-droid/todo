const Navbar = () => {
  return (
    <>
    <nav className="flex justify-around bg-gray-200 p-4">
        <div className="">
            <link href="/">Home</link>
      
        <div className="">
            <link href="/about">About</link>

        <div className="">
            <link href="/contact">Contact</link>

        </div>
        
        <div className="flex gap-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded">Sign Up</button>
        </div>
    </nav>

    </>
  )
}

export default Navbar;