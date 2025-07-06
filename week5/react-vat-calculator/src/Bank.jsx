// Bank.jsx
import bankLogo from './assets/bank.svg' // Keep this import for the bank logo
import './Bank.css'
function Bank() {
  return (
    <>
      <div>
        <a href="https://bank.gov.ua" target="_blank">
          <img src={bankLogo} className="logo bank" alt="Bank logo" />
        </a>
      </div>
      <h1>VAT calculator</h1> 
      <br />
      <br />
    </>
  );
}

export default Bank;

