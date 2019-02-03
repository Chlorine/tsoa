// import * as Koa from 'koa';
// import {IRouterContext} from 'koa-router';

export class Controller {
  private statusCode?: number = undefined;
  private headers = {} as { [name: string]: string | undefined };

  public setStatus(statusCode: number) {
    this.statusCode = statusCode;
  }

  public getStatus() {
    return this.statusCode;
  }

  public setHeader(name: string, value?: string) {
    this.headers[name] = value;
  }

  public getHeader(name: string) {
    return this.headers[name];
  }

  public getHeaders() {
    return this.headers;
  }
}

export interface IKoaControllerErrorResponse {
  status: number;
  errorMessage: string;
  body?: { [key: string]: any };
}

export class KoaController extends Controller {
  public onParamsValidationError(ctx: any, error: any): IKoaControllerErrorResponse {
    return {
      errorMessage: 'Bad request',
      status: 400,
    };
  }

  public onExecutionError(ctx: any, error: any): IKoaControllerErrorResponse {
    return {
      errorMessage: 'Internal server error',
      status: 500,
    };
  }
}
