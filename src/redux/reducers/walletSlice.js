import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSignedIn: false,
  contract_id: null,
  wallet: null
}

const walletSlice = createSlice({
  name: "walletSlice",
  initialState,
  reducers: {
    getSignInWallet:(state,action)=>{
      const newState = {...action.payload}
      state.isSignedIn=newState.isSignedIn
      state.contract_id=newState.contract_id
      state.wallet=newState.wallet
    }
  }
});

export const {getSignInWallet} = walletSlice.actions

export default walletSlice.reducer