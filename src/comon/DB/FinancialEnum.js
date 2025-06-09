export const FinancialEnum = [
  { name: 'پرداخت وجه از درگاه', key: 1, color: '#01B69B' },
  { name: 'پرداخت وجه با رسید بانکی', key: 2, color: '#D9A421' },
  { name: 'برداشت وجه از طریق سفارش', key: 3, color: '#D9A421' },
  { name: 'برگشت وجه به دلیل پرداخت ناموفق', key: 4, color: '#7E7DFC' },
  { name: 'استرداد وجه با درخواست کاربر', key: 5, color: '#F36D74' },
  { name: 'پرداخت سود', key: 6, color: '#01B69B' },
  { name: 'برگشت وجه به دلیل عدم موفقیت طرح', key: 7, color: '#7E7DFC' }
];

export const FinancialEnumFinder = (state) => FinancialEnum?.find((item) => item?.key == state);
