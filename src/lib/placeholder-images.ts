
import data from './placeholder-images.json';
import image1 from './IMG_20251112_122335.jpg.jpeg';
import image2 from './IMG_20251203_131218.jpg.jpeg';
import image3 from './IMG_20260102_113411.jpg.jpeg';
import image4 from './IMG_20260102_120949.jpg.jpeg';
import image5 from './IMG_20260116_121252.jpg.jpeg';
import image6 from './IMG_5104 (1).jpg.jpeg';
import image7 from './InShot_20251225_120528513.jpg.jpeg';
import image8 from './Picsart_25-11-13_08-00-43-103.jpg.jpeg';
import image9 from './Picsart_26-01-04_17-12-34-125.jpg.jpeg';
import image10 from './Picsart_26-01-06_08-15-42-977.jpg.jpeg';
import image11 from './IMG-20260127-WA0010.jpg.jpeg';
import image12 from './IMG_20251112_130039 (2).png';
import image13 from './IMG_20240903_164945_031.webp';

// Timeline images to be added to gallery
import image14 from '../app/timeline/birthday.jpeg';
import image15 from '../app/timeline/park.jpeg';
import image16 from '../app/timeline/first meet.jpeg';
import image17 from '../app/timeline/kummattii.jpeg';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: any;
  imageHint: string;
  type: 'image' | 'video';
};

const mediaMap: Record<string, any> = {
  gallery1: image1,
  gallery2: image2,
  gallery3: image3,
  gallery4: image4,
  gallery5: image5,
  gallery6: image6,
  gallery7: image7,
  gallery8: image8,
  gallery9: image9,
  gallery10: image10,
  gallery11: image11,
  gallery12: image12,
  gallery13: image13,
  gallery14: image14,
  gallery15: image15,
  gallery16: image16,
  gallery17: image17,
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages.map(img => ({
  ...img,
  type: (img.type || 'image') as 'image' | 'video',
  imageUrl: mediaMap[img.id] || img.imageUrl,
}));
