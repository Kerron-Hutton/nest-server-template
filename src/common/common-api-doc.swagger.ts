import { applyDecorators } from '@nestjs/common';

import { BadRequestExceptionModel } from './model/bad-request-exception.model';
import { ApiCreateResponseModel } from './model/api-create-response.model';

import {
  ApiResponseOptions,
  getSchemaPath,
  ApiOkResponse,
} from '@nestjs/swagger';

export const ValidationBadRequest: ApiResponseOptions = {
  description: 'Invalid api request.',
  type: BadRequestExceptionModel,
};

export const ApiCreateResponse: ApiResponseOptions = {
  description: 'newly created resource id',
  type: ApiCreateResponseModel,
};

export const ApiOkPaginationResponse = (model: any) => {
  return applyDecorators(
    ApiOkResponse({
      schema: {
        properties: {
          itemCount: {
            type: 'number',
          },
          totalItems: {
            type: 'number',
          },
          itemsPerPage: {
            type: 'number',
          },
          totalPages: {
            type: 'number',
          },
          currentPage: {
            type: 'number',
          },
          items: {
            type: 'array',
            items: { $ref: getSchemaPath(model) },
          },
        },
      },
    }),
  );
};
