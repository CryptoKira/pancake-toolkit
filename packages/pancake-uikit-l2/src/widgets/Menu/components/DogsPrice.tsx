import React from "react";
import styled from "styled-components";
import { DogsIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  dogsPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const DogsPrice: React.FC<Props> = ({ dogsPriceUsd }) => {
  return dogsPriceUsd ? (
    <PriceLink
      href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
      target="_blank"
    >
      <DogsIcon width="24px" height="24px" mr="8px" />
      <Text color="textSubtle" bold>{`$${dogsPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(DogsPrice);
