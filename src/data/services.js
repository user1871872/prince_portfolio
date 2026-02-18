/**
 * Multiple service blocks (carousel). Each block: projectTitle, location, image, services list.
 * Add or remove items in the array; the Services section will show one at a time with prev/next.
 */
export const servicesFeaturedList = [
  {
    id: '1',
    projectTitle: 'Proposed one-storey residential building',
    location: 'Bacong, Anda, Bohol',
    image: '/img/house3.png',
    services: [
      { label: 'Complete set of plans with sign and seal of involved professionals' },
      { label: 'Printing of plans (5 sets, A3 paper)' },
      { label: 'Bill of materials' },
      {
        label: 'Additional forms',
        subItems: [
          'Application for electrical permit',
          'Certificate of final electrical inspection (CFEI)',
          'Certificate of occupancy and completion',
        ],
      },
      {
        label: 'Notarization of documents',
        subItems: [
          'Unified building permit form',
          'Locational clearance',
          'Bill of materials',
          'Certificate of occupancy and completion',
        ],
      },
    ],
  },
  {
    id: '2',
    projectTitle: 'Commercial / multi-storey',
    location: 'likod sa balay ni jep2',
    image: '/img/house2.png',
    services: [
      { label: 'Structural and civil design' },
      { label: 'Site development plan' },
      { label: 'Permit and compliance documentation' },
      { label: 'Bill of materials and cost estimate' },
    ],
  },
  {
    id: '3',
    projectTitle: 'Subdivision and layout',
    location: 'likod sa balay ni john rey',
    image: '/img/house1.png',
    services: [
      { label: 'Subdivision layout design' },
      { label: 'Road and drainage plans' },
      { label: 'Lot planning and utilities' },
    ],
  },
];
