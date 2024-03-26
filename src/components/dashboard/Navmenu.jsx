const Navmenu = () => {
  return (
    <div className="max-w-[280px] w-full h-full min-h-screen bg-gray-950">
        <div className="flex justify-center items-center h-20 bg-gray-900 text-white">EZNote</div>
        <div className="flex flex-col justify-center items-start text-white">
            <a href="/dashboard" className="px-4 py-2 w-full">Dashboard</a>
            <a href="/dashboard/notes" className="px-4 py-2 w-full">Notes</a>
            <a href="/dashboard/profile" className="px-4 py-2 w-full">Profile</a>
            <a href="/dashboard/logout" className="px-4 py-2 w-full">Logout</a>
            <a href="/dashboard/settings" className="px-4 py-2 w-full">Settings</a>
        </div>
    </div>
  )
}

export default Navmenu