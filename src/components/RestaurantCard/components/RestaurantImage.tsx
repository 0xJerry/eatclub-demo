'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '../RestaurantCard.module.css';

interface RestaurantImageProps {
  imageLink?: string | null;
  name: string;
}

export default function RestaurantImage({
  imageLink,
  name
}: RestaurantImageProps) {
  const [imgSrc, setImgSrc] = useState(
    imageLink || 'https://placehold.co/600x300/png'
  );

  return (
    <Image
      src={imgSrc}
      alt={name}
      width={600}
      height={260}
      className={styles.cardImage}
      onError={() => {
        setImgSrc('https://placehold.co/600x300/png');
      }}
    />
  );
}
