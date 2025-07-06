// App.jsx
import bankLogo from './assets/bank.svg' // Keep this import for the bank logo
import './Bank.css'
function bank() {
  // UNCOMMENT THE RETURN STATEMENT AND ITS CONTENTS
  return (
    <>
      <div>
        <a href="https://bank.gov.ua" target="_blank">
          <img src={bankLogo} className="logo bank" alt="Bank logo" />
        </a>
      </div>
      <h1>VAT calculator</h1> {/* This will be rendered */}
      <br />
      <br />
    </>
  )
}

export default bank