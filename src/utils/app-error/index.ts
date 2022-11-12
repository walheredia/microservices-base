
const parseError = (error: string): Record<string, unknown> | string => {
    let errorParsed;
    try {
        errorParsed = JSON.parse(error) as Record<string, unknown>;
    } catch (_) {
        errorParsed = error;
    }

    return errorParsed;
};

export class AppError extends Error {
    public readonly name: string;
    public readonly httpCode: number;
    public readonly isOperational: boolean;

    constructor(name: string, httpCode: number, description: string, isOperational: boolean) {
        super(description);

        // Restore the prototype chain, as the 'super' call breaks it
        Object.setPrototypeOf(this, new.target.prototype);

        this.name = name;
        this.httpCode = httpCode;
        this.isOperational = isOperational;
    }
}

export const handleError = (err: AppError): boolean => {
    const { message, isOperational, httpCode, name, stack } = err;
    
    //implement logger here

    return isOperational;
};