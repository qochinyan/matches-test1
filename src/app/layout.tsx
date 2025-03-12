"use client";

import { ReactNode, FC } from "react";
import "./styles/globals.scss";

interface Metadata {
  title: string;
  description: string;
}
const metadata: Metadata = {
  title: "Matches App",
  description: "Interview Task which showws the Matches",
};

type LayoutProps = {
  children: ReactNode;
};

// Layout for main "/" route.
const RootLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
          {children}
      </body>
    </html>
  );
};

export default RootLayout;
