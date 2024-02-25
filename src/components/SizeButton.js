export default function SizeButton({size, isActive, onClick}) {
  return <button type='button'
                 className={`product-button ${isActive ? 'product-button__active' : ''}`}
                 onClick={() => onClick(size)}>{size.label}</button>
}