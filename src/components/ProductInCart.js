import {useAppContext} from "./CartContextProvider";

export default function ProductInCart({product}) {
  const {deleteProduct} = useAppContext()
  console.log(product)

  return <div className='product-item'>
    <img src={product.color.images[0]} alt={'Товар'}/>
    <h3 className={'product-item-title'}>{product.name} {product.color.name} {product.size.label}</h3>
    <p className={'price'}>Цена: <span>{product.color.price}</span></p>
    <button type={'button'} onClick={() => deleteProduct(product.id)}>Удалить</button>
  </div>
}