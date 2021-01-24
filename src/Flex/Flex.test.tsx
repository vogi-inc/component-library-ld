import React from 'react';
import { render } from '@testing-library/react';
import chai from 'chai';
import chaiDom from 'chai-dom';

/* Use Chai libraries */
chai.use(chaiDom);
// const { expect } = chai;

import Flex from "./Flex";

describe("Test Component", () => {
  it("should render foo text correctly", () => {
    const { getByText } = render(<Flex>Dustin</Flex>)
    getByText('Dustin')
  });
});
