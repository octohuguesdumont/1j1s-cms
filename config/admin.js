module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7b1f3ae67166f904046ece897e66ed73'),
  },
});
