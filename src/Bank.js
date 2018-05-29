function tryAmount(amount) {
  if (!isNaN(parseInt(amount)) && isFinite(amount)) {
    if (amount >= 0) {
      return true;
    }
  }
  return false;
}

function deposit(account, amount) {
  let newValue = account.balance + amount;
  account.balance = newValue;
}

function withdraw(account, amount) {
  if (amount <= account.balance) {
    let newValue = account.balance - amount;
    account.balance = newValue;
  } else {
    throw "The amount is out of limit";
  }
}

function transfer(accountSender, accountReceiver, amount) {
  if(amount <= accountSender.balance){
    let newValue = accountSender.balance - amount;
    accountSender.balance = newValue;
    newValue = accountReceiver.balance + amount;
    accountReceiver.balance = newValue
  }else{
    throw "The amount is out of limit";
  }
}

export {
  deposit,
  tryAmount,
  withdraw,
  transfer
};
