export const provider = (state = {}, action) => {
  switch (action.type) {
    case "PROVIDER_LOADED":
      return { ...state, connection: action.connection };
    case "CHAINID_LOADED":
      return { ...state, chainId: action.chainId };
    case "ACCOUNT_LOADED":
      return { ...state, account: action.account };
    case "BALANCE_LOADED":
      return { ...state, balance: action.balance };
    default:
      return state;
  }
};

const DEFAULT_LOTTERY_STATE = {
  contract: {},
  transaction: {
    isSuccessful: false,
  },
  checkWallet: {
    isWinner: false,
    ticketBought: 0,
  },
  tickets: {
    loaded: false,
    data: [],
  },
};

export const lottery = (state = DEFAULT_LOTTERY_STATE, action) => {
  switch (action.type) {
    case "LOTTERY_LOADED":
      return { ...state, contract: action.lottery };
    case "BUY_TICKET_REQUEST":
      return {
        ...state,
        transaction: {
          isPending: true,
          isSuccessful: false,
        },
      };
    case "BUY_TICKET_SUCCESS":
      return {
        ...state,
        transaction: {
          isPending: false,
          isSuccessful: true,
        },
        result: action.result,
      };
    case "BUY_TICKET_FAILED":
      return {
        ...state,
        transaction: {
          isPending: false,
          isSuccessful: false,
          isError: true,
        },
      };
    case "CHECK_WALLET":
      return {
        ...state,
        checkWinner: {
          isWinner: action.isWinner,
          ticketBought: action.ticketBought
        }
      }
    default:
      return state;
  }
};
