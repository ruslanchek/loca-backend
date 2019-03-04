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
  static async apiResult<T>(data: Promise<T>): Promise<IApiResult<T>> {
    try {
      return {
        data: await data,
        error: null,
      };
    } catch (error) {
      return this.apiError('INTERNAL_SERVER_ERROR', error.message);
    }
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
