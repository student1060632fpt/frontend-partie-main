import { throws } from "assert";
import {utils} from "near-api-js";

export class NFTMarketplace {
    constructor({contractId, wallet}) {
        this.contractId = contractId;
        this.wallet = wallet;
    }

    async mintNFT(tokenId, metadata, receiverId) {
        return await this.wallet.callMethod({
            contractId: this.contractId,
            method: "nft_mint",
            args: {
                token_id: tokenId,
                metadata,
                receiver_id: receiverId
            },
            deposit: utils.format.parseNearAmount("0.01") // Deposit 0.01 NEAR
        })
    }
    async nftTransfer(receiverId, tokenId, approvalId = 0, memo = "") {
        return await this.wallet.callMethod({
            contractId: this.contractId,
            method: "nft_transfer",
            args: {
                receiver_id: receiverId,
                token_id: tokenId,
                approval_id: approvalId,
                memo
            },
            deposit: 1 // Deposit 1 yoctoNEAR
        })
    }

    async nftToken(tokenId) {
        return await this.wallet.viewMethod({
            contract: this.contractId,
            method: "nft_token",
            args: {
                token_id: tokenId
            }
        })
    }

    async nftTokenForOwner(accountId, fromIndex = "0", limit = 100) {
        console.log("Account: ", accountId);
        return await this.wallet.viewMethod({
            contractId: this.contractId,
            method: "nft_tokens_for_owner",
            args: {
                account_id: accountId,
                from_index: fromIndex,
                limit
            }
        })
    }

    async getSales() {
        return await this.wallet.viewMethod({
            contractId: this.contractId,
            method: "get_sales",
            args: {}
        })
    }
    async buy(saleId, amount) {
        return await this.wallet.callMethod({
            contractId: this.contractId,
            method: "buy",
            args: {
                sale_id: saleId
            },
            deposit: amount
        })
    }
    async addSale(tokenId, price) {
        return await this.wallet.callMethod({
            contractId: this.contractId,
            method: "add_sale",
            args: {
                token_id: tokenId,
                price: utils.format.parseNearAmount(price)
            },
            deposit: 1
        })
    }
}
// ABI

export class FungibleToken{
    constructor({contractId, wallet}) {
        this.contractId = contractId;
        this.wallet = wallet;
    }
    async ft_transfer_call(receiver_id, amount, msg){
        return await this.wallet.callMethod({
            contractId: this.contractId,
            method: "ft_transfer_call",
            args: {
                receiver_id: receiver_id,
                amount: amount,
                msg: msg
            },
            gas: 200000000000000,
            deposit: 1
        })
    }

    async ft_balance_of(account_id){
        return await this.wallet.viewMethod({
            contractId: this.contractId,
            method: "ft_balance_of",
            args: {
                account_id: account_id,
            },
        })
    }

    async ft_metadata(){
        return await this.wallet.viewMethod({
            contractId: this.contractId,
            method: "ft_metadata",
            args: {},
        })
    }
}

export class veFungibleToken{
    constructor({contractId, wallet}) {
        this.contractId = contractId;
        this.wallet = wallet;
    }
    async ft_transfer_call(receiver_id, amount, msg){
        return await this.wallet.callMethod({
            contractId: this.contractId,
            method: "ft_transfer_call",
            args: {
                receiver_id: receiver_id,
                amount: amount,
                msg: msg
            },
            gas: 200000000000000,
            deposit: 1
        })
    }

    async ft_balance_of(account_id){
        return await this.wallet.viewMethod({
            contractId: this.contractId,
            method: "ft_balance_of",
            args: {
                account_id: account_id,
            },
        })
    }

    async ft_metadata(){
        return await this.wallet.viewMethod({
            contractId: this.contractId,
            method: "ft_metadata",
            args: {},
        })
    }

    async ft_total_supply(){
        return await this.wallet.viewMethod({
            contractId: this.contractId,
            method: "ft_total_supply",
            args: {},
        })
    }
    async get_total_staked(){
        return await this.wallet.viewMethod({
            contractId: this.contractId,
            method: "get_total_staked",
            args: {},
        })
    }
    async get_list_jobs(){
        return await this.wallet.viewMethod({
            contractId: this.contractId,
            method: "get_list_jobs",
            args: {},
        })
    }
    async show_jobs(jobs_id){
        return await this.wallet.viewMethod({
            contractId: this.contractId,
            method: "show_jobs",
            args: {
                jobs_id: jobs_id
            },
        })
    }
    async get_jobs(job_id){
        return await this.wallet.callMethod({
            contractId: this.contractId,
            method: "get_jobs",
            args: {
                job_id: job_id,
            },
            deposit: 1
        })
    }

    async start_jobs(job_id, freelancer_id){
        return await this.wallet.callMethod({
            contractId: this.contractId,
            method: "start_jobs",
            args: {
                job_id: job_id,
                freelancer_id: freelancer_id
            },
            deposit: 1
        })
    }

    async complete_jobs(job_id, choice){
        return await this.wallet.callMethod({
            contractId: this.contractId,
            method: "complete_jobs",
            args: {
                job_id: job_id,
                choice: choice
            },
            deposit: 1
        })
    }

    async end_jobs(job_id, freelancer_id){
        return await this.wallet.callMethod({
            contractId: this.contractId,
            method: "end_jobs",
            args: {
                job_id: job_id,
                freelancer_id: freelancer_id
            },
            deposit: 1
        })
    }

    async create_voting(job_id, freelancer_id, question, variants, start, end){
        return await this.wallet.callMethod({
            contractId: this.contractId,
            method: "create_voting",
            args: {
                job_id: job_id,
                freelancer_id: freelancer_id,
                question: question, 
                variants: variants,
                start: start,
                end: end, 

            },
            deposit: 1
        })
    }



}

export class VotingContract{
    constructor({contractId, wallet}) {
        this.contractId = contractId;
        this.wallet = wallet;
    }
    async show_results(poll_id){
        return await this.wallet.viewMethod({
            contractId: this.contractId,
            method: "show_results",
            args: {
                poll_id: poll_id,
            },
        })
    }
    async show_list_voting(){
        return await this.wallet.viewMethod({
            contractId: this.contractId,
            method: "show_list_voting",
            args: {},
        })
    }

    async vote(poll_id, votes){
        return await this.wallet.callMethod({
            contractId: this.contractId,
            method: "vote",
            args: {
                poll_id: poll_id,
                votes: votes,
            },
        })
    }
    
}

export class FaucetContract{
    constructor({contractId, wallet}) {
        this.contractId = contractId;
        this.wallet = wallet;
    }
    async ft_request_funds(ft_contract_id, receiver_id ,amount){
        return await this.wallet.callMethod({
            contractId: this.contractId,
            method: "ft_request_funds",
            args: {
                ft_contract_id: ft_contract_id,
                receiver_id: receiver_id,
                amount: amount
            },
            deposit: 1,
        })
    }
}


