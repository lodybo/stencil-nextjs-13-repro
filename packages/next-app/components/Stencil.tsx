"use client";

import Script from 'next/script';

export default function Stencil() {
  return (
    <script
      type="module"
      src="component-lib/component-lib.esm.js"
      async
    />
  );
}
