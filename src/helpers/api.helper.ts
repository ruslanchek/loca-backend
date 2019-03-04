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
    code: string,
    description: string,
    fields?: IApiErrorField[],
  ): IApiResult<null> {
    return {
      data: null,
      error: {
        code,
        description,
        fields: fields || [],
      },
    };
  }
}
