import { Request, Response } from 'express';

function notFoundRoutes(req: Request, res: Response): void {

    res.statusCode = 404;
    res.end(template);
}

const template = `
 <html>
    <head><title>Not Found</title></head>
    <body><h2>Page Not Found!</h2></body>
</html>
`;

export default notFoundRoutes;