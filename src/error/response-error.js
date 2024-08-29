
class ResponseError extends Error {

    constructor(status, massage) {
        super(massage);
        this.status = status;
    }
}

export {
    ResponseError
}