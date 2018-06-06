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

  if (typeof obj === "object" && (!Array.isArray(obj))) {
    for (let prop in obj) {
      if (prop === "name" || prop === "balance") {
        if (typeof obj["name"] === "string" && typeof obj["balance"] === "number") {
          gotRightValues++;
        }
      }
    }
  }

  if (gotRightValues === 2) {
    return true;
  }
  return false;
}

function deposit(account, amount) {
  if (tryAmount(amount)) {
    if (tryObject(account)) {
      let newValue = account.balance + amount;
      account.balance = newValue;
    } else {
      throw new Error("The Account amount parameter didn't match the accepted datatype value");
    }
  } else {
    throw new Error("The amount parameter didn't match the accepted datatype value");
  }
}

function withdraw(account, amount) {
  if (tryAmount(amount)) {
    if (tryObject(account)) {
      if (amount <= account.balance) {
        let newValue = account.balance - amount;
        account.balance = newValue;
      } else {
        throw new Error("The amount is out of limit");
      }
    } else {
      throw new Error("The Account amount parameter didn't match the accepted datatype value");
    }
  } else {
    throw new Error("The amount parameter didn't match the accepted datatype value");
  }
}

function transfer(accountSender, accountReceiver, amount) {
  if (tryAmount(amount)) {
    if (tryObject(accountSender) && tryObject(accountReceiver)) {
      if (amount <= accountSender.balance) {
        let newValue = accountSender.balance - amount;
        accountSender.balance = newValue;
        newValue = accountReceiver.balance + amount;
        accountReceiver.balance = newValue
      } else {
        throw new Error("The amount is out of limit");
      }
    } else {
      throw new Error("One or both Account parameters didn't match the accepted datatype value");
    }
  } else {
    throw new Error("The amount parameter didn't match the accepted datatype value");
  }
}

export {
  deposit,
  tryAmount,
  withdraw,
  transfer,
  tryObject

};
