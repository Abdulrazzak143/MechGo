// import React from "react";
// import MenuWrapper from "../../components/product/MenuWrapper";
// import axios from "axios";


// const Index = ({ categoryList, productList }) => {
//   return (
//     <div className="pt-10">
//       <MenuWrapper categoryList={categoryList} productList={productList} />
//     </div>
//   );
// };

// export const getServerSideProps = async () => {
//   const category = await axios.get(
//     `${process.env.NEXT_PUBLIC_API_URL}/categories`
//   );
//   const product = await axios.get(
//     `${process.env.NEXT_PUBLIC_API_URL}/products`
//   );
//   return {
//     props: {
//       categoryList: category.data ? category.data : [],
//       productList: product.data ? product.data : [],
//     },
//   };
// };

// export default Index;
import React from "react";
import MenuWrapper from "../../components/product/MenuWrapper";
import axios from "axios";
import LocationInput from "../../components/ui/LocationInput"; // import LocationInput

const Index = ({ categoryList, productList }) => {
  return (
    <div className="pt-10 container mx-auto px-4">
      {/* Add LocationInput above your menu */}
      <LocationInput />
      
      <MenuWrapper categoryList={categoryList} productList={productList} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const category = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/categories`
  );
  const product = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products`
  );
  return {
    props: {
      categoryList: category.data ? category.data : [],
      productList: product.data ? product.data : [],
    },
  };
};

export default Index;


