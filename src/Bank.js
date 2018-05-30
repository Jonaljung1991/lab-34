function tryAmount(amount) {
  if (!isNaN(parseInt(amount)) && isFinite(amount)) {
    if (amount >= 0) {
      return true;
    }
  }
  return false;
}

function tryObject(obj) {
  let gotRightValues = 0;

  if (typeof obj === "object") {
    for (let prop in obj) {
      if (prop === "name" || prop === "balance") {
        if (typeof obj["name"] === "string" && typeof obj["balance"] === "number") {
          gotRightValues++;
        }
      }
    }
  }
  if(gotRightValues === 2){
    return true;
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
    throw new Error ("The amount is out of limit");
  }
}

function transfer(accountSender, accountReceiver, amount) {
  if (amount <= accountSender.balance) {
    let newValue = accountSender.balance - amount;
    accountSender.balance = newValue;
    newValue = accountReceiver.balance + amount;
    accountReceiver.balance = newValue
  } else {
    throw new Error ("The amount is out of limit");
  }
}

export {
  deposit,
  tryAmount,
  withdraw,
  transfer,
  tryObject
};
