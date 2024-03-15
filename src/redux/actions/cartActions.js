import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../../constants/cartConstants"

export const addToCart =
  (product, calculatedColor, selectedSize, price) => async (dispatch) => {
    let { id, name, colors } = product
    let obj = colors.find((color) => color.name === calculatedColor)
    let imgs = obj.images

    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: {
          id,
          name,
          price,
          imgs,
          calculatedColor,
          selectedSize,
        },
      },
    })
  }

export const removeFromCart = (index) => (dispatch) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: index,
  })
}
