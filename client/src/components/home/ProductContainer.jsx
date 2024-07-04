import '../../styles/productContainer.scss';
import Product from './Product';
import {homeProductData} from '../../data';

const ProductContainer = () => {
  return (
    <section className='productContainerMainSection'>
      <div className="productContainer">
        {
          homeProductData.map((data) => <Product key={data.id} data={data}  />)
        }
      </div>
    </section>
  )
}

export default ProductContainer