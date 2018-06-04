const Statements = resolve => {
  require.ensure(['./statements/index.vue'], () => {
    resolve(require('./statements/index.vue'));
  });
};
const UserDetails = resolve => {
  require.ensure(['./user-details/index.vue'], () => {
    resolve(require('./user-details/index.vue'));
  });
};

export const routes = [
  { path: '', component: Statements },
  { path: '/statements', component: Statements },
  { path: '/user-details', component: UserDetails },
];
