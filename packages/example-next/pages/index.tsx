import CoinbaseWalletCard from '../components/connectorCards/CoinbaseWalletCard'
import GnosisSafeCard from '../components/connectorCards/GnosisSafeCard'
import MetaMaskCard from '../components/connectorCards/MetaMaskCard'
import NetworkCard from '../components/connectorCards/NetworkCard'
import WalletConnectCard from '../components/connectorCards/WalletConnectCard'
import ProviderExample from '../components/ProviderExample'

export default function Home() {
  return (
    <>
      <ProviderExample />
      <div style={{width: 'full'}}>
        {
          (window.ethereum) ?
          <div>Has window.ethereum</div> :
          <div>Does not have window.ethereum</div>
        }

        {
          window.ethereum.isMetaMask &&
          <div>Metamask Injected</div>
        }

        {
          window.ethereum.isRobinhoodWallet &&
          <div>Robinhood Wallet Injected</div>
        }
      </div>
      <div style={{ display: 'flex', flexFlow: 'wrap', fontFamily: 'sans-serif' }}>
        <MetaMaskCard />
        <WalletConnectCard />
        <CoinbaseWalletCard />
        <NetworkCard />
        <GnosisSafeCard />
      </div>
    </>
  )
}
