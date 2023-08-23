
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
export const decorators = [
  withBackgrounds,
  (Story) => (
    <View style={{ flex: 1, color: 'blue' }}>
      <Story />
    </View>
  ),
];
export const parameters = {
  backgrounds: {
    default: 'plain',
    values: [
      { name: 'plain', value: 'white' },
      { name: 'warm', value: 'hotpink' },
      { name: 'cool', value: 'deepskyblue' },
    ],
  },
};