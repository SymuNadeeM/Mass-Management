
import { Link } from "react-router-dom";

import useAsync from "../../hook/useAsync";
import useBazarList from "../../hook/useBazarList";
import BazarListServices from "../../services/BazarListServices";

const MealCostList = () => {

   const {data,error,loading}=useAsync(BazarListServices.getAllBazarList)
   const {handleDelete} = useBazarList()

  

  
  return (
    <>
      <div className="mt-[30px]   px-[30px] md:p-[10px]">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center my-4 gap-2">
            <i className="fa-solid fa-users text-2xl text-green"></i>
            <h1 className=" text-[#40513B] text-2xl font-abc">Bazar List</h1>
          </div>
          <div className="flex items-center gap-2  text-white font-abc text-sm  bg-green2 px-3 py-2 rounded hover:bg-btnbg  duration-200 ">
            <i class="fa-solid fa-plus"></i>
            <Link to="/add-meal-cost">Add Meal Cost</Link>
          </div>
        </div>
        <table class="min-w-full border-collapse block md:table">
          <thead class="block md:table-header-group">
            <tr class=" bg-[#faf7f7] font-archivo  text-text2    block md:table-row absolute -top-full md:top-auto -left-full md:left-auto shadow-md text-sm  md:relative ">
              <th class=" p-2 text-left block md:table-cell">Date</th>
              <th class=" p-2 text-left block md:table-cell">Item Name</th>
              <th class=" p-2 text-left block md:table-cell">Item Quantity</th>
              <th class=" p-2 text-left block md:table-cell">Amount</th>
              <th class="  p-2 text-left block md:table-cell">Submit by</th>
              <th class="  p-2 text-left block md:table-cell">Action</th>
            </tr>
          </thead>
          <tbody class=" mt-2 block md:table-row-group shadow-md">
            { loading ? "Loading..." :
            data?.data?.map((items) => (
              <tr
                class=" bg-white font-archivo border border-spacing-2  border-btnbg md:border-none block md:table-row"
                key={items.id}
              >
                <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                  <span className="inline-block w-1/3 md:hidden  font-bold">
                    Date:
                  </span>
                  <td>{items.date}</td>
                </td>
                <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                  <span className="inline-block w-1/3 md:hidden  font-bold">
                    Details :
                  </span>
                  <td>{items.itemName}</td>
                </td>
                <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                  <span className="inline-block w-1/3 md:hidden  font-bold">
                    Item Quantity
                  </span>
                  <td>{items.itemQuantity} </td>
                </td>
                <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                  <span className="inline-block w-1/3 md:hidden  font-bold">
                    Amount
                  </span>
                  <td>{items.itemAmount} Taka </td>
                </td>
                <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                  <span className="inline-block w-1/3 md:hidden  font-bold">
                    Submit by
                  </span>
                  <td>{items.member} </td>
                </td>
                <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    Actions
                  </span>

                  <button className=" bg-green2  text-white font-bold py-1 px-2 border border-blue-500 rounded">
                    <Link to={`/edite-meal-cost/${items._id}`}>
                      {/* <OtherCostEdite /> */}
                      Edite
                    </Link>
                  </button>

                  <button
                    onClick={() => handleDelete(items._id)}
                    class=" ml-2 bg-btnbg  text-white font-bold py-1 px-2 border border-red-500 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MealCostList;
