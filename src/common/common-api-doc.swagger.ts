import {
  ApiOkResponse,
  ApiResponseOptions,
  getSchemaPath,
} from '@nestjs/swagger';
import { BadRequestExceptionModel } from './model/bad-request-exception.model';
import { applyDecorators } from '@nestjs/common';

export const ValidationBadRequest: ApiResponseOptions = {
  description: 'Invalid api request.',
  type: BadRequestExceptionModel,
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
