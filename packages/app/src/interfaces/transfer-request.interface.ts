import { ITransfer } from "./transfer.interface";

export interface ITransferRequest  {
    pagination: IPagination
    results: ITransfer[]
}

export interface IPagination {
    nextUrl: string | null
    previousUrl: string | null
    totalCount: number
}