import { SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'

function Bridge() {
  <div className="Uniswap">
    <SwapWidget />
  </div>
}

// function BridgePage() {
    
// }

const Dex = () => {
    return(
        <button className='btn' onClick={Bridge}>Bridge</button>
    )
}

export default Dex;