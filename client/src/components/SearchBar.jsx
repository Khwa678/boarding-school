const SearchBar = ({ search, setSearch }) => {
  return (
    <div className='flex justify-center my-8'>
      <input
        type='text'
        placeholder='Search schools...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='w-full md:w-1/2 px-5 py-3 rounded-full border outline-none shadow-lg'
      />
    </div>
  )
}

export default SearchBar