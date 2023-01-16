import { ethers } from "ethers";

export const loadProvider = (dispatch) => {
  const connection = new ethers.providers.Web3Provider(window.ethereum);
  dispatch({
    type: "PROVIDER_LOADED",
    connection,
  });

  return connection;
};

export const loadChainId = async (provider, dispatch) => {
  const { chainId } = await provider.getNetwork();

  dispatch({
    type:"CHAINID_LOADED",
    chainId
  })

  return chainId
};

export const loadAccount = async (provider, dispatch) => {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });

  const account = ethers.utils.getAddress(accounts[0]);

  dispatch({
    type: "ACCOUNT_LOADED",
    account,
  });

  let balance = await provider.getBalance(account);
  balance = ethers.utils.formatEther(balance);

  dispatch({
    type: "BALANCE_LOADED",
    balance,
  });

  return account;
};
