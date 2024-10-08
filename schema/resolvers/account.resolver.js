import AccounttRepository from "../../repositories/account.repository.js"

// service armazena a lógica de negócio. 

async function createAccount(account) {
  return await AccounttRepository.insertAccount(account);
}

async function getAccounts() {
  return await AccounttRepository.getAccounts();
}

async function getAccount(id) {
  return await AccounttRepository.getAccount(id);
}

async function deleteAccount(id) {
  return await AccounttRepository.deleteAccount(id);
}

async function updateAccount(account) {
  return await AccounttRepository.updateAccount(account);
}

async function updateBalance(account) {
  const acc = await AccounttRepository.getAccount(account.id);
  acc.balance = account.balance;
  return await AccounttRepository.updateAccount(acc);
}

export default {
  createAccount,
  getAccounts,
  getAccount,
  deleteAccount,
  updateAccount,
  updateBalance
}