import { HttpException, HttpStatus } from '@nestjs/common';

export interface IApiResult<T> {
  data: T;
  error: IApiError;
}

export interface IApiErrorField {
  name: string;
  body: string;
}

export interface IApiError {
  code: string;
  description: string;
  fields: IApiErrorField[];
}

export class ApiHelper {
  static apiResult<T>(data: T): IApiResult<T> {
    return {
      data,
      error: null,
    };
  }

  static apiError(
    status: HttpStatus,
    code: string,
    description?: string,
    fields?: IApiErrorField[],
  ): IApiResult<null> {
    throw new HttpException(
      {
        data: null,
        error: {
          code,
          description: description || '',
          fields: fields || [],
        }
      },
      status,
    );
  }
}
