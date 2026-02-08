
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

// Note: Videos MUST be placed in the /public folder at the root of the project.
// In the browser, they are accessed via the root path (e.g., /myvideo.mp4)
const video1Path = '/InShot_20260116_204119246.mp4';
const video2Path = '/VID-20260105-WA0005.mp4';

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
  video1: video1Path,
  video2: video2Path,
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages.map(img => ({
  ...img,
  type: (img.type || 'image') as 'image' | 'video',
  imageUrl: mediaMap[img.id] || img.imageUrl,
}));
