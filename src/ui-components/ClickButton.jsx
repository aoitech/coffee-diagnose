/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import ComicLightlargeBase from "./ComicLightlargeBase";
import { Flex } from "@aws-amplify/ui-react";
export default function ClickButton(props) {
  const { message, overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="10px 10px 10px 10px"
      {...getOverrideProps(overrides, "ClickButton")}
      {...rest}
    >
      <ComicLightlargeBase
        display="flex"
        gap="0"
        direction="column"
        width="256px"
        height="61px"
        justifyContent="flex-start"
        alignItems={message}
        shrink="0"
        position="relative"
        border="2px SOLID rgba(0,0,0,1)"
        boxShadow="-4px 4px 0px rgba(0, 0, 0, 1)"
        borderRadius="8px"
        padding="14px 30px 14px 30px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Base")}
      ></ComicLightlargeBase>
    </Flex>
  );
}
