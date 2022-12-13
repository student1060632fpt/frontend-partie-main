import { throws } from "assert";
import {utils} from "near-api-js";
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

    async withdraw(amount_stake){
        return await this.wallet.callMethod({
            contractId: this.contractId,
            method: "withdraw",
            args: {
                amount_stake: amount_stake,
            },
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
                jobs_id
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


