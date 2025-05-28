alert("Sharp @ Cantina" + window.origin);
window.ethereum.request({ method: 'eth_requestAccounts' })
 .then(accounts => {
   console.log('Connected!', accounts[0]);
 })
 .catch(error => {
   console.error('Connection error:', error);
 });