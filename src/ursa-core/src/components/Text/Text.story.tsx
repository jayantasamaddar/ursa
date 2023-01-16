import React from 'react';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Text } from './Text';
import { Stack } from '../Stack';

export default { title: 'Components/Text', component: Text } as ComponentMeta<
  typeof Text
>;

export const Heading: ComponentStoryObj<typeof Text> = {
  render: () => (
    <Stack vertical>
      <Text as="h1">This is a h1 Heading with heading4XL variant</Text>
      <Text as="h2">This is a h2 Heading with heading3XL variant</Text>
      <Text as="h3">This is a h3 Heading with heading2XL variant</Text>
      <Text as="h4">This is a h4 Heading with headingXL variant</Text>
      <Text as="h5">This is a h5 Heading with headingL variant</Text>
      <Text as="h6">This is a h6 Heading with headingM variant</Text>
      <Text as="h6" variant="headingS">
        This is a h6 Heading with headingS variant
      </Text>
      <Text as="h6" variant="headingXS">
        This is a h6 Heading with headingXS variant
      </Text>
    </Stack>
  )
};

export const Body: ComponentStoryObj<typeof Text> = {
  render: () => (
    <Stack vertical>
      <Text as="p" variant="bodyL">
        This is a bodyL Text
      </Text>
      <Text as="p" variant="bodyM">
        This is a bodyM Text (default)
      </Text>
      <Text as="p" variant="bodyS">
        This is a bodyS Text
      </Text>
    </Stack>
  )
};

export const ColouredText: ComponentStoryObj<typeof Text> = {
  render: () => (
    <Stack vertical>
      <Text color="normal">This is a Normal Text</Text>
      <Text color="success">This is a Success Text</Text>
      <Text color="warning">This is a Warning Text</Text>
      <Text color="error">This is an Error Text</Text>
      <Text color="subdued">This is a Subdued Text</Text>
    </Stack>
  )
};

export const AlignedText: ComponentStoryObj<typeof Text> = {
  render: () => (
    <Stack vertical>
      <Text align="left" color="success">
        The quick brown fox jumps over the lazy dog. The quick brown fox jumps
        over the lazy dog. The quick brown fox jumps over the lazy dog. The
        quick brown fox jumps over the lazy dog. This Text is Left Aligned.
      </Text>
      <Text align="right" color="error">
        The quick brown fox jumps over the lazy dog. The quick brown fox jumps
        over the lazy dog. The quick brown fox jumps over the lazy dog. The
        quick brown fox jumps over the lazy dog. This text is Right Aligned.
      </Text>
      <Text align="center">
        The quick brown fox jumps over the lazy dog. The quick brown fox jumps
        over the lazy dog. The quick brown fox jumps over the lazy dog. The
        quick brown fox jumps over the lazy dog. This text is Center Aligned.
      </Text>
      <Text align="justify" color="warning">
        The quick brown fox jumps over the lazy dog. The quick brown fox jumps
        over the lazy dog. The quick brown fox jumps over the lazy dog. The
        quick brown fox jumps over the lazy dog. This text is Justified.
      </Text>
    </Stack>
  )
};

export const StyledText: ComponentStoryObj<typeof Text> = {
  render: () => (
    <Stack vertical>
      <Text color="normal" fontWeight="bold">
        This is a Bold Text
      </Text>
      <Text color="normal" underline>
        This is an Underlined Text
      </Text>
      <Text color="success" transform="uppercase">
        This is an Uppercase Text
      </Text>
      <Text color="warning" transform="lowercase">
        This is a Lowercase Text
      </Text>
      <Text transform="capitalize">
        this is originally written in lowercase but is capitalized text.
      </Text>
      <Text color="error" strikethrough>
        This is a Strikethrough Text
      </Text>
      <Text underline strikethrough>
        This is an Underlined + Strikethrough Text
      </Text>
      <Text color="subdued" truncate>
        This Text is truncated. The quick brown fox jumps over the lazy dog. The
        quick brown fox jumps over the lazy dog. The quick brown fox jumps over
        the lazy dog. The quick brown fox jumps over the lazy dog. This text is
        Justified.
      </Text>
      <Text wrap>
        This Text is wrapped. Pneumonoultramicroscopicsilicovolcanoconiosis
        Pneumonoultramicroscopicsilicovolcanoconiosis
        Pneumonoultramicroscopicsilicovolcanoconiosis
        Pneumonoultramicroscopicsilicovolcanoconiosis.
      </Text>
      <Text color="subdued" hidden>
        This Text is Hidden.
      </Text>
    </Stack>
  )
};
