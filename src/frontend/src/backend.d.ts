import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactInquiry {
    id: bigint;
    name: string;
    createdAt: Time;
    email: string;
    message: string;
}
export type Time = bigint;
export interface backendInterface {
    getAllInquiries(): Promise<Array<ContactInquiry>>;
    getInquiry(id: bigint): Promise<ContactInquiry>;
    submitInquiry(name: string, email: string, message: string): Promise<void>;
}
