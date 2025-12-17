import Web3 from "web3";

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

const contractABI = [
  {
    "inputs": [
      { "internalType": "uint256", "name": "interest_rate", "type": "uint256" }
    ],
    "name": "updateR",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "P", "type": "uint256" },
      { "internalType": "uint256", "name": "T", "type": "uint256" }
    ],
    "name": "calculateInterest",
    "outputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "R",
    "outputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

let web3;
let contract;

export function initWeb3() {
  if (typeof window === "undefined") return;

  if (!window.ethereum) {
    alert("MetaMask not installed");
    return;
  }

  if (!contractAddress) {
    alert("Contract address missing in .env file");
    return;
  }

  web3 = new Web3(window.ethereum);
  contract = new web3.eth.Contract(contractABI, contractAddress);
}

export async function connectWallet() {
  await window.ethereum.request({ method: "eth_requestAccounts" });
  const accounts = await web3.eth.getAccounts();
  return accounts[0];
}

export async function updateInterestRate(rate) {
  const accounts = await web3.eth.getAccounts();
  await contract.methods.updateR(rate).send({
    from: accounts[0]
  });
}

export async function calculateInterest(P, T) {
  return await contract.methods.calculateInterest(P, T).call();
}

export async function getInterestRate() {
  return await contract.methods.R().call();
}
