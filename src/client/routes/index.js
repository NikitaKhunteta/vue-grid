const Statements = resolve => {
  require.ensure(['./statements/index.vue'], () => {
    resolve(require('./statements/index.vue'));
  });
};


export const routes = [
  { path: '', component: Statements },
  { path: '/statements', component: Statements },
];
