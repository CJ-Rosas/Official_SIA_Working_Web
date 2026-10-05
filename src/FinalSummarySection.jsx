import React from 'react';

function FinalSummarySection({ availableFund, totalUtilized, endingBalance, onSave }) {
  return (
    <div className="section final-summary-section">
      <h2>Balance Calculation</h2>
      <div className="calculation-row">
        <div className="calc-box">
          <label htmlFor="summaryAvailableFund">Available Fund For Use</label>
          <input
            type="text"
            id="summaryAvailableFund"
            value={`Php ${availableFund.toFixed(2)}`}
            readOnly
          />
        </div>

        <span className="calc-operator">&minus;</span>

        <div className="calc-box">
          <label htmlFor="totalFundUtilized">Total Fund Utilized</label>
          <input
            type="text"
            id="totalFundUtilized"
            value={`Php ${totalUtilized.toFixed(2)}`}
            readOnly
          />
        </div>

        <span className="calc-operator">=</span>

        <div className="calc-box ending-balance-box">
          <label htmlFor="endingFundBalance">Ending Fund Balance</label>
          <input
            type="text"
            id="endingFundBalance"
            value={`Php ${endingBalance.toFixed(2)}`}
            readOnly
          />
        </div>
      </div>
      
      <button type="button" className="save-button" onClick={onSave}>
        Save FLR
      </button>
    </div>
  );
}

export default FinalSummarySection;