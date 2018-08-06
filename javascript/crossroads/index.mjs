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
// router.addRoute('/:group:/:repository:', (g, r) => {
//   // console.log(this); // undefined
//   // console.log(f.arguments);
//   // console.log(function.arguments); // SyntaxError: Unexpected token .
//   // console.log(arguments); // ReferenceError: arguments is not defined
// });

router.addRoute('/:group:/:repository:', function() {
  console.log(arguments);
});

router.parse('/');
router.parse('/pulls');
router.parse('/pulls/');
router.parse('/pulls/123');
router.parse('/pulls/hoge');
router.parse('/voyagegroup/repo');

