import accountReducer from "./features/accounts/accountSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    account: accountReducer,
    // customer: customerReducer,
  },
});
export default store;
