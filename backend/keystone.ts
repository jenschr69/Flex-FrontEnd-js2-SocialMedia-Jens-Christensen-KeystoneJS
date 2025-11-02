import { config, list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text } from '@keystone-6/core/fields';

const lists = {
  User: list({
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
    },
  }),
  Message: list({
      access: allowAll,
      fields: {
        title: text(),
      },
    }),
};

export default config({
  db: {
    provider: 'mysql',
    url: 'mysql://dbuser:dbpass@localhost:3306/keystone',
    onConnect: async context => { /* ... */ },
    // Optional advanced configuration
    enableLogging: true,
    idField: { kind: 'uuid' },
  },
  lists,
});