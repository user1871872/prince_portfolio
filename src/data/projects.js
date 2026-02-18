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
    image: '/img/house3.png',
    images: ['/img/house7.png'],
    floorPlans: ['/img/floorplan1.png', '/img/floorplan2.png'],
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    longDescription: null,
    link: null,
  },
  {
    id: '2',
    title: 'Project title',
    category: 'Commercial',
    image: '/img/house2.png',
    images: ['/img/house8.png'],
    floorPlans: ['/img/floorplan1.png', '/img/floorplan3.png'],
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    longDescription: null,
    link: null,
  },
  {
    id: '3',
    title: 'Project title',
    category: 'Infrastructure',
    image: '/img/house3.png',
    images: ['/img/house9.png'],
    floorPlans: ['/img/floorplan2.png', '/img/floorplan3.png'],
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    longDescription: null,
    link: null,
  },
];
