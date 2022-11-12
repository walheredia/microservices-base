import { Schema, model, Collection } from "mongoose";
import { EmailDB } from "../../utils/constants";
import { Email} from './email.types';

const EmailSchema = new Schema<Email>(
    {
        _id: {
            type: String,
            required: true,
        },
        campaign_id: {
            type: String,
            required: true,
        },
        date_added: {
            type: Date,
            required: true,
        },
        date_sending: {
            type: Date,
            required: true,
        },
        from: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
        name_from: {
            type: String,
            required: true,
        },
        priority: {
            type: Number,
            required: false,
        },
        report_id: {
            type: String,
            required: false,
        },
        sent_by: {
            type: String,
            required: false,
        },
        status: {
            type: Number,
            required: true,
        },
        subject: {
            type: String,
            required: true,
        },
        timeline: {
            type: Boolean,
            required: true,
        },
        to: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        deduplication_hash: {
            type: String,
            required: true,
        },
    },
    {
        collection: EmailDB,
        timestamps: false
    }
)

export const EmailModel = model<Email>(EmailDB, EmailSchema);
export default EmailModel;