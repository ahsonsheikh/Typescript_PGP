import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { registerLicense } from '@syncfusion/ej2-base';
// Registering Syncfusion license key
registerLicense('Mgo+DSMBaFt/QHRqVVhkVFpHaVtdX2NLfUN3T2BbdVpyZDU7a15RRnVfQF1hSH1Qc0ZlUHddcw==;Mgo+DSMBPh8sVXJ0S0J+XE9AflRBQmdWfFN0RnNYdV1yflFEcDwsT3RfQF5jS35Rd0ZgXHxYeX1dRQ==;ORg4AjUWIQA/Gnt2VVhkQlFacldJXnxNYVF2R2BJflRzdl9CYkwxOX1dQl9gSXxTdERgWnpdd3RURGM=;MTA1NjA1OEAzMjMwMmUzNDJlMzBVU3NYOU0zd2VHd0crVUNNWTlqd3dCYU1yV3JnK1RpMkNMWWFhMzV6V09FPQ==;MTA1NjA1OUAzMjMwMmUzNDJlMzBGZ0tZR1NGalNncUhURWhVOXUzL2t4RUJOUDlEemc1K0hWZHM1RGN5cmU4PQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFtKVmBWekx0RWFab196d1dMZF5BJAtUQF1hSn5RdkdiWnxbc3NVQWRZ;MTA1NjA2MUAzMjMwMmUzNDJlMzBvMWlhcldWd0JqTWhrOXBuRHFiSFgwSW9oU1hPclZNM3B1eGJ0Q3YvSmwwPQ==;MTA1NjA2MkAzMjMwMmUzNDJlMzBPT1VjZVFiVUVDdXI1aThBSHRWcUc3TDdBWThSeDJTbkFyMjNMNHB2ZStnPQ==;Mgo+DSMBMAY9C3t2VVhkQlFacldJXnxNYVF2R2BJflRzdl9CYkwxOX1dQl9gSXxTdERgWnpdd3VWQ2U=;MTA1NjA2NEAzMjMwMmUzNDJlMzBmcXZEYWw1NUtySzMyMWdxbXY3RWhTSU9Pc2o5SjZtZWZIWTlXYUQvenlrPQ==;MTA1NjA2NUAzMjMwMmUzNDJlMzBRWXZkR1R0dzlydmFFdGR1SStTZjU4SHlOYlRDeE1XOWo2VVpvdkJneTRZPQ==;MTA1NjA2NkAzMjMwMmUzNDJlMzBvMWlhcldWd0JqTWhrOXBuRHFiSFgwSW9oU1hPclZNM3B1eGJ0Q3YvSmwwPQ==');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
