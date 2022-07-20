/**
 * 한 번만 구매한 고객의 이메일 목록
 * 가진것 전체 고객 배열
 * 필요한 것 한 번만 구매한 고객들의 이메일 목록
 */

const firstTimers = filter(customer, isFirstTimer);
const isFirstTimer = (customer) => customer.purchases.length === 1;

const firstTimerEmails = map(firstTimers, getCustomerEmail);
const getCustomerEmail = (customer) => customer.email;
