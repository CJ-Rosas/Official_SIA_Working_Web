import React from 'react';

function Header({ selectedReport, onReportChange }) {
  return (
    <>
      <h1>Petty Cash Fund - Replenishment &amp; Utilization</h1>

      <div className="flr-select-group">
        <label htmlFor="FLR-Report">Choose a FLR report:</label>
        <select 
          id="FLR-Report" 
          name="FLR-Report"
          value={selectedReport}
          onChange={(e) => onReportChange(e.target.value)}
        >
          <option value="report1">Report 1</option>
          <option value="report2">Report 2</option>
          <option value="report3">Report 3</option>
        </select>
      </div>
    </>
  );
}

export default Header;
