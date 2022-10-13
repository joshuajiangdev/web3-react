import { useEffect } from 'react'
import CoinbaseWalletCard from '../components/connectorCards/CoinbaseWalletCard'
import GnosisSafeCard from '../components/connectorCards/GnosisSafeCard'
import MetaMaskCard from '../components/connectorCards/MetaMaskCard'
import NetworkCard from '../components/connectorCards/NetworkCard'
import WalletConnectCard from '../components/connectorCards/WalletConnectCard'
import ProviderExample from '../components/ProviderExample'

export default function Home() {

  useEffect(() => {
    const hasEthereum = window.ethereum != null
    const isMetaMask = window.ethereum.isMetaMask ?? false
    const isRobinhoodWallet = window.ethereum.isRobinhoodWallet ?? false

    alert(`hasEthereum: ${hasEthereum}\nisMetaMask: ${isMetaMask}\nisRobinhoodWallet: ${isRobinhoodWallet}`)
  })

  return (
    <>
      <ProviderExample />
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
