import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouse,
  faBed,
  faDollarSign,
  faSort
} from '@fortawesome/free-solid-svg-icons'

function Filter() {
  return (
    <div>
      {/* Location */}
      <form className="flex justify-between rounded-md bg-gray-100 p-2">
        <div className="flex-1 relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <FontAwesomeIcon icon={faHouse} className="text-xs" />
          </div>
          <select className="border border-gray-300 rounded-md py-2 pl-10 w-60">
            <option selected>Any Location</option>
            <option>Bangkok</option>
            <option>Phuket</option>
            <option>Bali</option>
          </select>
        </div>

        {/* Rooms */}
        <div className="flex-1 relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <FontAwesomeIcon icon={faBed} className="text-xs" />
          </div>
          <select className="border border-gray-300 rounded-md py-2 pl-10 w-60">
            <option selected>Any Rooms</option>
            <option>1 room</option>
            <option>2 rooms</option>
            <option>3 rooms</option>
          </select>
        </div>

        {/* Prices */}
        <div className="flex-1 relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <FontAwesomeIcon icon={faDollarSign} className="text-xs" />
          </div>
          <input
            type="number"
            placeholder="max price"
            className="border border-gray-300 rounded-md py-2 pl-10 w-60"
          />
        </div>

        {/* Sort by */}
        <div className="flex-1 relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <FontAwesomeIcon icon={faSort} className="text-xs" />
          </div>
          <select className="border border-gray-300 rounded-md py-2 pl-10 w-60">
            <option selected>sort by</option>
            <option>location</option>
            <option>prices</option>
            <option>rooms</option>
          </select>
        </div>

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
