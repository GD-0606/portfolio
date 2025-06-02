import React from "react";
import Image from "next/image";
import { NextImageProps } from "@/types";
const NextImage = (props: NextImageProps) => {
  const { url, width, alt, height, className, fill } = props;
  return (
    <figure className="relative aspect-square rounded-[4px]">
      <Image
        src={url}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        className={className}
      />
    </figure>
  );
};

export default NextImage;
