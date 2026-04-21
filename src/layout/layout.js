import React from "react";
import { useRouter } from "next/router";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ParticleBackground from "../components/particleBackground/ParticleBackground";

export default function Layout({ children, theme }) {
  const router = useRouter();

  if (router.asPath === "/resume") {
    return <main>{children}</main>;
  }

  // Only show particles on the home page, and very dimmed
  const showParticles = router.asPath === "/" || router.asPath === "";

  return (
    <React.Fragment>
      {showParticles && (
        <ParticleBackground
          color={theme.imageHighlight}
          opacity={0.35}
        />
      )}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header theme={theme} />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer theme={theme} />
      </div>
    </React.Fragment>
  );
}
