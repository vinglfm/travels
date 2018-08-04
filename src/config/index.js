import dev from './development';
import prod from './production';

let env;
if (process.env.NODE_ENV === 'production') {
  env = prod;
} else {
  env = dev;
}

export default env;