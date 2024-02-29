function Filter() {
  return (
    <div>
      {/* Location */}
      <form className="flex justify-between rounded-md bg-gray-100 p-2">
        <select className="border border-gray-300 rounded-md p-2 w-60">
          <option selected>Any Location</option>
          <option>Bangkok</option>
          <option>Phuket</option>
          <option>Bali</option>
        </select>

        {/* Rooms */}
        <select className="border border-gray-300 rounded-md p-2 w-60">
          <option selected>Any Rooms</option>
          <option>1 room</option>
          <option>2 rooms</option>
          <option>3 rooms</option>
        </select>

        {/* Prices */}
        <input
          type="number"
          placeholder="max price"
          className="border border-gray-300 rounded-md p-2 w-60"
        />

        {/* Sort by */}
        <select className="border border-gray-300 rounded-md p-2 w-60">
          <option selected>sort by</option>
          <option>location</option>
          <option>prices</option>
          <option>rooms</option>
        </select>

        {/* Keywords */}
        <input
          type="text"
          placeholder="keywords..."
          className="border border-gray-300 rounded-md p-2 w-60"
        />

        {/* button */}
        <button className=" bg-rose-400 text-white py-2 px-4 rounded-md">
          Search
        </button>
      </form>
    </div>
  )
}

export default Filter
