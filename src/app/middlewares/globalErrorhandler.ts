/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler, } from "express";
import { ZodError, ZodIssue } from "zod";
import { TErrorSources } from "../interface/error";
import config from "../config";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {

    //setting default values
    let statusCode = 500;
    let message = 'Something went wrong!';
    let errorSources: TErrorSources = [
        {
            path: '',
            message: 'Something went wrong',
        },
    ];


    const handleZodError = (err: ZodError) => {
        const errorSources: TErrorSources = err.issues.map((issue: ZodIssue) => {
            return {
                path: issue?.path[issue.path.length - 1],
                message: issue.message
            }
        })

        const statusCode = 400;

        return {
            statusCode,
            message: "Validation Error",
            errorSources,
            err,
            stack: config.env === 'development' ? err?.stack : null,
        }
    }


    if (err instanceof ZodError) {
        const simplifiedError = handleZodError(err);
        statusCode = simplifiedError?.statusCode;
        message = simplifiedError?.message;
        errorSources = simplifiedError?.errorSources



        // statusCode = 400;
        // message = "ami zod error"
    }

    return res.status(statusCode).json({
        success: false,
        message,
        errorSources,

    })

}

export default globalErrorHandler;


/* 
success
message
errorSources: [
path: "",
message: "",
]
stack
*/