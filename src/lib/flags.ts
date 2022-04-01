// These parts are the same. So you can save a few bytes
const start = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='480' %3E%3Cpath fill='%23`;
const end = `/%3E%3C/svg%3E`;

const flags = [
  `a30262' d='M0 0h800v480H0z'/%3E%3Cpath fill='%23d362a4' d='M0 0h800v384H0z'/%3E%3Cpath fill='%23fff' d='M0 0h800v288H0z'/%3E%3Cpath fill='%23ff9a56' d='M0 0h800v192H0z'/%3E%3Cpath fill='%23d52d00' d='M0 0h800v96H0z'`,
  `750787' d='M0 0h777v480H0z'/%3E%3Cpath fill='%23004dff' d='M0 0h777v400H0z'/%3E%3Cpath fill='%23008026' d='M0 0h777v320H0z'/%3E%3Cpath fill='%23ffed00' d='M0 0h777v240H0z'/%3E%3Cpath fill='%23ff8c00' d='M0 0h777v160H0z'/%3E%3Cpath fill='%23e40303' d='M0 0h777v80H0z'`,
  `d60270' d='M0 0h800v192H0z'/%3E%3Cpath fill='%239b4f96' d='M0 192h800v96H0z'/%3E%3Cpath fill='%230038a8' d='M0 288h800v192H0z'`,
  `21b1ff' d='M0 0h800v480H0z'/%3E%3Cpath fill='%23ffd800' d='M0 0h800v320H0z'/%3E%3Cpath fill='%23ff218c' d='M0 0h800v160H0z'`,
  `5bcefa' d='M0 0h800v480H0z'/%3E%3Cpath fill='%23f5a9b8' d='M0 96h800v288H0z'/%3E%3Cpath fill='%23fff' d='M0 192h800v96H0z'`,
].map((flag) => start + flag + end);

export { flags };
