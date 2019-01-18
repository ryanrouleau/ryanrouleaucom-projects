import { S } from "xmlchars/xml/1.0/ed5";

const projectData = [
  {
    name: 'Dwllr',
    description: 'A Full Stack app collecting a large amount of data on every zip code in the united states and allowing the user to find the closest matching cities to their preferences along with finding similar cities utilizing a machine learning model.  Built in collabartion with 3 others.',
    link: 'https://github.com/CUBigDataClass/Dwllr',
    date: 'May 2018',
    tags: [
      'Full Stack',
      'Frontend',
      'Backend',
      'Machine Learning',
      'UI Design',
      'Vue.js',
      'CSS Animation',
      'JavaScript',
      'Java',
      'Python',
      'Flask',
      'API Design',
      'SQL',
      'Cassandra',
    ]
  },
  {
    name: 'Song Serve',
    description: 'A Node.js App that creates a music library from local directories, gathers album art and other data from Spotify\'s API, creates relationships between Artists/Albums/Playlists, and serves the library over a REST API.',
    link: 'https://github.com/ryanrouleau/song-serve',
    date: 'July 2017',
    tags: [
      'Full Stack',
      'Backend',
      'Node.js',
      'JavaScript',
      'SQL',
      'API Design',
    ],
  },
  {
    name: 'Song Serve Frontend',
    description: 'A Vue.js based music player and library viewer utilizing Song Serve\'s API.',
    link: 'https://github.com/ryanrouleau/song-serve-frontend',
    date: 'July 2017',
    tags: [
      'Full Stack',
      'Frontend',
      'Vue.js',
      'JavaScript',
      'CSS Animation',
      'UI Design',
    ],
  },
  {
    name: 'TheCryptoTicker.com',
    description: 'Frontend visualization displaying real time trading data on all currecnies (~90) listed on the cryptocurrency exchange poloniex using websockets.',
    link: 'https://thecryptoticker.com',
    date: 'Nov. 2016',
    tags: [
      'Frontend',
      'JavaScript',
      'CSS Animation',
      'UI Design',
      'Blockchain',
    ],
  },
  {
    name: 'CertChain',
    description: 'A hackathon project that used the NEO blockchain & smart contracts to store and validate SSL Certificates removing the need for a truested third party. Built with two others.',
    link: 'https://github.com/ryanrouleau/CertChain',
    date: 'Feb. 2018',
    tags: [
      'Python',
      'Blockchain',
      'Backend',
    ],
  },
  {
    name: 'OBD Buddy',
    description: 'A hackathon project that streams on board diagnostics data from an Arduino connected to a car to a backend server that serves data to a web frontend.  Uses data to give contectual info to user (e.g. auto reroute guidance to nearest gas station when gas too low.)',
    link: 'https://github.com/t2nerb/OBD_buddy',
    date: 'Apr. 2017',
    tags: [
      'Full Stack',
      'Frontend',
      'Backend',
      'Python',
      'C++',
      'Flask',
      'API Design',
      'SQL',
      'UI Design',
    ],
  },
  {
    name: 'Clean Community',
    description: 'A project that connects volunteers and volunteer opurtinities together.  Designed as an exercise in OO Design.  Built with three others.',
    link: 'https://github.com/clean-community-4448/clean-community',
    date: 'Apr. 2018',
    tags: [
      'Full Stack',
      'Frontend',
      'Backend',
      'Java',
      'API Design',
      'SQL',
      'JavaScript',
      'Vue.js',
    ],
  },
  {
    name: 'Breast Cancer Identification',
    description: 'Exploring several different ML algorithms to classify if a cell is cancerous or not.',
    link: 'https://github.com/ryanrouleau/applied-machine-learning-final-project/blob/master/finalproject.ipynb',
    date: 'Nov. 2018',
    tags: [
      'Machine Learning',
      'Python'
    ],
  },
  {
    name: 'Predicting Location of Crimes',
    description: 'Using statistical methods and a large amount of data of all the crimes in Chicago for 2001-2017 to create heatmaps predicting where many and highly sever crimes will occur in the future. Built with one other.',
    link: 'https://github.com/ryanrouleau/Data-Mining-Term-Project',
    date: 'May 2017',
    tags: [
      'Machine Learning',
      'Python',
      'R',
      'd3.js',
    ],
  },
  {
    name: 'Quote Verifier Extension',
    description: 'A chrome extension and associated backend that checks if a given quote and author is accurate, misleading, or false by live parsing entries in WikiQoute.org.  Built with one other.',
    link: 'https://github.com/JakeC1020/quote-verifier-chrome-extension',
    date: 'Dec. 2015',
    tags: [
      'Full Stack',
      'Frontend',
      'Backend',
      'JavaScript',
      'Node.js',
      'UI Design',
    ],
  },
  {
    name: 'CU Smile',
    description: 'A hackathon project that connects with Pebble smart watch and records the location of certain button presses for consumption on a frontend.  Built with one other.',
    link: 'https://github.com/JakeC1020/smile',
    date: 'Apr. 2016',
    tags: [
      'Full Stack',
      'Frontend',
      'Backend',
      'JavaScript',
      'Meteor.js',
    ],
  },
];

const tags = {
  'General': [
    'Full Stack', 
    'Frontend', 
    'Backend', 
    'Machine Learning', 
    'Blockchain',
    'UI Design',
    'API Design',
  ],
  'Languages': [
    'JavaScript', 
    'Python', 
    'Java', 
    'SQL',
    'R'
  ],
  'Tools and Frameworks': [
    'Vue.js', 
    'CSS Animation',
    'd3.js',
    'Node.js',
    'Flask', 
    'Cassandra',
  ],
};

export {projectData, tags};