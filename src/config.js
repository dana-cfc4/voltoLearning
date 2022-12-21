/**
 * Add your config changes here.
 * @module config
 * @example
 * export default function applyConfig(config) {
 *   config.settings = {
 *     ...config.settings,
 *     port: 4300,
 *     listBlockTypes: {
 *       ...config.settings.listBlockTypes,
 *       'my-list-item',
 *    }
 * }
 */

import { ScrollableList } from './components';
// All your imports required for the config here BEFORE this line
import '@plone/volto/config';

export default function applyConfig(config) {
  config.blocks.blocksConfig.listing.variations.push({
    id: 'scrollableList',
    title: 'Scrollable List',
    template: ScrollableList,
  });
  // Add here your project's configuration here by modifying `config` accordingly
  return config;
}
