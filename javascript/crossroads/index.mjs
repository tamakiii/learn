import router from 'crossroads';

router.addRoute('/', () => {
  console.log('Index');
});
router.addRoute('/pulls', () => {
  console.log('Pulls');
});
router.addRoute('/pulls/{id}', (id) => {
  console.log('Pulls: ' + id);
});
router.addRoute('/:group:/:repository:', (...args) => {
  console.log(args);
});

router.parse('/');
router.parse('/pulls');
router.parse('/pulls/');
router.parse('/pulls/123');
router.parse('/pulls/hoge');
router.parse('/voyagegroup/repo');

