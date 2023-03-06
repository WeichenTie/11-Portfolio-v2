import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/WeichenTie/Portfolio-v2.git', // Update to point to your repository
  user: {
   name: 'Weichen Tie', // update to use your name
   email: 'weichentie@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);