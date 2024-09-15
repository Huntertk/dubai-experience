class AppError extends Error{
    statusCode:number;
    status:string;
    isOperation:boolean;
    
    constructor(message:string, statusCode:number){
        super(message)
        this.statusCode = statusCode || 500;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperation = true;
    }
}

export default AppError;