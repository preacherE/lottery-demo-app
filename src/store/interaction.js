import { ethers } from "ethers";
import LOTTERY_ABI from "../abi/Lottery.json";

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
    type: "CHAINID_LOADED",
    chainId,
  });

  return chainId;
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

export const loadLottery = async (provider, address, dispatch) => {
  const lottery = new ethers.Contract(address, LOTTERY_ABI, provider);

  dispatch({
    type: "LOTTERY_LOADED",
    lottery,
  });

  return lottery;
};

export const buyTicket = async (
  provider,
  lottery,
  account,
  amount,
  dispatch
) => {
  let transaction, result;

  dispatch({
    type: "BUY_TICKET_REQUEST",
  });

  try {
    const signer = await provider.getSigner();
    const overrides = {
      from: account,
      value: ethers.utils.parseUnits(amount.toString(), 18),
    };

    const connectLottery = lottery.connect(signer);

    transaction = await connectLottery.buyTickets(overrides);

    result = await transaction.wait();

    dispatch({
      type: "BUY_TICKET_SUCCESS",
      result: result,
    });
  } catch (error) {
    dispatch({
      type: "BUY_TICKET_FAILED",
    });
    console.log(error);
  }
};

export const checkWallet = async (provider, lottery, account, dispatch) => {
  let transaction, result

  try{
    const signer = await provider.getSigner(account);
    const connectLottery = lottery.connect(signer);

    const isWinner = await connectLottery.isWinner();
    
    transaction = await connectLottery.purchaseLimits(account);
    result = await transaction;

    dispatch({
      type: "CHECK_WALLET",
      isWinner,
      ticketBought: Number(result)
    })

    return {
      isWinner,
      ticketBought: Number(result)
    }

  } catch (error) {
    console.log(error)
  }
}
