import accountTypeDefs from './account';
import baseTypeDefs from './base';
import profileTypeDefs from './profile';
import venueTypeDefs from './venue';

// baseTypeDefs should always be first
export default [baseTypeDefs, accountTypeDefs, profileTypeDefs, venueTypeDefs];
