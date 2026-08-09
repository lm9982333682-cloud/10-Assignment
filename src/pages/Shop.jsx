
import { Toaster } from "react-hot-toast";
import SearchProduct from "../components/SearchProduct";

const Shop = () => {

  return (
    <main>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <SearchProduct />

        <Toaster
          position="bottom-right"
          reverseOrder={false}
        />
      </div>
    </main>
  );
};




export default Shop
