/* eslint-disable import/prefer-default-export */
// @todo re-enable import/prefer-default-export after more functions are exported.
import { omit } from './nodash';

export const omitOwnProps = (component, props) => omit(Object.keys(component.propTypes))(props);
