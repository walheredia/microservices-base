export interface GetExamplePayload {
    from: string,
    numberOfDaysParam: number,
}

export interface Email {
    _id: string,
    campaign_id: string,
    date_added: Date,
    date_sending: Date,
    from: string,
    message: string,
    name_from: string,
    priority?: number,
    report_id?: string,
    sent_by?: string,
    status: number,
    subject: string,
    timeline: boolean,
    to: string,
    type: string,
    deduplication_hash: string,
}

export interface GetEmailsByFromFieldServiceResponse extends Email {}

export interface GetEmailsByFromFieldDalResponse extends Email {}