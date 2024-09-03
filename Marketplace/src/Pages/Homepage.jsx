import Hero from '../Components/Hero'
 import TCollections from '../Components/TCollections'
import { useSelector } from 'react-redux';
import { selectAllProducts } from '../feactures/productsSlice';
import TopCreaters from '../Components/TopCreaters';
import Categories from '../Components/Categories';
// import { Link } from 'react-router-dom';

const Homepage = () => {
    const products = useSelector(selectAllProducts);
  return (
//     <>
//      {/* <div>

// <h1>Products</h1>
// <div>
//   {products.map(product => (
//     <div key={product.id}>
//       <Link to={`/product/${product.id}`}>
//         <img src={product.photo} alt={product.name} />
//         <h2>{product.productName}</h2>
//         <p>${product.price}</p>
//         {product.images.map((image, index) => (
//               <img key={index} src={image} alt={`${product.productName} ${index + 1}`} />
//             ))}
//         {/* <img src={product.images[1]} alt={product.name} /> */}
//       </Link>
//     </div>
//   ))}
// </div>
// </div> */}
//     </>
   
    <>
    <Hero/>
    <TCollections/> 
  <TopCreaters/>
  <Categories/>
    </>
  
  
  )
}

export default Homepage