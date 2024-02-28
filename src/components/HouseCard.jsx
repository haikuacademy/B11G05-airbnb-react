function HouseCard() {
  return (
    <div className="border border-gray-300 rounded-md p-5">
      <div className=" text-lg font-bold">Phuket, Thailand</div>
      <div className=" text-gray-500">2 rooms • 2 bathrooms</div>
      <div className=" text-xl font-bold">$120</div>
      <div className="flex justify-between mt-3">
        <span>4.5</span>
        <span>34</span>
      </div>
    </div>
  )
}

export default HouseCard
