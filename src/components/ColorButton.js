export default function ColorButton({color, isActive, onClick}) {
  return <button type='button'
          className={`product-button ${isActive ? 'product-button__active' : ''}`}
          onClick={() => onClick(color)}>{color.name}</button>
}