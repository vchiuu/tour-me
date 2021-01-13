import { registerRootComponent } from 'expo';

import App from './App';
import * as PolyFill from '../polyfill.js';

registerRootComponent(App, PolyFill);
