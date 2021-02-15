import merge from 'lodash/merge';

import accountResolvers from './account';
import baseResolvers from './base';
import profileResolvers from './profile';

const resolvers = merge(baseResolvers, accountResolvers, profileResolvers);

export default resolvers;
