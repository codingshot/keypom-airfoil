import React from "react";

import { Center, Heading, SimpleGrid } from '@chakra-ui/react';

import { GradientSpan } from '@/components/GradientSpan';

import { LandingCard } from './LandingCard';
const images = [
    {
      id: 1,
      src: "assets/PROOFOFVIBES.png",
      alt: "Proof Of Vibes",
      url: "https://proofofvibes.xyz/",
    },
    {
      id: 2,
      src: "assets/BanyanTree.png",
      alt: "Image 2",
      url: "https://banyan.gg",
    },
    {
      id: 3,
      src: "assets/harmonicLogo.webp",
      alt: "Harmonic Guild",
      url: "https://www.harmonicguild.io/",
    },
    {
        id: 4,
        src: "assets/keypom.webp",
        alt: "Keypom",
        url: "https://keypom.xyz",
      },

      {
        id: 5,
        src: "assets/mpalogo.jpeg",
        alt: "Minority Programmers",
        url: "https://minorityprogrammers.org/",
      },
  ];

  const GrayscaleImage = ({ src, alt, url }) => {
    const [isHovering, setIsHovering] = React.useState(false);

    return (
      <img
        src={isHovering ? src : `${src}?grayscale`}
        alt={alt}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => window.open(url, "_blank")}
        height=".5em"
        width="200px"
      />
    );
  };

export const PartnerSection = () => {
  return (
    <Center flexDir="column" maxW="995px" mx="auto">
      <Heading
        fontSize={{ base: '24px', md: '36px' }}
        fontWeight="600"
        lineHeight={{ base: '32px', md: '43px' }}
        maxW="600px"
        mb={{ base: '4', md: '10' }}
        textAlign="center"
      >
<GradientSpan>Working</GradientSpan> with  
        <br /> the <GradientSpan>Best in Web3</GradientSpan> 
      </Heading>
     
            <div style={{ display: "flex", justifyContent: "space-between" }}>
      {images.map((image) => (
        <GrayscaleImage key={image.id} src={image.src} alt={image.alt} url={image.url}  />
      ))}
    </div>
{/* <div>
    <img height="1em" src="assets/image-not-found.png"></img>
</div> 
<div>
    <img height="1em" src="assets/PROOFOFVIBES.png"></img>
</div> */}
    </Center>
  );
};
