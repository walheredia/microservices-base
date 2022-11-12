import { GetExamplePayload } from "../components/email/example.types";
import EmailModel from "../schemas/email/email.mongo";

export const getExample = async (param: GetExamplePayload): Promise<Number> => {
    let date = new Date();
    date.setDate(date.getDate() - param.numberOfDaysParam);
    return Number(await EmailModel.countDocuments({from: param.from, date_sending: {$gte: date}}).lean());
};
