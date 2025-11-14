"use client";

import { ParallaxProvider } from "react-scroll-parallax";
import React from "react";

export default function ParallaxProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ParallaxProvider>{children}</ParallaxProvider>;
}
