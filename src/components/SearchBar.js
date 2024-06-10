import React, { useState } from 'react'

const SearchBar = ({coins, setCoins}) => {

  const [search, setSearch] = useState("");

  
  function handleSearch(e) {
    const searchedCoins = 
    coins.filter(
      (coin) => coin.name.includes(search)
    );
  
    e.preventDefault();
    setSearch("");
    setCoins(searchedCoins);
  }

  return (
    <div className="searchBar flex justify-between items-center mt-8 m-auto bg-white p-4 sm:w-[450px] xs:w-[320px] h-14 rounded-md">

      <form action="" onSubmit={handleSearch}>

      <input type="text" placeholder='Search Crypto...' className='bg-transparent outline-none border-none' value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button type='submit' className='search-btn text-white p-2 sm:px-7 xs:px-2 rounded transition-all duration-500 hover:bg-transparent hover:text-black'
      >Search</button>

      </form>
    </div>
  )
}

export default SearchBar