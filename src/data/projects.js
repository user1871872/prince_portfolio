/**
 * Add your project entries here.
 * Each project: { id, title, category, image, images?, floorPlans?, description, longDescription?, link? }
 * - image: used as card thumbnail (required for listing).
 * - images: optional array of image URLs for the project detail gallery.
 * - floorPlans: optional array of image URLs for floor plan(s) shown on the project detail page.
 */
export const projects = [
  {
    id: '1',
    title: 'Project title',
    category: 'Residential',
    image: '/vite.svg',
    images: ['/vite.svg', '/vite.svg', '/vite.svg'],
    floorPlans: ['/vite.svg', '/vite.svg'],
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    longDescription: null,
    link: null,
  },
  {
    id: '2',
    title: 'Project title',
    category: 'Commercial',
    image: '/vite.svg',
    images: ['/vite.svg', '/vite.svg'],
    floorPlans: null,
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    longDescription: null,
    link: null,
  },
  {
    id: '3',
    title: 'Project title',
    category: 'Infrastructure',
    image: '/vite.svg',
    images: null,
    floorPlans: null,
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    longDescription: null,
    link: null,
  },
];
